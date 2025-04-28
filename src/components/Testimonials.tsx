'use client';

import styled from 'styled-components';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.secondary};
`;

const Testimonial = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

type TestimonialType = {
  name: string;
  feedback: string;
};

export default function Testimonials() {
  return (
    <TestimonialsSection>
      <h2>Depoimentos</h2>
      {testimonials.map((t, i) => (
        <Testimonial key={i}>
          <strong>{t.name}</strong>
          <p>{t.feedback}</p>
        </Testimonial>
      ))}
    </TestimonialsSection>
  );
}
