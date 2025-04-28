import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cases() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Cases de Sucesso</h1>
        <p>Veja alguns exemplos de pessoas que legalizaram seus diplomas conosco:</p>
        <ul style={{ marginTop: '1rem', listStyle: 'disc', paddingLeft: '2rem' }}>
          <li>Ana Paula (Medicina - Bolívia para Brasil)</li>
          <li>José da Silva (Engenharia - Portugal para Brasil)</li>
          <li>Maria Oliveira (Direito - Argentina para Brasil)</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
