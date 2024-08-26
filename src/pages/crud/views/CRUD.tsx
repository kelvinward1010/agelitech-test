import Left from "../components/Left";
import Right from "../components/Right";
import styles from "./CRUD.module.scss";

export function CRUD() {
    return (
        <div className={styles.container}>
            <Left />
            <Right />
        </div>
    );
}
