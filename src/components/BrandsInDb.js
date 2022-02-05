import React,{Component} from 'react';
import Brand  from './Brand';

class BrandsInDb extends Component{
    constructor(){
        super()
        this.state = {
            brands :[] // tiene que comenzar como un array vacio... estado inicial
        }
    }
componentDidMount(){
    fetch('http://localhost:3000/api/brands/')
    .then(respuesta =>{
        return respuesta.json() // si no hubiese corchetes, no hace falta el return
    })
    .then(datos =>{
        //console.log(datos.data,'----------------------'); // res. send(datos) como console log pero se ve en el browser y no en la terminal
        this.setState({
            brands:datos.data // setear el estado
        }) 
    })
}

    render() {
        return(
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Marcas en la Base de Datos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.brands.map((brand,index)=>{ // porque asi lo declare enla linea 7
                                        return  <Brand  {...brand}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>);
    }
        
    

}
export default BrandsInDb;