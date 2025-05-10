import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  // Categories of FAQs
  const categories = [
    {
      id: "booking",
      label: "Booking & Scheduling",
      faqs: [
        {
          question: "How do I book a service?",
          answer: "You can book a service by visiting our 'Book a Service' page, selecting the service you need, choosing a date and time that works for you, and filling out your contact and address information. Once submitted, you'll receive a confirmation email with the details of your booking."
        },
        {
          question: "Can I reschedule my booking?",
          answer: "Yes, you can reschedule your booking up to 24 hours before the scheduled service time. Simply log in to your account, go to 'My Bookings', find the booking you wish to reschedule, and click on the reschedule option. You'll be able to select a new date and time based on availability."
        },
        {
          question: "What if the service provider is late?",
          answer: "Our service providers strive to arrive within the scheduled time window. However, if they're running late, they will contact you directly. If a provider is more than 30 minutes late without communication, please contact our customer support, and we'll resolve the issue promptly."
        },
        {
          question: "How far in advance should I book a service?",
          answer: "We recommend booking services at least 48 hours in advance to ensure availability. However, we do offer same-day emergency services for urgent issues like plumbing emergencies or electrical outages, subject to provider availability."
        }
      ]
    },
    {
      id: "payment",
      label: "Payments & Pricing",
      faqs: [
        {
          question: "How much does each service cost?",
          answer: "Service costs vary depending on the type of service, complexity, and materials required. You can get a price estimate by selecting your service on our booking page. The final price may be adjusted based on the actual work performed, but our providers will always discuss any additional costs with you before proceeding."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. Payment is processed securely through our platform after the service has been completed to your satisfaction."
        },
        {
          question: "Do I need to pay a deposit?",
          answer: "For standard services, no deposit is required. For larger projects or services requiring special materials, a 25% deposit may be requested at the time of booking. This will be clearly indicated during the booking process."
        },
        {
          question: "What is your refund policy?",
          answer: "If you're not satisfied with the service provided, please contact us within 48 hours of service completion. We'll work to resolve the issue by sending a provider back to address the problem or by providing a partial or full refund, depending on the circumstances."
        }
      ]
    },
    {
      id: "providers",
      label: "Service Providers",
      faqs: [
        {
          question: "How are your service providers vetted?",
          answer: "All our service providers undergo a comprehensive vetting process that includes background checks, verification of qualifications and certifications, skills assessment, and reference checks. We only partner with professionals who meet our high standards of expertise and customer service."
        },
        {
          question: "Are your service providers insured?",
          answer: "Yes, all service providers on our platform are required to have public liability insurance and professional indemnity insurance. This ensures that you're protected in the unlikely event of damage to your property or substandard work."
        },
        {
          question: "Can I request a specific service provider?",
          answer: "Yes, if you've had a positive experience with a particular provider, you can request them for future bookings. Simply note their name in the special requests section during booking, or select them directly if you're logged into your account and have used their services before."
        },
        {
          question: "What qualifications do your providers have?",
          answer: "Our service providers have relevant industry qualifications, certifications, and experience in their specialized fields. For example, our electricians are certified and our plumbers are registered with appropriate trade bodies. You can view a provider's qualifications and ratings on their profile."
        }
      ]
    },
    {
      id: "services",
      label: "Our Services",
      faqs: [
        {
          question: "What areas do you service?",
          answer: "We currently provide services across Greater London, Birmingham, Manchester, Liverpool, Glasgow, Edinburgh, Cardiff, and Bristol. We're continuously expanding our coverage, so please check our booking page to see if we serve your specific postcode."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we offer emergency services for urgent issues like plumbing leaks, electrical outages, and HVAC failures. Emergency services are available 24/7, though rates may be higher outside of standard business hours (8 AM to 6 PM, Monday to Friday)."
        },
        {
          question: "What if I need multiple services?",
          answer: "You can book multiple services either separately or as a package. For extensive home renovation or maintenance projects requiring multiple skill sets, we recommend contacting our customer support to create a customized plan that coordinates different service providers efficiently."
        },
        {
          question: "Do you provide the materials needed for services?",
          answer: "For standard services, our providers bring basic materials and tools needed. For larger projects or specialized materials, the provider will discuss requirements with you in advance. You can either purchase materials yourself or have the provider source them (with costs added to your final bill)."
        }
      ]
    },
    {
      id: "account",
      label: "Account & Profile",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking on the 'Sign Up' button at the top of our website. Fill in your personal details, create a password, and verify your email address. Having an account allows you to manage bookings, save addresses, and access service history."
        },
        {
          question: "How can I change my account information?",
          answer: "To update your account information, log in and go to your dashboard. Click on the 'Profile' or 'Settings' tab to edit your personal details, contact information, saved addresses, and payment methods."
        },
        {
          question: "Can I have multiple addresses saved in my account?",
          answer: "Yes, you can save multiple addresses in your account. This is particularly useful if you need services at different locations, such as your home and a rental property. You can add, edit, or remove addresses in the 'Addresses' section of your account settings."
        },
        {
          question: "How do I delete my account?",
          answer: "If you wish to delete your account, please go to your account settings and select the 'Delete Account' option. Alternatively, you can contact our customer support team who will assist you with the process. Please note that deleting your account will remove all your personal information and service history."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Help Center</h1>
        <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">
          Find answers to common questions about our services, booking process, payments, and more.
        </p>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input 
              className="pl-10 py-6 text-base" 
              placeholder="Search for answers..."
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <Tabs defaultValue="booking">
            <TabsList className="mb-8 w-full flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-white rounded-lg shadow-sm border border-slate-100">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="px-6 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <p className="text-slate-600">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Still Have Questions?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
              <p className="text-slate-600 mb-6">
                Get in touch with our friendly customer support team for personalized assistance.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-slate-600 mb-6">
                Chat with our support team in real-time for immediate assistance with your queries.
              </p>
              <Button variant="outline">Start Chat</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQs;
