import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white pt-[100px] pb-16 px-4" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{opacity:0, x:-50}} animate={{opacity:1, x:0}} transition={{duration: 0.8}}
          >
            <div className="text-sm font-semibold text-orange-500 mb-4 uppercase tracking-wide">Welcome to Orniva</div>
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-gray-900 leading-[1.1] mb-6">
              Home to Beautiful Interiors
            </h1>
            
            <p className="text-gray-600 text-lg md:text-[18px] font-light mb-8 leading-relaxed max-w-2xl">
              Transform your living spaces into stunning sanctuaries. We specialize in creating beautiful, functional interiors tailored to your unique style and lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold rounded-lg transition">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600 font-light mt-1">Happy Homes</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600 font-light mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600 font-light mt-1">Expert Designers</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration: 0.8}}
          >
            <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Beautiful Home Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-100 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
