const DMessageModel = require("../models/dmessageModel.js");

const createNewDM = async (req, res) => {
    try {
        // Validate input data (optional but recommended)
        const { from, to, message, sendtime } = req.body;
        
        if ( !from || !message || !to || !sendtime ) {
            return res.status(400).json({ message: "All fields are required." });
        } else if (from === to) {
            return res.status(400).json({ message: "You can't send messages to yourself." });
        } else {
            // Create a new message
            const newDMessage = await DMessageModel.create({
                from,
                message,
                to,
                sendtime,
                showstate: true,
            });
    
            // Send success response      
            return res.status(201).json({
                message: "Message saved successfully",
                data: newDMessage,
            });
        }
    } catch (error) {
        console.error("Error saving message:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

const getMyDM = async (req,res) => {
    try {
        const myid = req.body.address;
        if ( !myid  ) {
            return res.status(400).json({ message: "Request Error!" });
        } else {
            const my_DM = await DMessageModel.find({
                $or: [
                    { from: myid },
                    { to: myid }
                ]
            });
            const show_DM = my_DM.filter(dm => dm.showstate === true)
            // Send success response      
            return res.status(201).json({
                message: "Message saved successfully",
                data: show_DM,
            });
        }
    } catch (error) {
        console.error("Error getting message:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

const blockUser = async (req, res) => {
    try {
        const sender = req.body.sender;
        const receiver = req.body.receiver;

        if ( !receiver || !sender ) {
            return res.status(400).json({ message: "Request Error!" });
        } else {
            const block_DM = await DMessageModel.find({
                $or: [
                    { from: sender, to: receiver },
                    { to: sender, from: receiver }
                ]
            });
            if (block_DM.length > 0){
                await DMessageModel.updateMany(
                    {
                        $or: [
                            { from: sender, to: receiver },
                            { to: sender, from: receiver }
                        ]
                    },
                    { $set: { showstate: false } } // Set the state field to false
                );
            }

            // Send success response      
            return res.status(201).json({
                message: "User blocked successfully",
            });
        }
    } catch (error) {
        console.error("Error getting message:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports = {
    createNewDM,
    getMyDM,
    blockUser,
};