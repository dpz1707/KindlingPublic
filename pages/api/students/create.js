// get all sites of a user
import { withAuth } from "../../../lib/firebase/middlewares";
import { createStudent } from "../../../lib/mongodb/students";

const handler = async (req, res) => {
  await createStudent(req.uid, req.body);
  res.status(200).json({ success: true });
};

export default withAuth(handler);
