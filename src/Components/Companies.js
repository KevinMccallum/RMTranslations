import React from 'react'
import classes from '../sass/react-components/Companies.module.scss';
import cx from 'classnames';
import '../sass/icon-font.css';
import mcd from '../img/mcdonalds.png';
import ati from '../img/ati.png';
import beats from '../img/beats.png';
import microsoft from '../img/microsoft.png'
import nike from '../img/nike.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



 const Companies = () => {
    return (
        <div>
            <section className={classes['section-companies']}>
                

                <Container>

                    <Row>
                        <Col sm={3}>
                        <img src={nike} alt="Nike" className={ classes['composition__company']  }/>
                        </Col>

                        <Col sm={3}>
                        <img src={ati} alt="Ati" className={ classes['composition__company']  }/>

                        </Col>

                        <Col sm={3}>
                        <img src={beats} alt="Beats" className={ classes['composition__company']  }/>
                        </Col>

                        <Col sm={3}>
                        <img src={microsoft} alt="Microsoft" className={ classes['composition__company']  }/>

                        </Col>

                    </Row>
                </Container>

     


            </section>
        </div>
    )
}

export default Companies;
