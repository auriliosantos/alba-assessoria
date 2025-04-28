'use client';
import styled from 'styled-components';

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default function FaleConosco() {
  return (
    <>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Fale com um Especialista</h1>
        <p>Estamos prontos para tirar suas dúvidas e iniciar seu processo de legalização!</p>
        <ContactButton href="https://wa.me/5581995670475" target="_blank" rel="noopener noreferrer">
          WhatsApp: (81) 99567-0475
        </ContactButton>
      </main>
    </>
  );
}
