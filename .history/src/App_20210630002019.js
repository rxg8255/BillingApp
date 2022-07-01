import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import { Row, Col, Divider } from 'antd';
// import { Store } from './Store';

const App = () => {
    // const { state } = React.useContext(Store);
    // console.log(state);
    return (
        <div className="container">
            <Row>
                <Col span={24}>
                    <h1>Yours shopping cart</h1>
                </Col>
            </Row>
            <Row>
                <Col span={14}><Products/></Col>
                <Divider type="vertical" />
                <Col span={9}><Cart/></Col>
            </Row>
            <footer>
                <small>
                    made by Ranjith Reddy
                </small>
            </footer>
        </div>
    );
}

export default App;
