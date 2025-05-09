
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section bg-homefix-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your service today and experience hassle-free home solutions. 
                Our professional team is ready to help you with any project.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-homefix-600 hover:bg-homefix-700">
                  Book a Service Now
                </Button>
                <Button size="lg" variant="outline" className="border-homefix-600 text-homefix-600 hover:bg-homefix-50">
                  Contact Our Team
                </Button>
              </div>
            </div>
            <div 
              className="bg-cover bg-center h-64 md:h-auto" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
              }}
            >
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Serving Major Cities Across the UK</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Leeds", "Edinburgh", "Bristol", "Sheffield", "Newcastle"].map((city) => (
              <span 
                key={city} 
                className="bg-white py-2 px-4 rounded-full shadow-sm border border-gray-200 text-gray-700 hover:bg-homefix-50 transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
