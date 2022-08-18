import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header >
        <div className={styles.author}>

          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/93044374?v=4" />

          <div>
            <strong>Fábio Henrique</strong>
            <span>Web Developer</span>
          </div>

        </div>

        <time title='11 de Agosto ás 11hrs' dateTime='2022-08-11'>
          Publicado há 1h
        </time>

      </header>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

    </article>
  )
}
