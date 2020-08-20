import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './sass/react-components/App.module.scss';
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Companies from './Components/Companies'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



 const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Testimonials />
            <Companies />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;




{/* <h1 className={classes['header']}>Hello</h1>
            <button>This Bootstrap</button>
            <Button variant="primary" className={classes.but}>Primary</Button>
            <Button variant="secondary">Secondary</Button>


            <Container>
            <Row>
                <Col className={classes['layout']}>1 of 1</Col>
            </Row>
            </Container>




            <Container >
                <Row>
                    <Col className='layout'>1 of 2</Col>
                    <Col className={classes['layout']}>2 of 2</Col>
                </Row>
                <Row>
                    <Col className={classes['layout-1']}>1 of 3</Col>
                    <Col className={classes['layout']}>2 of 3</Col>
                    <Col className={classes['layout']}>3 of 3</Col>
                </Row>
            </Container> */}