import { FeatureCard } from "@/components/ui/feature-card";


// Define the type for the features object
type Features = {
  cognitive: {
    title: string;
    points: string[];
  };
  dynamic_paths: {
    title: string;
    points: string[];
  };
  ai_problem_solving: {
    title: string;
    points: string[];
  };
  ai_mentor: {
    title: string;
    points: string[];
  };
};

async function getFeatures(): Promise<{ features: Features }> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/congify/key-features`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch features: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching features:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export async function FeaturesGrid() {
  try {
    const { features } = await getFeatures();

    return (
      <div className="relative grid grid-cols-2 grid-rows-2 w-full h-full  mx-auto">
        <div className="flex justify-start items-start">
          <FeatureCard
            type="cognitive"
            title={features.cognitive.title}
            points={features.cognitive.points}
            position="top-left"
          />
        </div>
        <div className="flex justify-end items-start">
          <FeatureCard
            type="dynamic_paths"
            title={features.dynamic_paths.title}
            points={features.dynamic_paths.points}
            position="top-right"
          />
        </div>
        <div className="flex justify-start items-end">
          <FeatureCard
            type="ai_problem_solving"
            title={features.ai_problem_solving.title}
            points={features.ai_problem_solving.points}
            position="bottom-left"
          />
        </div>
        <div className="flex justify-end items-end">
          <FeatureCard
            type="ai_mentor"
            title={features.ai_mentor.title}
            points={features.ai_mentor.points}
            position="bottom-right"
          />
        </div>
      </div>
    );
  }   catch (error) {
    console.error("Error rendering FeaturesGrid:", error);
    return <div>Error loading features</div>; // Handle the error gracefully
  }
}