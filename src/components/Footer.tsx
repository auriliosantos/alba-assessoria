'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Alba Assessoria | Todos os direitos reservados.
    </FooterContainer>
  );
}
