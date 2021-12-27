import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NovoComponent } from './pedidos/novo/novo.component';
import { RegistraentregaComponent } from './pedidos/registraentrega/registraentrega.component';
import { EntreguesComponent } from './pedidos/entregues/entregues.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    NovoComponent,
    RegistraentregaComponent,
    EntreguesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
    HttpClientModule,  
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
