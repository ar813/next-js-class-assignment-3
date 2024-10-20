const Footer = () => {
    return (
        <div className="float-left w-full flex mt-28">

            <div className=" w-1/4  bg-yellow-300 flex items-center justify-center">
                <div>
                    <h1 className="pb-5 text-2xl">Contact Us</h1>
                    <p className="pt-3">Phone: 03093678739</p>
                    <p className="pt-2">Email: ar3584158@gmail.com</p>
                    <p className="pt-2">Address: Street#35, Karachi, Pakistan</p>
                    <p className="pt-2">Github: <a href="https://github.com/ar813" target="_blank">https://github.com/ar813</a></p>
                </div>
            </div>

            <div className="w-3/4 p-10 flex items-center justify-center border-2 border-yellow-300">
                <div className="w-1/2">
                    <h1 className="pb-2 text-2xl">Get in Touch</h1>
                    <p className="text-slate-400">Feel free to contact us for any query or feedback</p>
                    <form className="pt-5">
                        <input type="text" placeholder="Name" className="p-2 mb-5 w-full block border border-slate-400" />
                        <input type="email" placeholder="Email" className="p-2 mb-5 w-full block border border-slate-400" />
                        <textarea placeholder="Message" className="p-2 mb-5 w-full block border border-slate-400"></textarea>
                        <button className="bg-yellow-300 p-2 w-full block">Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Footer