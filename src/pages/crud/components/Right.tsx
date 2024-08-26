import { ButtonConfig } from "@/components/buttonconfig";
import styles from "./Right.module.scss";
import { Form, Input, Select } from "antd";
import Table from "./Table";

type FieldType = {
    title?: string;
    tags?: string;
};

function Right() {
    const titleInTable = ["ID", "Title", "Description", "Tags", "Actions"];

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <ButtonConfig className={styles.button} lable={"Add new"} />
                <Form
                    name="search"
                    initialValues={{ remember: true }}
                    layout={"vertical"}
                    className={styles.formSearch}
                >
                    <Form.Item<FieldType> name="title">
                        <Input width={200} placeholder="Title" />
                    </Form.Item>
                    <Form.Item<FieldType> name="tags">
                        <Select
                            style={{ width: "200px" }}
                            allowClear
                            options={[
                                {
                                    lable: "tags",
                                    value: "tags",
                                },
                            ]}
                            placeholder="Tags"
                        />
                    </Form.Item>
                </Form>
            </div>
            <Table title={titleInTable} data={[]} />
        </div>
    );
}

export default Right;
