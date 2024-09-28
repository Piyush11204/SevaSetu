const Volunteer = require("../models/volunteer");

// Controller to handle fetching all volunteers
async function handleAllVolunteers(req, res) {
    try {
        const volunteers = await Volunteer.find();
        res.status(200).send(volunteers);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error', error });
    }
}

// Controller to handle adding a new volunteer
async function handleAddVolunteer(req, res) {
    try {
        const volunteerData = {
            name: req.body.name,
            profile: req.file ? req.file.path : null,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            education: req.body.education,
            image: req.file ? req.file.path : null, // If an image is uploaded
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
}

// Export the controller functions
module.exports = {
    handleAllVolunteers,
    handleAddVolunteer,
};
