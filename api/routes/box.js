const router = require('express').Router();
const CryptoJS = require('crypto-js');

const Box = require('../models/Box');

router.post('/', async (req, res) => {
  const newBox = new Box(req.body);

  try {
    const saveBox = await newBox.save();

    
    res.status(200).json(saveBox);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {
  
  try {
    let boxes= await Box.find();
    
    res.status(200).json(boxes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
