import styles from "../styles/Links.module.css"
import Link from "next/link";

//tel:+552835291131
export default function Contatos(){
    return(
        <div className={styles.linkArea}>
            <p>Entre em contato com os nossos canais de atendimento.</p>
            <Link href={`tel:+552835221058`} className={styles.cardLink}><p>Novo Parque</p></Link>
            <Link href={`tel:+552835281047`} className={styles.cardLink}><p>Vargem Alta</p></Link>
            <Link href={`tel:+552835291131`} className={styles.cardLink}><p>Itaipava</p></Link>
        </div>
    )
}