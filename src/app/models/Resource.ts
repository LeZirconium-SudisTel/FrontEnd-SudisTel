import { Hotel } from './Hotel';

export class Resource {
  id: number = 0;
  hotel: Hotel = new Hotel();
  resource_name: string = '';
  resource_type: string = '';
  stock: number = 0;
}
