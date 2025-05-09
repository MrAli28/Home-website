
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-homefix-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About HomeFix UK</h1>
            <p className="max-w-2xl mx-auto text-homefix-100">
              Your trusted partner for professional home services across the UK.
            </p>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3')" }}>
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-gray-700 mb-6">
                    Founded in 2015, HomeFix UK started with a simple mission: to make home services accessible, reliable, and hassle-free for everyone across the United Kingdom.
                  </p>
                  <p className="text-gray-700 mb-6">
                    What began as a small team of dedicated professionals in London has grown into a nationwide network of verified experts delivering quality services to thousands of homes every month.
                  </p>
                  <p className="text-gray-700">
                    Today, HomeFix UK is the leading platform connecting homeowners with skilled professionals for all their home service needs, from AC repair and painting to carpentry, cleaning, and moving services.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <div className="bg-homefix-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="h-8 w-8 text-homefix-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Trust & Reliability</h3>
                  <p className="text-gray-600">
                    We verify all our professionals and stand behind their work with our satisfaction guarantee.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <div className="bg-homefix-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="h-8 w-8 text-homefix-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Efficiency & Quality</h3>
                  <p className="text-gray-600">
                    We're committed to delivering high-quality services efficiently, respecting your time and home.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <div className="bg-homefix-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="h-8 w-8 text-homefix-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    We believe in clear, upfront pricing with no hidden fees or surprises when the bill arrives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
