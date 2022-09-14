import { Employer } from './Employer';

export class Task {
  id: number = 0;
  employer: Employer = new Employer();
  name: string = '';
  description: string = '';
  is_finished: boolean = false;
}
