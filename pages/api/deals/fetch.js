// get all sites of a user
import { fetchAllDeals } from "../../../lib/mongodb/deals";
import { fetchStudent } from "../../../lib/mongodb/students";

const handler = async (req, res) => {
    const { studentID } = req.query;
    const student = await fetchStudent(studentID);
    const deals = await fetchAllDeals(studentID);
    res.status(200).json({ student: student == null ? null : { name: student.name, email: student.email }, deals });
};

export default handler;
