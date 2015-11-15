var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // Mandando por la forma de GMAIL 
   auth: {
       user: "usuario Gmail", // asiganando un usuario gmail
       pass: "contraseña" //contrseña de la cuenta 
   }
});

smtpTransport.sendMail({  //email options
   from: "Sender Name <correodeusuariogmail@gmail.com>", //de quien mandamos el correo
   to: "Receiver Name <correoaquienmandamos@gmail.com>", //a quen mandamos el correo
   subject: "Emailing with nodemailer", // asunto
   text: "Email Example with nodemailer" //cuerpo del correo
}, function(error, response){  //asiganmos una funcion recibe un callback
   if(error){
       console.log('Error al enviar Gmail'); // Si tenemos un error al enviar el correo
   }else{
       console.log("Email enviado con exito!!: " + response.message); // Mensaje enviado con exito
   }
   
   smtpTransport.close(); // apagamos la conexion
});
