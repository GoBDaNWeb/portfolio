import React from "react";
import styles from "./styles.module.sass";
import { Logo } from "@/components/ui/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
