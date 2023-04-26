import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function SendContactFormEmail(req, res) {
  
  const { fullname, email, subject, message } = req.body;


  return res.status(200).send();


  // if not POST, return 404
  // if(req.method === 'POSTs'){
    
  //   const { fullname, email, message } = req.body;

  //   if(!fullname || !email || !message){
  //     return res.status(400).send(`<html><body><p>Invalid Form Submitted</p></body></html>`)
  //   }
  //   const msg = {
  //     to: 'jeff@jeffreybarron.com', // Change to your recipient
  //     from: 'jeff@jeffreybarron.com', // Change to your verified sender
  //     subject: `jeffreybarron.com/contact: ${fullname}`,
  //     html: `<h1>Message from jeffreybarron.com/contact</h1><p>From: ${email}</p><p>${message}</p><br /><hr/><h2>Request Data</h2><p>${req}</p>`,
  //   }
  //   // sgMail.send(msg).then(() => {
  //   //   res.status(200).json({ success: true, email: `${email}`, subject: `${subject}`})
  //     // }).catch((error) => {
  //   //   res.status(500).json({ success: false, email: `${email}`, subject: `${subject}`})
  //     // })
  //   return res.status(200).send(`<html><body><p>Your Message has been sent</p></body></html>`)
  // }
  
  // // hack to get 404 page
  // // https://github.com/vercel/next.js/discussions/39859
  // const fetchRes = await fetch(process.env.ROOT_URI + '/404')
  // const notFoundPage = await fetchRes.text()

  // return res.status(404).send(notFoundPage)
 
}
