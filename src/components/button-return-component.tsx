type Colors = 'blue' | 'red' | 'indigo' | 'black' | 'white' | 'purple'
type Size = "full" | "no_full";
type TypeObj =
    'colorsButton'
    | 'colorsButtonLoad'
    | 'colorsHover'
    | 'colorsFocus'
    | 'colorsSpin'
    | 'colorsTextLoad'
    | 'sizeClasses';

function colorPicker(typeObj: TypeObj, color: Colors, size: Size) {
    switch (typeObj) {
        case "colorsButton":
            return colorsButton[color];
        case "colorsButtonLoad":
            return colorsButtonLoad[color];
        case "colorsFocus":
            return colorsFocus[color];
        case "colorsHover":
            return colorsHover[color];
        case "colorsSpin":
            return colorsSpin[color];
        case "colorsTextLoad":
            return colorsTextLoad[color];
        case "sizeClasses":
            return sizeClasses[size];
        default:
            return '';
    }
}

// ejemplo de colores del bg luego pueden agregar mas colores
const colorsButton = {
    blue: 'bg-blue-600',
    red: 'bg-red-600',
    indigo: 'bg-indigo-600',
    black: 'bg-black',
    white: 'bg-white',
    purple: 'bg-purple-600',
} as const

// ejemplo de colores del bg en load luego pueden agregar mas colores
const colorsButtonLoad = {
    blue: 'bg-blue-300',
    red: 'bg-red-300',
    indigo: 'bg-indigo-300',
    black: 'bg-black',
    white: 'bg-white',
    purple: 'bg-purple-300',
} as const

// ejemplo de colore para el hover luego pueden agregar mas colores
const colorsHover = {
    blue: 'hover:bg-blue-700',
    red: 'hover:bg-red-700',
    indigo: 'hover:bg-indigo-700',
    black: 'hover:bg-black',
    white: 'hover:bg-white',
    purple: 'hover:bg-purple-700',
} as const

// ejemplo de colores focus luego pueden agregar mas colores
const colorsFocus = {
    blue: 'focus:ring-blue-500',
    red: 'focus:ring-red-500',
    indigo: 'focus:ring-indigo-500',
    black: 'focus:ring-black-500',
    white: 'focus:ring-white-500',
    purple: 'focus:ring-purple-500',
} as const

// ejemplo de colores spin luego pueden agregar mas colores
const colorsSpin = {
    blue: 'border-blue-950',
    red: 'border-red-950',
    indigo: 'border-indigo-950',
    black: 'border-black',
    white: 'border-white',
    purple: 'border-purple-950',
} as const

// ejemplo de colores text load luego pueden agregar mas colores
const colorsTextLoad = {
    blue: 'text-blue-950',
    red: 'text-red-950',
    indigo: 'text-indigo-950',
    black: 'text-black',
    white: 'text-white',
    purple: 'text-purple-950',
} as const

// Tamaños del botón
const sizeClasses = {
    full: "py-2 w-full text-base",
    no_full: "py-2 px-4 w-auto text-base",
} as const

interface ButtonProps<T> {
    text: string;
    text_load?: string;
    onClick: (data: T) => void;
    isLoading?: boolean;
    color?: Colors;
    spinnerColor?: Colors;
    size?: Size;
    dataReturn: T
}

export default function ButtonReturnComponent<T>({
                                                     text,
                                                     text_load = 'Cargando...',
                                                     onClick,
                                                     isLoading = false,
                                                     color = 'blue',
                                                     spinnerColor = "white",
                                                     size = "full",
                                                     dataReturn,
                                                 }: ButtonProps<T>) {


    return (
        <>
            {!isLoading &&
                <button
                    type="button"
                    className={`
                        w-full rounded-lg shadow text-white font-medium transition-all
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        ${colorPicker('sizeClasses', color, size)}
                        ${colorPicker('colorsFocus', color, size)}
                        ${colorPicker('colorsButton', color, size)} 
                        ${colorPicker('colorsHover', color, size)}
                    `}
                    onClick={() => onClick(dataReturn)}
                >
                    <div className="flex items-center justify-center space-x-2">
                        <span>{text}</span>
                    </div>
                </button>
            }
            {isLoading &&
                <button
                    type="button"
                    className={`
                        w-full rounded-lg shadow font-medium transition-all
                        focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-not-allowed
                        ${colorPicker('colorsTextLoad', color, size)}
                        ${colorPicker('sizeClasses', color, size)} 
                        ${colorPicker('colorsButtonLoad', color, size)}
                    `}
                    disabled={true}
                >
                    <div className="flex items-center justify-center space-x-2">
                        {isLoading && (
                            <div className={`w-5 h-5 border-4 ${colorsSpin[spinnerColor]} border-t-transparent 
                                rounded-full animate-spin`}
                            />
                        )}
                        <span>{text_load}</span>
                    </div>
                </button>
            }
        </>
    );
}
