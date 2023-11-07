import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function BlockExample() {
  const navigate = useNavigate()

  return (
    <Container>
      <center>

        <div className="d-grid gap-2 " style={{ width: "25rem", marginTop: "10rem" }}>
          <Button variant="secondary" size="lg" onClick={() => navigate('/loginadmin')}>
            Admin Login
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/loginhead')}>
            Head Login
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/loginuser')}>
            User Login
          </Button>
        </div>
      </center>
    </Container>
  );
}

export default BlockExample;