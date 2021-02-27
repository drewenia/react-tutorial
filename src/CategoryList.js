import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {categoryId: "1", categoryName: "Beverages"},
            {categoryId: "2", categoryName: "Condiment"},
            {categoryId: "3", categoryName: "Drinks"}
        ]
    }

    render() {
        return (
            <div>
                <h1>{this.props.info.title}</h1>
                <ListGroup>
                    {this.state.categories.map(cat=>
                        <ListGroupItem key={cat.categoryId}>{cat.categoryName}</ListGroupItem>
                    )}
                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;