export function FeaturesSkeleton() {
    return (
      <div className=" grid grid-cols-2 grid-rows-2 w-full h-full  ">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative p-4 w-[341px] h-[223.14px] bg-secondary animate-pulse rounded-lg"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Simulate the icon */}
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
              {/* Simulate the title */}
              <div className="w-24 h-4 bg-gray-300 rounded mb-2" />
              {/* Simulate the points */}
              <div className="w-32 h-3 bg-gray-300 rounded mb-1" />
              <div className="w-28 h-3 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }