
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose a Service",
      description: "Select from our wide range of professional home services based on your needs.",
      number: 1,
    },
    {
      title: "Schedule an Appointment",
      description: "Pick a date and time that works best for you and book your service instantly.",
      number: 2,
    },
    {
      title: "Get the Service Done",
      description: "Our verified professionals will arrive on time and complete the work to your satisfaction.",
      number: 3,
    },
    {
      title: "Payment & Feedback",
      description: "Pay securely through our platform and share your experience to help others.",
      number: 4,
    },
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How HomeFix Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your home services done has never been easier. Follow these simple steps to book a service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-homefix-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                {step.number}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-homefix-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-homefix-800">
            Why Choose HomeFix UK?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-homefix-600 h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg">Verified Professionals</h4>
                <p className="text-gray-600">All our service providers undergo strict verification and training.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-homefix-600 h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg">Transparent Pricing</h4>
                <p className="text-gray-600">No hidden fees. Know exactly what you're paying for.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-homefix-600 h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg">100% Satisfaction</h4>
                <p className="text-gray-600">Not happy? We'll make it right or refund your payment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-homefix-600 h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg">Insured Services</h4>
                <p className="text-gray-600">All our services are fully insured for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
