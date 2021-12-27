import { PedidosService } from './../../pedidos.service';
import { pedidoModel } from '../Models/pedidoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registraentrega',
  templateUrl: './registraentrega.component.html',
  styleUrls: ['./registraentrega.component.css']
})
export class RegistraentregaComponent implements OnInit {

  pedidoModel: pedidoModel;
  id: number;

  constructor(private pedidoService: PedidosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.pedidoService.getPedidoPorId(this.id).subscribe(res => {
      this.pedidoModel = res;
    })
  }

  registraEntrega(idPedido) {
    this.pedidoService.registraEntrega(idPedido).subscribe(res => {
      alert(JSON.stringify(res["mensagem"]));      
    })
  }




}
