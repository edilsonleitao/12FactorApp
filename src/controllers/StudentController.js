 const Student = require('../models/Student');

module.exports = {
  async index(req, res) {
    const {page=1, limit=10} = req.query;
    const student = await Student.paginate({}, {page, limit});
    return res.json(student);
  },
  async show(req, res) {
    const student = await Student.findById(req.params.id);
    return res.json(student);
  },
  async store(req, res) {
    const student = await Student.create(req.body);
    return res.json(student);
  },
  async update(req, res) {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(student);
  },
  async destroy(req, res) {
    await Student.findByIdAndDelete(req.params.id);
    return res.send('Student deleted!');
  }
};