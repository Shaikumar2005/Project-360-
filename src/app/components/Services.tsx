import { Code, FileSearch, Database, Target, Lightbulb, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Project Development',
      description: 'End-to-end project development services including web applications, mobile apps, and software solutions tailored to your requirements.',
      features: ['Custom Web Development', 'Mobile App Development', 'Software Engineering', 'Technical Documentation'],
    },
    {
      icon: FileSearch,
      title: 'Research Services',
      description: 'Comprehensive research support for academic and industry projects with data analysis, literature review, and methodology design.',
      features: ['Academic Research', 'Data Analysis', 'Literature Review', 'Research Writing'],
    },
    {
      icon: Database,
      title: 'Real-Time Solutions',
      description: 'Immediate support and solutions for urgent project requirements with dedicated expert guidance and implementation.',
      features: ['Quick Turnaround', 'Expert Consultation', 'Problem Solving', '24/7 Support'],
    },
    {
      icon: Target,
      title: 'Project Consulting',
      description: 'Strategic guidance for project planning, execution, and delivery to ensure successful outcomes and timely completion.',
      features: ['Project Planning', 'Timeline Management', 'Quality Assurance', 'Risk Assessment'],
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Ideation',
      description: 'Brainstorming sessions and innovative solutions to help transform your ideas into viable projects and products.',
      features: ['Idea Validation', 'Prototype Development', 'Market Research', 'Feasibility Studies'],
    },
    {
      icon: Users,
      title: 'Training & Mentorship',
      description: 'Skill development programs and one-on-one mentoring for students and professionals to enhance technical capabilities.',
      features: ['Technical Training', 'Career Guidance', 'Skill Development', 'Industry Insights'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Our <span className="text-green-700">Services</span>
          </h2>
          <p className="text-gray-600">
            Comprehensive solutions designed to support your journey from concept to completion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                  <Icon className="text-green-700" size={28} />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-green-700 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}