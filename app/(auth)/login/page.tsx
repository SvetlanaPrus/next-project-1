import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login(): JSX.Element {
  return <div className={styles.div}>"LOGIN" page</div>;
}
