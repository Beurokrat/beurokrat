// components/PaginationControls.tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./shadui/pagination";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const PaginationControls = ({ page, totalPages, setPage }: PaginationControlsProps) => {
  return (
    <>{totalPages > 0 && <Pagination>
      <PaginationContent className="cursor-pointer">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(Math.max(page - 1, 1))}
            className={page === 1 ? "hidden" : ""}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => setPage(i + 1)}
              isActive={page === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(Math.min(page + 1, totalPages))}
            className={page === totalPages ? "hidden" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>}
    </>
  );
};

export default PaginationControls;
