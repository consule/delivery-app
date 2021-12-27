import { PedidosService } from './../pedidos.service';
import { pedidoModel } from './Models/pedidoModel';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidoModel: pedidoModel;
  private updateSubscription: Subscription;
  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.getAllPedidos();

    this.updateSubscription = interval(1000).subscribe(
      () => { this.getAllPedidos()
    }
  );
  }

  getAllPedidos() {
    this.pedidoService.getPedidos().subscribe(res => {
      this.pedidoModel = res;
      console.log(res)
    });
  }

  getPedidoNomeCliente(nomeCliente) {
    this.pedidoService.getPedidoPorNomeCliente(nomeCliente).subscribe(res => {
      this.pedidoModel = res;
      console.log(res)
    });
  }

}
