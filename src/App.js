import React from 'react'
import cx from 'classnames';
// import globalstyles from './Assets/global-styles/bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import globalstyles from 'bootstrap/dist/css/bootstrap.min.css';
import classes from './sass/App.module.scss';



 const App = () => {
    return (
        <div>
            <h1 className={classes['header']}>Hello</h1>
            <button>This Bootstrap</button>
            <Button variant="primary" className={classes.but}>Primary</Button>
            <Button variant="secondary">Secondary</Button>



            <Container>
            <Row>
                <Col className={classes['layout']}>1 of 1</Col>
            </Row>
            </Container>
        </div>
    )
}

export default App;
