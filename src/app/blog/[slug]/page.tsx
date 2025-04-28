// src/app/blog/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

const PostPage = async ({ params }) => {
  const { slug } = params;  // Pegando o slug da URL

  // Caminho para a pasta de posts
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const postPath = path.join(postsDirectory, `${slug}.md`);
  
  // Verifica se o arquivo existe
  if (!fs.existsSync(postPath)) {
    notFound();  // Retorna 404 se o arquivo não for encontrado
  }

  // Lê o conteúdo do post
  const postContent = fs.readFileSync(postPath, 'utf-8');

  return (
    <div>
      <h1>{slug.replace('-', ' ').toUpperCase()}</h1>
      <div>
        <pre>{postContent}</pre> {/* Aqui você pode processar o markdown */}
      </div>
    </div>
  );
};

export default PostPage;
