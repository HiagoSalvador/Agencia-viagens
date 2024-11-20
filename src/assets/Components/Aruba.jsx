import bandeira from '../imagens/bandeira-aruba.png'
import styles from './aruba.module.css'
import ComponenteProps from './ComponenteProps'



function Aruba(){
    return(
        <div className={styles.container}>
            <ComponenteProps
                lugar=" Aruba"
                texto="Aruba é uma ilha caribenha famosa por suas praias de areia branca e águas cristalinas. Localizada ao norte da Venezuela, é parte do Reino dos Países Baixos. A ilha tem uma rica história, inicialmente habitada pelos índios Arawak e colonizada pelos holandeses no século XVII.
                O turismo é a principal indústria de Aruba, com praias populares como Eagle Beach e Palm Beach, e atrações como o Parque Nacional Arikok. A capital, Oranjestad, é conhecida por sua arquitetura colorida e vibrante vida urbana.

                Além do turismo, a economia de Aruba inclui a refinaria de petróleo e a produção de aloe vera. A ilha celebra festivais animados, como o Carnaval de Aruba, e tem uma cultura diversa com influências africanas, europeias e indígenas. " 
                bandeira = {bandeira}/>
               
        </div>
    )
}

export default Aruba