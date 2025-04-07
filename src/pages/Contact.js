import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem; /* Aumentado el padding-top a 6rem */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const SubmitButton = styled(motion.button)`
  margin-top: 1rem;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled(motion.div)`
  color: ${props => props.color || props.theme.colors.secondary};
  margin-top: 1rem;
  text-align: center;
`;

const SuccessMessage = styled(Message)``;
const ErrorMessage = styled(Message)`
  color: #ff6b6b;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(100, 255, 218, 0.1);
    transition: all 0.4s ease;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover:before {
    width: 200%;
    height: 200%;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_gfsenvq', // replace with your EmailJS service ID
        'template_um8tg7t', // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'martinfauci@gmail.com',
        },
        'MT0yBvn-HJWcLbFb2' // replace with your EmailJS public key
      );

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </Title>
      <ContactForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Mensaje</Label>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </SubmitButton>
        {status === 'sent' && (
          <SuccessMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¡Gracias por tu mensaje! Te responderé pronto.
          </SuccessMessage>
        )}
        {status === 'error' && (
          <ErrorMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
          </ErrorMessage>
        )}
      </ContactForm>
      <SocialLinks>
        <SocialLink href="https://github.com/Kalalo7" target="_blank">GitHub</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/martin-fauci/" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="mailto:martinfauci@gmail.com">Email</SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;