
import { ListGroup,ListGroupItem,Card, Button, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header id='background' >
        <Navbar className='nav-bar fixed-top' expand="lg">
          <Container>
            <Navbar.Brand className='nav-title' href="#home">Indicorp</Navbar.Brand>
            <Navbar.Toggle className='link' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='nav-items' href="#home">Home</Nav.Link>
                <Nav.Link className='nav-items' href="#link">Product</Nav.Link>
                <Nav.Link className='nav-items' href="#link">Pricing</Nav.Link>
                <Nav.Link className='nav-items' href="#link">Contact</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section className='page-section home-section '  >

          <h1 id='main-title'>EMPOWER YOUR <br />BUISNESS </h1>
          <p className="title-desc">We know how large objects will act <br />but things on a small scale.</p>
          <Button className='main-btns prim ' variant="warning">Get Quote Now</Button>
          <Button className='main-btns sec' variant="info">Learn More</Button>
          <div>
            <Card className="shadow p-3 mb-5 rounded" style={{ width: '18rem' }}>
              <Card.Body>
                <i class="fas fa-briefcase"></i>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  We focus on ergonomics and
                  meeting you where you work.
                </Card.Text>

              </Card.Body>

            </Card>
            <Card className="shadow p-3 mb-5 rounded" style={{ width: '18rem' }}>
              <Card.Body>
                <i class="fas fa-building"></i>
                <Card.Title>National top 50 firms</Card.Title>
                <Card.Text>
                  Just type what's on your mind
                  and we'll get you there.
                </Card.Text>

              </Card.Body>
            </Card>
            <Card className="shadow p-3 mb-5  rounded" style={{ width: '18rem' }}>
              <Card.Body>
                <i class="fas fa-archive"></i>
                <Card.Title>Digital Marketing
                </Card.Title>
                <Card.Text>
                  the quick fox jumps over the
                  lazy dog
                </Card.Text>

              </Card.Body>
            </Card>
          </div>


        </section>

      </header>
      <section className='page-section'>
        <h2 className='section-title'>Practice Advice</h2>
        <p className='section-desc'>Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics </p>

        <div>
        
          <Card className='practice-card' style={{ width: '210px' }}>
            <Card.Body>
              <Card.Title className='practice-card-title'>A single source
                of truth</Card.Title>
              <Card.Text className='practice-card-desc'>
                Newton thought that
                light was made up of
                particles, but then it
                was discovered
              </Card.Text>

            </Card.Body>

          </Card>
         
          <Card className='practice-card' style={{ width: '210px' }}>
            <Card.Body>


              <Card.Title className='practice-card-title'>Fastest way to
                organize</Card.Title>
              <Card.Text className='practice-card-desc'>
                “Quantum mechanics”
                is the description of the
                behaviour of matter
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='practice-card' style={{ width: '210px' }}>
            <Card.Body>
              <Card.Title className='practice-card-title'>Fastest way to
                take action
              </Card.Title>
              <Card.Text className='practice-card-desc'>
                They describe a
                universe consisting of
                bodies moving
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='practice-card' style={{ width: '210px' }}>
            <Card.Body>
              <Card.Title className='practice-card-title'>Work better
                together
              </Card.Title>
              <Card.Text className='practice-card-desc'>
                They finally obtained
                a consistent description
                of the behaviour
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </section>


    </div>
  );
}

export default App;
