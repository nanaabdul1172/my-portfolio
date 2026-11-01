import { ExternalLink, Github } from 'lucide-react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce website with shopping cart, product filtering, and checkout functionality. Built with React and integrated with a REST API for product management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'REST API', 'Context API'],
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/nanafirdausi/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'An intuitive task management application with drag-and-drop functionality, priority levels, and team collaboration features. Features real-time updates and data persistence.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'Local Storage', 'CSS3'],
      liveUrl: 'https://example.com/taskmanager',
      githubUrl: 'https://github.com/nanafirdausi/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A clean and modern weather application that provides real-time weather data, 7-day forecasts, and location-based services using geolocation API.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS', 'Geolocation'],
      liveUrl: 'https://example.com/weather',
      githubUrl: 'https://github.com/nanafirdausi/weather-app',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website Template',
      description: 'A customizable portfolio template designed for creatives and developers. Features smooth animations, dark mode toggle, and fully responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      liveUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/nanafirdausi/portfolio-template',
      featured: false
    },
    {
      id: 5,
      title: 'Restaurant Menu App',
      description: 'An interactive restaurant menu application with category filtering, search functionality, and a responsive design optimized for mobile ordering.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'CSS Grid', 'Responsive Design'],
      liveUrl: 'https://example.com/restaurant',
      githubUrl: 'https://github.com/nanafirdausi/restaurant-menu',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics dashboard displaying social media metrics, charts, and insights with a modern UI and data visualization components.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://example.com/dashboard',
      githubUrl: 'https://github.com/nanafirdausi/social-dashboard',
      featured: true
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a curated selection of my work, showcasing a diverse range of
              modern web technologies, design principles, and user-centric solutions.
              Each project reflects my commitment to creating robust, user-friendly
              and visually appealing applications.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
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
                    
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors font-semibold"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
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
          <div className="mt-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate and bring your ideas to life with clean code and beautiful design.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200"
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
