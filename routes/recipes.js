var recipes = require('../recipes.json');
var router = require('express').Router();
var {validationResult}=require('express-validator');

router.get('/page=:page&limit=:limit',(req,res)=>{
    let {page,limit}=req.params;
    const errors=validationResult(req);
    //console.log();
    //res.status(200).json(errors.isEmpty());
 if(errors.isEmpty())
  {
    let startIndex=(page-1)*limit;
    let endIndex=page*limit;
    let results=recipes.slice(startIndex,endIndex);
    res.status(200).json({recipes:results});
  }
  else
  {
    res.status(401).json({message:"NO data found"});
  }
});
router.get('/',(req,res)=>{
    res.status(200).json({recipes:recipes});
});
/*router.get('/page&limit',(req,res)=>{
    let dpage=1;
    let dlimit=3;
    let startIndex=(dpage-1)*dlimit;
    let endIndex=dpage*dlimit;
    let results=recipes.slice(startIndex,endIndex);
    res.status(200).json({recipes:results});
});*/



module.exports = router;

