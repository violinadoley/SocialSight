// app/page.tsx
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ArtisticHeading from "@/components/ArtisticHeading";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center justify-center p-4">
     <ArtisticHeading />

      {/* Main Content */}
      <div className="max-w-3xl w-full text-center space-y-6">
      
        <div className="space-y-4"></div>
          <p className="text-gray-300 text-4xl font-light leading-relaxed mb-2">
            Analyze trends, measure engagement, and uncover 
            <span className="text-blue-400 font-medium"> Actionable insights </span>
            with AI-driven analytics.
          </p>
          <p className="text-gray-400 text-2xl font-light">
            Make data-backed decisions 
            <span className="text-green-400 font-medium animate-pulse"> effortlessly</span>.
          </p>
        </div>

        

        {/* Features Section */}
        <div className="rounded-lg p-6 text-left text-sm space-y-4 mb-8">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Track engagement metrics across platforms like Instagram, Facebook, and Twitter",
              "Identify high-performing posts, hashtags, and content themes",
              "Generate visual reports for campaigns in seconds",
              "Get AI-powered recommendations to boost reach and engagement"
            ].map((text, index) => (
              <div
              key={index}
              className="bg-[#222] hover:bg-[#333] p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
              >
              <p className="text-gray-300">{text}</p>
              </div>
            ))}
            </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
            <Link
            href="/chat"
            className="inline-flex items-center space-x-2 bg-[#222] hover:bg-[#333] px-6 py-3 rounded-full text-sm font-medium transition-all"
            >
            <span>Start Generating Insights</span>
            <FiArrowRight size={20} />
            </Link>
          
        </div>
      </div>
  );
}