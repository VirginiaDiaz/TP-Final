import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importacion de clases FIREBASE
import{AngularFireModule} from '@angular/fire/compat';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';

//importacion conf de Firebase
import { environment } from 'src/environments/environment';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostrarMilesPipe } from './mostrar-miles.pipe';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    CrearComponent,
    EditarComponent,
    MostrarMilesPipe,
    LoginComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
