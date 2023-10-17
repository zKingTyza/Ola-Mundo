import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Alex!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do alex"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit
        scelerisque mauris pellentesque pulvinar pellentesque. Suspendisse
        interdum consectetur libero id faucibus nisl tincidunt eget nullam.
        Massa ultricies mi quis hendrerit dolor magna. Purus ut faucibus
        pulvinar elementum. Suspendisse ultrices gravida dictum fusce ut
        placerat orci nulla pellentesque. Ac felis donec et odio. Mi bibendum
        neque egestas congue quisque egestas. Turpis egestas maecenas pharetra
        convallis posuere morbi leo. Arcu bibendum at varius vel pharetra vel.
        Neque convallis a cras semper auctor neque vitae tempus.
      </p>

      <p className={styles.paragrafo}>
        Enim nunc faucibus a pellentesque sit amet porttitor. Aliquam ut
        porttitor leo a diam. Laoreet suspendisse interdum consectetur libero id
        faucibus. Porttitor eget dolor morbi non arcu risus quis. Arcu cursus
        euismod quis viverra. Lectus urna duis convallis convallis tellus id
        interdum. Ultricies tristique nulla aliquet enim tortor. Mi eget mauris
        pharetra et ultrices neque ornare. In mollis nunc sed id semper risus in
        hendrerit gravida. Sodales neque sodales ut etiam sit amet nisl purus
        in.
      </p>

      <p className={styles.paragrafo}>
        Sagittis nisl rhoncus mattis rhoncus urna neque. Condimentum id
        venenatis a condimentum. Elit scelerisque mauris pellentesque pulvinar
        pellentesque habitant morbi tristique senectus. Ac felis donec et odio
        pellentesque. Tortor posuere ac ut consequat semper viverra. Interdum
        posuere lorem ipsum dolor sit. Id semper risus in hendrerit gravida.
        Eget dolor morbi non arcu risus quis varius quam. Feugiat pretium nibh
        ipsum consequat nisl vel. Non odio euismod lacinia at quis risus sed
        vulputate. Parturient montes nascetur ridiculus mus mauris vitae. Diam
        quis enim lobortis scelerisque fermentum. Viverra mauris in aliquam sem
        fringilla ut morbi tincidunt augue.
      </p>

      <p className={styles.paragrafo}>
        In vitae turpis massa sed elementum tempus egestas sed sed. Tellus cras
        adipiscing enim eu turpis egestas pretium aenean pharetra. Sit amet nisl
        suscipit adipiscing bibendum. Nulla porttitor massa id neque. Turpis in
        eu mi bibendum neque egestas congue quisque. Leo urna molestie at
        elementum eu facilisis. Suscipit adipiscing bibendum est ultricies
        integer quis. Dignissim convallis aenean et tortor at risus viverra
        adipiscing. Donec adipiscing tristique risus nec feugiat in fermentum
        posuere urna. Est sit amet facilisis magna etiam tempor orci eu. Ornare
        lectus sit amet est placerat in egestas. Posuere morbi leo urna molestie
        at elementum eu facilisis sed. Faucibus a pellentesque sit amet. Neque
        volutpat ac tincidunt vitae semper quis lectus. Aliquet lectus proin
        nibh nisl. Vitae justo eget magna fermentum iaculis eu non diam
        phasellus. Fermentum et sollicitudin ac orci phasellus egestas.
      </p>

      <p className={styles.paragrafo}>
        it amet nisl purus in. In arcu cursus euismod quis. Cursus turpis massa
        tincidunt dui ut ornare lectus sit. Volutpat ac tincidunt vitae semper
        quis lectus nulla at. Iaculis nunc sed augue lacus viverra vitae congue
        eu consequat. Ac felis donec et odio pellentesque. Dolor sit amet
        consectetur adipiscing elit. Phasellus egestas tellus rutrum tellus
        pellentesque eu tincidunt tortor aliquam. Nibh tellus molestie nunc non
        blandit massa enim nec dui. Scelerisque in dictum non consectetur.
        Bibendum ut tristique et egestas quis ipsum suspendisse. Nunc eget lorem
        dolor sed viverra ipsum nunc. Interdum posuere lorem ipsum dolor sit
        amet consectetur adipiscing elit.
      </p>

      <p className={styles.paragrafo}>
        it amet nisl purus in. In arcu cursus euismod quis. Cursus turpis massa
        tincidunt dui ut ornare lectus sit. Volutpat ac tincidunt vitae semper
        quis lectus nulla at. Iaculis nunc sed augue lacus viverra vitae congue
        eu consequat. Ac felis donec et odio pellentesque. Dolor sit amet
        consectetur adipiscing elit. Phasellus egestas tellus rutrum tellus
        pellentesque eu tincidunt tortor aliquam. Nibh tellus molestie nunc non
        blandit massa enim nec dui. Scelerisque in dictum non consectetur.
        Bibendum ut tristique et egestas quis ipsum suspendisse. Nunc eget lorem
        dolor sed viverra ipsum nunc. Interdum posuere lorem ipsum dolor sit
        amet consectetur adipiscing elit.
      </p>
    </PostModelo>
  );
}
