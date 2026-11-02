import { File, Award, Briefcase, GraduationCap, Code2 } from 'lucide-react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Responsive Design', ''] },
    { category: 'Design', items: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing', 'Design Systems'] },
    { category: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'npm/yarn', 'RESTful APIs', 'Agile/Scrum'] }
  ]

  const experience = [
    {
      title: 'AI/ML Engineer in Training',
      company: 'Tech Crush.',
      period: 'Sep 2026 - Present',
      description: 'Building foundational and practical expertise in AI/ML engineering and applied machine learning. Gaining hands-on experience in data preprocessing, building predictive models, documenting technical workflows, and managing end-to-end machine learning pipelines from concept to execution in collaborative and independent settings.'
    },
    {
      title: 'Front-end Developer',
      company: 'Drips-Network',
      period: 'Jan 2026 - Present',
      description: 'Managed open-source repository hygiene by triaging GitHub issues, organizing community discussions, and maintaining project documentation. Prepared technical release notes, coordinated asynchronous team communication, and supported core maintainers with pull request reviews and workflow tracking.'
      },
      {
      title: 'Web Development Intern',
      company: 'Skills Fusion Network LTD',
      period: 'Sep 2025 - Jan 2026',
      description: 'Gained hands-on experience in UI/UX design and front-end web development through practical, project-based training. Applied structured methodologies to design user interfaces, build responsive web components, maintain project documentation, and organize development workflows from concept to execution both independently and collabratively.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Kwara State University',
      period: '2022 - 2026',
      description: 'Focused on web development, software engineering, and human-computer interaction.'
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate frontend developer and UI/UX architect dedicated to crafting 
              beautiful, accessible, and high-performance web experiences currently integrating machine
              learning for a better and authentic experience.
            </p>
          </div>

          {/* Bio Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
              <Code2 className="text-pink-500 flex-shrink-0" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Who I Am</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hello! I'm Firdausi Onize, a frontend developer and UI/UX architect with a passion 
                for creating seamless digital experiences. With expertise in modern web technologies 
                and a keen eye for design, I transform ideas into pixel-perfect, user-friendly interfaces.
              </p>
              <p>
                My journey in web development began with a fascination for how design and code come 
                together to create meaningful interactions. Over the years, I've honed my skills in 
                React, JavaScript, and CSS frameworks, while maintaining a strong focus on accessibility 
                and performance optimization.
              </p>
              <p>
                I believe that great user experiences are built at the intersection of beautiful design 
                and clean, maintainable code. Whether working on a complex web application or a simple 
                landing page, I bring the same level of attention to detail and commitment to quality.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
              <Award className="text-pink-500 flex-shrink-0" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Skills & Expertise</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {skills.map((skillSet, index) => (
                <div key={index} className="bg-pink-50 rounded-lg p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
              <Briefcase className="text-pink-500 flex-shrink-0" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-pink-500 pl-4 md:pl-6 pb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-pink-600 font-semibold mb-2">{job.company}</p>
                  <p className="text-gray-600 text-sm mb-3">{job.period}</p>
                  <p className="text-gray-700">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
              <GraduationCap className="text-pink-500 flex-shrink-0" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-pink-500 pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-pink-600 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-lg p-6 md:p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-white text-pink-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200"
              aria-label="Download Resume"
            >
              <File size={20} />
              <span className="hidden sm:inline">Download My Resume</span>
              <span className="sm:hidden">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
