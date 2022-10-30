import { ReservationsTuristsAgregarComponent } from './pages/reservations-turists/reservations-turists-agregar/reservations-turists-agregar.component';
import { MyHotelCrearComponent } from './pages/my-hotel/my-hotel-crear/my-hotel-crear.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AllHotelsBuscarComponent } from './pages/all-hotels/all-hotels-buscar/all-hotels-buscar.component';
import { AllHotelsComponent } from './pages/all-hotels/all-hotels.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { EmployeersBuscarComponent } from './pages/employeers/employeers-buscar/employeers-buscar.component';
import { HotelTasksCrearComponent } from './pages/hotel-tasks/hotel-tasks-crear/hotel-tasks-crear.component';
import { EmployeersCrearComponent } from './pages/employeers/employeers-crear/employeers-crear.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { HotelTasksComponent } from './pages/hotel-tasks/hotel-tasks.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeersComponent } from './pages/employeers/employeers.component';
import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ResourcesCrearComponent } from './pages/resources/resources-crear/resources-crear.component';
import { PrincipalTuristComponent } from './pages/principal-turist/principal-turist.component';
import { ReservationsTuristsComponent } from './pages/reservations-turists/reservations-turists.component';
import { RoomsCrearComponent } from './pages/rooms/rooms-crear/rooms-crear.component';

const routes: Routes = [

  {path: '', component: UserTypeComponent},
  {path: 'principal-owner', component: PrincipalComponent},
  {path: 'my-hotel', component: MyHotelComponent},
  {path: 'add-hotel', component: MyHotelCrearComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'reservations-turists', component: ReservationsTuristsComponent},
  {path: 'reservar', component:ReservationsTuristsAgregarComponent},
  {path: 'hotel-tasks', component: HotelTasksComponent,children:[
    {path: 'nuevo', component: HotelTasksCrearComponent},
    { path: 'edicion/:id', component: HotelTasksCrearComponent },
  ]},
  {path: 'add-task', component: HotelTasksCrearComponent},
  { path: 'rooms', component: RoomsComponent },
  {path: 'add-employer', component:EmployeersCrearComponent},
  {path: 'resources', component: ResourcesComponent, children:[
    {path: 'add-resource', component: ResourcesCrearComponent},
    {path: 'edicion/:id', component: ResourcesCrearComponent},
  ]},
  {path: 'employeers', component: EmployeersComponent, children:[
    { path: 'nuevo', component: EmployeersCrearComponent },
    { path: 'edicion/:id', component: EmployeersCrearComponent },
    { path: 'buscar/:id', component: EmployeersBuscarComponent }
  ]},
  {path: 'add-employer', component:EmployeersCrearComponent},
  {path: 'principal-turist', component: PrincipalTuristComponent},
  {path: 'all-hotels', component: AllHotelsComponent, children:[
    { path: 'buscar/:id', component: AllHotelsBuscarComponent }
  ]},
  { path: 'add-room', component: RoomsCrearComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
