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
import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios'


class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{ width: '600px' }}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="message">Message:</Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        )
    }


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

export default ContactForm




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