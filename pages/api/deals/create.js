import { withAuth } from "../../../lib/firebase/middlewares";
import { createDeal } from "../../../lib/mongodb/deals";

const handler = async (req, res) => {
    await createDeal(req.uid, req.body);
    console.log("Created deal in database");
    res.status(200).json({ success: true });
};

export default withAuth(handler);
