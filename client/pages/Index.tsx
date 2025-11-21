import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Activity,
  BarChart3,
  Camera,
  Zap,
  Shield,
  Smartphone,
  ArrowRight,
  Check,
  Play,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Camera,
      title: "Real-time Detection",
      description:
        "Advanced facial recognition technology that accurately detects and tracks tics in real-time sessions.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Comprehensive statistics and insights about your tics, including frequency, severity, and trends.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Track your tics anywhere, anytime. Fully responsive design works seamlessly on all devices.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data is encrypted and secure. Complete control over your personal health information.",
    },
    {
      icon: Zap,
      title: "Instant Clips",
      description:
        "Capture and save clips of your sessions for review and sharing with healthcare providers.",
    },
    {
      icon: Activity,
      title: "Custom Tracking",
      description:
        "Define your own tic categories and track exactly what matters to you.",
    },
  ];

  const pages = [
    "Landing Page",
    "Onboarding",
    "Dashboard",
    "Live Session Mode",
    "Results & Analytics",
    "History & Clips",
    "Custom Tic Creator",
    "Settings",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl opacity-50 animate-float"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl opacity-50 animate-float"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Track Your Tics</span>
            <br />
            <span className="text-white">With Precision</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Vixo.ai is the most advanced facial tic tracking platform, powered
            by cutting-edge AI technology. Monitor, analyze, and manage your tics
            with real-time detection and comprehensive analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up">
            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-4 rounded-xl glass hover:bg-white/20 text-white font-semibold transition-all duration-300 flex items-center gap-2">
              <Play size={20} /> Watch Demo
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 animate-scale-in">
            {["Real-time AI", "Privacy Focused", "Cross-Platform"].map(
              (feature, i) => (
                <div
                  key={feature}
                  className="glass px-4 py-2 rounded-full text-sm text-gray-200 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  ✨ {feature}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to track, analyze, and understand your tics with
              precision and ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-lg p-8 hover:bg-white/15 transition-all duration-300 hover:border-white/40 animate-slide-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Pages Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Complete Platform
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A full-featured facial tic tracking platform with everything from
              onboarding to detailed analytics.
            </p>
          </div>

          <div className="glass-lg p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {pages.map((page, index) => (
                <div
                  key={page}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Check className="text-purple-400 flex-shrink-0" size={24} />
                  <span className="text-gray-200 font-medium">{page}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simple, intuitive steps to start tracking your tics today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Sign Up & Onboard",
                description:
                  "Create your account and configure your camera permissions and initial settings.",
              },
              {
                number: "2",
                title: "Start Tracking",
                description:
                  "Enter live session mode and let our AI detect and count your tics in real-time.",
              },
              {
                number: "3",
                title: "Review & Analyze",
                description:
                  "View detailed results, trends, and clips to understand your tic patterns better.",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-lg p-8 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 font-bold text-white text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-lg p-12 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none" />
            <div className="relative z-10 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Track Your Tics?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already benefiting from Vixo.ai's
                advanced tic tracking and analysis platform.
              </p>
              <Link
                to="/dashboard"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
