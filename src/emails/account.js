const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY = require('../../sendgrid')
sgMail.setApiKey(SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kacper.luk@o2.pl',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kacper.luk@o2.pl',
        subject: 'Subscription Cancelation',
        text: 'Your subscription was canelled successfully. Let us know what we can improve in our app'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}