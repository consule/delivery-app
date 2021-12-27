import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { clienteModel } from './pedidos/Models/clienteModel';
import { pedidoModel } from './pedidos/Models/pedidoModel';
import { produtoModel } from './pedidos/Models/produtoModel';
import { tap } from 'rxjs/operators';

const url = "https://localhost:44323/api/Pedido";
const produto = "https://localhost:44323/api/Produto";
const cliente = "https://localhost:44323/api/Cliente";
const entregues = "https://localhost:44323/api/Pedido/entregues";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getPedidos() : Observable<pedidoModel> {
    return this.http.get<pedidoModel>(url);
  }

  getPedidoPorNomeCliente(nomeCliente) : Observable<pedidoModel> {
    debugger
    return this.http.get<pedidoModel>(url+`/nomeCliente/${nomeCliente}`)
  }

  getPedidoPorNomeClienteEntregue(nomeCliente) : Observable<pedidoModel> {
    debugger
    return this.http.get<pedidoModel>(url+`/nomeClienteEntregue/${nomeCliente}`)
  }

  registraEntrega(idPedido) : Observable<pedidoModel> {
    let x = {
      id: idPedido
    }
    return this.http.put<pedidoModel>(url+`/${idPedido}`, x);
  }

  getPedidoPorId(idPedido) : Observable<pedidoModel> {
    return this.http.get<pedidoModel>(url+`/${idPedido}`);
  }

  postPedidos(pedido) : Observable<pedidoModel> {
    return this.http.post<pedidoModel>(url, pedido);
  }

  getProduto() : Observable<produtoModel> {
    return this.http.get<produtoModel>(produto);
  }

  getCliente() : Observable<clienteModel> {
    return this.http.get<clienteModel>(cliente);
  }

  getPedidosEntregues() : Observable<pedidoModel> {
    return this.http.get<pedidoModel>(entregues);
  }
}
