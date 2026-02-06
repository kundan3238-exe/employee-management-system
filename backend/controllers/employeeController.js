const Employee = require("../models/Employee");

// GET
exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// POST (SAFE)
exports.addEmployee = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    if (!name || !email || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employee = await Employee.create({ name, email, role });
    res.status(201).json(employee);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Employee with this email already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
