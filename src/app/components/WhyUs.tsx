import { Award, Users, Target, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: 'MSME Approved',
      description: 'Officially recognized and certified by MSME, ensuring quality and reliability in all our services.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge and academic expertise across multiple domains.',
    },
    {
      icon: Target,
      title: 'Timely Delivery',
      description: 'Committed to meeting deadlines without compromising on quality, ensuring your projects are delivered on time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Approach',
      description: 'Leveraging the latest technologies and methodologies to provide cutting-edge solutions.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '100+', label: 'Satisfied Clients' },
    { value: '50+', label: 'Expert Team Members' },
    { value: '96%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Why Choose <span className="text-green-700">Us</span>
          </h2>
          <p className="text-gray-600">
            Your trusted partner for comprehensive project solutions and research excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Reasons */}
          <div className="space-y-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center">
                      <Icon className="text-green-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY2NDAzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-green-700 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}