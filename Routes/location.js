const express = require('express')
const { getAllLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation,} = require('../Controllers/location')
//const  verifyEmailAndToken = require('../Controllers/authenticateUser');
const router = express.Router();

router.get('/', getAllLocations);
router.patch('/:id', getLocationById);
router.post('/', createLocation);
router.get('/:id',updateLocation);
router.get('/:id',deleteLocation);

module.exports = router;