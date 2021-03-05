import {Col, Container, Row} from "reactstrap";
import Navi from './Navi'
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Component} from "react/cjs/react.production.min";

class App extends Component {
    categoryInfo = {title: "Category List"}
    productInfo = {title: "Product List"}

    state = {
        currentCategory: "",
        productList:[]
    }

    componentDidMount(){
        this.getProductList();
    }

    setCurrentCategory = (cat) => {
        this.setState({currentCategory: cat.categoryName})
    }

    getProductList = (seoUrl)=>{
        let url = "http://localhost:3000/products";
        if (seoUrl){
            //seoUrl define edilmis ise!
            url+="/"+seoUrl;
        }
        fetch(url)
            .then(res=>res.json())
            .then(data=>this.setState({productList: data}));
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Navi/>
                    </Row>
                    <Row>
                        <Col xs={3}><CategoryList
                            info={this.categoryInfo}
                            currCategory={this.state.currentCategory}
                            setCategory={this.setCurrentCategory}
                        />
                        </Col>
                        <Col xs={9}><ProductList
                            info={this.productInfo}
                            products = {this.state.productList}
                            currCategory = {this.state.currentCategory}
                        />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;

