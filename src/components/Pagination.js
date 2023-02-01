import React from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

const PaginationComponent = ({currentPage, setCurrentPage, productsPerPage, totalProducts}) => {
    const pageNumbers = [];
    for ( let i=1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination arial-label="Page navigation example">
            {pageNumbers.map((number) => (
                <PaginationItem key={number} active={number === currentPage}>
                    <PaginationLink onClick={() => setCurrentPage(number)}>
                        {number}
                    </PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    );
};

export default PaginationComponent;