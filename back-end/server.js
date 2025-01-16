const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const userRoutes = require("./Routes/userRoutes");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");

const app = express();

app.use(express.json()); //to accept JSON data

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });
// app.get("/api/chat/:id", (req, res) => {
//   const requestedChat = chats.find((chat) => chat._id === req.params.id);
//   res.send(requestedChat);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const _port = process.env.PORT;
app.listen(_port, console.log(`server started on port ${_port}`));
