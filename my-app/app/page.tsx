import { Suspense } from "react";
import { FeaturesGrid } from "@/components/features_grid";
import { FeaturesSkeleton } from "@/components/feature_seleton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
  <div className="w-full text-center pt-[128px] pb-[128px] flex flex-col items-center">

        <div className="text-[28px] flex flex-col pb-[88px] text-[#5F5F5F]">
          <p className="text-[24px] text-[#818181] mb-[16px]">Key Features</p>
          <h1 className="   font-['Host_Grotesk']">
            CognifyNow doesnt just
          </h1>
          <p className="   font-['Host_Grotesk']">
            teach, it thinks with you
          </p>
        </div>
      <div className="relative w-full h-[782px] px-4 sm:px-8 md:px-16 lg:px-[276px]">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <Image
             src="/brain.svg"
             alt="Feature Background"
             width={669}
             height={669}
             className="  object-contain "
           />
         </div>
         
       <Suspense fallback={<FeaturesSkeleton />}>
         <FeaturesGrid />
       </Suspense>
       </div>
      </div>
    </main>
  );
}