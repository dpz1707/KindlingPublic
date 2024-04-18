import { connectToDatabase } from "./mongodb-admin";

export const createDeal = async (uuid, data) => {
  const { db } = await connectToDatabase();
  const insertResult = await db
    .collection("deals")
    .insertOne({ createdBy: uuid, ...data });
  console.log(insertResult);
};


export const fetchDeal = async (uuid) => {
  const { db } = await connectToDatabase();
  const findResult = await db.collection("deals").findOne({ _id: uuid });
  return findResult;
};

export const fetchAllDeals = async (studentID) => {
  const { db } = await connectToDatabase();
  const findResult = await db.collection("deals").find({ createdBy: studentID }).toArray();
  return findResult;
};



