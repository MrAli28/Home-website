import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, CalendarCheck, Wrench, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Search",
      description: "Browse through our wide range of home services and choose the one that meets your needs.",
      icon: <Search className="h-12 w-12 mb-4 text-primary" />,
    },
    {
      title: "Book",
      description: "Select a convenient date and time slot that works for you and complete your booking.",
      icon: <CalendarCheck className="h-12 w-12 mb-4 text-primary" />,
    },
    {
      title: "Get Served",
      description: "Our verified professional will arrive at your doorstep to provide the service.",
      icon: <Wrench className="h-12 w-12 mb-4 text-primary" />,
    },
    {
      title: "Pay",
      description: "Once the service is completed to your satisfaction, make a secure payment.",
      icon: <CreditCard className="h-12 w-12 mb-4 text-primary" />,
    },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">How It Works</h1>
          <p className="text-slate-600 mb-12 text-center text-lg">
            We've made getting home services as simple as possible - just four easy steps from search to completion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center relative border border-slate-100"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                {step.icon}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-16">
            <h2 className="text-2xl font-bold mb-4">Customer Satisfaction Guarantee</h2>
            <p className="text-slate-600 mb-6">
              We're committed to ensuring your complete satisfaction with every service booking. 
              If you're not happy with the service provided, we'll work to make it right.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Verified and background-checked professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Secure online payment after service completion</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 customer support for any issues</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-slate-600 mb-8">
              Book your first service now and experience the convenience of Homefix UK Solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/book">Book a Service</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
