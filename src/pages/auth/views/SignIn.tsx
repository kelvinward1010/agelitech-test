import { Logo } from "@/assets/svg";
import styles from "./SignIn.module.scss";
import { Button, Form, Input, notification } from "antd";

type FieldType = {
    name?: string;
};

export function SignIn() {
    const onFinish = (values: FieldType) => {
        const data = {
            name: values.name,
        };
        console.log(data);
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not sign in. Please try again!`,
            description: ` ${errorInfo}`,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.main}>
                <div className={styles.center}>
                    <Form
                        name="signin"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 24 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout={"vertical"}
                    >
                        <Form.Item<FieldType> label="Email" name="name">
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 7, span: 24 }}>
                            <Button className={styles.button} htmlType="submit">
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
