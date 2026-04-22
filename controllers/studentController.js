const Student = require("../models/Student");

exports.getAll = async (req, res) => {
    const students = await Student.find();
    res.render("index", { students });
};

exports.create = async (req, res) => {
    await Student.create(req.body);
    res.redirect("/");
};

exports.showForm = (req, res) => {
    res.render("new");
};

exports.editForm = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
};

exports.update = async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
};

exports.delete = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
};