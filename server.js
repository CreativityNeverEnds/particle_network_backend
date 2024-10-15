const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route.js");
const msgRoutes = require("./routes/message.route.js");
const chanRoutes = require("./routes/channel.route.js");
const dmsgRoutes = require("./routes/dmessage.route.js");
const Moralis = require('moralis').default;

// to use our .env variables
require('dotenv').config();

const app = express();
const port = 4000;

// Create HTTP server
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

// Create Socket.io server
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});


// Moralis configuration
const config = {
    domain: process.env.APP_DOMAIN,
    statement: 'Please sign this message to confirm your identity.',
    uri: process.env.REACT_URL,
    timeout: 60,
};

let activeUsers = {}; // To track active users
// Socket.io connection
io.on('connection', (socket) => {
  console.log('Client connected');
    socket.on('message', (message) => {
        io.emit('message', message); // Broadcast message to all clients
    });

    socket.on('dmessage', (dmessage) => {
        io.emit('dmessage', dmessage); // Broadcast message to all clients
    });

    // When a user joins
    socket.on('join', (username) => {
      const foundKey = Object.entries(activeUsers).find(([key, value]) => value === username);
      if(!foundKey){
        activeUsers[socket.id] = username; // Store username with socket ID
      }
      io.emit('activeUsers', Object.values(activeUsers)); // Emit updated list of active users
    });

    // When a user disconnects
    socket.on('disconnect', () => {
      delete activeUsers[socket.id]; // Remove user from active list
      io.emit('activeUsers', Object.values(activeUsers)); // Emit updated list
      console.log('User disconnected:', socket.id);
    });
});

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Request message to be signed by client
app.post('/request-message', async (req, res) => {
    const { address, chain, network } = req.body;
    try {
        const message = await Moralis.Auth.requestMessage({
            address,
            chain,
            ...config,
        });

        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
});

// Verify signature and create JWT token
app.post('/verify', async (req, res) => {
    try {
        const { message, signature } = req.body;
        const { address, profileId } = (
            await Moralis.Auth.verify({
                message,
                signature,
                networkType: 'evm',
            })
        ).raw;

        const user = { address, profileId, signature };

        // Create JWT token
        const token = jwt.sign(user, process.env.AUTH_SECRET);

        // Set JWT cookie
        res.cookie('jwt', token, {
            httpOnly: true,
        });

        res.status(200).json(token);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
});

// Authenticate user using JWT
app.get('/authenticate', async (req, res) => {
    const token = req.cookies.jwt;
    if (!token) return res.sendStatus(403); // Unauthorized

    try {
        const data = jwt.verify(token, process.env.AUTH_SECRET);
        res.json(data);
    } catch {
        return res.sendStatus(403);
    }
});

// Logout user by clearing JWT cookie
app.get('/logout', async (req, res) => {
    try {
        res.clearCookie('jwt');
        return res.sendStatus(200);
    } catch {
        return res.sendStatus(403);
    }
});

// User routes
app.use("/users", userRoutes);

// Message routes
app.use("/messages", msgRoutes);

// Channel routes
app.use("/channels", chanRoutes);

// Direct Message routes
app.use("/dmessages", dmsgRoutes);

// Start server function with MongoDB and Moralis connection
const startServer = async () => {
    await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY,
    });

    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MONGODB CONNECTED");
            // Start the HTTP server after successful MongoDB connection
            server.listen(port, () => {
                console.log(`Server listening on port ${port}`);
            });
        })
        .catch((err) => {
            console.error("MongoDB connection error:", err);
        });
};

startServer();