const express = require('express')
const { getAllVendors,
    getVendorById,
    createVendor,
    updateVendor,
    deleteVendor, } = require('../Controllers/vendor')
//const  verifyEmailAndToken = require('../Controllers/authenticateUser');

const router = express.Router();

router.get('/', getAllVendors);
router.post('/:id', getVendorById);
router.post('/', createVendor);
router.get('/:id', updateVendor);
router.get('/:id', deleteVendor);


module.exports = router;