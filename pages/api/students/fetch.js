// get all sites of a user
import { withAuth } from "../../../lib/firebase/middlewares";
import { fetchStudent } from "../../../lib/mongodb/students";

const handler = async (req, res) => {
  const student = await fetchStudent(req.uid);
  res.status(200).json(student);
};

export default withAuth(handler);
