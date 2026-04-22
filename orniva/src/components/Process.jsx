import { CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We understand your vision and requirements in a personalized consultation session"
    },
    {
      num: "02",
      title: "Design & Planning",
      desc: "Our designers create custom designs with 3D visualizations and detailed plans"
    },
    {
      num: "03",
      title: "Production",
      desc: "High-quality materials are sourced and manufactured with precision and care"
    },
    {
      num: "04",
      title: "Installation",
      desc: "Expert installers bring your design to life with meticulous attention to detail"
    },
    {
      num: "05",
      title: "Quality Check",
      desc: "Rigorous quality checks ensure every element meets our high standards"
    },
    {
      num: "06",
      title: "Move-In",
      desc: "You move into your beautiful new home within 45 days of starting the project"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-6">Our Design Process</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">From concept to completion, we ensure quality at every step</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="p-8 rounded-lg border-2 border-gray-200 hover:border-orange-500 transition group">
              <div className="text-4xl font-bold text-orange-500 mb-4 group-hover:text-orange-600">{step.num}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 font-light">{step.desc}</p>
              <div className="mt-6 flex items-center text-orange-500">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Home?</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light">Start your interior design journey today with a free consultation</p>
          <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg">
            Book Your Consultation Now
          </button>
        </div>
      </div>
    </section>
  );
}
