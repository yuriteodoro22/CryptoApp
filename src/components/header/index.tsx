import styles from './header.module.css'
import Logoimg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <div className={styles.container}>
          <Link to={'/'}>
          <img 
          src={Logoimg} 
          alt="Logo Cripto App" 
          />
          </Link>
        </div>
    )
}