import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import hotelsController from "./src/controllers/hotelsController";
import reservationsController from "./src/controllers/reservationsController";
const app = express();
const port = 3333;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use("/images", express.static("public"));

app.use("/api/hotels", hotelsController);
app.use("/api/reservations", reservationsController);

app.listen(port, () => console.log("API running in http://localhost:3333"));
