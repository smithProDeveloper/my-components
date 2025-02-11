import ReactLoading from "react-loading";
import colors from "tailwindcss/colors";

type TailwindColor = keyof typeof colors

interface Props {
    color_spin: TailwindColor;
    size_percentage_spin: string;
    delay_spin: number;
    load: boolean;
    text_button: string;
    onAction: () => void;
}

export default function ButtonComponent({
                                            delay_spin,
                                            size_percentage_spin,
                                            color_spin,
                                            load,
                                            text_button,
                                            onAction,
                                        }: Props) {

    return (
        <div>
            {!load &&
                <button
                    type="button"
                    className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                        focus:ring-offset-2 sm:text-sm"
                    onClick={onAction}
                >
                    {text_button}
                </button>
            }
            {load &&
                <button
                    type="button"
                    className="w-full bg-blue-300 text-white font-medium py-2 px-4 rounded-lg shadow
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        focus:ring-offset-2 sm:text-sm cursor-not-allowed"
                    disabled={true}
                >
                    <div className="flex w-full items-center justify-center">
                        <ReactLoading
                            type="spin"
                            color={color_spin}
                            delay={delay_spin}
                            height={size_percentage_spin}
                            width={size_percentage_spin}
                        />
                    </div>
                </button>
            }
        </div>
    );
}