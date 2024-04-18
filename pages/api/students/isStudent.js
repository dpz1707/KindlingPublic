
import { fetchStudent } from "../../../lib/mongodb/students";

const handler = async (req, res) => {
    const { studentID } = req.query;
    const student = await fetchStudent(studentID);
    res.status(200).json(student != null);
};

export default handler;