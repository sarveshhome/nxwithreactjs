import styles from './contactus.module.css';

/* eslint-disable-next-line */
export interface ContactusProps {}

export function Contactus(props: ContactusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Contactus!</h1>
    </div>
  );
}

export default Contactus;
