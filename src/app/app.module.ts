//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

//Componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { EmployeersComponent } from './pages/employeers/employeers.component';
import { ResourcesListComponent } from './pages/resources/resources-list/resources-list.component';
import { ListHotelTasksComponent } from './pages/hotel-tasks/list-hotel-tasks/list-hotel-tasks.component';
import { ListRoomsComponent } from './pages/rooms/list-rooms/list-rooms.component';
import { EmployeersListarComponent } from './pages/employeers/employeers-listar/employeers-listar.component';
import { HotelTasksComponent } from './pages/hotel-tasks/hotel-tasks.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { HotelTasksCrearComponent } from './pages/hotel-tasks/hotel-tasks-crear/hotel-tasks-crear.component';
import { ResourcesCrearComponent } from './pages/resources/resources-crear/resources-crear.component';
import { EmployeersCrearComponent } from './pages/employeers/employeers-crear/employeers-crear.component';
import { EmployeersDialogoComponent } from './pages/employeers/employeers-listar/employeers-dialogo/employeers-dialogo.component';
import { EmployeersBuscarComponent } from './pages/employeers/employeers-buscar/employeers-buscar.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { NavBarComponent } from './components/nav-bar-owner/nav-bar-owner.component';
import { NavBarTuristComponent } from './components/nav-bar-turist/nav-bar-turist.component';
import { PrincipalTuristComponent } from './pages/principal-turist/principal-turist.component';
import { AllHotelsComponent } from './pages/all-hotels/all-hotels.component';
import { AllHotelsListarComponent } from './pages/all-hotels/all-hotels-listar/all-hotels-listar.component';
import { AllHotelsBuscarComponent } from './pages/all-hotels/all-hotels-buscar/all-hotels-buscar.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomsCrearComponent } from './pages/rooms/rooms-crear/rooms-crear.component';
import { ReservationsTuristsComponent } from './pages/reservations-turists/reservations-turists.component';
import { MyHotelCrearComponent } from './pages/my-hotel/my-hotel-crear/my-hotel-crear.component';
import { ReservationsTuristsAgregarComponent } from './pages/reservations-turists/reservations-turists-agregar/reservations-turists-agregar.component';
import { ReservationsTuristsDialogoComponent } from './pages/reservations-turists/reservations-turists-dialogo/reservations-turists-dialogo.component';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';
import { CreditCardListComponent } from './pages/credit-card/credit-card-list/credit-card-list.component';
import { ResourcesBuscarComponent } from './pages/resources/resources-buscar/resources-buscar.component';
import { CreditCardCrearComponent } from './pages/credit-card/credit-card-crear/credit-card-crear.component';
import { CreditCardDialogoComponent } from './pages/credit-card/credit-card-list/credit-card-dialogo/credit-card-dialogo.component';
<<<<<<< HEAD
import { ResourcesSinstockComponent } from './pages/resources/resources-sinstock/resources-sinstock.component';
import { ResourcesCantidadtipoComponent } from './pages/resources/resources-cantidadtipo/resources-cantidadtipo.component';
import { ResourcesDialogoaComponent } from './pages/resources/resources-crear/resources-dialogoa/resources-dialogoa.component';
=======
import { HotelTasksBuscarComponent } from './pages/hotel-tasks/hotel-tasks-buscar/hotel-tasks-buscar.component';
import { RoomsBusquedaComponent } from './pages/rooms/rooms-busqueda/rooms-busqueda.component';

>>>>>>> 4e9992cd60a6905643e17565d39e2f1b5003373d
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MyHotelComponent,
    ReservationsComponent,
    EmployeersComponent,
    ResourcesListComponent,
    ListHotelTasksComponent,
    ListRoomsComponent,
    EmployeersListarComponent,
    HotelTasksComponent,
    ResourcesComponent,
    EmployeersCrearComponent,
    EmployeersDialogoComponent,
    EmployeersBuscarComponent,
    HotelTasksCrearComponent,
    ResourcesCrearComponent,
    UserTypeComponent,
    NavBarComponent,
    NavBarTuristComponent,
    PrincipalTuristComponent,
    AllHotelsComponent,
    AllHotelsListarComponent,
    AllHotelsBuscarComponent,
    RoomsComponent,
    RoomsCrearComponent,
    ReservationsTuristsComponent,
    MyHotelCrearComponent,
    ReservationsTuristsAgregarComponent,
    ReservationsTuristsDialogoComponent,
    CreditCardComponent,
    CreditCardListComponent,
    ResourcesBuscarComponent,
    CreditCardCrearComponent,
    CreditCardDialogoComponent,
<<<<<<< HEAD
    ResourcesSinstockComponent,
    ResourcesCantidadtipoComponent,
    ResourcesDialogoaComponent,
=======
    HotelTasksBuscarComponent,
    RoomsBusquedaComponent,
>>>>>>> 4e9992cd60a6905643e17565d39e2f1b5003373d
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
