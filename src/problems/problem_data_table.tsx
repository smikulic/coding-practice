import { useEffect, useState } from "react";
import users from "../data/users";

export function DataTable() {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const totalNumber = users.length;

  const initialPage = [...users].slice(0, pageSize);
  const [paginatedUsers, setPaginatedUsers] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalNumber / pageSize)
  );

  useEffect(() => {
    const initialPage = [...users].slice(0, pageSize);
    setPaginatedUsers(initialPage);

    setTotalPages(Math.ceil(totalNumber / pageSize));
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const startPage = page - 1;
    const endPage = page;
    const updatedPaginatedUsers = [...users].slice(
      pageSize * startPage,
      pageSize * endPage
    );

    setPaginatedUsers(updatedPaginatedUsers);
  }, [page]);

  const handlePreviousPage = () => {
    const previousPage = page - 1;
    setPage(previousPage);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const handlePageSize = (e) => {
    setPageSize(e.target?.value);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
        <select value={pageSize} onChange={handlePageSize}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </table>
    </div>
  );
}
