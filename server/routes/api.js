const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.get('/updateMerchant/:id', function(req, res){
  res.status(200).json({
    message: "You are hitting the correct place"
  })
  console.log(req.params.id);
});

module.exports = router;
