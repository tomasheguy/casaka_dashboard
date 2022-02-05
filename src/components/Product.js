import React,{Component} from 'react';

import ProductList from './ProductList';

class Products extends Component{
    constructor(){
        super();
        this.state = {
            products :[] // tiene que comenzar como un array vacio... estado inicial
        }
    }

	componentDidMount(){
		fetch('/api/products/')
		.then(respuesta =>{
			return respuesta.json() // si no hubiese corchetes, no hace falta el return
		})
		.then(products =>{
			//console.log(datos.data,'----------------------'); // res. send(datos) como console log pero se ve en el browser y no en la terminal
			this.setState({
				products:products.data // setear el estado
			}) 
		})
	}

	render() {
        return(
        
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los Productos en la Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Talle</th>
                                            <th>Precio</th>
                                            <th>Marca</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Talle</th>
                                            <th>Precio</th>
                                            <th>Marca</th>
										</tr>
									</tfoot>
									<tbody>
										
										{
                                    		this.state.products.map((product,index)=>{ // porque asi lo declare enla linea 7
                                        	return  <ProductList  {...product}  key={product + index} />
                                    		})
                                		}

										
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    	)
	}
}
export default Products;