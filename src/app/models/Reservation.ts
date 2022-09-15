import { Room } from './Room';
import { Hotel } from './Hotel';
import { User } from './User';

export class Reservation {
  id: number = 0;
  user: User = new User();
  hotel: Hotel = new Hotel();
  room: Room = new Room();
  reservation_date: string = '';
  room_price: number = 0;
  status: string = '';
}
