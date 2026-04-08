import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 sm:pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-800 rounded-full border border-green-100">
              MSME Approved Organization
            </div>
            <h1 className="text-gray-900">
              Empowering Your Vision with{' '}
              <span className="text-green-600">360° Project Solutions</span>
            </h1>
            <p className="text-gray-600">
              We deliver comprehensive project development, cutting-edge research services, and real-time client solutions tailored for students, professionals, and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors shadow-lg shadow-green-200"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Our Services
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-green-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-green-600">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-green-600">96%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjY0MDM1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <div className="text-gray-900">Trusted Partner</div>
                  <div className="text-gray-500">For Your Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}