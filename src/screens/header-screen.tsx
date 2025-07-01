import { MenuIcon, BellIcon, SearchIcon, FilterIcon } from "lucide-react";
import { LocationSelectComponent } from "../components/location-select-component.tsx";

export default function HeaderScreen() {
    return (
        <div className="relative flex flex-col px-4 pb-4 space-y-4 overflow-hidden">
            {/* Fondo negro redondeado */}
            <div className="absolute top-0 left-0 w-full h-48 bg-black rounded-b-3xl z-0"></div>

            {/* Contenido encima del fondo */}
            <div className="relative z-10 flex flex-col space-y-4">
                {/* Sección superior: Menú, Ubicación, Notificaciones */}
                <div className="flex items-center justify-between">
                    <MenuIcon className="w-6 h-6 text-[#AAAAAA]" />
                    <LocationSelectComponent />
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B8B8B]">
                        <BellIcon className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Sección de búsqueda y filtros */}
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 bg-[#1F1F1F] px-3 py-2 rounded-full w-full">
                        <SearchIcon className="w-5 h-5 text-white" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="bg-transparent outline-none border-none text-white placeholder-white w-full text-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-[#5D56F3] px-3 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-[#A29EF0] flex items-center justify-center">
                            <FilterIcon className="w-4 h-4 text-[#807AF1]" />
                        </div>
                        <span className="text-[#D9D8FC] text-sm">Filtros</span>
                    </button>
                </div>

                {/* Sección de categorías */}
                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 bg-[#4D84E3] px-4 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                        <span className="text-[#D9D8FC] text-sm">Rumba</span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#945DF5] px-4 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                        <span className="text-[#D9D8FC] text-sm">Música</span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#EA4F2C] px-4 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                        <span className="text-[#D9D8FC] text-sm">Comida</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
