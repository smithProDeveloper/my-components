import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const cities = [
    "MEDELLÍN", "BOGOTÁ", "CALI", "BARRANQUILLA", "CARTAGENA",
    "BUCARAMANGA", "MANIZALES", "PEREIRA", "VILLAVICENCIO", "CUCUTA"
];

export function LocationSelectComponent() {
    const [selectedCity, setSelectedCity] = useState("MEDELLÍN");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full max-w-[40%]">
            {/* Label */}
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-medium" style={{ color: "#8B8B8B" }}>
                  Ubicación
                </span>
                <ChevronDownIcon className="w-4 h-4 text-white" />
            </div>

            {/* Selección actual */}
            <div
                className="mt-1 text-white text-base font-semibold cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedCity}
            </div>

            {/* Dropdown */}
            {isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-black rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                        <li
                            key={city}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 ${
                                city === selectedCity ? "text-white" : "text-gray-300"
                            }`}
                            onClick={() => {
                                setSelectedCity(city);
                                setIsOpen(false);
                            }}
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
