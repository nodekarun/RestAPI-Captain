const User = require('../models/userModel')


exports.user_register=(req,res)=>{
      var user=new User(
          {
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
      });

      user.save((err)=>{
        if (err) {
            return res.status(500).send({message:'Error'})
        }else{
        res.send({message:'Register User Created successfully',data:null})
        }
      })

}

exports.user_show= (req, res)=> {
    User.find({},{ _id: 0,__v:0 },(err, data)=> {
        if (err) return next(err);
        var ress={
            message:"All User",
            data:{user:data},
            error:[]
        }
        res.status(200).send(ress)
    })
};



exports.user_login=(req,res)=>{
  
       var username= req.body.username
       var password= req.body.password

       User.findOne({username:username, password:password},(err,user)=>{
           if(err){
            return res.status(500).send({message:'Error'})
           }
        
           if(!user){
            return res.status(400).send({message:'Invalid Username and password'})
           }else {

            User.find({username:username},{ _id: 0,__v:0 },(err, datas)=> {
                if (err) return next(err);
              const  ress={
                    message:"Login sucessfully",
                    data:datas,
                    error:[]
                }
                return res.status(200).send(ress)
            })
           
           }

          
       })
}