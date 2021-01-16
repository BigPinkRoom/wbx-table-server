const { Router } = require('express');
const Table = require('../models/table');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const table = await Table.find({});

    res.status(201).json(table);
  } catch (error) {
    res.status(500).json({
      message: 'server error',
    });
    console.error(error);
  }
});

module.exports = router;
