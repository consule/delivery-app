import { pedidoModel } from './../Models/pedidoModel';
import { PedidosService } from './../../pedidos.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-entregues',
  templateUrl: './entregues.component.html',
  styleUrls: ['./entregues.component.css']
})
export class EntreguesComponent implements OnInit {

  pedidoModel: pedidoModel;
  private updateSubscription: Subscription
  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.getPedidosEntregues();

    this.updateSubscription = interval(1000).subscribe(res => {
      this.getPedidosEntregues();
    })
  }

  getPedidosEntregues() {
    this.pedidoService.getPedidosEntregues().subscribe(res => {
      this.pedidoModel = res;
    });
  }

  getPedidoNomeClienteEntregue(nomeCliente) {
    debugger
    this.pedidoService.getPedidoPorNomeClienteEntregue(nomeCliente).subscribe(res => {
      this.pedidoModel = res;
    })
  }
}
