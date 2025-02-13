import {ArrowLeftIcon} from "@heroicons/react/16/solid";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputDefault from "../components/input-component.tsx";
import ButtonSubmit from "../components/button-submit.tsx";

interface DataForm {
    text: string;
    number: string;
    email: string;
    password: string;
}

export default function InputScreen() {

    const navigate = useNavigate();
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<DataForm>();

    function handleDataUseForm(data: DataForm) {
        console.log(data);
    }

    function goToBack1() {
        navigate('/');
    }

    return (
        <div className="flex flex-col w-full h-screen bg-indigo-950 items-center justify-start py-10">
            <div className="w-10/12">
                <div className="flex w-full items-center justify-start gap-16 mb-8">
                    <button onClick={goToBack1}>
                        <ArrowLeftIcon className="w-8 h-8 text-white cursor-pointer"/>
                    </button>
                    <span className="text-white text-3xl text-center font-bold">Inputs</span>
                </div>
                <p className="text-white w-8/12 mx-auto">
                    Inputs to use with react hook form
                </p>
                <p className="border-b mt-2 mb-6 w-8/12 mx-auto"/>
                <form className="flex flex-col gap-4 w-8/12 mx-auto" onSubmit={handleSubmit(handleDataUseForm)}>
                    <InputDefault<DataForm>
                        register={register}
                        errors={errors}
                        fieldName="text"
                        label="Input type text"
                        id="text"
                        type="text"
                        inputMode="text"
                        validationRules={{
                            required: 'Input type text is required',
                        }}
                        autoFocus={true}
                        maxLength={20}
                        placeholder="This is the placeholder"
                        label_color={{
                            color_tailwind: 'white',
                            use_case: 'text',
                            number_type: '950'
                        }}
                        input_text_color="indigo"
                    />

                    <InputDefault<DataForm>
                        register={register}
                        errors={errors}
                        fieldName="email"
                        label="Input type email"
                        id="email"
                        type="email"
                        inputMode="email"
                        validationRules={{
                            required: 'Input type text is required',
                        }}
                        autoFocus={false}
                        maxLength={40}
                        placeholder="This is the placeholder"
                        label_color={{
                            color_tailwind: 'white',
                            use_case: 'text',
                            number_type: '950'
                        }}
                        input_text_color="indigo"
                    />
                    <ButtonSubmit
                        text="submit"
                    />
                </form>
            </div>
        </div>
    );
}