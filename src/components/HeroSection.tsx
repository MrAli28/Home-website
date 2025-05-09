
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-homefix-800 to-homefix-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-20 md:py-28">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Home Services at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
              From AC repair to painting, carpentry, and moving services. 
              Quality professionals available across the UK, just a click away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-homefix-500 hover:bg-homefix-600 text-white border-none font-semibold px-8">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Book a Service Now</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Service Type
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-md text-white focus:ring-homefix-400 focus:border-homefix-400"
                  >
                    <option value="" disabled selected className="text-gray-800">Select a service</option>
                    <option value="ac-repair" className="text-gray-800">AC Repair</option>
                    <option value="painting" className="text-gray-800">Painting</option>
                    <option value="carpentry" className="text-gray-800">Carpentry</option>
                    <option value="cleaning" className="text-gray-800">Cleaning</option>
                    <option value="ceiling" className="text-gray-800">Ceiling Work</option>
                    <option value="moving" className="text-gray-800">Moving & Delivery</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                      Location
                    </label>
                    <select
                      id="location"
                      className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-md text-white focus:ring-homefix-400 focus:border-homefix-400"
                    >
                      <option value="" disabled selected className="text-gray-800">Select city</option>
                      <option value="london" className="text-gray-800">London</option>
                      <option value="manchester" className="text-gray-800">Manchester</option>
                      <option value="birmingham" className="text-gray-800">Birmingham</option>
                      <option value="glasgow" className="text-gray-800">Glasgow</option>
                      <option value="liverpool" className="text-gray-800">Liverpool</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 bg-white/20 border border-gray-300/30 rounded-md text-white focus:ring-homefix-400 focus:border-homefix-400"
                    />
                  </div>
                </div>
                <Button className="w-full bg-homefix-500 hover:bg-homefix-600 text-white py-3 font-semibold">
                  Check Availability
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-background">
          <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
