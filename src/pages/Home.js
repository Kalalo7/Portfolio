import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // tema oscuro
import 'prismjs/components/prism-javascript';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 0; /* Aumentado el padding-top a 6rem */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.9));
    z-index: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const CodeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.1;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
  white-space: pre-wrap;
  padding: 2rem;
  z-index: 0;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  
  &::before {
    content: '<h1>';
    font-size: 1rem;
    color: ${props => props.theme.colors.secondary};
    display: block;
    margin-bottom: 0.5rem;
  }

  &::after {
    content: '</h1>';
    font-size: 1rem;
    color: ${props => props.theme.colors.secondary};
    display: block;
    margin-top: 0.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
  font-family: 'Courier New', monospace;
`;

const Description = styled(motion.div)`
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Courier New', monospace;
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid ${props => props.theme.colors.secondary};
`;


const CodeEditor = styled(Editor)`
  background: rgba(0, 0, 0, 0.3) !important;
  font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  border-radius: 8px;
  border-left: 4px solid ${props => props.theme.colors.secondary};
  
  & > textarea, & > pre {
    outline: none !important;
    padding: 1.5rem !important;
  }

  .token.comment { color: #6a9955; }
  .token.string { color: #ce9178; }
  .token.number { color: #b5cea8; }
  .token.property { color: #9cdcfe; }
  .token.keyword { color: #569cd6; }
  .token.function { color: #dcdcaa; }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  z-index: 3;
  
  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 3rem;
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  display: inline-block;
  font-family: 'Courier New', monospace;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(5px);

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
  }
`;

const Home = () => {
  const [code, setCode] = useState('');
  const initialCode = `const developer = {
    name: 'Martin',
    alias: 'Kalalo7',
    role: 'Desarrollador Full Stack',

    skills: [
      'JavaScript',
      'React',
      'Python',
      'Java',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Firebase',
      'Git',
      'AI Integration'
    ],
    
    expertise: {
      aiTools: [
        'ChatGPT',
        'GitHub Copilot',
        'Midjourney'
      ],
      focus: 'Integración de IAs generativas en el desarrollo'
    },
    
    softSkills: [
      'Trabajo en equipo',
      'Adaptabilidad',
      'Resolución de problemas',
      'Comunicación efectiva',
      'Pensamiento crítico',
      'Gestión del tiempo'
    ],
    
    languages: {
      native: ['Castellano', 'Catalán'],
      fluent: ['Inglés'],
      basic: ['Portugués']
    },

    passion: 'Crear aplicaciones web innovadoras y funcionales',
    github: 'https://github.com/Kalalo7',

    projects: {
      total: 8,
      highlights: [
        'Portfolio',
        'Pokédex',
        'MyShop',
        'Snake Game'
      ]
    }
  };`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setCode(initialCode.slice(0, index));
      index++;
      if (index > initialCode.length) clearInterval(timer);
    }, 15); 
    return () => clearInterval(timer);
  }, [initialCode]);

  return (
    <HomeContainer>
      <CodeBackground>
        {Array(50).fill().map((_, i) => (
          `// Desarrollador apasionado por el código limpio\n`
        ))}
      </CodeBackground>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hola, soy Martin Fauci
        </Title>
        <Subtitle
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {'<Desarrollador_FullStack />'}
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CodeEditor
            value={code}
            onValueChange={() => {}}
            highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            padding={10}
            disabled
            style={{
              fontFamily: '"JetBrains Mono", "Fira Code", monospace',
              fontSize: 14,
            }}
          />
        </Description>
      </ContentWrapper>
      <SocialLinksContainer>
        <SocialLink 
          href="https://github.com/Kalalo7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </SocialLink>
        <SocialLink 
          href="https://www.linkedin.com/in/martin-fauci/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </SocialLink>
      </SocialLinksContainer>
    </HomeContainer>
  );
};

export default Home;