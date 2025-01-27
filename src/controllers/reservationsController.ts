import express from "express";
import { v7 as uuid } from "uuid";
import hotels from "../mocks/hotels";
import type { Reservation, ReservationDetails } from "../models/Reservation";
const router = express.Router();

const reservations: Reservation[] = [];

router
  .get("/", (req, res) => {
    const response: ReservationDetails[] = reservations.map((r) => {
      return {
        ...r,
        hotel: hotels.find((h) => h.id === r?.hotelId)!,
      };
    });
    res.json(response);
  })
  .get("/:id", (req, res) => {
    const reservation = reservations.find((r) => r.id === req.params.id);
    if (!reservation) res.status(404).send();

    const hotel = hotels.find((h) => h.id === reservation?.hotelId);

    const reservationDetails: ReservationDetails = {
      ...reservation!,
      hotel: hotel!,
    };
    res.json(reservationDetails);
  })
  .post("/", (req, res) => {
    const reservation: Reservation = {
      id: uuid(),
      hotelId: req.body.hotelId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    };
    reservations.push(reservation);
    res.status(201).json({
      message: "Reserva criada com sucesso!",
    });
  });

export default router;
