import React from 'react';

// componente sin estado

function ProductList(props){
    return(
        <React.Fragment>
            <tr class="table-primary">
				<td>{props.id}</td>
				<td>{props.name_product}</td>
				<td>{props.size_available}</td>
                <td>{props.regular_price}</td>
				<td>{props.Brand.name_brand}</td>
			</tr>
        </React.Fragment>
    )
}
export default ProductList;