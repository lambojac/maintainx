const asyncHandler = require('express-async-handler');
const Asset = require('../models/Asset');

// Create a new asset
const createAsset = asyncHandler(async (req, res) => {
  const asset = new Asset(req.body);
  const savedAsset = await asset.save();
  res.json(savedAsset);
});

// Get all assets
const getAllAssets = asyncHandler(async (req, res) => {
  const assets = await Asset.find();
  res.json(assets);
});

// Get a specific asset by ID
const getAssetById = asyncHandler(async (req, res) => {
  const asset = await Asset.findById(req.params.id);
  if (!asset) {
    res.status(404).json({ error: 'Asset not found' });
  } else {
    res.json(asset);
  }
});

// Update an asset by ID
const updateAssetById = asyncHandler(async (req, res) => {
  const asset = await Asset.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!asset) {
    res.status(404).json({ error: 'Asset not found' });
  } else {
    res.json(asset);
  }
});

// Delete an asset by ID
const deleteAssetById = asyncHandler(async (req, res) => {
  const asset = await Asset.findByIdAndDelete(req.params.id);
  if (!asset) {
    res.status(404).json({ error: 'Asset not found' });
  } else {
    res.json({ message: 'Asset deleted successfully' });
  }
});

module.exports = {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAssetById,
  deleteAssetById,
};
