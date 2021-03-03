import {Col, Container, Row} from "reactstrap";
import Navi from './Navi'
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Component} from "react/cjs/react.production.min";

class App extends Component{
    categoryInfo = {title:"Category List"}
    productInfo = {title:"Product List"}
    render(){
        return(
            <div className="App">
                <Container>
                    <Row><Navi/></Row>
                    <Row>
                        <Col xs={3}><CategoryList info={this.categoryInfo}/></Col>
                        <Col xs={9}><ProductList info={this.productInfo}/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;

