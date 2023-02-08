import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/songs">Songs</Navbar.Brand>
        <Button variant="light">
          <Link to={`/songs/new`}>New Song</Link>
        </Button>
      </Container>
    </Navbar>
  );
}
