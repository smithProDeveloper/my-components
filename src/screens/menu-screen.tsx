import ButtonComponent from "../components/button-component.tsx";

export default function MenuScreen() {

    function onNavigate() {
        //
    }

    return (
        <div className="flex flex-col w-full items-center justify-center py-10">
            <ButtonComponent
                color_spin={"blue"}
                size_percentage_spin={"5%"}
                delay_spin={10}
                load={true}
                text_button={"tables"}
                onAction={onNavigate}
            />
        </div>
    );
}