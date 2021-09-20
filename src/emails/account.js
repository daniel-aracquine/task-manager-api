const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.API_KEY)

const sendWelcomeEmail = (email , name) => {
    sgMail.send({
        to: email,
        from: 'sarthakmanoch1103@gmail.com',
        subject:'Thanks for joining',
        text: `Welcome to the app, ${name}. Let us know your feedback of this app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarthakmanoch1103@gmail.com',
        subject:'Goodbye friend',
        text: `It was sad to see you leave, ${name}. I'm sure you may have your reasons but if anything we can do to have you back, do reply with your feedback. Until then, adios.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}