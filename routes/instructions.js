const express = require('express');
const router = express.Router();

const Instructions = require('../models/Instructions');

router.get('/', async (req, res) => {
  const instructions = await Instructions.find({});
  res.json({ instructions });
});
module.exports = router;