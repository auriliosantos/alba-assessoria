// src/app/blog/page.tsx

import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const PostsPage = async () => {
  // Caminho para a pasta de posts
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  // Lê os arquivos da pasta
  const filenames = fs.readdirSync(postsDirectory);
  
  // Cria links dinâmicos para cada post
  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, ''); // Remove a extensão .md para o slug
    return {
      slug,
      title: slug.replace('-', ' ').toUpperCase(), // Você pode alterar isso conforme necessário para o título
    };
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
