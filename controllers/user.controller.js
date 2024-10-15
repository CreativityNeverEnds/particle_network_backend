const UserModel = require("../models/userModel.js");

const loginData = async (req, res) => {
    try {
        // Validate input data (optional but recommended)
        const { firstName, secondName, email, phoneNumber, walletAddress } = req.body;
        
        if (!firstName || !secondName || !email || !phoneNumber) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingUser = await UserModel.findOne({ walletAddress });
        if (existingUser) {
            if(existingUser.firstName === firstName && existingUser.secondName === secondName && existingUser.email === email && existingUser.phoneNumber === phoneNumber) {
                return res.status(200).json({
                    message: "User already exists with this wallet address. Please log in.",
                    user: existingUser,
                });
            } else {
                return res.status(400).json({
                    message: "User already exists with this wallet address. Please check your details.",
                });
            }
        } else {
            // Create a new user
            const newUser = await UserModel.create({
                firstName,
                secondName,
                email,
                phoneNumber,
                walletAddress
            });
    
            // Send success response
            return res.status(201).json({
                message: "User created successfully",
                user: newUser,
            });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const getUserInfo = async (req, res) => {
    try {
        const walletAddress = req.body.user_wallet_address;
        if (!walletAddress) {
            return res.status(400).json({ message: "User wallet address is required." });
        }
        const existingUser = await UserModel.findOne({ walletAddress });
        if (existingUser) {
            return res.status(200).json({
                message: "Request was successful",
                user: existingUser,
            });
        } else {
            return res.status(400).json({
                message: "There is no user with this wallet address."
            });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

const updateUserInfo = async (req, res) => {
    try {
        // Validate input data (optional but recommended)
        const { firstName, secondName, email, walletAddress } = req.body;
        
        if (!firstName || !secondName || !email ) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingUser = await UserModel.findOne({ walletAddress });
        if (existingUser) {
            existingUser.firstName = firstName;
            existingUser.secondName = secondName;
            existingUser.email = email;
            await existingUser.save();
            
            // Send success response
            return res.status(200).json({
                message: "User updated successfully",
                user: existingUser,
            });
            
        } else {
            return res.status(400).json({
                message: "There is no user with this wallet address."
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

const getName = async (req, res) => {
    try {
        // Validate input data (optional but recommended)
        const walletAddresses = req.body.addresses;
        
        if (!walletAddresses) {
            return res.status(400).json({ message: "User wallet address is required." });
        }
        const userNames = [];
        for (const walletAddress of walletAddresses) {
            const existingUser = await UserModel.findOne({ walletAddress });
            if (existingUser) {
                const { firstName, secondName } = existingUser;
                userNames.push({walletAddress:walletAddress,firstName:firstName,secondName:secondName}); // Add full name to the array
            }
        }
        return res.status(200).json({
            message: "Request was successful",
            names: userNames,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find(); // Fetch all users
        return res.status(200).json({
            message: "Users retrieved successfully",
            data: users,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports = {
    loginData,
    getUserInfo,
    updateUserInfo,
    getName,
    getAllUser,
};