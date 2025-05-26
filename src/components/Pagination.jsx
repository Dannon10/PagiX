import { Button } from "antd";

const Pagination = (props) => {
  const {
    usersPerPage,
    totalUsers,
    currentPage,
    paginate,
    prevPage,
    nextPage,
  } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className="pagination">
        {currentPage !== 1 && (
          <li>
            <Button className="move" onClick={() => prevPage()}> Prev</Button>
          </li>
        )}
        {pageNumbers.map((num) => (
          <li className={`page ${currentPage === num ? "page-active" : ""}`} key={num}>
            <a  className="paginate" onClick={() => paginate(num)}>{num}</a>
          </li>
        ))}
        {pageNumbers.length !== currentPage && (
          <li>
            <Button className="move" onClick={() => nextPage()}>Next</Button>
          </li>
        )}
      </div>
  );
};

export default Pagination;
