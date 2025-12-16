import React, { useState, useEffect } from 'react';
import { Scale, Shield, FileText, Eye, Gavel, Users, Building2, Briefcase, ArrowRight, Menu, X, AlertTriangle, Lock, Key } from 'lucide-react';

// --- Sub-Components (Moved OUTSIDE of App to fix focus issues) ---

const Navigation = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen, scrolled }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveSection('home')}>
          <div className="bg-slate-100 p-1.5 rounded-sm">
            <Scale className="h-6 w-6 text-slate-900" />
          </div>
          <span className="text-slate-100 font-serif font-bold text-xl tracking-wider uppercase">The Rule of Law Project</span>
        </div>
        
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {['Mission', 'Methodology', 'Scope', 'Strategy'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 ${
                  activeSection === item.toLowerCase() ? 'text-red-500' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setActiveSection('contact')}
              className="bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-sm text-sm uppercase tracking-widest font-medium transition-all duration-200"
            >
              Join
            </button>
          </div>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-slate-900 border-b border-slate-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'Mission', 'Methodology', 'Scope', 'Strategy', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item.toLowerCase());
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const LoginScreen = ({ handleLogin, passwordInput, setPasswordInput, loginError }) => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 font-sans">
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 bg-slate-900 flex items-center justify-center rounded-full border border-slate-800 mb-6">
          <Lock className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="mt-6 text-3xl font-serif font-bold text-white tracking-tight">
          Restricted Access
        </h2>
        <p className="mt-2 text-sm text-slate-400 uppercase tracking-widest">
          The Rule of Law Project
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none relative block w-full px-3 py-4 border border-slate-700 placeholder-slate-500 text-white bg-slate-900 rounded-sm focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm text-center tracking-widest transition-colors"
              placeholder="ENTER ACCESS CODE"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        {loginError && (
          <div className="text-red-500 text-xs text-center uppercase tracking-widest font-bold animate-pulse">
            Access Denied: Invalid Credentials
          </div>
        )}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-sm text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 uppercase tracking-widest transition-all"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <Key className="h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors" aria-hidden="true" />
            </span>
            Authenticate
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Hero = ({ setActiveSection }) => (
  <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
    <div className="absolute inset-0 opacity-10" 
         style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div className="inline-flex items-center justify-center space-x-2 border border-red-900/50 bg-red-900/10 px-4 py-1.5 rounded-full mb-8">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        <span className="text-red-200 text-xs font-bold uppercase tracking-widest">A Crisis of Impunity</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
        Restoring the Expectation that <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Unlawful Conduct</span> Has Consequences
      </h1>
      
      <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
        The current administration and its private-sector enablers are violating federal, state, and international law on a daily basis, with open contempt for the rule of law. 
        We exist to reverse the equation: We will document unlawful acts, build prosecution-ready cases, and ensure that accountability is inevitable.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button 
          onClick={() => setActiveSection('mission')}
          className="group bg-white text-slate-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
        >
          Read The Proposal
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </button>
        <button 
          onClick={() => setActiveSection('methodology')}
          className="border border-slate-600 text-slate-300 px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-slate-800 hover:border-slate-500 transition-all"
        >
          Our Methodology
        </button>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
  </div>
);

const Mission = () => (
  <div className="bg-slate-950 py-24 px-4 min-h-screen flex items-center">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-red-600"></div>
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm">The Problem</h2>
        </div>
        
        <h3 className="text-4xl font-serif text-white leading-tight">
          The United States faces a crisis of impunity.
        </h3>
        
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            The current administration and its private-sector enablers are violating federal, state, and international law on a daily basis, with open contempt for the rule of law. 
          </p>
          <p>
            Acts of corruption, retaliation, and obstruction now occur in plain sight, while accountability disappears into the darkness of an endlessly deferred future.
          </p>
          <p>
            The message to the powerful and powerless alike is clear: <strong>disobey unlawful orders and you will be punished; comply and you will be rewarded.</strong> 
          </p>
          <p>
            For those making this calculation, recent history counsels no greater caution:
          </p>
           <blockquote className="border-l-4 border-red-700 pl-6 italic text-slate-400 my-8">
            From the abuses of the post 9/11 "war on terror" to the crimes of the 2008 financial crisis, the United States has routinely failed to punish the rich, well-armed, and powerful for their lawlessness. 
          </blockquote>
          <p>
            Indeed, the lesson has been clear: <strong>The bigger the crime, the safer the culprit.</strong>
          </p>
          <blockquote className="border-l-4 border-red-700 pl-6 italic text-slate-400 my-8">
          </blockquote>
          <p className="font-medium text-white">
            The Rule of Law Project will reverse that equation.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-900/20 to-slate-800/20 blur-xl rounded-lg"></div>
        <div className="relative bg-slate-900 p-8 md:p-12 rounded-sm border border-slate-800 shadow-2xl">
          <h4 className="text-2xl font-serif text-white mb-6">Our Foundational Goal</h4>
          <div className="space-y-6">
            {[
              "Document unlawful acts in real-time.",
              "Build prosecution-ready case files.",
              "Signal clearly that accountability is inevitable.",
              "Deter future abuses by naming individuals and institutions."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/30 p-1 rounded-full">
                  <Shield className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Methodology = () => (
  <div className="bg-slate-900 py-24 px-4 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">Project Strategy</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-white">Four Pillars of Accountability</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-red-900/50 transition-all group">
          <div className="mb-6 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-red-900/20 transition-colors">
            <Eye className="text-red-500 w-8 h-8" />
          </div>
          <h4 className="text-2xl text-white font-bold mb-4">1. Investigate and Document</h4>
          <p className="text-slate-400 leading-relaxed">
            We will collect and verify evidence of unlawful conduct. Sources include court filings, FOIA materials, whistleblower accounts, financial records, and outside investigative reporting. We build the evidentiary record while the trail is fresh.
          </p>
        </div>

        <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-red-900/50 transition-all group">
          <div className="mb-6 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-red-900/20 transition-colors">
            <FileText className="text-red-500 w-8 h-8" />
          </div>
          <h4 className="text-2xl text-white font-bold mb-4">2. Build Legal Cases</h4>
          <p className="text-slate-400 leading-relaxed">
            Each case will be analyzed against federal, state, and international law. The Project will prepare mock indictments and legal memoranda demonstrating probable cause. All materials will meet prosecutorial standards for accuracy and evidentiary integrity.
          </p>
        </div>

        <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-red-900/50 transition-all group">
          <div className="mb-6 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-red-900/20 transition-colors">
            <AlertTriangle className="text-red-500 w-8 h-8" />
          </div>
          <h4 className="text-2xl text-white font-bold mb-4">3. Deter and Expose</h4>
          <p className="text-slate-400 leading-relaxed">
            We will publish findings naming responsible parties and detailing their legal exposure. Public disclosure shifts incentives: officials, executives, and professionals who might otherwise comply with illegal orders will begin to think twice when faced with reputational and legal risk.
          </p>
        </div>

        <div className="bg-slate-800/50 p-8 border border-slate-700 hover:border-red-900/50 transition-all group">
          <div className="mb-6 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-sm group-hover:bg-red-900/20 transition-colors">
            <Lock className="text-red-500 w-8 h-8" />
          </div>
          <h4 className="text-2xl text-white font-bold mb-4">4. Preserve for Future Prosecution</h4>
          <p className="text-slate-400 leading-relaxed">
            Comprehensive, legally structured case files will be preserved for use by future administrations committed to the rule of law and for current independent prosecutors at the state level. When political conditions permit, these materials will enable immediate investigations leading to prosecutions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Scope = () => (
  <div className="bg-slate-950 py-24 px-4 min-h-screen flex items-center">
    <div className="max-w-5xl mx-auto w-full">
      <div className="mb-16 border-l-4 border-white pl-6">
        <h3 className="text-4xl font-serif text-white mb-2">Scope of Investigation</h3>
        <p className="text-slate-400 text-lg">We monitor actors across the spectrum of power.</p>
      </div>

      <div className="space-y-4">
        {[
          {
            icon: <Building2 className="w-6 h-6" />,
            title: "Government Officials",
            desc: "Those who issue, authorize, or carry out unlawful orders."
          },
          {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Private Individuals & Corporations",
            desc: "Those engaging in bribery, fraud, or other corrupt practices in exchange for influence, access, or profit."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Professional Enablers",
            desc: "Lawyers, accountants, consultants, and lobbyists who facilitate, justify, or conceal unlawful conduct through professional services or misinformation."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Enforcement Personnel",
            desc: "Law enforcement, military, and immigration personnel who participate in or enable illegal operations, detentions, or use of force."
          },
          {
            icon: <Gavel className="w-6 h-6" />,
            title: "Political Appointees & Senior Civil Servants",
            desc: "Those who abuse office to obstruct justice, retaliate against whistleblowers, or subvert lawful oversight."
          }
        ].map((target, i) => (
          <div key={i} className="group flex items-center bg-slate-900 p-6 border-l-2 border-transparent hover:border-red-500 transition-all hover:bg-slate-800">
            <div className="text-slate-500 group-hover:text-red-500 mr-6 transition-colors">
              {target.icon}
            </div>
            <div>
              <h4 className="text-xl text-white font-bold mb-1">{target.title}</h4>
              <p className="text-slate-400">{target.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Strategy = ({ setActiveSection }) => (
  <div className="bg-slate-100 py-24 px-4 min-h-screen text-slate-900">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-8">Looking Ahead</h2>
          <p className="text-lg leading-relaxed mb-6">
            Lawlessness is a cancer. We cannot guarantee that any intervention – this Project included – will stop its spread. But we can be sure that if we do not act – if we do not make <strong>some</strong> effort – it will grow and spread until it has touched us all.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Accountability and deterrence, however, are not untested drugs. Other nations have faced similar crises and proven that a sustained commitment to the rule of law can work.
          </p>
          <div className="bg-white p-8 border-l-4 border-slate-900 shadow-lg">
            <p className="font-serif text-xl italic text-slate-800">
              The United States is late to this work, but not too late. The methods are known. The stakes are clear. The only question is whether we will choose to act.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider border-b border-slate-300 pb-2">Operational Needs</h3>
            <p className="text-slate-600 mb-4 italic">
              The Project will employ experienced prosecutors, investigators, and legal scholars, supported by law students at selected institutions.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-red-600 rounded-full"></div>
                <p className="font-medium">Substantial operating budget through at least January 2029.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-red-600 rounded-full"></div>
                <p className="font-medium">Establishment of a new 501(c)(3).</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-red-600 rounded-full"></div>
                <p className="font-medium">Appropriate liability coverage and data-security protocols.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 text-white p-8 rounded-sm">
            <h4 className="font-bold text-xl mb-2">Support The Project</h4>
            <p className="text-slate-400 mb-6">Help us build the evidentiary record.</p>
            <button 
              onClick={() => setActiveSection('contact')}
              className="w-full bg-red-700 hover:bg-red-600 text-white py-3 px-6 uppercase tracking-widest font-bold transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="bg-slate-950 py-24 px-4 min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full bg-slate-900 p-8 border border-slate-800 rounded-sm shadow-2xl">
      <div className="text-center mb-8">
        <Scale className="w-12 h-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl font-serif text-white">Join</h2>
      </div>
      
      <form 
        className="space-y-6" 
        action="https://formspree.io/f/xvglajny" 
        method="POST"
      >
        <div>
          <label className="block text-slate-400 text-sm uppercase tracking-wider mb-2">Email (Optional)</label>
          <input 
            type="email" 
            name="email"
            className="w-full bg-slate-950 border border-slate-800 text-white p-3 focus:border-red-500 focus:outline-none transition-colors" 
            placeholder="secure@example.com" 
          />
        </div>
        
        <div>
          <label className="block text-slate-400 text-sm uppercase tracking-wider mb-2">Message / Tip</label>
          <textarea 
            name="message"
            className="w-full bg-slate-950 border border-slate-800 text-white p-3 h-32 focus:border-red-500 focus:outline-none transition-colors" 
            placeholder="How can you help? / Report an incident..."
          ></textarea>
        </div>

        <button className="w-full bg-white text-slate-900 py-4 font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
          Submit
        </button>
      </form>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'justice2029') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
      setPasswordInput('');
    }
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'mission': return <Mission />;
      case 'methodology': return <Methodology />;
      case 'scope': return <Scope />;
      case 'strategy': return <Strategy setActiveSection={setActiveSection} />;
      case 'contact': return <Contact />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  if (!isAuthenticated) {
    // Pass the needed props to the external component
    return (
      <LoginScreen 
        handleLogin={handleLogin}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        loginError={loginError}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-red-900 selection:text-white">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />
      
      {/* Main Content Area */}
      <main className="transition-opacity duration-500">
        {renderSection()}
      </main>

      {/* Simple Footer */}
      {activeSection !== 'contact' && (
        <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Scale className="w-6 h-6 text-slate-700" />
          </div>
          <p className="text-slate-600 text-sm uppercase tracking-widest">The Rule of Law Project &copy; 2025</p>
          <p className="text-slate-700 text-xs mt-2">Dedicated to the preservation of justice.</p>
        </footer>
      )}
    </div>
  );
};

export default App;