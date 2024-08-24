import { Logo } from "@/assets/svg";
import styles from "./Header.module.scss";
import { ButtonConfig } from "@/components/buttonconfig";

function Header() {
    return (
        <div className={styles.container}>
            <img src={Logo} alt="logo" />
            <ButtonConfig lable={"Sign In"} />
        </div>
    );
}

export default Header;
