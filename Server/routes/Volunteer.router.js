const express = require('express');
const multer = require('multer');
const Volunteer = require('../models/volunteer'); // Assuming the model is saved as 'volunteer.js'
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Adjust path as necessary
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep original file name
    }
});
const upload = multer({ storage: storage });

// Basic validation function
const validateVolunteer = (data) => {
    const errors = [];
    if (!data.name) errors.push("Name is required");
    if (!data.email) errors.push("Email is required");
    if (!data.address) errors.push("Address is required");
    if (!data.education) errors.push("Education is required");
    if (!data.description) errors.push("Description is required");
    return errors.length > 0 ? errors : null;
};

// Route to get all volunteers
router.get('/', async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.status(200).send(volunteers);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error', error });
    }
});

// Route to add a volunteer
router.post('/', upload.fields([{ name: 'profile', maxCount: 1 }, { name: 'image', maxCount: 1 }]), async (req, res) => { 
    try {
        const validationErrors = validateVolunteer(req.body);
        if (validationErrors) return res.status(400).send({ message: validationErrors.join(', ') });

        const volunteerData = {
            name: req.body.name,
            profile: req.files.profile ? req.files.profile[0].path : null, // Store the profile image path
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            education: req.body.education,
            image: req.files.image ? req.files.image[0].path : null, // Store the additional image path
            description: req.body.description,
            certiName: req.body.certiName,
            certiDes: req.body.certiDes
        };

        const newVolunteer = new Volunteer(volunteerData);
        const result = await newVolunteer.save();
        res.status(201).send(result); // Send status 201 for created resource
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error', error });
    }
});

module.exports = router;
