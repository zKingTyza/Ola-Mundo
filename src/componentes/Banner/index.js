import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas a minha Single Page Aplication! Eu sou Alex Zaleski, aluno
          de Front-end da Alura. Aqui compartilho vários conhecimentos, e um
          deles é o react router :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto alex" />
      </div>
    </div>
  );
}
