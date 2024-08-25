import { Logo } from "@/assets/svg";
import styles from "./Header.module.scss";
import { ButtonConfig } from "@/components/buttonconfig";
import { useNavigate } from "react-router-dom";
import { signinUrl } from "@/routes/urls";

function Header() {
    const navigate = useNavigate();

    const goSignIn = () => navigate(signinUrl);
    return (
        <div className={styles.container}>
            <img src={Logo} alt="logo" />
            <ButtonConfig lable={"Sign In"} onClick={goSignIn} />
        </div>
    );
}

export default Header;
