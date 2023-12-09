require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const CreatePaymentIntent = async (req, res) => {

    const { rent } = req.body;
    const Rent = parseInt(rent * 100);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Rent,
        currency: "usd",
        payment_method_types: ["card"],
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}

module.exports = CreatePaymentIntent;