import PaginationStyles from "../../modules/Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={PaginationStyles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${PaginationStyles.pageButton} ${
            currentPage === page ? PaginationStyles.active : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
