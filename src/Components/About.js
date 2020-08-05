import React from 'react';
import classes from '../sass/react-components/About.module.scss';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../img/profile.jpg';




const About = () => {
    return (
        <div>

            <section className={ classes['section-about'] }>
                <div className={ cx(classes['u-center-text'], classes['u-margin-bottom-big']) }>
                    <h2 className={ classes['heading-secondary'] }>About</h2>
                </div>
                <Container>
                    <Row>
                        <Col className={classes['profile']}>
                                <img src={profile} alt="profile picture" className={classes['profile__img']}/>
                        </Col>
                        <Col>
                            <h3 className={ cx(classes['heading-tertiary'], classes['u-margin-bottom-small'])}>Robin McCallum</h3>
                            <p className={classes['paragraph']}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, 
                            optio unde soluta vlo omnis quo esse rerum id consectetur, 
                            sed sint inventore, beatae architecto! Libero.e rerum id consectetur, 
                            sed sint inventore, beatae architecto! Libero.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </section>




            









        </div>
    )
}

export default About;