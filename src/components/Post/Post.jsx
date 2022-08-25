import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header >
        <div className={styles.author}>

          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/93044374?v=4" />

          <div className={styles.authorInfo}>
            <strong>Fábio Henrique</strong>
            <span>Web Developer</span>
          </div>

        </div>

        <time title='11 de Agosto ás 11hrs' dateTime='2022-08-11'>
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
        <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}
