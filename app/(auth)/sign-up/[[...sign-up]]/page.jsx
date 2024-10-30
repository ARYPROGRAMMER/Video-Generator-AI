"use client"
import React, { useState } from 'react';
import { SignUp } from '@clerk/nextjs';
import { Wand2, Zap, Film, Share2, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const SignUpPage = () => {
  const router = useRouter();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Generation",
      description: "Create professional videos in under 5 minutes",
      image: "/api/placeholder/800/400",
      delay: 0.2
    },
    {
      icon: Film,
      title: "4K Quality Output",
      description: "High-resolution videos ready for any platform",
      image: "/api/placeholder/800/400",
      delay: 0.3
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Direct export to social media platforms",
      image: "/api/placeholder/800/400",
      delay: 0.4
    }
  ];

  const testimonials = [
    {
      image: "/api/placeholder/150/150",
      name: "Sarah Chen",
      role: "Content Creator",
      quote: "Video Generator AI has revolutionized my content creation process!"
    },
    {
      image: "/api/placeholder/150/150",
      name: "Alex Rivera",
      role: "Marketing Director",
      quote: "What used to take hours now takes minutes. Simply amazing!"
    }
  ];


  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-5/12 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          {...floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 10, 0],
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <div className="relative z-10 max-w-xl mx-auto">
          
          {/* Brand Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => router.push('/')}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Create Stunning Videos with AI
              </h2>
              <p className="text-xl text-purple-200">
                Transform your ideas into professional videos in minutes using the power of artificial intelligence
              </p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: feature.delay }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-md relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: hoveredFeature === index ? 1 : 0,
                      scale: hoveredFeature === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="bg-purple-500/20 p-3 rounded-lg"
                    animate={{
                      rotate: hoveredFeature === index ? 360 : 0,
                      scale: hoveredFeature === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  
                  <div className="relative">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-purple-200">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-purple-500 bg-gradient-to-br from-purple-400 to-pink-400"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.p 
                className="text-purple-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Trusted by 10,000+ content creators
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Sign Up Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-7/12 bg-white"
      >
        <div className="h-full flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-xl">
            {/* Main Sign Up Card */}
            <motion.div 
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <motion.div 
                className="mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Start Creating Now
                </h2>
                <p className="text-gray-600 mt-2">Generate your first AI video in minutes</p>
              </motion.div>

              <motion.div 
                className="py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <SignUp />
              </motion.div>
            </motion.div>

            {/* Testimonials Carousel */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl mb-4"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 italic">{testimonial.quote}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.p 
                className="text-sm text-gray-500 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Powering next-generation video creation
              </motion.p>
              <motion.div 
                className="flex justify-center items-center space-x-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                {[1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="w-24 h-12 rounded-lg bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;