import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem; /* Aumentado el padding-top a 6rem */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
`;

const TechTag = styled(motion.span)`
  background: rgba(100, 255, 218, 0.1);
  color: ${props => props.theme.colors.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin: 0.3rem;
  display: inline-block;
`;

const TechContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Projects = () => {
  const projectsList = [
    {
      title: "Portfolio Personal",
      description: "Portfolio interactivo desarrollado con React y Framer Motion. Cuenta con animaciones fluidas, diseño responsivo y una interfaz moderna inspirada en editores de código.",
      link: "https://github.com/Kalalo7/portfolio",
      technologies: ["React", "Framer Motion", "Styled Components", "JavaScript", "CSS3"]
    },
    {
      title: "Pokédex",
      description: "Una Pokédex interactiva que permite explorar y buscar Pokémon, mostrando sus estadísticas, tipos y evoluciones. Desarrollada con React y la PokeAPI.",
      link: "https://github.com/Kalalo7/pokedex-de-alfred",
      demoLink: "https://kalalo7.github.io/pokedex-de-alfred/",
      technologies: ["React", "JavaScript", "CSS3", "PokeAPI", "HTML5"]
    },
    {
      title: "MyShop",
      description: "Plataforma de comercio electrónico desarrollada con React y Firebase. Incluye catálogo de productos, carrito de compras y gestión de usuarios.",
      link: "https://github.com/Kalalo7/MyShop",
      technologies: ["React", "Firebase", "JavaScript", "Bootstrap", "CSS3"]
    },
    {
      title: "Tetrix Game",
      description: "Implementación moderna del clásico juego Tetris, desarrollada con JavaScript vanilla. Incluye sistema de puntuación y niveles de dificultad.",
      link: "https://github.com/Kalalo7/tetrix",
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"]
    },
    {
      title: "Snake Game",
      description: "Versión del clásico juego de la serpiente desarrollada en Python. Incluye sistema de puntuación y dificultad progresiva.",
      link: "https://github.com/Kalalo7/snake_game.py",
      technologies: ["Python", "Pygame", "OOP"]
    },
    {
      title: "Encriptador de Texto",
      description: "Aplicación web que permite encriptar y desencriptar mensajes utilizando un algoritmo personalizado. Interfaz intuitiva y responsive.",
      link: "https://github.com/Kalalo7/Challenge-encriptador",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Conversor de Monedas",
      description: "Herramienta de conversión de divisas en tiempo real. Soporta múltiples monedas y actualización de tasas de cambio.",
      link: "https://github.com/Kalalo7/Challenge-Monedas",
      technologies: ["Java", "Swing", "API Integration"]
    },
    {
      title: "Literalura",
      description: "Plataforma web para compartir y descubrir literatura. Incluye sistema de categorías y recomendaciones personalizadas.",
      link: "https://github.com/Kalalo7/literalura",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"]
    }
  ];

  return (
    <ProjectsContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Proyectos
      </PageTitle>
      <ProjectsGrid>
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project}>
              <TechContainer>
                {project.technologies.map((tech, i) => (
                  <TechTag
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechContainer>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;