/*
* para usar este componente debe instalar react hook form
* ****** npm install react-hook-form *******
* */

import {FieldErrors, FieldValues, UseFormRegister, Path, RegisterOptions} from "react-hook-form";
import {HTMLInputTypeAttribute, InputHTMLAttributes} from "react";
import {
    ColorTailwind,
    selectedColorTailwind,
    SelectedColorTailwindModel,
} from "../const/colors-tailwind-data.ts";

interface Props<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    fieldName: Path<T>;
    validationRules?: RegisterOptions<T, Path<T>>;
    label: string;
    id: string;
    autoFocus?: boolean;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    inputMode: InputHTMLAttributes<HTMLInputElement>["inputMode"];
    maxLength?: number;
    label_color?: SelectedColorTailwindModel;
    error_color?: SelectedColorTailwindModel;
    input_text_color?: ColorTailwind;
}

export default function InputDefault<T extends FieldValues>({
                                                                register,
                                                                errors,
                                                                fieldName,
                                                                label,
                                                                id,
                                                                autoFocus = false,
                                                                placeholder = '',
                                                                validationRules = {},
                                                                type,
                                                                inputMode,
                                                                maxLength,
                                                                label_color = {
                                                                    use_case: 'text',
                                                                    color_tailwind: 'black',
                                                                    number_type: '950'
                                                                },
                                                                error_color = {
                                                                    use_case: 'text',
                                                                    color_tailwind: 'red',
                                                                    number_type: '500'
                                                                },
                                                                input_text_color = 'black',
                                                            }: Props<T>) {

    const errorMessage = errors[fieldName]?.message as string | undefined;

    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className={
                    `block text-sm font-medium text-left 
                    ${selectedColorTailwind(label_color)}`
                }
            >
                {label}
            </label>
            <div className="mt-2 w-full">
                <input
                    {...register(fieldName, validationRules)}
                    id={id}
                    type={type}
                    inputMode={inputMode}
                    className={`block w-full rounded-md px-3 py-1.5 text-base
                        outline-1 -outline-offset-1 focus:outline-2 
                        focus:-outline-offset-2 sm:text-sm
                    `}
                    style={{color: input_text_color}}
                    autoFocus={autoFocus}
                    maxLength={maxLength}
                    placeholder={placeholder}
                />
                {errorMessage &&
                    <p className={`text-sm mt-1 ${selectedColorTailwind(error_color)}`}>
                        {errorMessage}
                    </p>
                }
            </div>
        </div>
    );
}