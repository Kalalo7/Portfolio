import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.colors.secondary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/">Portafolio</Link>
      </Logo>
      <NavItems>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navbar;