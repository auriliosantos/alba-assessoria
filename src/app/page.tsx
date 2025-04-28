import Carousel from '@/components/Carousel';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      
      <main>
        <section style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Legalize Seu Diploma</h1>
          <p>Seu diploma validado com agilidade, segurança e total apoio jurídico.</p>
        </section>
        <Carousel />
        <Testimonials />
      </main>
    </>
  );
}
