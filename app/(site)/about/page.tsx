import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'About',
};

export default function About(): JSX.Element {
  return (
    <>
      <div className={styles.about}>
        <nav>
          <ul>
            <li>ABOUT: us</li>
            <li>ABOUT: team</li>
            <li>ABOUT: person</li>
          </ul>
        </nav>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </div>
    </>
  );
}
