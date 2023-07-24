import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane, FaVk } from "react-icons/fa";

import styles from "./styles.module.sass";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="https://t.me/Gobdan1" target={"_blank"}>
        <FaTelegramPlane />
      </a>
      <a href="https://vk.com/bogduc" target={"_blank"}>
        <FaVk />
      </a>
      <a href="https://github.com/GoBDaNWeb" target={"_blank"}>
        <BsGithub />
      </a>
    </div>
  );
};

export default Navbar;
