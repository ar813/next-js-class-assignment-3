import Image from 'next/image'
import profile from "../../images/profile.png"

const Hero = () => {
    return (
        <div className='w-full flex justify-between h-96 mt-24 '>

            <div className='w-full p-11 pl-16 '>
                <h1 className='text-4xl font-bold '>Welcome to My Website. <br /> This is a sample website built using <br />Next.js and Tailwind CSS.</h1>
                <p className='mt-5'>
                    This website is built using Next.js and Tailwind CSS. It's a simple and modern website template.
                    Feel free to explore the source code on GitHub.
                    If you have any questions or need further assistance, don't hesitate to reach out.
                </p>
                <div className='w-full flex items-center justify-center mt-4'>
                    <button className='mt-8 px-4 py-2 border border-green-600 text-green-600 border-solid rounded-full h-10 hover:bg-green-600 hover:text-white'>Learn More</button>
                    <button className='mt-8 px-4 py-2 border border-green-600 text-green-600 border-solid rounded-full h-10 hover:bg-green-600 hover:text-white ml-5'>Get Started</button>
                </div>
            </div>



            <div className='w-1/2 flex items-center justify-center p-14'>
                <Image src={profile} alt="Profile" className='w-96'></Image>
            </div>

        </div>
    )
}

export default Hero