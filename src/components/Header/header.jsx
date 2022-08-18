import styles from './Header.module.css';
import logoShort from '../../assets/LogoShort.svg'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logoShort} alt="" />
      </header>
    </div>
  )
}
