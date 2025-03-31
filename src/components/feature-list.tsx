import { Check, Droplet, AlertTriangle, Clock, BarChart3, Smartphone, Battery } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function FeatureList() {
  return (
    <div className="w-full py-12 lg:py-24">
      <div className="container mx-auto px-5 md:px-6">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Smart Monitoring</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Real-Time Water Intelligence
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Monitor your water quality with precision and ease, for healthier living.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-4 md:gap-6 w-full items-start">
                <Droplet className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Hardness Detection</p>
                  <p className="text-muted-foreground text-sm">
                    Precisely measures calcium levels to identify hard water that damages skin and appliances.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <AlertTriangle className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Contaminant Alerts</p>
                  <p className="text-muted-foreground text-sm">
                    Instant notifications when lead or harmful chemicals are detected in your water supply.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Clock className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">24/7 Monitoring</p>
                  <p className="text-muted-foreground text-sm">
                    Continuous water quality tracking with historical data analysis and trends.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 w-full items-start">
                <BarChart3 className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Community Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Compare your water quality with others in your area through anonymous data sharing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Smartphone className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Mobile Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Access real-time data and insights anywhere through our intuitive mobile application.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 md:gap-6 items-start">
                <Battery className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Energy Efficient</p>
                  <p className="text-muted-foreground text-sm">
                    Battery-free options available with innovative power-saving technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureList }; 