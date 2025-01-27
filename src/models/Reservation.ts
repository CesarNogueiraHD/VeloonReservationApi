import type { Hotel } from "./Hotel";

export interface Reservation {
  id: string;
  hotelId: string;
  startDate: Date;
  endDate: Date;
}

export interface ReservationDetails extends Reservation {
  hotel: Hotel;
}
