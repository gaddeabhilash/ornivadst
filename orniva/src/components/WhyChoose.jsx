export default function WhyChoose() {
  const features = [
    { icon: "?", title: "Lifetime Warranty", desc: "Comprehensive warranty on all crafted works for your peace of mind" },
    { icon: "?", title: "146 Quality Checks", desc: "Rigorous quality assurance at every stage of production" },
    { icon: "??", title: "45-Day Move-In", desc: "Fast execution without compromising on quality standards" },
    { icon: "??", title: "Expert Designers", desc: "50+ skilled interior design professionals" },
    { icon: "??", title: "Award-Winning", desc: "Recognized for excellence and innovative designs" },
    { icon: "??", title: "25+ Cities", desc: "Serving customers across multiple locations" }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50" id="why-choose">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-6">Why Choose Orniva?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">We deliver exceptional interior design services backed by years of expertise, quality assurance, and customer satisfaction</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">5000+</div>
            <div className="text-sm text-gray-600 font-light">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-sm text-gray-600 font-light">Expert Designers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-sm text-gray-600 font-light">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-sm text-gray-600 font-light">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
