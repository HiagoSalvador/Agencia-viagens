import bandeira from '../imagens/bandeira_china.webp'
import styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps'

function Muralhas_China(){
    return(
        <div className={styles.container}>
            <ComponenteProps
                lugar=" Muralha da China"
                texto="A Muralha da China, também conhecida como Grande Muralha, é uma das estruturas mais icônicas e impressionantes do mundo. Construída ao longo de várias dinastias chinesas, sua construção começou no século III a.C., durante o reinado do primeiro imperador da China, Qin Shi Huang. A muralha foi expandida e reforçada por dinastias posteriores, incluindo a Han e a Ming.
                Estendendo-se por aproximadamente 21.196 quilômetros, a Muralha da China foi originalmente erguida para proteger o império chinês de invasões e ataques de tribos nômades do norte. Feita de terra compactada, pedras e tijolos, a muralha atravessa montanhas, desertos e planícies, incorporando torres de vigilância e fortes ao longo de sua extensão.

                Hoje, a Muralha da China é um símbolo de engenharia e determinação humana, além de ser uma importante atração turística que atrai milhões de visitantes de todo o mundo. Em 1987, foi declarada Patrimônio Mundial pela UNESCO, reconhecendo seu valor histórico e cultural. " 
                bandeira = {bandeira}/>
        </div>
    )
}

export default Muralhas_China