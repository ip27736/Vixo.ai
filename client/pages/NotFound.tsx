import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-240px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-lg p-12 sm:p-16 max-w-2xl w-full text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-7xl sm:text-8xl font-bold gradient-text mb-4">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Oops! We couldn't find the page you're looking for at{" "}
            <code className="bg-white/10 px-2 py-1 rounded text-purple-300 text-sm">
              {location.pathname}
            </code>
          </p>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <p className="text-blue-100 text-sm font-medium">
              💡 This page doesn't exist yet, but many great features are being
              built. Head back home or check the other sections of the platform!
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Back to Home <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
