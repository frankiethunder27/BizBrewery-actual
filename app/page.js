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
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Marketing Suite", 
    description: "5 tools to grow your audience & dominate social media",
    icon: "📣",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "BrandSprint",
    description: "5 tools to build a memorable brand identity",
    icon: "✨",
    color: "from-pink-500 to-rose-600",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🍺</span>
          <span className="font-bold text-xl text-amber-900">{config.appName}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-amber-800 hover:text-amber-600 hidden sm:block">Features</Link>
          <Link href="#pricing" className="text-amber-800 hover:text-amber-600 hidden sm:block">Pricing</Link>
          <ButtonSignin text="Login" />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center gap-8 px-8 py-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            <span>🍺</span> Brewing Business Success Since 2024
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-amber-950 leading-tight">
            15 AI-Powered Tools to
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"> Build, Market & Brand </span>
            Your Business
          </h1>

          <p className="text-xl text-amber-800 max-w-2xl">
            {config.appDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              className="btn btn-lg bg-gradient-to-r from-amber-500 to-orange-600 border-none text-white hover:from-amber-600 hover:to-orange-700 shadow-lg"
              href="/dashboard"
            >
              Start Brewing for Free 🍺
            </Link>
            <Link
              className="btn btn-lg btn-outline border-amber-600 text-amber-700 hover:bg-amber-100 hover:border-amber-600"
              href="#pricing"
            >
              View Pricing
            </Link>
          </div>

          <p className="text-sm text-amber-600 mt-2">
            ✓ No credit card required &nbsp; ✓ Cancel anytime &nbsp; ✓ Lifetime access available
          </p>
        </section>

        {/* Tool Kits Section */}
        <section id="features" className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-950 mb-4">
              Three Powerful Toolkits
            </h2>
            <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
              Everything you need to go from idea to profitable business
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {kits.map((kit) => (
                <div key={kit.name} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{kit.icon}</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{kit.name}</h3>
                  <p className="text-amber-700">{kit.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tools.filter(t => t.kit === kit.name.replace("AI ", "")).slice(0, 5).map(tool => (
                      <span key={tool.name} className="text-xs bg-white px-2 py-1 rounded-full text-amber-800 border border-amber-200">
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
        <section className="py-20 px-8 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-amber-950 mb-12">
              All 15 AI Tools at Your Fingertips
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white rounded-xl p-4 text-center border border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <div className="text-sm font-medium text-amber-900">{tool.name}</div>
                  <div className="text-xs text-amber-500 mt-1">{tool.kit}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-8 bg-amber-950 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Simple, One-Time Pricing
            </h2>
            <p className="text-center text-amber-200 mb-12">
              Pay once, use forever. No subscriptions, no hidden fees.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {config.stripe.plans.map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`rounded-2xl p-8 ${plan.isFeatured ? 'bg-gradient-to-br from-amber-500 to-orange-600 scale-105 shadow-2xl' : 'bg-amber-900'}`}
                >
                  {plan.isFeatured && (
                    <div className="text-xs font-bold uppercase tracking-wider mb-4 text-amber-950 bg-white inline-block px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-amber-200 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">${plan.price}</span>
                    {plan.priceAnchor && (
                      <span className="text-amber-300 line-through ml-2">${plan.priceAnchor}</span>
                    )}
                    <span className="text-amber-200 text-sm ml-2">one-time</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-2 text-sm">
                        <span className="text-green-400">✓</span> {feature.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/dashboard"
                    className={`btn btn-block ${plan.isFeatured ? 'bg-amber-950 text-white hover:bg-amber-900' : 'bg-amber-500 text-white hover:bg-amber-600'}`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Brew Your Success? 🍺
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Join entrepreneurs who are building smarter with AI
            </p>
            <Link
              href="/dashboard"
              className="btn btn-lg bg-white text-amber-700 hover:bg-amber-50 border-none shadow-lg"
            >
              Start Building Now →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍺</span>
            <span className="font-bold text-white">{config.appName}</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/tos" className="hover:text-white">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          </div>
          <p className="text-sm">© 2024 {config.appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
