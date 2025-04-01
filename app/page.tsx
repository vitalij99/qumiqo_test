import PostList from './_components/PostList/PostList';
import styles from './page.module.css';

const LINK_API =
  'https://api.qumiqo.com/api/posts?_limit=16&type=newest&page=1';

export default async function Home() {
  const data = await fetch(LINK_API).then(response => response.json());

  return (
    <main className={styles.main}>
      <PostList posts={data} />
    </main>
  );
}
