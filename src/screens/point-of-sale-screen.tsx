import {
    LogOut,
    ShoppingCart,
    Package,
    Users,
    DollarSign,
    Home,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import {useEffect, useState} from "react";

export default function PointOfSaleScreen() {

    const [collapsed, setCollapsed] = useState(true);
    const [categorySelected, setCategorySelected] = useState<ICategory>('todos');
    const [productsData, setProductsData] = useState<IProduct[]>([]);
    const [shoppingCart, setShoppingCart] = useState<IProduct[]>([]);
    const [totalShopping, setTotalShopping] = useState<number>(0);

    useEffect(() => {
        if (categorySelected === 'todos') {
            setProductsData(products);
            return;
        }
        const data_filtered = products.filter(product => product.category === categorySelected);
        setProductsData(data_filtered);
    }, [categorySelected]);

    useEffect(() => {
        const total = shoppingCart.reduce((sum, product) => sum + product.price, 0);
        setTotalShopping(total);
    }, [totalShopping]);

    useEffect(() => {
        console.log(productsData)
    }, [productsData]);

    function handleAddProduct(product: IProduct) {
        setShoppingCart(prevState => [...prevState, product]);
    }

    return (
        <div className="flex h-screen bg-[#1F2937] text-white">
            {/* Sidebar */}
            <aside
                className={`${
                    collapsed ? "w-20" : "w-64"
                } bg-[#111827] shadow-lg flex flex-col items-center py-6 transition-all duration-300`}
            >
                <div className="flex items-center justify-between w-full px-4 mb-8">
                    {!collapsed && (
                        <div className="text-primary text-xl font-bold">Punto de Venta</div>
                    )}
                    <button
                        className="text-gray-400 hover:text-white ml-auto"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? <ChevronRight /> : <ChevronLeft />}
                    </button>
                </div>

                <nav className="flex flex-col gap-6 items-center md:items-start w-full px-2">
                    <MenuItem icon={<Home />} label="Inicio" collapsed={collapsed} />
                    <MenuItem icon={<Package />} label="Productos" collapsed={collapsed} />
                    <MenuItem icon={<Users />} label="Clientes" collapsed={collapsed} />
                    <MenuItem icon={<DollarSign />} label="Ventas" collapsed={collapsed} />
                    <MenuItem icon={<ShoppingCart />} label="Carrito" collapsed={collapsed} />
                </nav>

                <button className="mt-auto text-red-400 hover:text-red-600 flex items-center gap-2 mb-4 px-2">
                    <LogOut className="w-5 h-5" />
                    {!collapsed && <span>Salir</span>}
                </button>
            </aside>

            {/* Main */}
            <main className="flex-1 p-4 flex flex-col md:flex-row gap-4 overflow-hidden">

                {/* Productos */}
                <section className="flex-1">
                    <h2 className="text-xl font-semibold mb-4">Productos</h2>

                    {/* Botones de Categorías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {listCategories.map((cat) => (
                            <button
                                key={cat}
                                className={`
                                    px-4 py-1 rounded-full text-white text-sm transition
                                    ${categorySelected === cat 
                                    ? "bg-indigo-700 hover:bg-indigo-600" 
                                    : "bg-gray-700 hover:bg-gray-600"
                                }
                                `}
                                onClick={() => setCategorySelected(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Lista de productos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-80">
                        {productsData.map((product, index) => (
                            <div
                                key={index}
                                className="bg-[#374151] rounded-2xl shadow p-4 hover:shadow-md transition"
                            >
                                <div className="h-24 bg-gray-700 rounded mb-2">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                                <h3 className="text-base font-medium text-white min-h-[48px] leading-tight">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-400">$ {product.price}</p>
                                <button
                                    className="mt-2 w-full bg-primary text-white py-1 rounded
                                            bg-indigo-600 hover:bg-indigo-500"
                                    onClick={() => handleAddProduct(product)}
                                >
                                    Agregar
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Carrito */}
                <aside className="w-full md:w-96 bg-[#374151] rounded-2xl shadow p-4 flex flex-col">
                    <h2 className="text-xl font-semibold mb-4">Carrito</h2>
                    {shoppingCart.length === 0 &&
                        <div className="flex-1 overflow-y-auto">
                            <p className="text-gray-400">No hay productos agregados.</p>
                        </div>
                    }
                    {shoppingCart.length > 0 && shoppingCart.map((product, index) => (
                        <div key={index} className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                                <div className="flex flex-col">
                                    <p className="text-white text-sm font-medium">{product.name}</p>
                                </div>
                            </div>
                            <p className="text-white font-bold text-sm">{product.price}</p>
                        </div>
                    ))}
                    <div className="border-t border-gray-600 pt-4 mt-4">
                        <p className="text-lg font-bold mb-2">
                            Total: ${totalShopping}
                        </p>
                        <button
                            className="w-full bg-primary text-white py-2 rounded
                                bg-indigo-600 hover:bg-indigo-500"
                        >
                            Pagar
                        </button>
                    </div>
                </aside>
            </main>
        </div>
    );
}

type ICategory = "bebidas" | "hamburguesas" | "pizzas" | "postres" | "snacks" | "todos";

const listCategories: ICategory[] = [
    "todos",
    "bebidas",
    "hamburguesas",
    "pizzas",
    "postres",
    "snacks",
];

interface IProduct {
    id: string;
    name: string;
    price: number;
    image: string;
    category: ICategory;
}

const products: IProduct[] = [
    // Bebidas
    {
        id: "b1",
        name: "Coca Cola",
        price: 2500,
        image: "/images/point_of_sales_image/coca_cola.jpg",
        category: "bebidas",
    },
    {
        id: "b2",
        name: "Pepsi",
        price: 2400,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },
    {
        id: "b3",
        name: "Sprite",
        price: 2300,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },
    {
        id: "b4",
        name: "Jugo de Naranja",
        price: 2600,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },
    {
        id: "b5",
        name: "Agua Mineral",
        price: 1800,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },
    {
        id: "b6",
        name: "Té Frío",
        price: 2200,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },
    {
        id: "b7",
        name: "Limonada",
        price: 2100,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },
    {
        id: "b8",
        name: "Red Bull",
        price: 3200,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "bebidas",
    },

    // Hamburguesas
    {
        id: "h1",
        name: "Hamburguesa Clásica",
        price: 9000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h2",
        name: "Hamburguesa con Queso",
        price: 9500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h3",
        name: "Doble Carne",
        price: 11000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h4",
        name: "Hamburguesa BBQ",
        price: 10500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h5",
        name: "Hamburguesa de Pollo",
        price: 8900,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h6",
        name: "Hamburguesa Vegana",
        price: 9700,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h7",
        name: "Hamburguesa Picante",
        price: 9900,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },
    {
        id: "h8",
        name: "Mini Hamburguesas",
        price: 7500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "hamburguesas",
    },

    // Pizzas
    {
        id: "p1",
        name: "Pizza Margarita",
        price: 12000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p2",
        name: "Pizza Pepperoni",
        price: 13000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p3",
        name: "Pizza Hawaiana",
        price: 12500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p4",
        name: "Pizza Vegetariana",
        price: 11500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p5",
        name: "Pizza Cuatro Quesos",
        price: 13500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p6",
        name: "Pizza de Pollo",
        price: 12500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p7",
        name: "Pizza Suprema",
        price: 14000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },
    {
        id: "p8",
        name: "Pizza Mexicana",
        price: 13200,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "pizzas",
    },

    // Postres
    {
        id: "d1",
        name: "Cheesecake",
        price: 4500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d2",
        name: "Brownie",
        price: 3500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d3",
        name: "Helado de Vainilla",
        price: 3000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d4",
        name: "Pastel de Chocolate",
        price: 4800,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d5",
        name: "Donas",
        price: 2800,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d6",
        name: "Cupcake",
        price: 3200,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d7",
        name: "Flan",
        price: 3100,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },
    {
        id: "d8",
        name: "Mousse de Fresa",
        price: 3600,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "postres",
    },

    // Snacks
    {
        id: "s1",
        name: "Papas Fritas",
        price: 4000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s2",
        name: "Nuggets",
        price: 5200,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s3",
        name: "Aros de Cebolla",
        price: 4300,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s4",
        name: "Tacos",
        price: 6000,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s5",
        name: "Nachos",
        price: 4900,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s6",
        name: "Arepas",
        price: 4500,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s7",
        name: "Empanadas",
        price: 4300,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
    {
        id: "s8",
        name: "Tequeños",
        price: 4100,
        image: "/images/point_of_sales_image/pepsi-5583104_640.jpg",
        category: "snacks",
    },
];


function MenuItem({
                      icon,
                      label,
                      collapsed,
                  }: {
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
}) {
    return (
        <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
            <span className="w-6 h-6">{icon}</span>
            {!collapsed && <span>{label}</span>}
        </button>
    );
}
