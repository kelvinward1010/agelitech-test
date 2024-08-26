import { IPost } from "@/types";
import styles from "./Table.module.scss";

interface TableProps {
    title: string[];
    data: IPost[];
}

function Table({ title, data }: TableProps) {
    return (
        <div className={styles.container}>
            <table style={{ padding: "0 3px" }}>
                <thead>
                    <tr>
                        {title.map((i, idx) => {
                            return <th key={idx}>{i}</th>;
                        })}
                    </tr>
                </thead>
                <tbody className="tablebodymain">
                    {data?.map((user: IPost, idx) => (
                        <tr key={idx}>
                            <td>{user?.title}</td>
                            <td>{user?.first}</td>
                            <td>{user?.last}</td>
                            <td>{user?.fullname}</td>
                            <td>{user?.username}</td>
                            <td>
                                <img
                                    src={user.thumbnail}
                                    alt="img-icon"
                                    width={50}
                                    height={50}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
