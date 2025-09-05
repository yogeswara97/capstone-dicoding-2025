export default function FeatureSection() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left CTA Gradient */}
        <div className="md:col-span-2 bg-gradient-to-r from-red-700 via-red-500 to-pink-500 rounded-2xl p-10 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl font-bold leading-snug">
              A Better Way to Detect Pneumonia, Together
            </h2>
            <p className="mt-4 text-red-100 max-w-lg">
              Early detection with AI technology, designed to keep your lungs healthier.
            </p>
          </div>
          <button className="mt-8 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 w-fit">
            Request A Screening
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="w-10 h-10 bg-red-100 text-gray-600 flex items-center justify-center rounded-lg">
            🩺
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">Doctor-centered</h3>
          <p className="text-sm text-gray-600 mt-3">
            Built to be intuitive and easy for doctors in hospitals, ensuring accuracy and trust.
          </p>
          <a href="#" className="mt-6 text-gray-600 font-medium text-sm hover:underline">
            Learn More →
          </a>
        </div>
      </div>

      {/* Bottom Row of Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="w-10 h-10 bg-red-100 text-gray-600 flex items-center justify-center rounded-lg">
            🔒
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">Completely Secure</h3>
          <p className="text-sm text-gray-600 mt-3">
            Your medical data is fully encrypted and handled with strict privacy standards.
          </p>
          <a href="#" className="mt-6 text-gray-600 font-medium text-sm hover:underline">
            Learn More →
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="w-10 h-10 bg-red-100 text-gray-600 flex items-center justify-center rounded-lg">
            🔗
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">Seamless Integration</h3>
          <p className="text-sm text-gray-600 mt-3">
            Works smoothly with hospital systems and medical workflows without disruption.
          </p>
          <a href="#" className="mt-6 text-gray-600 font-medium text-sm hover:underline">
            Learn More →
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="w-10 h-10 bg-red-100 text-gray-600 flex items-center justify-center rounded-lg">
            🤖
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">AI-Powered Accuracy</h3>
          <p className="text-sm text-gray-600 mt-3">
            Detects pneumonia with up to 95% accuracy, helping doctors with reliable insights.
          </p>
          <a href="#" className="mt-6 text-gray-600 font-medium text-sm hover:underline">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
