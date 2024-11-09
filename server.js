const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for requests from the React frontend

// Set up Mailgun API
const mg = mailgun({ apiKey: '680c0304d05ef14c79a312f55ac44eb8-1b5736a5-887d0775', domain: 'sandboxfed66327f2104bb3b44e0627b232717a.mailgun.org' });

// Function to send a welcome email
const sendWelcomeEmail = (email) => {
    return new Promise((resolve, reject) => {
        const data = {
            from: 'Dev@Deakin.com',
            to: email,
            subject: 'Welcome to DEV@Deakin!',
            text: `Hi from DEV@Deakin! What would you like to develop today.`,
        };

        mg.messages().send(data, (error, body) => {
            if (error) {
                console.error('Error sending welcome email:', error);
                reject(error);
            } else {
                console.log('Welcome email sent:', body);
                resolve(body);
            }
        });
    });
};


// Endpoint to handle new subscriber
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    sendWelcomeEmail(email)
        .then(() => {
            res.status(200).json({ message: 'Subscription successful and welcome email sent.' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Subscription failed', error });
        });
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
