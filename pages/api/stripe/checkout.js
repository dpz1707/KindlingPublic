import Stripe from 'stripe';


const stripe = Stripe(process.env.STRIPE_TEST_SECRET_KEY);

const handler = async (req, res) => {
    const { host } = req.headers;
    const siteUrl = process.env.VERCEL_URL ? `https://${host}` : "http://localhost:3000";
    const { uid } = req.query;
    console.log(uid);
    const prices = await stripe.prices.list({
        lookup_keys: [req.body.lookup_key],
        expand: ['data.product'],
    });
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
            {
                price: prices.data[0].id,
                // For metered billing, do not pass quantity
                quantity: 1,

            },
        ],
        mode: 'subscription',
        success_url: `${siteUrl}/api/stripe/callback?success=true&session_id={CHECKOUT_SESSION_ID}&uid=${uid}`,
        cancel_url: `${siteUrl}/api/stripe/callback?success=false&uid=${uid}`,
    });
    res.redirect(303, session.url);
}

export default handler;