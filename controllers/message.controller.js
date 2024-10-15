const MessageModel = require("../models/messageModel.js");

const saveMessage = async (req, res) => {
    try {
        // Validate input data (optional but recommended)
        const { from, message, roomID, sendtime } = req.body.newMsg;     
        if ( !from || !message || !roomID || !sendtime ) {
            return res.status(400).json({ message: "All fields are required." });
        }
        
        // Create a new message
        const newMessage = await MessageModel.create({
            from,
            message,
            roomID,
            sendtime,
            showstate: true,
        });

        // Send success response      
        return res.status(201).json({
            message: "Message saved successfully",
            message: newMessage,
        });

    } catch (error) {
        console.error("Error saving message:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

const getMessage = async (req, res) => {
    try {
        const roomID = req.body.type;
        
        if ( !roomID  ) {
            return res.status(400).json({ message: "Request Error!" });
        }

        const selected_Message = await MessageModel.find({
            roomID: roomID,
        });
        
        // Send success response
        return res.status(201).json({
            message: "Message saved successfully",
            data: selected_Message,
        });
    } catch (error) {
        console.error("Error saving message:", error);
        
        // Send error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports = {
    saveMessage,
    getMessage,
};