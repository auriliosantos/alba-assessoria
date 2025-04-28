import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = [
  { title: 'Como funciona o reconhecimento de diplomas estrangeiros no Brasil', slug: 'reconhecimento-diplomas' },
  { title: 'Documentos necessários para validar seu diploma', slug: 'documentos-necessarios' }
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Blog</h1>
        <ul style={{ marginTop: '1rem' }}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
