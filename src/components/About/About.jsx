import styles from './About.module.css'
import { GiBookshelf } from "react-icons/gi";
import { LiaSkatingSolid } from "react-icons/lia";
import { GiDiceTwentyFacesOne } from "react-icons/gi";
import { GiGameConsole } from "react-icons/gi";
import { useState } from 'react';


export default function About() {

  const [showReading, setSshowReading] = useState(false)
  const [showSkating, setShowSkating] = useState(false)
  const [showRpg, setShowRpg] = useState(false)
  const [showGame, setShowGame] = useState(false)

  function toggleReading() {
    setSshowReading(!showReading) 
  }

  function toggleSkating() {
    setShowSkating(!showSkating) 
  }

  function toggleRpg() {
    setShowRpg(!showRpg) 
  }

  function toggleGame() {
    setShowGame(!showGame) 
  }

  return (
      <div className={styles.about}>

        <div className={styles.about__content}>
          <h3 className={styles.subtitle}>Sobre Mim</h3>
          <p>Nos últimos anos, tenho concentrado meus estudos em programação, aprendendo sobre linguagens como Python e C# por meio de cursos e bootcamps online. Atualmente, estou me especializando em front-end pelo programa ONE - Oracle Next Education na plataforma Alura. Tenho o objetivo de direcionar minhas experiências e habilidades para o campo da Tecnologia da Informação e estou motivado a evoluir e me tornar um profissional completo. Pretendo utilizar meu aprendizado para desenvolver aplicações inovadoras que não só aprimorem o cenário tecnológico atual, mas também impulsionem meu crescimento pessoal e profissional</p>
        </div>

        <div className={styles.hobbie__content}>
          <h3 className={styles.subtitle}>Meus hobbies</h3>
          <div className={styles.container}>
            <div className={styles.container__box} onClick={toggleReading}>
              <GiBookshelf className={styles.icon} />
              <div className={styles.description__box}>
                <blockquote cite='George R.R. Martin, autor de "A Song of Ice and Fire"'>&quot;A reader lives a thousand lives before he dies. The man who never reads lives only one.&quot; - George R.R. Martin</blockquote>
                <p className={showReading === true ? styles.paragraph : styles.paragraph__deactive}>Ler é como desvendar um universo, viagens épicas, culturas novas, historias emocionantes, tudo sem sair de casa. Ler enriquece vocabulário, aguça criatividade e melhora comunicação. Mais que lazer, a leitura é a chave para o conhecimento e um mundo mais rico. </p>
              </div>
            </div>
            <div className={styles.container__box} onClick={toggleRpg}>
              <GiDiceTwentyFacesOne className={styles.icon}  />
              <div className={styles.description__box}>
                <blockquote cite='Shanna Germain, co-criadora de Numenera'>&quot;At their heart, RPGs are about finding your tribe and sharing stories. They&apos;re about connecting with people through imagination and play.&quot; - Shanna Germain</blockquote>
                <p className={showRpg === true ? styles.paragraph : styles.paragraph__deactive}>Em um mundo de pixels e telas, o RPG de mesa se destaca como uma aventura analógica. Mais do que um simples jogo, é uma experiência imersiva que nos faz explorar nossa criatividade, resolução de problemas e comunicação em equipe. Através da imaginação e da colaboração, construímos histórias épicas, encarnamos personagens únicos e vivenciamos desafios emocionantes.</p>
              </div>
            </div>
            <div className={styles.container__box} onClick={toggleSkating}>
              <LiaSkatingSolid className={styles.icon}  />
              <div className={styles.description__box}>
                <blockquote cite='Michelle Kwan, patinadora artística americana'>&quot;To me, skating is so much more than just the technical. It&apos;s about creating an experience and making people feel something.&quot; - Michelle Kwan</blockquote>
                <p className={showSkating === true ? styles.paragraph : styles.paragraph__deactive}>Patinar é mais do que um simples meio de transporte ou atividade física. É uma forma de arte, um esporte, uma brincadeira que nos conecta com a infância e nos deixa explorar o mundo de uma maneira diferente, desafiando a gravidade e nos conectando com o ritmo acelerado da cidade.</p>
              </div>
            </div>
            <div className={styles.container__box} onClick={toggleGame}>
              <GiGameConsole className={styles.icon}  />
              <div className={styles.description__box}>
                <blockquote cite='Shigeru Miyamoto, criador de Mario e The Legend of Zelda'>&quot;Video games are bad for you? That&apos;s what they said about rock &apos;n&apos; roll.&quot; - Shigeru Miyamoto</blockquote>
                <p className={showGame === true ? styles.paragraph : styles.paragraph__deactive}>O videogame, surgido na década de 70, evoluiu de  simples gráficos 2D para experiências imersivas, narrativas complexas e graficos beirando o realismo. Além de diversão, eles oferecem diversos benefícios cognitivos, como desenvolvimento de habilidades de resolução de problemas e coordenação motora. Eles são simbolos da cultura pop e da inovação tecnológica nos dias de hoje.</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
  )
}