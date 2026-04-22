export default function CTA() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500 transition group">
            <div className="text-4xl mb-4">??</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">Full Home Interiors</h3>
            <p className="text-white/80 font-light mb-6">Complete end-to-end interior design solutions for your entire home</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition text-sm font-medium">Learn More ?</a>
          </div>

          {/* Service Card 2 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500 transition group">
            <div className="text-4xl mb-4">?????</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">Modular Kitchen</h3>
            <p className="text-white/80 font-light mb-6">Functional and beautiful kitchen designs with premium materials</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition text-sm font-medium">Learn More ?</a>
          </div>

          {/* Service Card 3 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500 transition group">
            <div className="text-4xl mb-4">??</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">Wardrobe Design</h3>
            <p className="text-white/80 font-light mb-6">Custom wardrobe solutions maximizing space and style</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition text-sm font-medium">Learn More ?</a>
          </div>

          {/* Service Card 4 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500 transition group">
            <div className="text-4xl mb-4">???</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">Bedroom Design</h3>
            <p className="text-white/80 font-light mb-6">Peaceful and luxurious bedroom interiors for restful living</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition text-sm font-medium">Learn More ?</a>
          </div>

          {/* Service Card 5 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500 transition group">
            <div className="text-4xl mb-4">???</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">Living Room</h3>
            <p className="text-white/80 font-light mb-6">Elegant living spaces that bring families together</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition text-sm font-medium">Learn More ?</a>
          </div>

          {/* Service Card 6 */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500 transition group">
            <div className="text-4xl mb-4">??</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">Renovations</h3>
            <p className="text-white/80 font-light mb-6">Expert renovation services to refresh your existing spaces</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 transition text-sm font-medium">Learn More ?</a>
          </div>
        </div>

        <div className="mt-16 p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Design Estimate</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto font-light">Use our price calculator to get an instant estimate for your dream home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Calculate Price
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
