import { Link } from 'react-router-dom'
import styles from './header.module.css'
import logo from '../imagens/imagem (7).jfif'
import lupa from '../imagens/lupa.png'

function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <nav className={styles.nav_link}>
            <ul>
                <li>
                <Link Link to='/'> Home </Link>
                </li>

                <li>
                <Link Link to='/Escocia'> Escocia </Link>
                </li>

                <li>
                <Link Link to='/GrandCanyon'> GrandCanyon </Link>
                </li>

                <li>
                <Link Link to='/Muralha'> Muralha da China </Link>
                </li>

                <li>
                <Link Link to='/Kathmandu'> Kathmandu </Link>
                </li>

                <li>
                <Link Link to='/Aruba'> Aruba </Link>
                </li>
                

            </ul>
            </nav>

            <div className={styles.search}>
                <input type="search"  placeholder='Busque por viagens'/>
               <img src={lupa} alt="" className={styles.lupa} />
            </div>
        </header>
    )
}

export default Header