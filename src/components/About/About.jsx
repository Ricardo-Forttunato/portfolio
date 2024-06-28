import styles from './About.module.css'
import { GiBookshelf } from "react-icons/gi";
import { LiaSkatingSolid } from "react-icons/lia";
import { GiDiceTwentyFacesOne } from "react-icons/gi";


export default function About() {
  return (
      <div className={styles.about}>
        <div className={styles.about__content}>
          <h3>About me</h3>
          <p>Nos últimos anos, tenho concentrado meus estudos em programação, aprendendo sobre linguagens como Python e C# por meio de cursos e bootcamps online. Atualmente, estou me especializando em front-end pelo programa ONE - Oracle Next Education na plataforma Alura. Tenho o objetivo de direcionar minhas experiências e habilidades para o campo da Tecnologia da Informação e estou motivado a evoluir e me tornar um profissional completo. Pretendo utilizar meu aprendizado para desenvolver aplicações inovadoras que não só aprimorem o cenário tecnológico atual, mas também impulsionem meu crescimento pessoal e profissional</p>
        </div>
        <div className={styles.hobbie__content}>
          <h3>Meus hobbies</h3>

          <div className={styles.container}>
            <div className={styles.container__box}>
              <GiBookshelf className={styles.icon}/>
              <p className={styles.paragraph}>Ler é como desvendar um universo, viagens épicas, culturas novas, historias emocionantes, tudo sem sair de casa. Ler enriquece vocabulário, aguça criatividade e melhora comunicação. Mais que lazer, a leitura é a chave para o conhecimento e um mundo mais rico. <br />
                <blockquote>&quot;Os livros são meus melhores amigos; eles me fazem companhia sem serem chatos, e me instruem sem serem arrogantes&quot;<br /><span>Richard Steele</span></blockquote> 
              </p>
            </div>
            <div className={styles.container__box}>
              <LiaSkatingSolid className={styles.icon}/>
              <p className={styles.paragraph}>Patinar é mais do que um simples meio de transporte ou atividade física. É uma forma de arte, um esporte, uma brincadeira que nos conecta com a infância e nos convida a explorar o mundo de uma maneira diferente, desafiando a gravidade e nos conectando com o ritmo da cidade ou com a tranquilidade da natureza.</p>
            </div>
            <div className={styles.container__box}>
              <GiDiceTwentyFacesOne className={styles.icon}/>
              <p className={styles.paragraph}>Em um mundo de pixels e telas, o RPG de mesa e jogos de tabuleiro se destacam como uma aventura analógica. Mais do que um simples jogo, é uma experiência imersiva que convida a explorar a criatividade, a resolução de problemas e a comunicação em equipe. Através da imaginação e da colaboração, jogadores constroem histórias épicas, encarnam personagens únicos e vivenciam desafios emocionantes.
              </p>
            </div>
            <div className={styles.container__box}>
              <GiDiceTwentyFacesOne className={styles.icon}/>
              <p className={styles.paragraph}>Em um mundo de pixels e telas, o RPG de mesa e jogos de tabuleiro se destacam como uma aventura analógica. Mais do que um simples jogo, é uma experiência imersiva que convida a explorar a criatividade, a resolução de problemas e a comunicação em equipe. Através da imaginação e da colaboração, jogadores constroem histórias épicas, encarnam personagens únicos e vivenciam desafios emocionantes.
              </p>
            </div>
            <div className={styles.container__box}>
              <GiDiceTwentyFacesOne className={styles.icon}/>
              <p className={styles.paragraph}>Em um mundo de pixels e telas, o RPG de mesa e jogos de tabuleiro se destacam como uma aventura analógica. Mais do que um simples jogo, é uma experiência imersiva que convida a explorar a criatividade, a resolução de problemas e a comunicação em equipe. Através da imaginação e da colaboração, jogadores constroem histórias épicas, encarnam personagens únicos e vivenciam desafios emocionantes.
              </p>
            </div>
          </div>
          
        </div>
      </div>
  )
}