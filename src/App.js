import {Col, Container, Row} from "reactstrap";
import Navi from './Navi'
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

function App() {
    let categoryInfo = {title:"this is category title"};
    let productInfo = {title:"this is product title"};
    return (
        <div className="App">
            <Container>
                <Row><Navi/></Row>
                <Row>
                    <Col xs={3}><CategoryList info={categoryInfo}/></Col>
                    <Col xs={9}><ProductList info={productInfo}/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
