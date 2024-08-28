import Link from "next/link";


const Navbar = () => {
    return (
        <div className="bg-gray-100 shadow-sm rounded-lg">
            <div className="flex justify-between p-4 items-center">
                <h1 className="font-mono text-2xl flex gap-2 items-center">
                    PortFolio
                </h1>
                <nav>
                    <ul className="flex gap-6 text-base font-semibold items-center">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="#">Contact</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li className="bg-blue-500 text-white py-3 px-4 rounded-full w-full hover:bg-blue-600">
                            <Link href={"/login"}>
                                Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
