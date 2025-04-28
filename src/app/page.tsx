import Carousel from '@/components/Carousel';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <head>
        <title>Legalize Seu Diploma</title>
        <meta name="description" content="Revalidação de Diplomas Estrangeiros com Segurança e Rapidez" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
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
