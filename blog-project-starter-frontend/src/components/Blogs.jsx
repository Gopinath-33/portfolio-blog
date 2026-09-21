import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

// Admin User ID
const ADMIN_UID = "R34Mk11I4zbjNCad8ImdTHAgl013"

// Live Vercel Backend URL
const API_BASE_URL = "https://portfolio-blog-1gem.vercel.app/api/blogs"

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_BASE_URL)
      if (Array.isArray(res.data)) {
        setBlogs(res.data)
      } else {
        setBlogs([])
      }
    } catch (err) {
      console.error("Error fetching blogs:", err.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchBlogs()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setAuthLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Handle Likes
  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/like/${blog_id}`)
      if (response.status === 200) {
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog._id === blog_id ? { ...blog, likes: (blog.likes || 0) + 1 } : blog
          )
        )
      }
    } catch (error) {
      console.error('Error liking the blog post:', error.message)
    }
  }

  // Handle Blog Deletion (Admin only)
  const handleDeleteBlog = async (blog_id) => {
    if (currentUser?.uid !== ADMIN_UID) {
      alert("Unauthorized! Only admin can delete blogs.")
      return
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this blog post?")
    if (!confirmDelete) return

    try {
      const response = await axios.delete(`${API_BASE_URL}/${blog_id}`)
      if (response.status === 200) {
        alert("Blog deleted successfully!")
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blog_id))
      }
    } catch (error) {
      console.error("Error deleting blog:", error.response?.data || error.message)
      alert(`Deletion failed: ${error.response?.data?.message || error.message}`)
    }
  }

  // Handle Publishing New Post
  const handleNewBlogSubmit = async (event) => {
    event.preventDefault()

    if (!newTitle.trim() || !newContent.trim()) {
      alert("Please provide both a title and content.")
      return
    }

    if (currentUser?.uid !== ADMIN_UID) {
      alert("Unauthorized! Only admin can publish blogs.")
      return
    }

    setIsSubmitting(true)
    const today = new Date()
    const date = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const payload = {
      newTitle: newTitle.trim(),
      newContent: newContent.trim(),
      date,
      likes: 0
    }

    try {
      const response = await axios.post(API_BASE_URL, payload)
      if (response.status === 200 || response.status === 201) {
        alert("Blog published successfully!")
        setNewTitle('')
        setNewContent('')
        fetchBlogs()
      }
    } catch (error) {
      console.error("Error creating blog:", error.response?.data || error.message)
      alert(`Publishing failed: ${error.response?.data?.message || error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isAdmin = Boolean(currentUser && currentUser.uid === ADMIN_UID)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-12 space-y-16">
        <header className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Tech Articles & Logs
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Latest <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Blogs</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Thoughts, tutorials, and practical dev notes straight from my workbench.
          </p>
        </header>

        {/* Blog Creation Card - Admin only */}
        {!authLoading && isAdmin && (
          <section className="relative max-w-2xl mx-auto w-full animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-2xl rounded-3xl pointer-events-none" />

            <div className="relative rounded-2xl bg-slate-900/80 border border-violet-500/30 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Admin Panel: Publish a New Post
                </h2>
                <span className="text-xs px-2.5 py-1 rounded-md bg-violet-950 border border-violet-700/50 text-violet-300 font-semibold">
                  Admin
                </span>
              </div>

              <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter article title..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm"
                  required
                />
                <textarea
                  placeholder="Write your article content here..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto self-end px-7 py-3 rounded-xl font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? "Publishing..." : "Publish Post →"}
                </button>
              </form>
            </div>
          </section>
        )}

        {/* Blog Post Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-500 border border-dashed border-slate-800 rounded-2xl">
              No articles published yet.
            </div>
          ) : (
            blogs.map((blog) => (
              <article
                key={blog._id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-violet-300 font-medium">
                      Article
                    </span>
                    <div className="flex items-center gap-3">
                      <time dateTime={blog.date}>{blog.date}</time>
                      
                      {!authLoading && isAdmin && (
                        <button
                          onClick={() => handleDeleteBlog(blog._id)}
                          title="Delete Blog"
                          className="px-2 py-0.5 rounded text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:border-rose-500/50 transition-all cursor-pointer"
                        >
                          🗑️ Delete
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-violet-300 transition-colors">
                    {blog.newTitle}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                    {blog.newContent}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleLike(blog._id)}
                    className="group/btn flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-violet-600/20 border border-slate-700 hover:border-violet-500/40 text-xs font-semibold text-slate-300 hover:text-violet-400 transition-all cursor-pointer"
                  >
                    <span className="text-base group-hover/btn:scale-125 transition-transform">❤️</span>
                    <span>Like</span>
                  </button>

                  <span className="text-xs font-semibold text-slate-400">
                    {blog.likes || 0} <span className="text-slate-500 font-normal">Likes</span>
                  </span>
                </div>
              </article>
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Blogs