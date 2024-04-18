import Stripe from 'stripe';
import { updateSubscription } from "../../../lib/mongodb/students";


const stripe = Stripe(process.env.STRIPE_TEST_SECRET_KEY)

const handler = async (req, res) => {

    const { success, session_id, uid } = req.query;
    if (success !== "true") {
        res.redirect(303, "/");
        return;
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    const stripeCustomerID = session.customer;
    await updateSubscription(uid, stripeCustomerID, true)


    res.redirect(303, "/course_home");
}

export default handler;