import { withAuth } from "../../../lib/firebase/middlewares";
import { updateProgress } from "../../../lib/mongodb/students";

const handler = async (req, res) => {
    const { courseName, chapterName, sectionName, questionName, isCorrect } = await req.body;
    await updateProgress(req.uid, courseName, chapterName, sectionName, questionName, isCorrect);
    res.status(200).json();
};

export default withAuth(handler);