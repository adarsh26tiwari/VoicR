import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Configs/ConnectDB.js';
import cookiesParser from 'cookie-parser';
import authRouter from './Routes/auth.route.js';
import cors from 'cors';
import userRouter from './Routes/user.route.js';
import assistantRouter from './Routes/assistant.route.js';
import billingRouter from './Routes/billing.route.js'; // ✅

dotenv.config();

const app = express();
const privateCors = cors({
    origin: ["https://voicr.onrender.com"],
    credentials: true
});

const publicCors = cors({
    origin: "*",
});

app.use(express.json());
app.use(cookiesParser());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.use("/api/auth", privateCors, authRouter);
app.use("/api/user", privateCors, userRouter);
app.use("/api/assistant", publicCors, assistantRouter);
app.use("/api/billing", privateCors, billingRouter); // ✅

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
