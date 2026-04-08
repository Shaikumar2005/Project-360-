import { Target, Award, Users, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower students and professionals with innovative project solutions and research expertise.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "MSME-approved with commitment to delivering excellence in every project.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Real-time solutions tailored to meet your unique requirements and goals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology and research methodologies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHByb2plY3QlMjB3b3JrfGVufDF8fHx8MTc2NjQwNDE2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students working on projects"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-gray-900 mb-4">
                About <span className="text-green-700">PROJECTS 360°</span>
              </h2>
              <p className="text-gray-600 text-lg">
                PROJECTS 360° is an MSME-approved organization
                dedicated to providing comprehensive project
                development and research services. We specialize
                in delivering real-time solutions to college
                students, early-career professionals, and
                businesses seeking technical expertise.
              </p>
              <p className="text-gray-600 text-lg">
                With a team of experienced professionals and
                industry experts, we bridge the gap between
                academic learning and practical implementation,
                ensuring every project meets the highest
                standards of quality and innovation.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      <Icon className="text-green-700" size={24} />
                    </div>
                    <h3 className="text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}