import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Servicos() {
  return (
    <>
      <main style={{ padding: '2rem' }}>
        <h1>Serviços</h1>
        <ul style={{ marginTop: '1rem', listStyle: 'disc', paddingLeft: '2rem' }}>
          <li>Consultoria personalizada para validação de diploma.</li>
          <li>Acompanhamento jurídico completo.</li>
          <li>Suporte para tradução juramentada de documentos.</li>
          <li>Assessoria em processos junto ao MEC e universidades públicas.</li>
        </ul>
      </main>
    </>
  );
}
