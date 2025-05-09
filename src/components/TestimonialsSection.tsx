
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "James Wilson",
      location: "London",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Excellent service from start to finish. The AC repair technician was knowledgeable and fixed my unit in no time. Will definitely use HomeFix again!",
      service: "AC Repair",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      location: "Manchester",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The painters were professional, tidy and completed the work faster than I expected. My living room looks brand new. Very impressed!",
      service: "Painting",
      rating: 5,
    },
    {
      name: "Michael Brown",
      location: "Birmingham",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Used HomeFix for moving services and couldn't be happier. The team was careful with our belongings and very efficient. Great value for money.",
      service: "Moving & Delivery",
      rating: 4,
    },
  ];

  return (
    <section className="section bg-homefix-900 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-homefix-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-homefix-500"></div>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-homefix-100"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="text-sm text-gray-500 mt-4">
                Service used: <span className="text-homefix-600 font-medium">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-homefix-800 text-white px-8 py-6 rounded-lg max-w-2xl text-center">
            <p className="text-lg mb-2 font-medium">
              Join thousands of satisfied customers across the UK
            </p>
            <p className="text-homefix-200">
              With over 50,000 completed jobs and an average rating of 4.8/5, HomeFix is the UK's most trusted home services platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
