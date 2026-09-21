import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const quickLinks = [
     { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
     
    { name: 'Project', path: '/project' },
   
    { name: 'Certificate', path: '/certificate' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-16 px-6 sm:px-12 lg:px-20 border-t border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Column 1: Brand & Tagline */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Gopinath M
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
           MERN Stack Developer building clean, responsive & scalable web experiences.
          </p>
        </div>

        {/* Column 2: Quick Links (Vertical List) */}
        <div className="md:col-span-4 space-y-4">
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-100 uppercase inline-block">
              QUICK LINKS
            </h3>
            <div className="w-10 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1.5" />
          </div>

          <ul className="space-y-3 pt-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-sm font-normal block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect / Social Icons */}
        <div className="md:col-span-3 space-y-4">
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-100 uppercase inline-block">
              CONNECT
            </h3>
            <div className="w-10 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-1.5" />
          </div>

         <div className="flex items-center gap-3 pt-2">
  {/* GitHub */}
  <a
    href="https://github.com/Gopinath-33"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900 flex items-center justify-center text-white hover:border-violet-500 hover:bg-violet-600/20 hover:-translate-y-1 transition-all duration-200 shadow-sm"
  >
    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  </a>

  {/* Email */}
  <a
    href="mailto:gopinath04160@gmail.com"
    aria-label="Email"
    className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900 flex items-center justify-center text-white hover:border-violet-500 hover:bg-violet-600/20 hover:-translate-y-1 transition-all duration-200 shadow-sm"
  >
    <svg className="w-5 h-5 stroke-white fill-none" strokeWidth="2" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </a>

  {/* Phone */}
  <a
    href="tel:+916380898186"
    aria-label="Phone"
    className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900 flex items-center justify-center text-white hover:border-violet-500 hover:bg-violet-600/20 hover:-translate-y-1 transition-all duration-200 shadow-sm"
  >
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.61 22 2 13.39 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
    </svg>
  </a>
</div>
        </div>

      </div>
    </footer>
  )
}

export default Footer