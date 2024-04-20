import { PaginationLeftArrow, PaginationRightArrow } from "../SVG";

interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const PaginationComponent = (props: IPagination) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePrevClick = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const visiblePageCount = 5;
    const pageNumbers: number[] = [];

    if (totalPages <= visiblePageCount) {
      pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      const firstPage = 1;
      const lastPage = totalPages;

      const midPageCount = visiblePageCount - 2;
      const step = Math.floor(midPageCount / 2);

      pageNumbers.push(firstPage);

      if (currentPage < firstPage + step) {
        pageNumbers.push(
          ...Array.from(
            { length: Math.min(midPageCount, totalPages) },
            (_, i) => firstPage + i + 1,
          ),
        );
      } else if (currentPage > lastPage - step) {
        pageNumbers.push(
          ...Array.from(
            { length: Math.min(midPageCount, totalPages) },
            (_, i) => lastPage - midPageCount + i,
          ),
        );
      } else {
        const start = currentPage - step;
        const end = currentPage + step;
        pageNumbers.push(
          ...Array.from({ length: midPageCount }, (_, i) => start + i + 1),
        );
      }
      pageNumbers.push(lastPage);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex mt-6 mx-auto w-fit">
      <ul id="pagination" className="flex items-center gap-1">
        <li>
          <button
            className={`p-2 ${currentPage === 0 && "cursor-not-allowed"}`}
            onClick={handlePrevClick}
            disabled={currentPage === 0}
          >
            <PaginationLeftArrow
              color={currentPage === 0 ? "grey" : "#0D2548"}
            />
          </button>
        </li>
        <div className="flex w-full items-center justify-center gap-1 md:gap-5">
          {pageNumbers.map((pageNumber) => (
            <li
              onClick={() => onPageChange(pageNumber)}
              key={pageNumber}
              className={`min-w-[39px] p-2 flex justify-center rounded-tl-[10px] rounded-br-[10px]
               ${pageNumber === currentPage ? "active bg-core-lightBlue text-white" : "border border-core-blue"}`}
            >
              <button>{pageNumber}</button>
            </li>
          ))}
        </div>
        <li>
          <button
            className={`text-sm md:text-md p-2 rounded-md text-white ${
              currentPage === totalPages && "disabled cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            <PaginationRightArrow
              color={currentPage === totalPages ? "grey" : "#0D2548"}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};
