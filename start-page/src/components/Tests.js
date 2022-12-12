import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import './style.css';

export const Tests = ({ testItems }) => {

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className='heading-left row  f_flex'>
                            <h2>Тести</h2>
                            <section className='shop background'>
                                <div className='container d_flex'>
                                    <div className='contentWidth'>
                                        <div className='heading d_flex'>
                                        </div>
                                        <div className='product-content  grid1'>
                                            <ProjectCard testItems={testItems} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

