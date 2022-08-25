import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>

      <img src="https://avatars.githubusercontent.com/u/93044374?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fábio Henrique</strong>
                <time title='11 de Agosto ás 11hrs' dateTime='2022-08-11'>
                  Comentário há 1h
                </time>
            </div>
            <button title="Deletar o Comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Fábio, parabéns!!!</p>


        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  );
}
