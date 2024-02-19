const { use } = require("../../../user-service/src/routes/userRoutes.js");
const Search = require("../models/searchModel.js");

exports.SearchUsers = async (req, res) => {
  try {
    const { username, email } = req.query;
    const query = {};
    if (username) {
      query.username = {
        $regex: new RegExp(username, "i"),
      };
    }
    if (email) {
      query.email = {
        $regex: new RegExp(email, "i"),
      };
    }
    const results = await Search.find(query);
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
