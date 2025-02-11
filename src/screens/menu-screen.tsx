import ButtonReturnComponent from "../components/button-return-component.tsx";
import {useNavigate} from "react-router-dom";

interface MenuData {
    name: string;
    path: string;
}

const menuData: MenuData[] = [
    {name: 'Tables', path: '/table'},
];

export default function MenuScreen() {

    const navigate = useNavigate();

    function onNavigate(path: string) {
        navigate(path);
    }

    return (
        <div className="flex flex-col w-full h-screen bg-indigo-950 items-center justify-center py-10">
            <div className="w-4/12">
                <h1 className="text-white text-3xl text-center mb-8 font-bold">Menu</h1>
                {menuData.map((data, index) => (
                    <div key={index}>
                        <ButtonReturnComponent<string>
                            onClick={onNavigate}
                            text={data.name}
                            size="full"
                            isLoading={false}
                            spinnerColor="purple"
                            color="purple"
                            dataReturn={data.path}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}