import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './db/connection.js';
import leaveRouter from ("./routes/leave.routes.js")

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/leaves", leaveRouter);

app.listen(PORT, async () => {
    console.log(`Server is listening in port ${PORT}`);
    await connectDB();
})