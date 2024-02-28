require('dotenv').config();

const Sib = require("sib-api-v3-sdk");

exports.sendEmail = async (req, res) => {
    try {
        const { email, message, name } = req.body;

        if (!email || !message || !name) {
            return res.status(400).json({ message: "Missing required parameters (email, message, name)", success: false });
        }

        console.log("email is :", email);
        console.log("name is :", name);
        console.log("message is :", message);


        const client = Sib.ApiClient.instance;
        const apiKey = client.authentications["api-key"];
        apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

        const sender = {
            email: email,
            name: name,
        };

        const recievers = [
            {
                email: 'manojhustler14@gmail.com',
            },
        ];

        const transactionalEmailApi = new Sib.TransactionalEmailsApi();
        transactionalEmailApi
            .sendTransacEmail({
                subject: "Job-Contact",
                sender: sender,
                to: recievers,
                htmlContent: message,
            })
            .then((result) => {
                console.log(result);
                return res.status(404).send(`
        <script>
          alert("email sent!");
          window.location.href = '/';
        </script>
      `);
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).json({ message: "Failed to send email, try again after some time", success: false });
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};