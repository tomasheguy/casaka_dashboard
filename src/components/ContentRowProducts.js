import React from 'react';
import SmallCard from './SmallCard';

// let products =fetch('/api/products/')
//         .then(respuesta =>{
//             return respuesta.json() // si no hubiese corchetes, no hace falta el return
//         })
//         .then(products =>{
//             //console.log(datos.data,'----------------------'); // res. send(datos) como console log pero se ve en el browser y no en la terminal
//             this.setState({
//                 products:products.data // setear el estado
//             }) 
//         })

let productInDataBase = {
    color:   "primary",
    titulo: "Productos in Data Base",
    valor: 10,
    icono: "fas fa-tshirt",
}

let brand ={
    color:   "success",
    titulo: "Total Marcas",
    valor: 79,
    icono: "far fa-copyrigth",
}

let user = {
    color:   "warning",
    titulo: "Usuarios",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,brand,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;