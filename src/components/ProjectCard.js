import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.secondary};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled(motion.button)`
  background: rgba(100, 255, 218, 0.1);
  color: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;

const ProjectCard = ({ title, description, link, demoLink, children }) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
      <LinkContainer>
        <LinkButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(link, '_blank')}
        >
          Ver Código
        </LinkButton>
        {demoLink && (
          <LinkButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(demoLink, '_blank')}
          >
            Ver Demo
          </LinkButton>
        )}
      </LinkContainer>
    </Card>
  );
};

export default ProjectCard;