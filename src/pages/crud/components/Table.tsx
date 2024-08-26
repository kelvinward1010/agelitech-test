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
                    <tr className="border border-teal-600 text-center bg-teal-700">
                        {title.map((i, idx) => {
                            return (
                                <th
                                    key={idx}
                                    className="border font-medium border-teal-600 px-8 text-white"
                                >
                                    {i}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="tablebodymain">
                    {data?.map((user: IPost, idx) => (
                        <tr
                            key={idx}
                            className="border border-teal-600 text-left"
                        >
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.title}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.first}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.last}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.fullname}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.username}
                            </td>
                            <td className="flex justify-center border w-auto border-teal-600 p-1">
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
