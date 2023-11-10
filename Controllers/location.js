const Location = require('../models/Location');

// Get all locations
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific location by ID
const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new location
const createLocation = async (req, res) => {
  const location = new Location({
    vendors: req.body.vendors,
    name: req.body.name,
    photo: req.body.photo,
    address: req.body.address,
    description: req.body.description,
    teamInCharge: req.body.teamInCharge,
    files: req.body.files,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a location by ID
const updateLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);

    if (location) {
      location.vendors = req.body.vendors;
      location.name = req.body.name;
      location.photo = req.body.photo;
      location.address = req.body.address;
      location.description = req.body.description;
      location.teamInCharge = req.body.teamInCharge;
      location.files = req.body.files;

      const updatedLocation = await location.save();
      res.json(updatedLocation);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a location by ID
const deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (location) {
      await location.remove();
      res.json({ message: 'Location deleted' });
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
};
