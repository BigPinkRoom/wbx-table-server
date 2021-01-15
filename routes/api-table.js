const { Router } = require('express');
const Table = require('../models/table');
const router = Router();
const keys = require('../keys');

router.get('/', async (req, res) => {
  try {
    const table = await Table.find({});

    console.log(table);
    res.status(201).json();
  } catch (error) {
    res.status(500).json({
      message: 'server error',
    });
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = await req.body;

    const title = body.title;
    const quantity = body.quantity;
    const distance = body.distance;

    res.status(201).json(result.data.data.url);
  } catch (error) {
    res.status(500).json({
      message: 'server error',
    });
    console.error(error);
  }
});

module.exports = router;
