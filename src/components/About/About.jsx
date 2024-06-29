import styles from './About.module.css'
import { GiBookshelf } from "react-icons/gi";
import { LiaSkatingSolid } from "react-icons/lia";
import { GiDiceTwentyFacesOne } from "react-icons/gi";
import { GiGameConsole } from "react-icons/gi";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";


export default function About() {

  const [showReading, setShowReading] = useState(false)
  const [showSkating, setShowSkating] = useState(false)
  const [showRpg, setShowRpg] = useState(false)
  const [showGame, setShowGame] = useState(false)

  const [showCardOne, setShowcardOne] = useState(false)
  const [showCardTwo, setShowcardTwo] = useState(false)
  const [showCardThree, setShowcardThree] = useState(false)
  const [showCardFour, setShowcardFour] = useState(false)


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
          <div className={styles.about__container}>
            <p className={styles.text}>
              Nos últimos anos, me dediquei ao mundo da tecnologia, me aventurando em linguagens de programação como Python e C# através de cursos e bootcamps online e atualmente estou me especializando em front-end pelo programa ONE - Oracle Next Education na plataforma Alura. Meu objetivo é direcionar minhas experiências e habilidades para a área de Tecnologia da Informação. Sou movido por um desejo constante de evolução, buscando me tornar um profissional completo e atuante no mercado.
              Pretendo utilizar meu aprendizado para criar aplicações inovadoras que contribuam para o aprimoramento do cenário tecnológico atual. Acredito que essa jornada me impulsionará não apenas no meu crescimento profissional, mas também no meu desenvolvimento pessoal.
            </p>
            <h4 className={styles.about__subtitle}>Conheça algumas das minhas melhores características:</h4>
            <div className={styles.pizza}>
              <div className={styles.pizzaSlice_one} onMouseOver={() => setShowcardOne(true)} onMouseOut={() => setShowcardOne(false)}>
                <h4 className={showCardOne === true ? styles.card_deactive : styles.text_one}>Passion</h4>
              </div>
              <div className={showCardOne === true ? styles.card_one : styles.card_deactive} >
                <p className={styles.card_text}>
                  <span className={styles.text__highlight}>Apaixonado por tecnologia:</span> <br />A busca por conhecimento e inovação me motiva a explorar novos horizontes dentro da área. 
                </p>
              </div>

              <div className={styles.pizzaSlice_two} onMouseOver={() => setShowcardTwo(true)} onMouseOut={() => setShowcardTwo(false)}>
                <h4 className={showCardTwo === true ? styles.card_deactive : styles.text_two}>Self-taught</h4>
              </div>
              <div className={showCardTwo === true ? styles.card_two : styles.card_deactive} >
                <p className={styles.card_text}><span className={styles.text__highlight}>Autodidata:</span> Acredito no poder do aprendizado contínuo e me dedico a buscar novas habilidades por meio de cursos e bootcamps online.</p>
              </div>

              <div className={styles.pizzaSlice_three} onMouseOver={() => setShowcardThree(true)} onMouseOut={() => setShowcardThree(false)}>
                <h4 className={showCardThree === true ? styles.card_deactive : styles.text_three}>Motivation</h4>
              </div>
              <div className={showCardThree === true ? styles.card_three : styles.card_deactive} >
                <p className={styles.card_text}><span className={styles.text__highlight}>Motivado:</span> Enfrento desafios com entusiasmo e trabalho duro para alcançar meus objetivos.</p>  
              </div>

              <div className={styles.pizzaSlice_four} onMouseOver={() => setShowcardFour(true)} onMouseOut={() => setShowcardFour(false)}>
                <h4 className={showCardFour === true ? styles.card_deactive : styles.text_four}>Creative</h4>
              </div>
              <div className={showCardFour === true ? styles.card_four : styles.card_deactive} >
                <p className={styles.card_text}><span className={styles.text__highlight}>Criativo:</span> Busco soluções inovadoras e fora da caixa para os problemas que encontro.</p>
              </div>
            </div>

            <p className={styles.text}>
              Se você busca um profissional dedicado, apaixonado por tecnologia e com sede de conhecimento, entre em contato comigo!
            </p> 
          </div>
          <Link to="/contact" className={styles.link__btn}>
              <IoMdMail />
              Contact
          </Link>
        </div>

        <div className={styles.hobbies__content}>
          <h3 className={styles.subtitle}>Meus hobbies</h3>
          <div className={styles.hobbies__container}>
            <div className={styles.container__box} onMouseOver={() => setShowReading(true)} onMouseOut={() => setShowReading(false)}>
              <GiBookshelf className={styles.icon} />
              <div className={styles.description__box}>
                <blockquote cite='George R.R. Martin, autor de "A Song of Ice and Fire"'>&quot;A reader lives a thousand lives before he dies. The man who never reads lives only one.&quot; - George R.R. Martin</blockquote>
                <p className={styles.ellipsis}>...</p>
                <p className={showReading === true ? styles.paragraph : styles.paragraph__deactive}>Ler é como desvendar um universo, viagens épicas, culturas novas, historias emocionantes, tudo sem sair de casa. Ler enriquece vocabulário, aguça criatividade e melhora comunicação. Mais que lazer, a leitura é a chave para o conhecimento e um mundo mais rico. </p>
              </div>
            </div>
            <div className={styles.container__box} onMouseOver={() => setShowRpg(true)} onMouseOut={() => setShowRpg(false)}>
              <GiDiceTwentyFacesOne className={styles.icon}  />
              <div className={styles.description__box}>
                <blockquote cite='Shanna Germain, co-criadora de Numenera'>&quot;At their heart, RPGs are about finding your tribe and sharing stories. They&apos;re about connecting with people through imagination and play.&quot; - Shanna Germain</blockquote>
                <p className={styles.ellipsis}>...</p>
                <p className={showRpg === true ? styles.paragraph : styles.paragraph__deactive}>Em um mundo de pixels e telas, o RPG de mesa se destaca como uma aventura analógica. Mais do que um simples jogo, é uma experiência imersiva que nos faz explorar nossa criatividade, resolução de problemas e comunicação em equipe. Através da imaginação e da colaboração, construímos histórias épicas, encarnamos personagens únicos e vivenciamos desafios emocionantes.</p>
              </div>
            </div>
            <div className={styles.container__box} onMouseOver={() => setShowSkating(true)} onMouseOut={() => setShowSkating(false)}>
              <LiaSkatingSolid className={styles.icon}  />
              <div className={styles.description__box}>
                <blockquote cite='Michelle Kwan, patinadora artística americana'>&quot;To me, skating is so much more than just the technical. It&apos;s about creating an experience and making people feel something.&quot; - Michelle Kwan</blockquote>
                <p className={styles.ellipsis}>...</p>
                <p className={showSkating === true ? styles.paragraph : styles.paragraph__deactive}>Patinar é mais do que um simples meio de transporte ou atividade física. É uma forma de arte, um esporte, uma brincadeira que nos conecta com a infância e nos deixa explorar o mundo de uma maneira diferente, desafiando a gravidade e nos conectando com o ritmo acelerado da cidade.</p>
              </div>
            </div>
            <div className={styles.container__box} onMouseOver={() => setShowGame(true)} onMouseOut={() => setShowGame(false)}>
              <GiGameConsole className={styles.icon}  />
              <div className={styles.description__box}>
                <blockquote cite='Shigeru Miyamoto, criador de Mario e The Legend of Zelda'>&quot;Video games are bad for you? That&apos;s what they said about rock &apos;n&apos; roll.&quot; - Shigeru Miyamoto</blockquote>
                <p className={styles.ellipsis}>...</p>
                <p className={showGame === true ? styles.paragraph : styles.paragraph__deactive}>O videogame, surgido na década de 70, evoluiu de  simples gráficos 2D para experiências imersivas, narrativas complexas e graficos beirando o realismo. Além de diversão, eles oferecem diversos benefícios cognitivos, como desenvolvimento de habilidades de resolução de problemas e coordenação motora. Eles são simbolos da cultura pop e da inovação tecnológica nos dias de hoje.</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
  )
}