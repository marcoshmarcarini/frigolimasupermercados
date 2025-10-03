import style from "../styles/Links.module.css"
import Link from "next/link"

export default function Links() {
    return (
        <div className={style.linkArea}>
            <p className={style.title}>Acesse os nossos principais links abaixo.</p>
            <Link href={`https://wa.me/5528999910448?text=Olá!%20Quero%20participar%20da%20lista%20de%20transmissão.%20`} className={style.cardLink}>
                <p>WhatsApp (Lista de Transmissão)</p>
            </Link>
            <Link href={`https://t.me/frigolima`} className={style.cardLink}>
                <p>Telegram</p>
            </Link>
            <Link href={`https://triban.co/HwTBI`} className={style.cardLink}>
                <p>Faça seu cartão Frigolima</p>
            </Link>
            <Link href={`https://frigolimasupermercados.vagas.solides.com.br/`} className={style.cardLink}>
                <p>Trabalhe conosco</p>
            </Link>
            <Link href={`https://www.dropbox.com/s/4s8lsl6ypnx1uvi/Regulamento_sacolas_reutilizaveis__supermercado_frigolima.docx?dl=0`} className={style.cardLink}>
                Regulamento Sacolas Reutilizáveis.
            </Link>
            <Link href={`https://wa.me/5528999063148?text=Olá!%20Quero%20me%20candidatar%20a%20vaga%20.%20`} className={style.cardLink}>
                <p>Vaga Gerente - Itaipava</p>
            </Link>
        </div>
    )
}
