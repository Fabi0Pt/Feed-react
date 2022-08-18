import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="http://source.unsplash.com/random" />
      <div className={styles.profile}>

        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/93044374?v=4" />


        <strong>Fábio Henrique</strong>
        <span>Web Developer</span>

      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )

}
