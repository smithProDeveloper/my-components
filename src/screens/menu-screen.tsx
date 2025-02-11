import ButtonComponent from "../components/button-component.tsx";

export default function MenuScreen() {

    function onNavigate() {
        //
    }

    return (
        <div className="flex flex-col w-full h-screen bg-indigo-950 items-center justify-center py-10">
            <div className="w-4/12">
                <h1 className="text-white text-3xl text-center mb-8 font-bold">Menu</h1>
                <ButtonComponent
                    onClick={onNavigate}
                    text="Tablas"
                    size="full"
                    isLoading={true}
                    spinnerColor="purple"
                    color="purple"
                />
            </div>
        </div>
    );
}