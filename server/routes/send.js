const express = require('express');
const router2 = new express.Router();

// router2.get('/info/:id', function(req, res){
//   console.log(req.params.id);
//   res.end();
// });

	router2.post('/info', function(req, res){
	  let newName = req.query.firstName + ' The Man!' + req.query.lastName;
	  res.send(newName);
	 })

module.exports = router2;