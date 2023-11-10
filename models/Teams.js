const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
  teamName: {
    type: String,
    default: "DefaultTeamName",
    unique: true,
  },
  teamDesc: {
    type: String,
    default: "",
  },
},
{ timestamps: true},
);

const Teams = mongoose.model('Teams', teamsSchema);

module.exports = Teams;
