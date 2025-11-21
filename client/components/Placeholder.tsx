import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-[calc(100vh-240px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="glass-lg p-12 sm:p-16 max-w-2xl w-full text-center animate-fade-in">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="text-white" size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6 mb-8">
          <p className="text-blue-100 text-sm font-medium">
            💡 This page is ready to be built! Continue in the chat to add
            features and customize this page to your needs.
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
  );
}
