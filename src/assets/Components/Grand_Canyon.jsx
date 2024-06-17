import styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imagens/bandeira_canyon.jpg'


function Grand_canyon() {
    return (
        <div className={styles.container}>
            <ComponenteProps
                lugar=" Grand Canyon"
                texto="O Grand Canyon, localizado no Arizona, EUA, é uma das maiores maravilhas naturais do mundo. Formado pelo Rio Colorado ao longo de milhões de anos, ele se estende por 446 quilômetros, com profundidades de até 1.857 metros. Suas camadas de rocha revelam cerca de dois bilhões de anos de história geológica.
                Culturalmente, o Grand Canyon é significativo para várias tribos indígenas, incluindo os Havasupai e Navajo. Tornou-se um Parque Nacional em 1919 e recebe milhões de visitantes anualmente, que participam de atividades como caminhadas, acampamentos e rafting.
                A conservação é uma prioridade para preservar seu ecossistema e beleza natural para as futuras gerações. " 
                bandeira = {bandeira}/>
        </div>
    )
}

export default Grand_canyon