import mongoose from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected");
  } catch (error) {
    mongoose.disconnect();
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
}

export default dbConnect;
