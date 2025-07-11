export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 md:p-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="w-full max-w-5xl items-center justify-center text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Meet Fools: Your AI Coding Partner
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Stop wrestling with code. Fools writes, debugs, and explains it for you, effortlessly.
        </p>
        <div className="mt-12">
          <a
            href="#overview"
            className="px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discover Fools
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="w-full max-w-5xl py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200">
          Why Choose Fools?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">Intelligent Code Generation</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Generate boilerplate, complex functions, or even entire application scaffolds with simple, natural language prompts. Save hours of manual coding.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">Advanced Debugging Assistance</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Identify elusive bugs and get insightful suggestions for fixes. Fools helps you understand errors, not just correct them.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">Crystal-Clear Code Explanation</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Demystify complex codebases. Get clear, concise explanations of any code snippet, improving your understanding and learning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
