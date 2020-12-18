var express=require('express');
var nodemailer = require('nodemailer');//importing node mailer

exports.emailRouter = (req,res)=>{
  console.log("oooo",req.body.email);
  //Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
  var transporter = nodemailer.createTransport({
    service: 'smtp',
    host:"172.27.172.202",
    port:25, 
    secure:false,
    tls:{
   ciphers:'SSLv3',
   rejectUnauthorized:false
    },
    auth: {
      user: 'dadaramj@evolvingsols.com',
      pass: 'Tiger@321'
    }
  }); 
  
  var mailOptions = {
    from: 'dadaramj@evolvingsols.com',
    to: req.body.email,//user email
    subject: `NodeMail Testing`,
    cc:'',
    html:'Your score is : ' + req.body.score,
    text:'mail testing nodejs'
  };
  
  /*sendMail is the method which actually sends email, it takes mail options and
   call back as parameter 
  */

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error') // if error occurs send error as response to client
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
    }
  });
}





// emailRouter.route('/')
// .options(cors.cors,(req,res)=>{
//   console.log("score d.ispla......."+req.params.body.score);
//     console.log("Coming email here");
//     res.sendStatus(200);
// })

// // route which captures form details and sends it to your personal mail
// .post(cors.cors,(req,res,next)=>{
  
  
// })

// module.exports = emailRouter;