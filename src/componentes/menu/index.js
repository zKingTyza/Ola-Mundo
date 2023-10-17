import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.css";
import MenuLink from "../MenuLinks";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/sobremim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
}
