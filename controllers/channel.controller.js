const ChannelModel = require("../models/channelModel.js");

const saveNewChannel = async (req, res) => {
    try {
        const { creator, channelname } = req.body.data;     

        if ( !creator || !channelname ) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const my_created_channel = await ChannelModel.find({
            creator: creator,
        });

        if (my_created_channel.length >= 3){
            // Send warning response      
            return res.status(400).json({
                message: "You have already created 3(limit) channels."
            });
        } else {
            // Create a new channel
            const newChannel = await ChannelModel.create({
                creator,
                channelname,
                visitors:[creator]
            });
    
            // Send success response      
            return res.status(201).json({
                message: "Message saved successfully",
                data: newChannel,
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

const getAllChannel = async (req, res) => {
    try {
        // Read all channels
        const Channels = await ChannelModel.find();

        // Send success response      
        return res.status(201).json({
            message: "Message saved successfully",
            data: Channels,
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

const joinNewChannel = async (req,res) => {
    const creator = req.body.data.creator;
    const channelname = req.body.data.channelname;
    const myid = req.body.data.myid;
    
    try {
        // Read all channels
        const Channels = await ChannelModel.findOne({
            creator: creator,
            channelname: channelname
        });

        if(!Channels) {
            // Send error response      
            return res.status(400).json({
                message: "There is no channel you're looking for.",
            });
        } else {
            // Add new visitor to the channel
            const exists = Channels.visitors.includes(myid);
            if (!exists) {
                Channels.visitors.push(myid)
                await Channels.save();
                // Send success response      
                return res.status(201).json({
                    message: "Channel joined successfully",
                    data: Channels,
                });
            } else {
                // Send error response      
                return res.status(400).json({
                    message: "You have already joined this channel.",
                });
            }
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

const leaveChannel = async (req,res) => {
    const channel_id = req.body.type;
    const myid = req.body.myid;
    
    try {
        // Read all channels
        const Channels = await ChannelModel.findOne({
            _id: channel_id,
        });

        if(!Channels) {
            // Send error response      
            return res.status(400).json({
                message: "There is no channel you're looking for.",
            });
        } else {
            // Add new visitor to the channel
            const exists = Channels.visitors.includes(myid);
            if (!exists) {
                // Send error response      
                return res.status(400).json({
                    message: "You have already left this channel.",
                });
            } else {
                Channels.visitors = Channels.visitors.filter(visitor => visitor!== myid);
                await Channels.save();
                // Send success response      
                return res.status(201).json({
                    message: "Channel joined successfully",
                });
            }
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


module.exports = {
    saveNewChannel,
    getAllChannel,
    joinNewChannel,
    leaveChannel,
};