import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeersComponent } from './pages/employeers/employeers.component';
import { ListHotelTasksComponent } from './pages/list-hotel-tasks/list-hotel-tasks.component';
import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ResourcesListComponent } from './pages/resources-list/resources-list.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'my-hotel', component: MyHotelComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'employeers', component: EmployeersComponent},
  {path: 'resources', component: ResourcesListComponent},
  {path: 'hotel-tasks', component: ListHotelTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
