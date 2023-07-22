import styles from './aboutus.module.css';

/* eslint-disable-next-line */
export interface AboutusProps {}

export function Aboutus(props: AboutusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Aboutus!</h1>
    </div>
  );
}

export default Aboutus;
