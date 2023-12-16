import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Mainlayout =({children}) => {
    return (
        <div>
            <NavBar />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    );
};

export default Mainlayout;