'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  position: relative;
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  transition: opacity 0.5s ease-in-out;
  text-align: center;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    margin: 0 5px;
    background: ${({ theme }) => theme.colors.accent};
    border: none;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const images = ['/carrossel1.jpg', '/carrossel2.jpg', '/carrossel3.jpg'];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CarouselContainer>
      {images.map((img, index) => (
        <Slide key={index} active={index === current}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
      <Controls>
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} />
        ))}
      </Controls>
    </CarouselContainer>
  );
}
