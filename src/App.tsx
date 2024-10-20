import React, { useState } from 'react';
import { MessageSquare, Mic, FileText, DollarSign, Zap, Check, ChevronDown, Play, Pause, Menu, X } from 'lucide-react';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => setIsRecording(false), 3000);
    }
  };

  const toggleDemo = () => {
    setShowDemo(!showDemo);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-green-500 to-blue-600 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">VoiceText Pro</div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className={`md:flex space-y-4 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-green-500 p-4' : 'hidden'}`}>
              <a href="#features" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-4">
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Turn Your Voice into Text, Instantly!</h1>
          <p className="text-xl md:text-2xl mb-8">Record, Send, and Read - It's That Simple with VoiceText Pro</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-white text-green-500 hover:bg-green-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center justify-center"
            >
              <FileText className="mr-2" />
              Start Free Trial
            </a>
            <button
              onClick={toggleDemo}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center justify-center"
            >
              {showDemo ? <Pause className="mr-2" /> : <Play className="mr-2" />}
              {showDemo ? "Hide Demo" : "Watch Demo"}
            </button>
          </div>
          {showDemo && (
            <div className="mt-8 p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl">
              <video width="100%" height="auto" controls className="rounded-lg shadow-lg">
                <source src="https://example.com/voicetext-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </section>

        <section id="features" className="bg-white bg-opacity-10 backdrop-blur-lg py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why VoiceText Pro is Your Go-To Solution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon={<Mic size={40} />} title="Record Anywhere" description="Use our app or WhatsApp to record your voice messages on the go" />
              <FeatureCard icon={<Zap size={40} />} title="Instant Conversion" description="Get your text back in seconds, right in your WhatsApp chat" />
              <FeatureCard icon={<DollarSign size={40} />} title="Budget-Friendly" description="Only $7 for every 10 hours of recording - save time and money" />
              <FeatureCard icon={<MessageSquare size={40} />} title="Seamless Integration" description="Works directly with WhatsApp - no extra apps needed" />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works - It's Magic, But Real!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard number="1" title="Record Your Message" description="Use our in-app recorder or send a voice note on WhatsApp" />
              <StepCard number="2" title="AI Magic Happens" description="Our advanced AI processes your audio in real-time" />
              <StepCard number="3" title="Receive Your Text" description="Get the transcribed text right in your WhatsApp chat" />
            </div>
            <div className="mt-12 text-center">
              <button
                onClick={toggleRecording}
                className={`${
                  isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                } text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center transition-colors duration-300`}
              >
                {isRecording ? <Pause className="mr-2" /> : <Mic className="mr-2" />}
                {isRecording ? 'Stop Recording' : 'Try Recording Now'}
              </button>
              {isRecording && <p className="mt-4 text-lg">Recording... (This is a demo)</p>}
            </div>
          </div>
        </section>

        <section className="bg-white bg-opacity-10 backdrop-blur-lg py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Happy Users Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard quote="I can finally keep up with all those long voice messages from my friends. VoiceText Pro is a lifesaver!" author="Alex M., Social Butterfly" />
              <TestimonialCard quote="As a busy entrepreneur, this tool has made my communication 10x more efficient. I'm in love!" author="Sarah K., Startup Founder" />
              <TestimonialCard quote="The accuracy is mind-blowing. It even gets my technical jargon right. A must-have for professionals!" author="Dr. Lisa R., Research Scientist" />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing That Makes Sense</h2>
            <div className="max-w-md mx-auto bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-green-500 text-white text-center py-4">
                <h3 className="text-2xl font-semibold">Pay As You Go</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold">$7</span>
                  <span className="text-gray-600"> / 10 hours</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <PricingFeature text="10 hours of voice-to-text conversion" />
                  <PricingFeature text="WhatsApp integration" />
                  <PricingFeature text="AI-powered accuracy" />
                  <PricingFeature text="24/7 customer support" />
                  <PricingFeature text="No monthly fees or commitments" />
                </ul>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300">
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white bg-opacity-10 backdrop-blur-lg py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <FAQItem 
                question="Can I really record directly in WhatsApp?" 
                answer="Yes! Just send a voice message as you normally would in WhatsApp, and our bot will automatically convert it to text for you." 
              />
              <FAQItem 
                question="How accurate is the voice-to-text conversion?" 
                answer="Our AI-powered system achieves over 95% accuracy for most languages and accents. It's constantly learning and improving!" 
              />
              <FAQItem 
                question="Is my data secure?" 
                answer="Absolutely! We use end-to-end encryption and do not store any of your voice messages or transcriptions. Your privacy is our top priority." 
              />
              <FAQItem 
                question="How fast do I get my transcribed text?" 
                answer="Lightning fast! Most conversions are completed within seconds, depending on the length of the voice message. You'll have your text before you know it." 
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Messaging?</h2>
          <p className="text-xl md:text-2xl mb-8">Join thousands of happy users and start converting your voice to text today!</p>
          <a
            href="#pricing"
            className="bg-white text-green-500 hover:bg-green-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center"
          >
            <FileText className="mr-2" />
            Start Your Free Trial Now
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">VoiceText Pro</h3>
              <p>Revolutionizing voice-to-text conversion, one message at a time.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#features" className="hover:text-green-300">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-green-300">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-green-300">Pricing</a></li>
                <li><a href="#faq" className="hover:text-green-300">FAQ</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
              <p>Email: hello@voicetextpro.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <div className="mt-4">
                <a href="#" className="text-white hover:text-green-300 mr-4">Twitter</a>
                <a href="#" className="text-white hover:text-green-300 mr-4">Facebook</a>
                <a href="#" className="text-white hover:text-green-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 VoiceText Pro. All rights reserved. Turning voices into text, and messages into conversations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl">
    <div className="bg-white text-green-500 rounded-full p-3 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
    <div className="text-4xl font-bold mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
    <p className="mb-4">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

const PricingFeature = ({ text }) => (
  <li className="flex items-center">
    <Check size={20} className="text-green-500 mr-2" />
    {text}
  </li>
);

const FAQItem = ({ question, answer }) => (
  <details className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">
    <summary className="font-semibold cursor-pointer flex justify-between items-center">
      {question}
      <ChevronDown size={20} />
    </summary>
    <p className="mt-2">{answer}</p>
  </details>
);

export default App;