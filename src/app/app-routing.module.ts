import { ResourcesComponent } from './pages/resources/resources.component';
import { HotelTasksComponent } from './pages/hotel-tasks/hotel-tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeersComponent } from './pages/employeers/employeers.component';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';
import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ResourcesListComponent } from './pages/resources/resources-list/resources-list.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'my-hotel', component: MyHotelComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'employeers', component: EmployeersComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'hotel-tasks', component: HotelTasksComponent},
  {path: 'list-rooms', component: ListRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }