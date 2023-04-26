import sgMail from '@sendgrid/mail'
import rateLimit from '@/lib/rate-limit';

export const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 5, // Max 5 requests per second
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function SendContactFormEmail(req, res) {
  const remoteAddress = req.connection.remoteAddress || req.headers['x-forwarded-for']
  // if not POST, return 404
  try {
    await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
   
    if(req.method === 'POST'){
      const { fullname, email, subject, message, newsletter } = req.body;
      // console.log("API: ", fullname, ", ", email, ", ", subject, ", ", message, ", ", newsletter);

      if(!fullname || !email || !message){
        return res.status(400).send({ comment: `Invalid Form Submitted`})
      }
      const msg = {
        to: 'jeff@jeffreybarron.com', // Change to your recipient
        from: 'jeff@jeffreybarron.com', // Change to your verified sender
        subject: `jeffreybarron.com/contact: ${fullname} (${email})`,
        html: `<html><body><div style="background-color:#0a192f; color: #d1d5db; width: 100vw; height: 100vh; padding: 25px">` +
          `<h1>Message from jeffreybarron.com/contact</h1>` +
          `<div>` +
          ` <p>From:</p>` +
          ` <p><pre>${fullname} (${email})</pre></p>` +
          `</div>` +
          `<div>` +
          ` <p>Subject:</p>` +
          ` <p><pre>${subject}</pre></p>` +
          `</div>` +
          `<div>` +
          ` <p>IP Address:</p>` +
          ` <p><pre>${remoteAddress}</pre></p>` +
          `</div>` +
          `<div>` +
          ` <p>Subscribed to Newsletter: ${newsletter}</p>` +
          `</div>` +
          `<div style="background-color:gray; color: white;">` +
          ` <p style="color: red;">-- Start of Message --</p>` +
          ` <div><pre>${message}</pre></div>` +
          ` <p style="color: red;">-- End of Message --</p>` +
          `</div>` +
          `<hr /></div></body></html>`,
      }
      // If req.connection.remoteAddress in block list, return 403
      // if(req.connection.remoteAddress === ''){
      //   return res.status(403).json({ comment: `Sorry your IP Address is blocked, you cannot send this message.`})
      // }

      if (process.env.NODE_ENV === 'production') {
        // send email
        sgMail.send(msg).then(() => {
          return res.status(200).json({ comment: `Message has been sent!`})
        }).catch((error) => {
          return res.status(500).json({ comment: `Sorry, there was an error sending your message.`})
        })
      } else {
        console.log("Not in production, not sending email")
        console.log(msg)
        // sgMail.send(msg).then(() => {
        //   res.status(200).json({ comment: `Message has been sent!`})
        // }).catch((error) => {
        //   res.status(500).json({ comment: `Sorry, there was an error sending your message.`})
        // })
        return res.status(503).json({ comment: `Not in production, not sending email` })
      }

      return 
    }

  } catch (error) {
    return res.status(429).json({ error: `Too many requests, please try again later. IP Addressed Logged: ${req.connection.remoteAddress}` })
  }

  // // hack to get 404 page
  // // https://github.com/vercel/next.js/discussions/39859
  // const fetchRes = await fetch(process.env.ROOT_URI + '/404')
  // const notFoundPage = await fetchRes.text()

  // return res.status(404).send(notFoundPage)
 
}
