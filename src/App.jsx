import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  Facebook, 
  CheckCircle, 
  TrendingUp, 
  PenTool, 
  MousePointer 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-bold text-2xl text-blue-600">Ododoola.</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-slate-600 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section id="home" className="pt-20 pb-24 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Turning Words & Strategy <br />
            <span className="text-blue-600">Into Measurable Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            I help growing brands attract, engage, and convert their ideal audience through high-impact content, email marketing, and paid ad campaigns that deliver ROI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Work With Me <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Book a Free Strategy Call
            </button>
          </div>
        </div>
        
        {/* Services Preview Bar */}
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Content Writing", desc: "Blogs & copy that educate & rank." },
            { title: "Email Marketing", desc: "Automated flows that drive sales." },
            { title: "Paid Ads", desc: "Meta & Google campaigns tailored for ROI." }
          ].map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            {/* Placeholder for Image */}
            <div className="bg-slate-200 w-full h-96 rounded-2xl flex items-center justify-center text-slate-400">
              <img 
  src="https://drive.google.com/thumbnail?id=1vNf-LFFeZtMNYDFiHPqI3gfynFGNzBg4&sz=w1000" 
  alt="Ododoola Oyewo" 
  className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
/>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Meet Ododoola Oyewo: The Digital Marketer & Writer Obsessed With Your Growth</h2>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              I’m a digital marketing specialist and content writer dedicated to taking your brand from a "hidden gem" to a top-of-mind name.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              From writing stories as a kid to building full-funnel strategies for clients, I’ve always believed in the power of words. Today, I combine creativity with data to help businesses grow through intentional content, smart email campaigns, and high-performing ads.
            </p>
            <p className="font-medium text-blue-800 mb-8">
              Let’s work together to grow your business with strategy, consistency, and results that speak.
            </p>
            <button onClick={() => scrollToSection('contact')} className="text-blue-600 font-bold hover:underline flex items-center gap-2">
              Start a Project <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Services Page */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing That Works</h2>
            <p className="text-slate-600">No guesswork. Just strategies that nurture, sell, and scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <PenTool size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Content Writing</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">Tell your story. Get results.</p>
              <p className="text-slate-600 mb-6 text-sm">I write blog posts, landing pages, and social content that builds trust and ranks on Google.</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> SEO Blog Writing</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Website Copy</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Product Descriptions</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
              <p className="text-sm font-semibold text-purple-600 mb-4">Nurture, sell, and scale.</p>
              <p className="text-slate-600 mb-6 text-sm">Set up or optimize your email flows to turn subscribers into customers.</p>
              <ul className="space-y-2 text-sm text-slate-700 mb-6">
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Campaign Strategy</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Automated Flows</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Newsletter Writing</li>
              </ul>
              <div className="text-xs text-slate-400 pt-4 border-t">
                Tools: ConvertKit, Mailchimp, Klaviyo
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <MousePointer size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Social & Paid Ads</h3>
              <p className="text-sm font-semibold text-orange-600 mb-4">Ads that deliver ROI.</p>
              <p className="text-slate-600 mb-6 text-sm">Find your people and turn them into customers using data-driven ad strategies.</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Meta (FB/IG) Ads</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Google Search Ads</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500"/> Funnel Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real Results. Real Growth.</h2>
            <p className="text-slate-600">A few highlights from recent projects.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-blue-600" />
                <span className="font-bold text-slate-800">Tekcanon Mentorship Course</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Platform: Meta Ads (Instagram)</p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">52</div>
                    <div className="text-xs text-slate-500">Sign-ups in 2 weeks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3.8x</div>
                    <div className="text-xs text-slate-500">ROAS</div>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                <strong>Strategy:</strong> Targeted interest-based audiences combined with high-urgency copy to drive paid mentorship signups.
              </p>
            </div>

            {/* Case Study 2 */}
            <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-orange-600" />
                <span className="font-bold text-slate-800">Afro Tech Event Campaign</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Platform: Google Search Ads</p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">300+</div>
                    <div className="text-xs text-slate-500">Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">22%</div>
                    <div className="text-xs text-slate-500">Conversion Rate</div>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                <strong>Strategy:</strong> Geo-targeted USA search ads focusing on high-intent keywords and urgency-based CTAs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contact')} className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
              Want results like this? Let’s talk <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-slate-300 mb-8">
              Have a project or need help deciding what your business needs most right now? I’d love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email Me</div>
                  <a href="mailto:ododoolamioyewo@gmail.com" className="hover:text-blue-400">ododoolamioyewo@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Call / WhatsApp</div>
                  <a href="tel:+2348134716706" className="hover:text-blue-400">+234 813 471 6706</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-slate-400 font-medium mb-4">Connect on Socials</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ododoola-oyewo" target="_blank" rel="noreferrer" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/ododo.ola" target="_blank" rel="noreferrer" className="w-10 h-10 bg-pink-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/oyewo.ododoola" target="_blank" rel="noreferrer" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none">
                  <option>Content Writing</option>
                  <option>Email Marketing</option>
                  <option>Paid Ads (Meta/Google)</option>
                  <option>Strategy Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea rows="4" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" placeholder="Tell me about your goals..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ododoola Oyewo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
