import styles from './Post.module.css'
import {Comment} from "../Comment/Comment";
import {Avatar} from "../Avatar/Avatar";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/50303514?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Ismael Vargas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="26 de Setembro às 02h25" dateTime="2022-09-26 02:25:15" >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉&nbsp;&nbsp;<a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto{' '} #nlw {' '} #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    )
}
