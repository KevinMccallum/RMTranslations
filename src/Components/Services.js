import React from 'react';
import classes from '../sass/react-components/Services.module.scss';
import Card from 'react-bootstrap/Card';
import cx from 'classnames';
import Button from 'react-bootstrap/Button';
import pen from '../img/pen.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Services = () => {
    return (

        <section className={classes['section-services']}>

            <div className={ cx(classes['u-center-text'], classes['u-margin-bottom-big']) }>
                <h2 className={ classes['heading-secondary'] }>Services</h2>
            </div>

        <Container>
            <Row>

                {/* Card 1 */}
                <Col md={3}>
                    <div className={classes['card']}>
                        <div className={cx(classes['card__side'], classes['card__side--front'])}>
                            <div className={cx(classes['card__picture'], classes['card__picture--1'])}>
                                    &nbsp;   
                            </div>
                            <h4 className={classes['card__heading']}>
                                <span className={cx(classes['card__heading-span'], classes['card__heading-span--1'])}>Translations</span>
                            </h4>
                            <div className={classes['card__details']}>
                                <ul>
                                    <li>Financial</li>
                                    <li>Gastronomy</li>
                                    <li>Tourism</li>
                                    <li>Medicine (General)</li>
                                    <li>Law (Contracts)</li>
                                    <li>Official Documents</li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className={cx(classes['card__side'], classes['card__side--back'], classes['card__side--back-1'])}>
                            <div className={classes['card__cta']}>
                                <div className={classes['card__price-box']}>
                                    <p className={classes['card__price-only']}>Only</p>
                                    <p className={classes['card__price-value']}>$500</p>
                                </div>
                                <a href="#" className={classes['btnWhite']}>Book Now!</a>

                            </div>
                        </div>
                    </div>
                </Col>

                {/* Card 2 */}
                <Col md={3}>
                    <div className={classes['card']}>
                        <div className={cx(classes['card__side'], classes['card__side--front'])}>
                            <div className={cx(classes['card__picture'], classes['card__picture--2'])}>
                                    &nbsp;   
                            </div>
                            <h4 className={classes['card__heading']}>
                                <span className={cx(classes['card__heading-span'], classes['card__heading-span--2'])}>Subtitling</span>
                            </h4>
                            <div className={classes['card__details']}>
                                <ul>
                                    <li>Financial</li>
                                    <li>Gastronomy</li>
                                    <li>Tourism</li>
                                  
                                   
                                </ul>
                            </div>
                        </div>
                        <div className={cx(classes['card__side'], classes['card__side--back'], classes['card__side--back-2'])}>
                            <div className={classes['card__cta']}>
                                <div className={classes['card__price-box']}>
                                    <p className={classes['card__price-only']}>Only</p>
                                    <p className={classes['card__price-value']}>$500</p>
                                </div>
                                <a href="#" className={classes['btnWhite']}>Book Now!</a>

                            </div>
                        </div>
                    </div>
                </Col>

                {/* Card 3 */}
                <Col md={3}>
                    <div className={classes['card']}>
                        <div className={cx(classes['card__side'], classes['card__side--front'])}>
                            <div className={cx(classes['card__picture'], classes['card__picture--3'])}>
                                    &nbsp;   
                            </div>
                            <h4 className={classes['card__heading']}>
                                <span className={cx(classes['card__heading-span'], classes['card__heading-span--3'])}>Transcriptions</span>
                            </h4>
                            <div className={classes['card__details']}>
                                <ul>
                                    <li>Financial</li>
                                    <li>Gastronomy</li>
                                    <li>Tourism</li>
                                  
                                   
                                </ul>
                            </div>
                        </div>
                        <div className={cx(classes['card__side'], classes['card__side--back'], classes['card__side--back-3'])}>
                            <div className={classes['card__cta']}>
                                <div className={classes['card__price-box']}>
                                    <p className={classes['card__price-only']}>Only</p>
                                    <p className={classes['card__price-value']}>$500</p>
                                </div>
                                <a href="#" className={classes['btnWhite']}>Book Now!</a>

                            </div>
                        </div>
                    </div>
                </Col>


                {/* Card 4 */}
                <Col md={3}>
                    <div className={classes['card']}>
                        <div className={cx(classes['card__side'], classes['card__side--front'])}>
                            <div className={cx(classes['card__picture'], classes['card__picture--4'])}>
                                    &nbsp;   
                            </div>
                            <h4 className={classes['card__heading']}>
                                <span className={cx(classes['card__heading-span'], classes['card__heading-span--4'])}>Proofreading</span>
                            </h4>
                            <div className={classes['card__details']}>
                                <ul>
                                    <li>Financial</li>
                                    <li>Gastronomy</li>
                                    <li>Tourism</li>
                                  
                                   
                                </ul>
                            </div>
                        </div>
                        <div className={cx(classes['card__side'], classes['card__side--back'], classes['card__side--back-4'])}>
                            <div className={classes['card__cta']}>
                                <div className={classes['card__price-box']}>
                                    <p className={classes['card__price-only']}>Only</p>
                                    <p className={classes['card__price-value']}>$500</p>
                                </div>
                                <a href="#" className={classes['btnWhite']}>Book Now!</a>

                            </div>
                        </div>
                    </div>
                </Col>
              
                



            </Row>
        </Container>


        
        {/* <Container>
            <Row>

                <Col> 
                    <Card style={{ width: '30rem' }} className={classes['card']} >
                        <Card.Img variant="top" src={pen} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                



            </Row>
        </Container> */}


        
        


</section>

    )
}

export default Services;