import styles from "./Panigation.module.scss";
import React from "react";
import { customConditionalFeedbackHigh } from "@/components/hoc/costom-feedback";
import { useSearchParams } from "react-router-dom";
import { ButtonConfig } from "@/components/buttonconfig";
import { IPost } from "@/types";
import Table from "./Table";

interface PaginationProps {
    data: IPost[];
    titleInTable: string[];
    isLoading?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
    data = [],
    titleInTable,
    isLoading = false,
}) => {
    const [pageParams, setPageParams] = useSearchParams();
    const totalPages = Math.ceil(100 / 10);
    const keysPages =
        Number(pageParams.get("pageNumber")) === 0
            ? 1
            : Number(pageParams.get("pageNumber"));

    const goToPage = (page: number) => {
        let currentPage = Math.max(1, Math.min(page, totalPages));
        pageParams.set("pageNumber", String(currentPage));
        setPageParams(pageParams);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        const startPage = Math.max(
            1,
            keysPages - Math.floor(maxPagesToShow / 2),
        );
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`${styles.numberinlist} ${keysPages === i ? styles.activenumberinlist : styles.notactivenumberinlist}`}
                >
                    {i}
                </button>,
            );
        }

        if (startPage > 1) {
            pageNumbers.unshift(<span key="start-ellipsis">...</span>);
        }
        if (endPage < totalPages) {
            pageNumbers.push(<span key="end-ellipsis">...</span>);
        }

        return pageNumbers;
    };

    const BaseList = () => {
        return <Table data={data} title={titleInTable} />;
    };

    const draftData = {
        isLoading: isLoading,
        data: data,
    };
    const ListPost = customConditionalFeedbackHigh()(BaseList);

    return (
        <div>
            <ListPost data={draftData} />
            <div className={styles.panigationcontainer}>
                <ButtonConfig
                    onClick={() => goToPage(keysPages - 1)}
                    className="cursor-pointer"
                    disabled={keysPages === 1}
                    lable="Previous"
                />
                {renderPageNumbers()}
                <ButtonConfig
                    onClick={() => goToPage(keysPages + 1)}
                    className="cursor-pointer"
                    disabled={keysPages === totalPages}
                    lable="Next"
                />
                ||
                <h4>Pages: {keysPages}/10</h4>
            </div>
        </div>
    );
};
