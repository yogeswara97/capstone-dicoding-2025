import { ArrowRight } from "lucide-react";

export default function FancyButton() {
  return (
    <button className="group inline-flex items-center gap-2 bg-black text-white text-sm md:text-base font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all hover:bg-gray-900 cursor-pointer">
      Start Your Screening
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black group-hover:translate-x-1 transition-transform">
        <ArrowRight size={14} />
      </span>
    </button>
  );
}
