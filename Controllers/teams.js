const Teams = require('../models/Teams');
const asyncHandler = require('express-async-handler');

// Create a new team
const createTeam = asyncHandler(async (req, res) => {
  const { teamName, teamDesc } = req.body;

  try {
    const team = await Teams.create({ teamName, teamDesc });
    res.status(201).json(team);
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ message: 'Failed to create team' });
  }
});

// Get all teams
const getAllTeams = asyncHandler(async (req, res) => {
  const teams = await Teams.find();
  res.status(200).json(teams);
});

// Get team by ID
const getTeamById = asyncHandler(async (req, res) => {
  const teamId = req.params.id;

  const team = await Teams.findById(teamId);

  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }

  res.status(200).json(team);
});

// Update team by ID
const updateTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;
  const { teamName, teamDesc } = req.body;

  try {
    const updatedTeam = await Teams.findByIdAndUpdate(
      teamId,
      { teamName, teamDesc },
      { new: true, runValidators: true }
    );

    if (!updatedTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }

    res.status(200).json(updatedTeam);
  } catch (error) {
    console.error('Error updating team:', error);
    res.status(500).json({ message: 'Failed to update team' });
  }
});

// Delete team by ID
const deleteTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;

  try {
    const deletedTeam = await Teams.findByIdAndDelete(teamId);

    if (!deletedTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }

    res.status(200).json({ message: 'Team deleted successfully' });
  } catch (error) {
    console.error('Error deleting team:', error);
    res.status(500).json({ message: 'Failed to delete team' });
  }
});

module.exports = { createTeam, 
                    getAllTeams, 
                    getTeamById, 
                    updateTeam, 
                    deleteTeam };
