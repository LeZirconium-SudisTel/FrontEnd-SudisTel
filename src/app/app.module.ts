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
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';



//Componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { EmployeersComponent } from './pages/employeers/employeers.component';
import { ResourcesListComponent } from './pages/resources/resources-list/resources-list.component';
import { ListHotelTasksComponent } from './pages/hotel-tasks/list-hotel-tasks/list-hotel-tasks.component';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';
import { EmployeersListarComponent } from './pages/employeers/employeers-listar/employeers-listar.component';
import { HotelTasksComponent } from './pages/hotel-tasks/hotel-tasks.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourcesCrearComponent } from './pages/resources/resources-crear/resources-crear.component';
import { EmployeersCrearComponent } from './pages/employeers/employeers-crear/employeers-crear.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavBarComponent,
    MyHotelComponent,
    ReservationsComponent,
    EmployeersComponent,
    ResourcesListComponent,
    ListHotelTasksComponent,
    ListRoomsComponent,
    EmployeersListarComponent,
    HotelTasksComponent,
    ResourcesComponent,
    ResourcesCrearComponent,
    EmployeersCrearComponent
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
    MatDialogModule,
    MatInputModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
