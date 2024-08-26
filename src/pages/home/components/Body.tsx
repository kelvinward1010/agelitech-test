import { Typography } from "antd";
import styles from "./Body.module.scss";
import { ButtonConfig } from "@/components/buttonconfig";
import { Image1 } from "@/assets/png";

const { Title, Text } = Typography;

function Body() {
    return (
        <div className={styles.container}>
            <div className={styles.headbody}>
                <div className={styles.leftheadbody}>
                    <Title className={styles.titleMainInHeadBody} level={2}>
                        Save your data storage here.
                    </Title>
                    <Text className={styles.textMainInHeadBody}>
                        Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.
                    </Text>
                    <ButtonConfig
                        className={styles.button}
                        lable={"Learn more"}
                    />
                </div>
                <div className={styles.rightheadbody}>
                    <img className={styles.img1} src={Image1} alt="img" />
                </div>
            </div>

            <div className={styles.mainbody}>
                <div className={styles.headmainbody}>
                    <Title>Features</Title>
                    <Text>
                        Some of the features and advantages that we provide for
                        those of you who store data in this Data Warehouse.
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default Body;
