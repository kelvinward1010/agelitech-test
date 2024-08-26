import { Logo } from "@/assets/svg";
import styles from "./Header.module.scss";
import { ButtonConfig } from "@/components/buttonconfig";
import { useNavigate } from "react-router-dom";
import { crudUrl, signinUrl } from "@/routes/urls";
import { Flex } from "antd";

function Header() {
    const navigate = useNavigate();
    const goSignIn = () => navigate(signinUrl);
    const goProfile = () => navigate(crudUrl);

    const user = true;

    return (
        <div className={styles.container}>
            <img src={Logo} alt="logo" />
            {!user ? (
                <ButtonConfig
                    className={styles.button}
                    lable={"Sign In"}
                    onClick={goSignIn}
                />
            ) : (
                <Flex gap={30} justify={"space-evenly"} align={"center"}>
                    <ButtonConfig
                        className={styles.button}
                        lable={"Profile"}
                        onClick={goProfile}
                    />
                    <ButtonConfig
                        className={styles.button}
                        lable={"Logout"}
                        onClick={goSignIn}
                    />
                </Flex>
            )}
        </div>
    );
}

export default Header;
