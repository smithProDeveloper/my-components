import TableComponent from "../components/table-component.tsx";
import {useEffect, useState} from "react";
import PaginationComponent from "../components/pagination-component.tsx";
import {ArrowLeftIcon} from "@heroicons/react/16/solid";
import {useNavigate} from "react-router-dom";

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

const users: User[] = [
    {id: '1', name: "María Gómez", email: "maria.gomez@example.com", phone: "+57 310 234 5678"},
    {id: '2', name: "Juan Pérez", email: "juan.perez@example.com", phone: "+57 300 123 4567"},
    {id: '3', name: "Carlos Rodríguez", email: "carlos.rodriguez@example.com", phone: "+57 320 345 6789"},
    {id: '4', name: "Ana Martínez", email: "ana.martinez@example.com", phone: "+57 300 456 7890"},
    {id: '5', name: "Luis Fernández", email: "luis.fernandez@example.com", phone: "+57 311 567 8901"},
    {id: '6', name: "Sofía Ramírez", email: "sofia.ramirez@example.com", phone: "+57 322 678 9012"},
    {id: '7', name: "Miguel Torres", email: "miguel.torres@example.com", phone: "+57 300 789 0123"},
    {id: '8', name: "Elena Díaz", email: "elena.diaz@example.com", phone: "+57 312 890 1234"},
    {id: '9', name: "Javier Sánchez", email: "javier.sanchez@example.com", phone: "+57 323 901 2345"},
    {id: '10', name: "Valeria Castro", email: "valeria.castro@example.com", phone: "+57 304 012 3456"},
    {id: '11', name: "Daniela Vargas", email: "daniela.vargas@example.com", phone: "+57 305 123 4567"},
    {id: '12', name: "Alejandro Ríos", email: "alejandro.rios@example.com", phone: "+57 306 234 5678"},
    {id: '13', name: "Camila León", email: "camila.leon@example.com", phone: "+57 307 345 6789"},
    {id: '14', name: "Fernando Mora", email: "fernando.mora@example.com", phone: "+57 308 456 7890"},
    {id: '15', name: "Gabriela Jiménez", email: "gabriela.jimenez@example.com", phone: "+57 309 567 8901"},
    {id: '16', name: "Ricardo Suárez", email: "ricardo.suarez@example.com", phone: "+57 310 678 9012"},
    {id: '17', name: "Andrea Pineda", email: "andrea.pineda@example.com", phone: "+57 311 789 0123"},
    {id: '18', name: "Héctor Quintero", email: "hector.quintero@example.com", phone: "+57 312 890 1234"},
    {id: '19', name: "Patricia Londoño", email: "patricia.londono@example.com", phone: "+57 313 901 2345"},
    {id: '20', name: "Oscar Beltrán", email: "oscar.beltran@example.com", phone: "+57 314 012 3456"},
    {id: '21', name: "Diana Navarro", email: "diana.navarro@example.com", phone: "+57 315 123 4567"},
    {id: '22', name: "Esteban Herrera", email: "esteban.herrera@example.com", phone: "+57 316 234 5678"},
    {id: '23', name: "Natalia Castaño", email: "natalia.castano@example.com", phone: "+57 317 345 6789"},
    {id: '24', name: "Manuel Ospina", email: "manuel.ospina@example.com", phone: "+57 318 456 7890"},
    {id: '25', name: "Isabel Medina", email: "isabel.medina@example.com", phone: "+57 319 567 8901"},
    {id: '26', name: "Felipe Guzmán", email: "felipe.guzman@example.com", phone: "+57 320 678 9012"},
    {id: '27', name: "Verónica Arango", email: "veronica.arango@example.com", phone: "+57 321 789 0123"},
    {id: '28', name: "Sebastián Cano", email: "sebastian.cano@example.com", phone: "+57 322 890 1234"},
    {id: '29', name: "Paola Montoya", email: "paola.montoya@example.com", phone: "+57 323 901 2345"},
    {id: '30', name: "Rodrigo Vélez", email: "rodrigo.velez@example.com", phone: "+57 324 012 3456"},
];
const columns: (keyof User)[] = ['id', 'name', 'email', 'phone'];
const columnTranslations: { [key: string]: string } = {
    id: 'Posición',
    name: 'Nombre',
    email: 'Email',
    phone: 'Celular'
}


export default function TableScreen() {

    const navigate = useNavigate();
    const size = 10;
    const [page, setPage] = useState<number>(0);
    const [usersData, setUsersData] = useState<User[]>([]);

    useEffect(() => {
        const r = getPaginatedData(users, size, page);
        setUsersData(r);
    }, [page]);

    function getPaginatedData(data: User[], size: number, page: number) {
        const offset = page * size;
        return data.slice(offset, offset + size);
    }

    function nextPaginate() {
        setPage(page + 1);
    }

    function prevPagination() {
        setPage(page - 1);
    }

    function goToBack() {
        navigate('/');
    }

    return (
        <div className="flex flex-col w-full h-screen bg-indigo-950 items-center justify-center py-10">
            <div className="w-10/12">
                <div className="flex w-full items-center justify-start gap-16 mb-8">
                    <button onClick={goToBack}>
                        <ArrowLeftIcon className="w-8 h-8 text-white cursor-pointer"/>
                    </button>
                    <span className="text-white text-3xl text-center font-bold">Tables</span>
                </div>
                <TableComponent<User>
                    data={usersData}
                    columns={columns}
                    columnTranslations={columnTranslations}
                    showActions={true}
                    isGoTo={true}
                    isEdit={true}
                    loadTablePaginate={false}
                    height={'h-[68vh]'}
                />
                <PaginationComponent
                    page={page}
                    current_page={page + 1}
                    total_page={Math.ceil(users.length / size)}
                    current_count={(size * page) + usersData.length}
                    total_count={users.length}
                    loadTablePaginate={false}
                    nextPaginate={nextPaginate}
                    prevPagination={prevPagination}
                />
            </div>
        </div>
    );
}