import { connectToDatabase } from "../../lib/mongodb";

const fetchTableViewResfinderData = async (req, res) => {
  // connect to the database
  const { db } = await connectToDatabase();

  // get relevant data
  const tableViewResfinder = await db
    .collection("table-view-resfinder")
    .find(
      {},
      {
        projection: { _id: 0 },
      }
    )
    .toArray();
  res.status(200).json(tableViewResfinder);
  res.end();
};

export default fetchTableViewResfinderData;
