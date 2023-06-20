import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import cors from 'cors'
const app = express();

import mongoose from "mongoose";

const MONGODB_CONN_STRING = "mongodb+srv://pranitb10:webdeva6@cluster0.ofiz42d.mongodb.net/tuiter?retryWrites=true&w=majority";

mongoose.connect(MONGODB_CONN_STRING);

app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
      cookie: {
        sameSite : "none",
        secure : true
      }
    })
   );
   
app.use(
    cors({
      credentials: true,
      origin: "https://cs5610-tuiter-react-web-app-pranitb10.netlify.app/",
    })
   );
   
app.use(express.json());
const port = process.env.PORT || 4000;
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(port);