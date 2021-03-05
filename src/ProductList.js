import React, {Component} from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.products.map(product =>
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;