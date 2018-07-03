var express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
  var date = req.query.date
  date = new Date(date);
})



module.exports = router;
