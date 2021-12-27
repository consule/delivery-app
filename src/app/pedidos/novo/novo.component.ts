import { produtoModel } from './../Models/produtoModel';
import { clienteModel } from './../Models/clienteModel';
import { pedidoModel } from '../Models/pedidoModel';
import { PedidosService } from './../../pedidos.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  pedidoModel: pedidoModel;
  clienteModel: clienteModel;
  produtoModel:produtoModel;

  constructor(private pedidoService: PedidosService) { }
  ngOnInit(): void {
    this.getProduto();
    this.getCliente();
  }

  getProduto() {
    this.pedidoService.getProduto().subscribe(res => {
      this.produtoModel = res;
    })
  }

  getCliente() {
    this.pedidoService.getCliente().subscribe(res => {
      this.clienteModel = res;
    });
  }

  postPedido(idCliente, idProduto) {
    let pedido = {
      idCliente: idCliente, 
      idProduto: idProduto
    }
    this.pedidoService.postPedidos(pedido).subscribe(res => {
      alert(JSON.stringify(res["mensagem"]));
    })
  }

}
