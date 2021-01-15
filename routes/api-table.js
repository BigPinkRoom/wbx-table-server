const { Router } = require('express');
const Table = require('../models/table');
const router = Router();
const keys = require('../keys');

router.get('/', async (req, res) => {
  try {
    const table = await Table.find({}).populate('title');

    console.log(table.title);
    res.status(201).json({
      date: '01.10.1800',
      title: 'test',
      quantity: 50,
      distance: 999,
    });
  } catch (error) {
    res.status(500).json({
      message: 'server error',
    });
    console.error(error);
  }
});

module.exports = router;
