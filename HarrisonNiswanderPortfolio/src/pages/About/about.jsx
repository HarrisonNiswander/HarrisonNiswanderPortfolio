import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import "./about_styles/about.css";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useEffect } from "react";

const about = () => (
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"; // or your local path
    link.id = "bootstrap-page-css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []),
  
  <div>

    <Header />
    
    <h1>About Page</h1>

    <div className="profile">
      <Tab.Container id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item><Nav.Link eventKey="first">Academics</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="second">Athletics</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="third">Work Experience</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="fourth">Volunteer Work</Nav.Link></Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="tab-content">
              <Tab.Pane eventKey="first">Academics</Tab.Pane>
              <Tab.Pane eventKey="second">Athletics</Tab.Pane>
              <Tab.Pane eventKey="third">Work Experience</Tab.Pane>
              <Tab.Pane eventKey="fourth">Volunteer Work</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>



    </div>

    <Footer />
  </div>

)

export default about;