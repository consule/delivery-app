export interface pedidoModel {
    contador: number,
    pedidos: 
        {
            id: number,
            dataHoraPedido: Date,
            dataHoraPedidoEntregue: Date,
            idCliente: number,
            idProduto: number,
            nome: string,
            descricao: string
        }
    
}