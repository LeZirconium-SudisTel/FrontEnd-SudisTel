import { Hotel } from './Hotel';
import { Role } from './Role';

export class Employer {
  id: number = 0;
  hotel: Hotel = new Hotel();
  role: Role = new Role();
  first_name: string = '';
  last_name: string = '';
  dni: number = 0;
  email: string = '';
  photo: string = '';
}
