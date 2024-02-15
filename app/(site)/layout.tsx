import styles from './page.module.css';
// import { Noto_Sans_KR } from 'next/font/google';
import '../globals.css';
import { Content, Footer, Header, Sidebar } from '../components';
import { Suspense } from 'react';

// const notosanskr = Noto_Sans_KR({ subsets: ['cyrillic'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <Content className={styles.body}>{children}</Content>
        <Footer className={styles.footer} />
      </div>
    </Suspense>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
