import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import config from "@/config";

const tools = [
  { name: "Product Idea Generator", icon: "💡", kit: "Profit Engine" },
  { name: "Content Strategist", icon: "📊", kit: "Profit Engine" },
  { name: "Copywriter AI", icon: "✍️", kit: "Profit Engine" },
  { name: "Email Sequence Builder", icon: "📧", kit: "Profit Engine" },
  { name: "Affiliate Program Creator", icon: "🤝", kit: "Profit Engine" },
  { name: "Social Media Manager", icon: "📱", kit: "Marketing Suite" },
  { name: "Content Generator", icon: "📝", kit: "Marketing Suite" },
  { name: "Trend Spotter", icon: "📈", kit: "Marketing Suite" },
  { name: "Marketing Mentor", icon: "🎯", kit: "Marketing Suite" },
  { name: "Community Builder", icon: "👥", kit: "Marketing Suite" },
  { name: "Brand Audit", icon: "🔍", kit: "BrandSprint" },
  { name: "Voice Vault", icon: "🎤", kit: "BrandSprint" },
  { name: "Logo Sketch", icon: "🎨", kit: "BrandSprint" },
  { name: "Palette Picker", icon: "🌈", kit: "BrandSprint" },
  { name: "Tagline Turbo", icon: "⚡", kit: "BrandSprint" },
];

const kits = [
  {
    name: "AI Profit Engine",
    description: "5 tools to validate ideas, create content & build revenue streams",
    icon: "🚀",
    color: "from-lime-500 to-green-600",
  },
  {
    name: "Marketing Suite", 
    description: "5 tools to grow your audience & dominate social media",
    icon: "📣",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "BrandSprint",
    description: "5 tools to build a memorable brand identity",
    icon: "✨",
    color: "from-teal-500 to-cyan-600",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">⚗️</span>
          <span className="font-bold text-xl text-white">{config.appName}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-slate-300 hover:text-lime-400 hidden sm:block">Features</Link>
          <Link href="#pricing" className="text-slate-300 hover:text-lime-400 hidden sm:block">Pricing</Link>
          <ButtonSignin text="Login" />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center gap-8 px-8 py-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 px-4 py-2 rounded-full text-sm font-medium border border-lime-500/20">
            <span>⚗️</span> Distilling Business Success
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            15 AI Tools to
            <span className="bg-gradient-to-r from-lime-400 to-sky-400 bg-clip-text text-transparent"> Cook Up </span>
            Your Dream Business
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl">
            No tech skills needed. No intimidating dashboards. Just tell our AI what you want to build, and watch your business take shape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              className="btn btn-lg bg-gradient-to-r from-lime-500 to-green-600 border-none text-slate-900 font-bold hover:from-lime-400 hover:to-green-500 shadow-lg shadow-lime-500/25"
              href="/dashboard"
            >
              Start Cooking ⚗️
            </Link>
            <Link
              className="btn btn-lg btn-outline border-sky-500 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400"
              href="#pricing"
            >
              View Pricing
            </Link>
          </div>

          <p className="text-sm text-slate-500 mt-2">
            ✓ No credit card required &nbsp; ✓ Cancel anytime &nbsp; ✓ Lifetime access available
          </p>
        </section>

        {/* Tool Kits Section */}
        <section id="features" className="py-20 px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Three Powerful Toolkits
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Everything you need to go from idea to profitable business
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {kits.map((kit) => (
                <div key={kit.name} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl shadow-black/50 hover:border-lime-500/50 hover:shadow-lime-500/20 transition-all">
                  <div className="text-5xl mb-4">{kit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{kit.name}</h3>
                  <p className="text-slate-400">{kit.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tools.filter(t => t.kit === kit.name.replace("AI ", "")).slice(0, 5).map(tool => (
                      <span key={tool.name} className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-300 border border-slate-600">
                        {tool.icon} {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Tools Grid */}
        <section className="py-20 px-8 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              All 15 AI Tools at Your Fingertips
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700 shadow-xl shadow-black/40 hover:border-lime-500 hover:shadow-lime-500/20 transition-all cursor-pointer group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <div className="text-sm font-medium text-white">{tool.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{tool.kit}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-8 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Simple, One-Time Pricing
            </h2>
            <p className="text-center text-slate-400 mb-12">
              Pay once, use forever. No subscriptions, no hidden fees.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {config.stripe.plans.map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`rounded-2xl p-8 ${plan.isFeatured ? 'bg-gradient-to-br from-lime-500 to-sky-500 scale-105 shadow-2xl shadow-lime-500/30' : 'bg-slate-800 border border-slate-700 shadow-2xl shadow-black/50'}`}
                >
                  {plan.isFeatured && (
                    <div className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-900 bg-white inline-block px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plan.isFeatured ? 'text-slate-900' : 'text-white'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.isFeatured ? 'text-slate-700' : 'text-slate-400'}`}>{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-extrabold ${plan.isFeatured ? 'text-slate-900' : 'text-white'}`}>${plan.price}</span>
                    {plan.priceAnchor && (
                      <span className={`line-through ml-2 ${plan.isFeatured ? 'text-slate-600' : 'text-slate-500'}`}>${plan.priceAnchor}</span>
                    )}
                    <span className={`text-sm ml-2 ${plan.isFeatured ? 'text-slate-700' : 'text-slate-400'}`}>one-time</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className={`flex items-center gap-2 text-sm ${plan.isFeatured ? 'text-slate-800' : 'text-slate-300'}`}>
                        <span className={plan.isFeatured ? 'text-slate-900' : 'text-lime-400'}>✓</span> {feature.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/dashboard"
                    className={`btn btn-block ${plan.isFeatured ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-lime-500 text-slate-900 hover:bg-lime-400'}`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-lime-500 to-sky-500 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Ready to Cook Up Something Special? ⚗️
            </h2>
            <p className="text-xl text-slate-800 mb-8">
              Join entrepreneurs who are building smarter with AI
            </p>
            <Link
              href="/dashboard"
              className="btn btn-lg bg-slate-900 text-white hover:bg-slate-800 border-none shadow-lg"
            >
              Start Building Now →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚗️</span>
            <span className="font-bold text-white">{config.appName}</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/blog" className="hover:text-lime-400">Blog</Link>
            <Link href="/tos" className="hover:text-lime-400">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-lime-400">Privacy</Link>
          </div>
          <p className="text-sm">© 2024 {config.appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
