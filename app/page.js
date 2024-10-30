"use client"
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Wand2, Play, Sparkles, Zap, Share2, Layers, ArrowRight } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleSignIn = () => {
    router.push('/dashboard');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <motion.div
          className="p-4 bg-white/10 rounded-full backdrop-blur-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-white/10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Wand2 className="h-8 w-8 text-purple-400 animate-pulse" />
              <span className="text-2xl font-bold">Video Generator AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <Button onClick={() => router.push('/pricing')} variant="ghost">
                Pricing
              </Button>
              <Button onClick={() => router.push('/examples')} variant="ghost">
                Examples
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-gray-900 opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.1 }}
            >
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-purple-200">AI-Powered Video Generation</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-text-flow">
              Create Stunning Videos with AI
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              Transform your ideas into professional videos in minutes using cutting-edge AI technology.
              Perfect for marketing, education, and social media content.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={handleSignIn}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-xl text-lg flex items-center space-x-2 w-full sm:w-auto transition-all transform hover:scale-105"
              >
                <span>Start Creating</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                onClick={() => router.push('/demo')}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-6 rounded-xl text-lg flex items-center space-x-2 w-full sm:w-auto transition-all transform hover:scale-105"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </motion.div>

          {/* Video Preview */}
          <motion.div 
            className="relative max-w-4xl mx-auto mb-32 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/1200x675/?ai,video"
                alt="AI Video Generation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <Play className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">See it in action</p>
                    <p className="text-purple-200">Watch how easy it is to create videos</p>
                  </div>
                </div>
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
          >
            {[
              {
                icon: <Zap className="h-8 w-8 text-purple-400" />,
                title: "Lightning Fast",
                description: "Generate professional videos in under 5 minutes with our advanced AI technology"
              },
              {
                icon: <Layers className="h-8 w-8 text-purple-400" />,
                title: "Multiple Styles",
                description: "Choose from various templates and styles to match your brand and message"
              },
              {
                icon: <Share2 className="h-8 w-8 text-purple-400" />,
                title: "Easy Sharing",
                description: "Export directly to social media platforms or download in multiple formats"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-purple-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "100K+", label: "Videos Created" },
              { number: "4.9/5", label: "User Rating" },
              { number: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-purple-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-purple-200 mb-8">
              Join thousands of creators who are already using Video Generator AI
              to create stunning content that engages their audience.
            </p>
            <Button 
              onClick={handleSignIn}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-xl text-lg"
            >
              Get Started for Free
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wand2 className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">Video Generator AI</span>
            </div>
            <div className="flex space-x-6 text-purple-200">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
