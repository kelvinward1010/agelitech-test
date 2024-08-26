import { Logo } from "@/assets/svg";
import styles from "./Left.module.scss";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { crudUrl, layoutUrl } from "@/routes/urls";

const { Text } = Typography;

function Left() {
    const navigate = useNavigate();
    const goPosts = () => navigate(crudUrl);
    const handleLogout = () => {
        navigate(layoutUrl);
    };

    return (
        <div className={styles.container}>
            <img
                onClick={() => navigate(layoutUrl)}
                src={Logo}
                className={styles.logo}
                alt="logo"
            />
            <div className={styles.nav}>
                <Text onClick={goPosts} className={styles.navtext}>
                    Posts
                </Text>
                <br />
                <Text onClick={handleLogout} className={styles.navtext}>
                    Logout
                </Text>
            </div>
        </div>
    );
}

export default Left;
