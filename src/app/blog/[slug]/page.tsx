import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = {
  'reconhecimento-diplomas': {
    title: 'Como funciona o reconhecimento de diplomas estrangeiros no Brasil',
    content: `O reconhecimento de diplomas estrangeiros é feito por universidades públicas, conforme regulamentação do MEC...`
  },
  'documentos-necessarios': {
    title: 'Documentos necessários para validar seu diploma',
    content: `Você precisará de: diploma original, histórico escolar, traduções juramentadas e comprovante de carga horária...`
  }
};

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>{post.title}</h1>
        <p style={{ marginTop: '1rem' }}>{post.content}</p>
      </main>
      <Footer />
    </>
  );
}
