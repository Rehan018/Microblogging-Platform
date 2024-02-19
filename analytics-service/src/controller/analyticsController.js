const Analytics= require('../models/analyticsModel.js');
exports.recordAction = async (req, res) => {
    try {
        const { userId, action } = req.body;
        const analytics = new Analytics({ userId, action });
        await analytics.save();
        res.status(201).json({ message: 'Analytics recorded successfully', analytics });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAnalyticsByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const analytics = await Analytics.find({ userId });
        res.status(200).json(analytics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
