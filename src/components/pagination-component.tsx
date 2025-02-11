import ReactLoading from "react-loading";

interface Props {
    page: number;
    current_page: number;
    total_page: number;
    current_count: number;
    total_count: number;
    loadTablePaginate: boolean;
    nextPaginate: () => void;
    prevPagination: () => void;
}

export default function PaginationComponent({
                                                page,
                                                current_page,
                                                total_page,
                                                current_count,
                                                total_count,
                                                loadTablePaginate,
                                                nextPaginate,
                                                prevPagination,
                                            }: Props) {
    return (
        <nav
            aria-label="Pagination"
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        >
            <div className="hidden sm:block">
                {!loadTablePaginate &&
                    <p className="text-sm text-gray-700">
                        Página
                        <span className="font-medium ml-1">
                        {current_page}
                    </span> de
                        <span className="font-medium ml-1">
                        {total_page}
                    </span>
                        <span className="font-medium ml-10">
                        {current_count}
                    </span> resultado(s) de
                        <span className="font-medium ml-1">
                        {total_count}
                    </span> resultado(s)
                    </p>
                }
                {loadTablePaginate &&
                    <p className="flex w-36 items-center justify-center">
                        <ReactLoading
                            type="spin"
                            color={`blue`}
                            delay={10}
                            height={`15%`}
                            width={`15%`}
                        />
                    </p>
                }
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <button
                    disabled={page === 0}
                    className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold 
                        ring-1 ring-inset focus-visible:outline-offset-0 transition-all duration-200
                        ${page === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed ring-gray-200'  // Estilos cuando está deshabilitado
                        : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'        // Estilos cuando está habilitado
                    }`}
                    onClick={prevPagination}
                >
                    Atrás
                </button>

                <button
                    disabled={(page + 1) === total_page}
                    type="button"
                    className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold 
                        ring-1 ring-inset focus-visible:outline-offset-0 transition-all duration-200 ml-2
                        ${(page + 1) === total_page
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed ring-gray-200'  // Estilos cuando está deshabilitado
                        : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'        // Estilos cuando está habilitado
                    }`}
                    onClick={nextPaginate}
                >
                    Siguiente
                </button>
            </div>
        </nav>
    )
}
