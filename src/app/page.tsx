import Link from "next/link";

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to build modern web applications with React.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development"
  },
  {
    id: 2,
    title: "The Art of Minimal Design",
    excerpt: "Exploring the principles of minimal design and how it can improve user experience.",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Design"
  },
  {
    id: 3,
    title: "Building Responsive Websites",
    excerpt: "A comprehensive guide to creating websites that work perfectly on all devices.",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Web Development"
  },
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Technology"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-light tracking-tight text-gray-900 hover:text-gray-700 transition-colors duration-200">
                Minima
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900 font-medium transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900 font-medium transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
            Welcome to{" "}
            <span className="font-normal bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Minima
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A clean, minimal blog focused on sharing thoughts, ideas, and insights about technology, design, and life.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Latest Posts</h2>
        
        <div className="grid gap-8 md:gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 hover:border-gray-200/50">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200/50">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
                  <Link href={`/posts/${post.id}`} className="hover:text-gray-600">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 font-light">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-3">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link 
                    href={`/posts/${post.id}`}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center group-hover:translate-x-1 transform transition-transform duration-200"
                  >
                    Read more 
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-light mb-6 tracking-tight">Minima</h3>
            <p className="text-gray-300 mb-12 text-lg font-light max-w-2xl mx-auto">
              Sharing thoughts, ideas, and insights in a minimal way.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 font-light relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 font-light relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/rss" className="text-gray-400 hover:text-white transition-colors duration-200 font-light relative group">
                RSS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="pt-8 border-t border-gray-700/50 text-sm text-gray-400 font-light">
              © 2024 Minima. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
