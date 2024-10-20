import Image from "next/image"
import frontentDeveloper from "../../images/frontend developer.png"
import BackEndDevelopment from "../../images/Back-End Development.png"
import FullStackDevelopment from "../../images/Full-Stack Development.png"
import ECommerceDevelopment from "../../images/E-commerce Development.png"
import CMSDevelopment from "../../images/CMS Development.png"
import WebsiteMaintenanceandSupport from "../../images/Website Maintenance and Support.png"
import UIUXDesign from "../../images/UIUX Design.png"
import SEOOptimization from "../../images/SEO Optimization.png"


const Sections = () => {
    return (
        <section className="w-full mt-36 p-10 ">

            <h1 className="text-center mb-6 text-5xl ">Our Services</h1>

            <div className="[&>*]:mt-10 [&>*]:ml-16">

                <div className="w-60 h-80 border border-slate-300 shadow-xl float-left ml-10 hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={frontentDeveloper} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">Front-End Development</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Creating visually appealing, user-friendly websites using HTML, CSS, and JavaScript. </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={BackEndDevelopment} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">Back-End Development</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Developing server-side logic using technologies like Node.js, Python, PHP, etc. </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={FullStackDevelopment} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">Front-End Development</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Offering complete web development services from front-end to back-end, creating full-fledged websites.
                        </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={ECommerceDevelopment} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">E-commerce Development</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Building online stores with platforms like Shopify, WooCommerce, or custom-built e-commerce solutions.
                        </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={CMSDevelopment} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">CMS Development</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Creating and customizing websites using popular Content Management Systems (CMS) like WordPress.
                        </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={WebsiteMaintenanceandSupport} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">Website Maintenance and Support</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Offering ongoing support for updates, bug fixes, performance optimization, and adding new features.
                        </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={UIUXDesign} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">UI/UX Design</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Creating visually appealing, user-friendly websites using HTML, CSS, and JavaScript. </p>
                    </div>
                </div>

                <div className="w-60 h-80 border border-slate-300 shadow-lg ml-10 float-left hover:border-green-600 hover:shadow-2xl">
                    <div className="w-full h-36 flex items-center justify-center pl-6 bg-yellow-300">
                        <Image src={SEOOptimization} alt="frontentDeveloper" className="w-20"></Image>
                        <h1 className="ml-3">SEO Optimization</h1>
                    </div>
                    <div className="w-full p-6">
                        <p>Ensuring that websites are search engine optimized (SEO) for better visibility and higher rankings on Google.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sections