import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase"; // correct path for your structure



export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // 🔥 1. SAVE TO FIRESTORE
    await addDoc(collection(db, "contactMessages"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      createdAt: Timestamp.now(),
    });

    // ✉️ 2. SEND EMAIL
    await emailjs.send(
      "service_8q79n9l",
      "template_umagek3",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      "Z0NwbLDXmsxJW5IW0"
    );

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);

  } catch (error) {
    console.error("Submission error:", error);
    alert("Failed to submit. Please try again.");
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'projectsthreesixty.com@gmail.com',
      link: 'mailto:projectsthreesixty.com@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 97904 46227',
      link: 'tel:+919790446227',
    },
    // {
    //   icon: MapPin,
    //   title: 'Visit Us',
    //   detail: 'Bangalore, Karnataka, India',
    //   link: '#',
    // },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Get In <span className="text-green-700">Touch</span>
          </h2>
          <p className="text-gray-600">
            Ready to start your project? Contact us today and let's bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-green-700" size={20} />
                      </div>
                      <div>
                        <div className="text-gray-900 mb-1">{info.title}</div>
                        <div className="text-gray-600">{info.detail}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-green-700 to-green-800 p-8 rounded-xl text-white shadow-lg">
              <h3 className="mb-4">MSME Certified</h3>
              <p className="mb-4">
                We are an officially recognized MSME-approved organization, committed to delivering quality services and maintaining the highest standards of professionalism.
              </p>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                Trusted by 100+ Clients
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 text-2xl">✓</span>
                  </div>
                  <h3 className="text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="project-development">Project Development</option>
                        <option value="research-services">Research Services</option>
                        <option value="real-time-solutions">Real-Time Solutions</option>
                        <option value="consulting">Project Consulting</option>
                        <option value="innovation">Innovation & Ideation</option>
                        <option value="training">Training & Mentorship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors shadow-lg shadow-green-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}