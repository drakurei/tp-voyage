import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="py-5">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className="site-footer">
        <Container>Réalisé par Jonathan Davy</Container>
      </footer>
    </>
  );
}

export default MainLayout;
