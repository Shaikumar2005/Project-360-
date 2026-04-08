import logoImage from "../../assets/logo.png";
import { Linkedin, Instagram } from "lucide-react";


export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Why Us', 'Contact'];
  const services = [
    'Project Development',
    'Research Services',
    'Real-Time Solutions',
    'Consulting',
    'Training',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <img src={logoImage} alt="PROJECTS 360°" className="h-12 mb-4" />
            <p className="mb-4">
              MSME-approved organization delivering comprehensive project development and research services.
            </p>
            <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 rounded">
              MSME Certified
            </div>
            {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/projectsthreesixty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/projects360__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="hover:text-green-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="hover:text-green-400 transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:projectsthreesixty.com@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  projectsthreesixty.com@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-green-400 transition-colors"
                >
                  +91 9790446227
                </a>
              </li>
              {/* <li className="text-gray-400">
                Bangalore, Karnataka, India
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} PROJECTS 360°. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
