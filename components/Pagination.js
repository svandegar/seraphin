import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-70" disabled={!prevPage}>
            Précédent
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button rel="previous">Précédent</button>
          </Link>
        )}
        <span>
          {currentPage} de {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Suivant
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next">Suivant</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
