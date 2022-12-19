import styles from "../styles/Logo.module.css"
import Image from "next/image";

export default function Logo(){
    return(<Image alt="frigolima-supermercados" src={`/logo.png`} width={100} height={100}/>)
}