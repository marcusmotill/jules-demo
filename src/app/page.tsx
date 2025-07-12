export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 md:p-24 bg-transparent text-gray-800">
      {/* Hero Section */}
      <section className="w-full max-w-5xl items-center justify-center text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          Meet Fools: <span className="text-custom-yellow">Your AI Coding Partner</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-700">
          Stop wrestling with code. Fools writes, debugs, and explains it for you, effortlessly.
        </p>
        <div className="mt-12">
          <a
            href="#overview"
            className="px-10 py-4 border border-transparent text-lg font-medium rounded-md text-gray-800 bg-custom-yellow hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discover Fools
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="w-full max-w-5xl py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Why Choose <span className="text-custom-yellow">Fools</span>?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-custom-yellow">
            <h3 className="text-2xl font-semibold text-gray-800">Intelligent Code Generation</h3>
            <p className="mt-4 text-lg text-gray-600">
              Generate boilerplate, complex functions, or even entire application scaffolds with simple, natural language prompts. Save hours of manual coding.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-custom-yellow">
            <h3 className="text-2xl font-semibold text-gray-800">Advanced Debugging Assistance</h3>
            <p className="mt-4 text-lg text-gray-600">
              Identify elusive bugs and get insightful suggestions for fixes. Fools helps you understand errors, not just correct them.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-custom-yellow">
            <h3 className="text-2xl font-semibold text-gray-800">Crystal-Clear Code Explanation</h3>
            <p className="mt-4 text-lg text-gray-600">
              Demystify complex codebases. Get clear, concise explanations of any code snippet, improving your understanding and learning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
