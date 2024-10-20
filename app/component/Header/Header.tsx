import Image from "next/image"
import logo from "../../images/logo.png" 
const Header = () => {
    return (
        <div className="w-full h-14 p-4 shadow-md pb-10 flex items-center justify-between pt-10">

            <div>
                <Image src={logo} alt="logo" className="w-56"></Image>
            </div>

            <div className="w-1/3">
                <ul className="flex [&>*]:w-1/4 items-center text-center font-sans font-bold">
                    <li className="hover:text-xl cursor-pointer">Home</li>
                    <li className="hover:text-xl cursor-pointer">About</li>
                    <li className="hover:text-xl cursor-pointer">Contact</li>
                    <li className="hover:text-xl cursor-pointer">Servises</li>
                </ul>
            </div>

            <div>
                <button className="px-4 py-2 border border-red-500 text-red-500 border-solid rounded-full h-10 hover:bg-red-500 hover:text-white hello">SIGN IN</button>
                <button className="ml-6 px-4 py-2 border border-red-500 text-red-500 border-solid rounded-full h-10 hover:bg-red-500 hover:text-white">SIGN UP</button>
            </div>

        </div>
    )
}

export default Header