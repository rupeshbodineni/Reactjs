export default function Pagination({ page, total, perPage, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  return (
    <div className="pagination-bar">
      <button className="btn btn-outline" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button className="btn btn-outline" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </div>
  );
}
