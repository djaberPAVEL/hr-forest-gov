const Attendance = require('../models/attendance');

exports.createAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.status(200).json(attendances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.update(req.params.id, req.body);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.delete(req.params.id);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.status(200).json({ message: 'Attendance deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
