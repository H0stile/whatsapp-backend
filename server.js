//  importing all the stuff
import express from "express";
import mongoose from "mongoose";

//  app config
const app = express();
const port = process.env.PORT || 9000;
//  middleware

//  DB config
const connection_url =
  "mongodb+srv://admin:mhfmwBMUbN2gg25B@cluster0.onwfl.mongodb.net/whatsapp-mern?retryWrites=true&w=majority";
mongoose.connect("connection_url", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  ???

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));