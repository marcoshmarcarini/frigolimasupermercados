import styles from "../styles/Rodape.module.css"
import Link from "next/link";

export default function Rodape(){
    return(
        <div className={styles.rodape}>
            <p>Desenvolvido por</p>
            <Link href={`http://comconteudo.com.br/novo/`} className={styles.link}>
                Agência Conteúdo.
            </Link>
        </div>
    )
}