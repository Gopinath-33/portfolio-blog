import React, { useEffect } from 'react'
import BlogProfileImage from "../assets/home-portfolio.png"

import ResumePDF from "../assets/GOPI-RESUME-MERNSTACK.pdf" // Direct import
import { useNavigate } from 'react-router-dom'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleOpenResume = () => {
    window.open(ResumePDF, '_blank', 'noopener,noreferrer')
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Gopinath-33',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gopinath-m-690725309',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gopinath_0416?stkn=MnV3MjJ6YTY2aDNt',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:gopinath04160@gmail.com',
      icon: (
        <svg className="w-5 h-5 stroke-white fill-none" strokeWidth={2} viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between overflow-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-28 py-12">
        {/* --- HERO SECTION --- */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-8">
          
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

          {/* Left Hero Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-violet-500/10 text-violet-400 border border-violet-500/20">
              👋 Available for Freelance & Full-time
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                Gopinath M
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              I build scalable, modern web applications using the MERN Stack, combining clean design with robust and maintainable architecture. Explore my latest projects and open-source work, or let’s collaborate to bring your ideas to life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer text-sm sm:text-base"
              >
                Hire Me
              </button>
              <button 
                onClick={() => navigate('/blogs')}
                className="px-8 py-3.5 rounded-xl font-medium bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-violet-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer text-sm sm:text-base"
              >
                Read Articles
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2 flex items-center gap-3 justify-center md:justify-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">
                Connect:
              </span>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-violet-500 hover:bg-violet-600/20 hover:-translate-y-1 transition-all duration-200 shadow-md flex items-center justify-center"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative p-2 sm:p-3 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md w-full max-w-lg lg:max-w-xl">
              <img
                src={BlogProfileImage}
                alt="Profile Showcase"
                className="w-full h-auto max-h-[460px] lg:max-h-[520px] rounded-2xl object-cover shadow-inner hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* --- STATS & SERVICES --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="group rounded-2xl bg-gradient-to-br from-violet-950/30 to-slate-900 border border-violet-800/20 p-6 flex flex-col items-center justify-center text-center shadow-lg hover:border-violet-500/40 hover:-translate-y-1.5 transition-all duration-300">
              <span className="text-5xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                15+
              </span>
              <p className="text-sm font-medium text-slate-300 mt-2">Projects Completed</p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-800/20 p-6 flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300">
              <span className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                6+
              </span>
              <p className="text-sm font-medium text-slate-300 mt-2">Months Experience</p>
            </div>

            <div className="col-span-2 rounded-2xl bg-slate-900/50 border border-slate-800/80 p-6 text-center hover:border-slate-700 transition-colors">
              <p className="text-slate-400 text-sm">
                Committed to delivering clean, tested code and scalable user experiences.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-center lg:text-left pl-0 lg:pl-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              My Premium <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Services & Skills
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build responsive, scalable MERN Stack applications tailored to your project needs — from modern React interfaces to complete backend integration.
            </p>
            <div>
              {/* Direct Window Open Action */}
              <button
                type="button"
                onClick={handleOpenResume}
                className="inline-block px-6 py-3 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-violet-500/50 shadow-sm hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer text-center"
              >
                📄 View Qualifications & CV
              </button>
            </div>
          </div>
        </section>

      
  
      </main>

      <Footer />
    </div>
  )
}



export default Home