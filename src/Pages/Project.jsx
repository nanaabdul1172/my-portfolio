import { ExternalLink, Github } from 'lucide-react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Medcentric AI',
      description: 'Medcentric AI is an educational, full-stack web application designed to demonstrate how machine learning can be applied to early cardiovascular risk screening and health assessment.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'FAST API', 'REST API', 'Python'],
      liveUrl: 'Https://medcentric-ai-eight.vercel.app/',
      githubUrl: 'https://github.com/nanaabdul1172/MEDCENTRIC-AI',
      featured: true
    },
    
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a curated selection of my work, showcasing a diverse range of
              modern web technologies, design principles, and user-centric solutions.
              Each project reflects my commitment to creating robust, user-friendly
              and visually appealing applications.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Featured Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {projects.filter(project => project.featured).map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors font-semibold text-sm md:text-base"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-sm md:text-base"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Other Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.filter(project => !project.featured).map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-pink-500 hover:text-pink-600 transition-colors font-semibold text-sm"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-semibold text-sm"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-lg p-6 md:p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Let's collaborate and bring your ideas to life with clean code and beautiful design.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-pink-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
