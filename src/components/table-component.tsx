import {ArrowRightIcon, PencilIcon, TrashIcon, ChevronDownIcon} from "@heroicons/react/16/solid";
import {JSX, useState} from "react";

interface ITableComponentProps<T> {
    data: T[];
    columns: (keyof T)[];
    columnTranslations: { [key: string]: string };
    showActions: boolean;
    isGoTo: boolean;
    isEdit: boolean;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onGoTo?: (id: string) => void;
    onSort?: (column: keyof T, order: "ASC" | "DESC") => void;
    loadTablePaginate: boolean;
    height: string; // usar este formato => h-[68vh] y cambia el numero para definir la altura
}

export default function TableComponent<T extends { id: string }>({
                                                                     data,
                                                                     columns,
                                                                     columnTranslations,
                                                                     showActions,
                                                                     isGoTo,
                                                                     isEdit,
                                                                     onEdit,
                                                                     onDelete,
                                                                     onGoTo,
                                                                     onSort,
                                                                     loadTablePaginate,
                                                                     height,
                                                                 }: ITableComponentProps<T>): JSX.Element {

    const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
    const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleSort = (column: keyof T) => {
        const newOrder = sortColumn === column && sortOrder === "ASC" ? "DESC" : "ASC";
        setSortColumn(column);
        setSortOrder(newOrder);
        onSort?.(column, newOrder);
    };

    return (
        <div className={`overflow-x-auto ${height} bg-white`}>
            {!loadTablePaginate && (
                <table className="min-w-full bg-white">
                    <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column as string}
                                className="py-2 px-4 bg-gray-200 text-gray-600 text-sm uppercase font-bold text-left relative">
                                <div className="flex items-center gap-2 cursor-pointer"
                                     onClick={() => setOpenDropdown(openDropdown === column ? null : (column as string))}>
                                    {columnTranslations[String(column)] || String(column)}
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500"/>
                                </div>

                                {/* Menú desplegable */}
                                {openDropdown === column && (
                                    <div
                                        className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                                        <button
                                            className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortOrder === "ASC" ? "font-bold" : ""}`}
                                            onClick={() => {
                                                handleSort(column);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            Ascendente
                                        </button>
                                        <button
                                            className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortOrder === "DESC" ? "font-bold" : ""}`}
                                            onClick={() => {
                                                handleSort(column);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            Descendente
                                        </button>
                                    </div>
                                )}
                            </th>
                        ))}
                        {showActions &&
                            <th className="py-2 px-4 bg-gray-200 text-gray-600 text-sm uppercase font-bold text-left">Acciones</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-b">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}
                                    className="py-2 px-4 text-gray-600 text-sm text-left whitespace-nowrap overflow-hidden text-ellipsis"
                                    style={{maxWidth: "150px"}}>
                                    {String(item[column])}
                                </td>
                            ))}
                            {showActions && (
                                <td className="flex items-center justify-start py-2 px-4 text-gray-600 text-sm text-left gap-4">
                                    {isEdit && (
                                        <PencilIcon aria-hidden="true"
                                                    className="h-5 w-5 shrink-0 cursor-pointer text-blue-400"
                                                    onClick={() => onEdit && onEdit(item.id)}/>
                                    )}
                                    <TrashIcon aria-hidden="true"
                                               className="h-5 w-5 shrink-0 cursor-pointer text-red-400"
                                               onClick={() => onDelete && onDelete(item.id)}/>
                                    {isGoTo && (
                                        <ArrowRightIcon aria-hidden="true"
                                                        className="h-5 w-5 shrink-0 cursor-pointer text-blue-600"
                                                        onClick={() => onGoTo && onGoTo(item.id)}/>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            {loadTablePaginate && (
                <div className="flex w-full h-full items-center justify-center">
                    <div className="flex items-center justify-center space-x-2">
                        <div className={`w-5 h-5 border-4 border-blue-950 border-t-transparent 
                                rounded-full animate-spin`}
                        />
                        <span>Cargando</span>
                    </div>
                </div>
            )}
        </div>
    );
}
