import React from 'react';
import classes from '../sass/react-components/Testimonials.module.scss';
import cx from 'classnames';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const Testimonials = () => {
    return (
        <div className={classes['section-testimonials']}>
             <div className={ cx(classes['u-center-text'], classes['u-margin-bottom-big']) }>
                <h2 className={ classes['heading-secondary'] }>Testimonials</h2>
            </div>
            <Carousel datainterval="false" className={classes['carousel-slide']}>
            <Carousel.Item>
                <Row>
                    <Col sm={4}>
                        <Row className='justify-content-center'>
                            <Col xs={6} className={classes['carousel-box']} >
                                <p className={classes['carousel-box__text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum cum fugiat fugit rerum consequuntur accusamus amet vitae, ducimus recusandae iste quae beatae totam voluptatum ullam molestiae ut distinctio dolores!
                                </p>
                                <p className={classes['carousel-box__author']}>
                                - Mike
                                </p>
                            </Col>
                           
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row className='justify-content-center'>
                        <Col xs={6} className={classes['carousel-box']} >
                                <p className={classes['carousel-box__text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum cum fugiat fugit rerum consequuntur accusamus amet vitae, ducimus recusandae iste quae beatae totam voluptatum ullam molestiae ut distinctio dolores!
                                </p>
                                <p className={classes['carousel-box__author']}>
                                - Kevin
                                </p>
                            </Col>
                           
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row className='justify-content-center'>
                        <Col xs={6} className={classes['carousel-box']} >
                                <p className={classes['carousel-box__text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum cum fugiat fugit rerum consequuntur accusamus amet vitae, ducimus recusandae iste quae beatae totam voluptatum ullam molestiae ut distinctio dolores!
                                </p>
                                <p className={classes['carousel-box__author']}>
                                - George
                                </p>
                            </Col>
                           
                        </Row>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col sm={4}>
                        <Row className='justify-content-center'>
                            <Col xs={6} className={classes['carousel-box']} >
                                <p className={classes['carousel-box__text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum cum fugiat fugit rerum consequuntur accusamus amet vitae, ducimus recusandae iste quae beatae totam voluptatum ullam molestiae ut distinctio dolores!
                                </p>
                                <p className={classes['carousel-box__author']}>
                                - Mike
                                </p>
                            </Col>
                           
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row className='justify-content-center'>
                        <Col xs={6} className={classes['carousel-box']} >
                                <p className={classes['carousel-box__text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum cum fugiat fugit rerum consequuntur accusamus amet vitae, ducimus recusandae iste quae beatae totam voluptatum ullam molestiae ut distinctio dolores!
                                </p>
                                <p className={classes['carousel-box__author']}>
                                - Kevin
                                </p>
                            </Col>
                           
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row className='justify-content-center'>
                        <Col xs={6} className={classes['carousel-box']} >
                                <p className={classes['carousel-box__text']}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero harum cum fugiat fugit rerum consequuntur accusamus amet vitae, ducimus recusandae iste quae beatae totam voluptatum ullam molestiae ut distinctio dolores!
                                </p>
                                <p className={classes['carousel-box__author']}>
                                - George
                                </p>
                            </Col>
                           
                        </Row>
                    </Col>
                </Row>
            </Carousel.Item>
           
        </Carousel>



        </div>
    )
}

export default Testimonials;