import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Complete online shopping solution with payment integration and inventory management for a retail business.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2NjYwNzA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling and telemedicine features for healthcare providers.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY2NjE5ODExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'API'],
    },
    {
      title: 'Market Research Analysis',
      category: 'Research Services',
      description: 'Comprehensive market analysis and consumer behavior study for a startup launching a new product line.',
      image: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjByZXNlYXJjaHxlbnwxfHx8fDE3NjY2NzY5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Data Analysis', 'Survey', 'Insights'],
    },
    {
      title: 'Inventory Management System',
      category: 'Enterprise Solution',
      description: 'Real-time inventory tracking and automated reordering system for a manufacturing company.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2NjYwNzA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Django', 'PostgreSQL'],
    },
    {
      title: 'Student Portal Development',
      category: 'Educational Platform',
      description: 'Integrated learning management system with assignment submission and grade tracking for an educational institution.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY2NjE5ODExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Angular', 'Express', 'MySQL'],
    },
    {
      title: 'AI-Powered Recommendation System',
      category: 'Machine Learning',
      description: 'Intelligent product recommendation engine using machine learning algorithms for an e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjByZXNlYXJjaHxlbnwxfHx8fDE3NjY2NzY5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'TensorFlow', 'ML'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Our <span className="text-green-700">Projects</span>
          </h2>
          <p className="text-gray-600">
            Explore our portfolio of successful projects across various domains and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-700 rounded-full text-sm border border-gray-200">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 bg-white">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details */}
                <button className="inline-flex items-center text-green-700 hover:text-green-800 transition-colors group">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have a project in mind?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors shadow-lg shadow-green-200"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}