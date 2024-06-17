import bandeira from '../imagens/bandeira_kathmandu.png'
import styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps'
Katimandu.jsx


function Katimandu (){
    return(
        <div className={styles.container}>
            <ComponenteProps
                lugar=" Kathmandu"
                texto="Kathmandu, a capital do Nepal, é uma cidade rica em história e cultura. Fundada há mais de dois milênios, prosperou como um importante ponto de comércio entre a Índia e o Tibete. Conhecida por sua arquitetura histórica, Kathmandu abriga a Durbar Square, um Patrimônio Mundial da UNESCO, com palácios e templos antigos.
               A cidade também é famosa por seus templos religiosos, como Swayambhunath (Templo dos Macacos) e Pashupatinath, um dos mais sagrados templos hindus dedicados a Shiva.

               Hoje, Kathmandu é um centro vibrante e multicultural, com uma mistura de tradições antigas e modernidade. Thamel, um bairro turístico, é conhecido por suas lojas e restaurantes. A cidade é a principal porta de entrada para o turismo de aventura no Himalaia. Apesar dos desafios, incluindo a reconstrução após o terremoto de 2015, Kathmandu continua a ser um destino fascinante e vital para o Nepal. " 
                bandeira = {bandeira}/>
        </div>
    )
}

export default Katimandu