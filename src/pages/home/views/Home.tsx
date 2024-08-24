import styles from "./Home.module.scss";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
}
