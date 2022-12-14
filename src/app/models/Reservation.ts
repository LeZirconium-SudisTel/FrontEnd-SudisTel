import { CreditCard } from './CreditCard';
import { Room } from './Room';

export class Reservation {
  id: number = 0;
  room: Room = new Room();
  check_in: string = '';
  check_out: string = '';
  room_price: number = 0;
  payment_method: string = '';
  credit_card: CreditCard = new CreditCard();
}
