import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RouterModule, Routes } from '@angular/router';
import { NovoComponent } from './pedidos/novo/novo.component';
import { EntreguesComponent } from './pedidos/entregues/entregues.component';
import { RegistraentregaComponent } from './pedidos/registraentrega/registraentrega.component';

const routes: Routes = [
  { path: "", 				component: PedidosComponent }, 
  { path: "novo", 	component: NovoComponent },
  { path: "entregues", 	component: EntreguesComponent },
  { path: "registraentrega/:id", 	component: RegistraentregaComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
