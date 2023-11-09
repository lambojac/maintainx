const Vendors = require('../models/Vendors');
// Get all vendors
const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendors.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific vendor by ID
const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendors.findById(req.params.id);
    if (vendor) {
      res.json(vendor);
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new vendor
const createVendor = async (req, res) => {
  const vendor = new Vendors({
    location: req.body.location,
    assets: req.body.assets,
    name: req.body.name,
    photo: req.body.photo,
    description: req.body.description,
  });

  try {
    const newVendor = await vendor.save();
    res.status(201).json(newVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a vendor by ID
const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendors.findById(req.params.id);

    if (vendor) {
      vendor.location = req.body.location;
      vendor.assets = req.body.assets;
      vendor.name = req.body.name;
      vendor.photo = req.body.photo;
      vendor.description = req.body.description;

      const updatedVendor = await vendor.save();
      res.json(updatedVendor);
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a vendor by ID
const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendors.findById(req.params.id);
    if (vendor) {
      await vendor.remove();
      res.json({ message: 'Vendor deleted' });
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
};
