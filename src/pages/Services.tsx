
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AirVent, PaintRoller, Hammer, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "ac-repair",
      title: "AC Repair & Maintenance",
      icon: <AirVent className="h-10 w-10" />,
      description: "Professional AC repair, maintenance and installation services for your home or office.",
      features: [
        "AC troubleshooting and repairs",
        "Regular maintenance and cleaning",
        "New unit installation",
        "Energy efficiency assessment"
      ]
    },
    {
      id: "painting",
      title: "Painting Services",
      icon: <PaintRoller className="h-10 w-10" />,
      description: "Transform your space with our professional painting services for interior and exterior walls.",
      features: [
        "Interior wall painting",
        "Exterior painting",
        "Ceiling painting",
        "Furniture painting and refinishing"
      ]
    },
    {
      id: "carpentry",
      title: "Carpentry Work",
      icon: <Hammer className="h-10 w-10" />,
      description: "Custom carpentry solutions from furniture assembly to custom-made cabinets and repairs.",
      features: [
        "Furniture assembly and repair",
        "Custom cabinet making",
        "Door and window fitting",
        "Wooden flooring installation"
      ]
    },
    {
      id: "moving",
      title: "Moving & Delivery",
      icon: <Truck className="h-10 w-10" />,
      description: "Reliable moving and delivery services with professional handling of your belongings.",
      features: [
        "Local and long-distance moving",
        "Furniture and appliance delivery",
        "Packing and unpacking services",
        "Storage solutions"
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-homefix-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="max-w-2xl mx-auto text-homefix-100">
              Professional home services delivered by trained experts across the UK.
              Explore our range of services and book online today.
            </p>
          </div>
        </div>

        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <div className="space-y-16">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-homefix-50 p-8 flex flex-col items-center justify-center">
                        <div className="bg-white rounded-full p-5 shadow-md text-homefix-600 mb-4">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-center">{service.title}</h2>
                      </div>
                      <div className="md:w-2/3 p-8">
                        <p className="text-gray-700 mb-6">{service.description}</p>
                        <h3 className="font-semibold text-lg mb-4">What we offer:</h3>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="h-5 w-5 text-homefix-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-homefix-600 hover:bg-homefix-700">
                          Book this Service
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
