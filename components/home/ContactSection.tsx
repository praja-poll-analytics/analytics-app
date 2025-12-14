export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team to learn how we can help you
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
