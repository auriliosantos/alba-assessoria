'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  color: white;

  a {
    margin-left: 1rem;
    font-weight: bold;
    transition: color 0.3s;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Link href="/">Alba Assessoria</Link>
      <div>
        <Link href="/blog">Blog</Link>
        <Link href="/quem-somos">Quem Somos</Link>
        <Link href="/servicos">Serviços</Link>
        <Link href="/cases">Cases de Sucesso</Link>
        <Link href="/fale-conosco">Fale com Especialista</Link>
      </div>
    </Nav>
  );
}
