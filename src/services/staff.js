const Staff = require('../models/staff');
const bcrypt = require('bcrypt');

const createStaff = async ({ email, password }) => {
    const newStaff = Staff.create({ email, password });
    return newStaff;
}

const getStaffByCredentials = async ({ email, password }) => {
    const staff = await Staff.findOne({ email });
    if (!bcrypt.compareSync(password, staff.password)) {
        throw new Error("Staff not found");
    }
    return staff;
}

const getAllStaff = async () => {
    return Staff.find({});
}
module.exports = {
    createStaff,
    getStaffByCredentials,
    getAllStaff
}