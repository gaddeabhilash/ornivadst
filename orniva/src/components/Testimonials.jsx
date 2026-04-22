export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Orniva transformed our home beyond our expectations. The team was professional, punctual, and delivered exactly what we dreamed of. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      text: "Best interior design service I have ever experienced. The 45-day move-in guarantee was fulfilled perfectly. Outstanding work quality!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Aisha Khan",
      location: "Delhi",
      text: "The attention to detail is remarkable. Every corner of our home reflects our personality. The warranty and after-sales support are fantastic.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">Join thousands of happy homeowners who transformed their spaces with Orniva</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400">?</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
