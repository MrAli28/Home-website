
import { AirVent, PaintRoller, Hammer, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="service-card group">
    <div className="p-4 rounded-full bg-homefix-50 text-homefix-600 mb-5 group-hover:bg-homefix-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-5">{description}</p>
    <Button variant="link" className="text-homefix-600 hover:text-homefix-800 p-0 font-medium">
      Learn more
    </Button>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "AC Repair",
      description: "Professional AC repair, maintenance and installation services for your home or office.",
      icon: <AirVent className="h-8 w-8" />,
    },
    {
      title: "Painting",
      description: "Transform your space with our professional painting services for interior and exterior walls.",
      icon: <PaintRoller className="h-8 w-8" />,
    },
    {
      title: "Carpentry",
      description: "Custom carpentry solutions from furniture assembly to custom-made cabinets and repairs.",
      icon: <Hammer className="h-8 w-8" />,
    },
    {
      title: "Moving & Delivery",
      description: "Reliable moving and delivery services with professional handling of your belongings.",
      icon: <Truck className="h-8 w-8" />,
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of home services delivered by trained professionals to ensure quality and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-homefix-600 hover:bg-homefix-700">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
