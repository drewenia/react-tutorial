import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {id: "1", categoryName: "Beverages"},
            {id: "2", categoryName: "Condiment"},
            {id: "3", categoryName: "Drinks"}
        ],
        currentCategory: ""
    }

    changeCurrentCategoryAndSetTextH4Tag = (cat) => {
        this.setState({currentCategory: cat.categoryName})
    }

    render() {
        return (
            <div>
                <h1>{this.props.info.title}</h1>
               <ListGroup>
                   {this.state.categories.map(cat=>
                       <ListGroupItem
                           onClick={()=>this.changeCurrentCategoryAndSetTextH4Tag(cat)}
                           key={cat.id}>{cat.categoryName}
                       </ListGroupItem>
                   )}
               </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>
        );
    }
}

export default CategoryList;