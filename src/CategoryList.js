import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = ()=>{
        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(data => this.setState({categories:data}))
    }

    render() {
        return (
            <div>
                <h1>{this.props.info.title}</h1>
               <ListGroup>
                   {this.state.categories.map(cat=>
                       <ListGroupItem
                           active={cat.categoryName===this.props.currCategory?true:false}
                           onClick={()=>this.props.setCategory(cat)}
                           key={cat.id}>{cat.categoryName}
                       </ListGroupItem>
                   )}
               </ListGroup>
            </div>
        );
    }
}

export default CategoryList;