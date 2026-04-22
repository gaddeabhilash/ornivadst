export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Apartment",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Full Home"
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Kitchen"
    },
    {
      id: 3,
      title: "Master Bedroom Renovation",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1540932239986-310128078ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Bedroom"
    },
    {
      id: 4,
      title: "Minimalist Living Space",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Living Room"
    },
    {
      id: 5,
      title: "Modern Office Makeover",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1593642702019-ec41b8b52b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Office"
    },
    {
      id: 6,
      title: "Elegant Wardrobe Design",
      location: "Gurgaon",
      image: "https://images.unsplash.com/photo-1535221228889-2a1a26b1ce47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Wardrobe"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-6">Our Recent Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">Explore our portfolio of beautifully designed interiors from across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="relative h-[350px] overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition opacity-0 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
