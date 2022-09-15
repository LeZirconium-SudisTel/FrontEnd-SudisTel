import { Hotel } from './Hotel';
export class Resource {
  id: number = 0;
  hotel: Hotel = new Hotel();
  resoruce_name: string = '';
  resoruce_type: string = '';
  stock: number = 0;
}
