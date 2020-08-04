const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY = require('../../sendgrid')
sgMail.setApiKey(SENDGRID_API_KEY)

sgMail.send({
    to: 'kacper.luk@o2.pl',
    from: 'kacper.luk@o2.pl',
    subject: 'This is first email',
    text: 'plzwork'
})