import style from "../styles/Links.module.css"
import Link from "next/link"

export default function Links(){
    return(
        <div className={style.linkArea}>
            <p>Acesse os nossos principais links abaixo.</p>
            <Link href={`https://wa.me/5528999583392?text=Olá!%20Quero%20participar%20da%20lista%20de%20transmissão.%20`} className={style.cardLink}>
               <p>WhatsApp (Lista de Transmissão)</p> 
            </Link>
            <Link href={`https://t.me/frigolima`} className={style.cardLink}>
                <p>Telegram</p>
            </Link>
            <Link href={`https://forms.gle/cZCiLpQe5iCVgM8F9`} className={style.cardLink}>
                <p>Faça seu cartão Frigolima</p>
            </Link>
            <Link href={`http://acaps.org.br/super_rh`} className={style.cardLink}>
                <p>Trabalhe conosco</p>
            </Link>
            <Link href={`https://www.dropbox.com/s/4s8lsl6ypnx1uvi/Regulamento_sacolas_reutilizaveis__supermercado_frigolima.docx?dl=0`} className={style.cardLink}>
                Regulamento Sacolas Reutilizáveis.
            </Link>
        </div>
    )
}