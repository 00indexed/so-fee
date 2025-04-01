import {
  TargetIcon,
  BarChartIcon,
  MobileIcon,
  LockClosedIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: TargetIcon,
    name: "Hardness Sensor",
    description: "Monitor calcium levels in real-time to understand how hard water affects your skin, hair, and appliances.",
    href: "#features",
    cta: "Learn more",
    className: "md:col-span-1 lg:row-span-1",
  },
  {
    Icon: LockClosedIcon,
    name: "Lead & Chemical Alerts",
    description: "Get instant notifications about harmful contaminants in your water supply for total peace of mind.",
    href: "#features",
    cta: "Learn more",
    className: "md:col-span-1 lg:row-span-1",
  },
  {
    Icon: MobileIcon,
    name: "Mobile App Sync",
    description: "Access your water quality data anytime, anywhere with our intuitive mobile application.",
    href: "#app-demo",
    cta: "View App",
    className: "md:col-span-1 lg:row-span-1",
  },
  {
    Icon: BarChartIcon,
    name: "Community Insights",
    description: "Contribute to and benefit from anonymized community water quality data across your city.",
    href: "#map",
    cta: "See the Map",
    className: "md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: LightningBoltIcon,
    name: "Battery-Free Options",
    description: "Enjoy maintenance-free operation with our innovative battery-free technology options.",
    href: "#features",
    cta: "Learn more",
    className: "md:col-span-2 lg:col-span-1 lg:row-span-1",
  },
];

export function BentoFeatures() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-Time Water Intelligence in a Click.</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Our smart water monitoring system gives you complete control and understanding of your water quality.</p>
      </div>
      
      <BentoGrid className="grid-flow-dense">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      
      <div className="text-center mt-10">
        <a 
          href="#app-demo" 
          className="text-blue-600 font-medium hover:underline flex items-center justify-center"
        >
          See Full App Demo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
} 