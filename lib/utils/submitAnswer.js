//This is for updating user's questions from server-side using API endpoint
export const submitAnswer = async (userToken, courseName, chapterName, sectionName, questionName, isCorrect) => {
    await fetch("/api/students/updateProgress", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            courseName, chapterName, sectionName, questionName, isCorrect
        })
    });
};