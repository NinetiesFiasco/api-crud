const OpenCrud = require('./model')

const test = (req, res) => {
  res.json({res: `Hello World! API CRUD ${process.env.NODE_ENV}`})
}

const create = async (req, res) => {
  try {
    const user = new OpenCrud(req.body);
    await user.save();
    res.json({res: user});
  } catch (error) {
    res.status(500).json({res: error});
  }
};

const read = async (req, res) => {
  try {
    const users = await OpenCrud.find();
    res.json({res: users});
  } catch (error) {
    res.status(500).json({res: error});
  }
};

const update = async (req, res) => {
    try {
    const user = await OpenCrud.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({res: user});
  } catch (error) {
    res.status(500).json({res: error});
  }
};

const _delete = async (req, res) => {
  try {
    const user = await OpenCrud.findByIdAndDelete(req.params.id);
    res.json({res: user});
  } catch (error) {
    res.status(500).json({res: error});
  }
};

module.exports = {test, create, read, update, _delete}