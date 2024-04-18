import { connectToDatabase } from "./mongodb-admin";

export const createStudent = async (uuid, data) => {
  const { db } = await connectToDatabase();
  const findResult = await fetchStudent(uuid);
  if (!findResult) {
    const insertResult = await db
      .collection("students")
      .insertOne({ _id: uuid, ...data });
  }
};

export const fetchStudent = async (uuid) => {
  const { db } = await connectToDatabase();
  const findResult = await db.collection("students").findOne({ _id: uuid });
  return findResult;
};

export const updateProgress = async (uuid, courseName, chapterName, sectionName, questionName, isCorrect) => {
  const { db } = await connectToDatabase();
  const question = `courseProgress.${courseName}.${chapterName}.${sectionName}.${questionName}`;
  if (isCorrect) {
    db.collection("students").updateOne({ _id: uuid }, { $set: { [`${question}.complete`]: true }, $inc: { [`${question}.score`]: 1 } });
  }
  else {
    db.collection("students").updateOne({ _id: uuid }, { $inc: { [`${question}.score`]: -0.25 } });
  }

};


export const updateSubscription = async (uuid, stripeID, isSubscribed) => {
  const { db } = await connectToDatabase();
  db.collection("students").updateOne({ _id: uuid }, { $set: { "subscription.stripeID": stripeID, "subscription.isSubscribed": isSubscribed } });
};
