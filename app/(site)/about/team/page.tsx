import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Team',
};

export default function Team(): JSX.Element {
  return (
    <>
      <div className={styles.team}>"TEAM" page</div>
    </>
  );
}
