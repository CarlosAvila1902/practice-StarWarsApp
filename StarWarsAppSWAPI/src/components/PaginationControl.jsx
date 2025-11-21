function PaginationControls({handlePrev, handleNext, prevUrl, nextUrl}){
    return (
        <div className="pagination-controls btn-group my-3">
        <button className="btn btn-outline-warning" onClick={handlePrev} disabled={!prevUrl}>
          Anterior
        </button>
        <button className="btn btn-outline-warning" onClick={handleNext} disabled={!nextUrl}>
          Siguiente
        </button>
      </div>
    )
}

export default PaginationControls;