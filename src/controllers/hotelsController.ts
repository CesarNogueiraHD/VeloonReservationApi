import express from "express";
import hotels from "../mocks/hotels";
const router = express.Router();

router.get("/", (req, res) => {
  res.json(hotels);
});

router.get("/:id", (req, res) => {
  const hotel = hotels.find((h) => h.id === req.params.id);
  if (!hotel) res.status(404).send();

  res.json(hotel);
});

export default router;
