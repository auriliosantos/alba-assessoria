'use client';

import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import img1 from '@/assets/carrossel1.jpg';
import img2 from '@/assets/carrossel2.jpg';
import img3 from '@/assets/carrossel3.jpg';

const images: StaticImageData[] = [img1, img2, img3];

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

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <CarouselContainer>
      {images.map((source, idx) => (
        <Slide key={idx} active={idx === current}>
          <Image
            src={source}
            alt={`Slide ${idx + 1}`}
            layout="intrinsic"  // Mantém as proporções da imagem
            sizes="(max-width: 800px) 100vw, 800px"
            priority={idx === 0}
          />
        </Slide>
      ))}
      <Controls>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </Controls>
    </CarouselContainer>
  );
}
