import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-white text-gray-900 px-5">
            {/* Hero */}
            <section className="relative min-h-[calc(100vh-80px)]">
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/pneunomia.png"
                        alt="Hero background"
                        fill
                        className="object-cover rounded-3xl"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/45 rounded-3xl"></div>
                </div>

                {/* Isi konten */}
                <div className="relative min-h-[calc(100vh-100px)] p-10
                grid grid-rows-[auto_1fr_auto] 
                md:grid-cols-2 md:grid-rows-2 
                md:gap-8 text-center md:text-left">


                    {/* Kolom kiri atas */}
                    <div className="md:col-span-2 md:col-start-1 md:row-start-1">
                        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                            Early detection of <br /> pneumonia  for healthier <br /> lungs and better lives.
                        </h1>
                    </div>

                    {/* Kolom kiri bawah */}
                    <div className="mt-6 md:mt-0 md:col-start-1 md:row-start-2 flex items-end">
                        <p className="text-gray-200">
                            Stay informed, get checked, and protect your respiratory health.
                        </p>
                    </div>

                    {/* Kolom kanan bawah */}
                    <div className="mt-6 md:mt-0 md:col-start-2 md:row-start-2 flex justify-center md:justify-end items-end">
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                            Start Your Screening
                        </button>
                    </div>
                </div>
            </section>



            {/* Section */}
            <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold leading-snug">
                    Empowering <span className="text-black">early pneumonia detection</span>, trusted by <span className="text-black">thousands of patients</span>, and supported by <span className="text-black">modern AI technology.</span>
                </h2>


                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {/* Card 1 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-lg font-semibold">Screened Patients</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Thousands of individuals have already used our platform to check their lung health early.
                        </p>
                        <p className="text-4xl font-bold text-blue-600 mt-6">10,000+</p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-lg font-semibold">Medical Experts</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Supported by experienced doctors and AI specialists working hand-in-hand for accurate results.
                        </p>
                        <p className="text-4xl font-bold text-blue-600 mt-6">500+</p>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-lg font-semibold">Detection Accuracy</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Our AI-powered system ensures high accuracy in identifying pneumonia symptoms at early stages.
                        </p>
                        <p className="text-4xl font-bold text-blue-600 mt-6">95%</p>

                    </div>
                </div>
            </section>
        </main>
    );
}
