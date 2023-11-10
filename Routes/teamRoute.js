const express = require('express');
const router = express.Router();
const teamsController = require('../Controllers/teams');

// Create a new team
router.post('/register', teamsController.createTeam);

// Get all teams
router.get('/', teamsController.getAllTeams);

// Get team by ID
router.get('/:id', teamsController.getTeamById);

// Update team by ID
router.put('/update/:id', teamsController.updateTeam);

// Delete team by ID
router.delete('/delete/:id', teamsController.deleteTeam);

module.exports = router;