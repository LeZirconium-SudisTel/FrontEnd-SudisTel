//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
//Componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyHotelComponent } from './pages/my-hotel/my-hotel.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { EmployeersComponent } from './pages/employeers/employeers.component';
import { ResourcesListComponent } from './pages/resources-list/resources-list.component';
import { ListHotelTasksComponent } from './pages/list-hotel-tasks/list-hotel-tasks.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
