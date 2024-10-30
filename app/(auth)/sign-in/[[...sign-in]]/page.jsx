"use client"
import React, { useState } from 'react';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import { Wand2, ArrowRight, Home, Play, ChevronRight, Sparkles, Video, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const SignInPage = () => {
  const router = useRouter();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    { icon: Sparkles, text: "Instant Video Generation", delay: 0.1 },
    { icon: Video, text: "Custom AI Animations", delay: 0.2 },
    { icon: Shield, text: "Professional Templates", delay: 0.3 },
    { icon: Wand2, text: "High-Quality Exports", delay: 0.4 }
  ];

  const stats = [
    { value: "10K+", label: "Active Users", delay: 0.2 },
    { value: "100K+", label: "Videos Created", delay: 0.3 },
    { value: "4.9/5", label: "User Rating", delay: 0.4 }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative hidden md:w-5/12 md:flex"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-purple-900/90 to-gray-900/90 backdrop-blur-sm">
          <div className="h-full flex flex-col justify-between p-12">
            {/* Top Brand Section */}
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Wand2 className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">Video Generator AI</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 transition-all duration-300"
                  onClick={() => router.push('/')}
                >
                  <Home className="h-5 w-5 mr-2" />
                  Home
                </Button>
              </motion.div>
            </div>

            {/* Middle Content */}
            <div className="max-w-md space-y-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="bg-purple-500 rounded-full p-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Play className="h-6 w-6 text-white" />
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
                </motion.div>
                <p className="text-purple-200 text-lg leading-relaxed">
                  Transform your ideas into captivating videos with the power of AI. Create professional content in minutes.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: feature.delay }}
                    className="group"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                      <motion.div
                        animate={{
                          rotate: hoveredFeature === index ? 360 : 0,
                          scale: hoveredFeature === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="h-5 w-5 text-purple-400" />
                      </motion.div>
                      <span className="text-purple-200 group-hover:text-white transition-colors">
                        {feature.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 cursor-pointer"
                >
                  <motion.p 
                    className="text-purple-400 text-2xl font-bold"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-purple-200 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-7/12 bg-white"
      >
        <div className="h-full flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-xl">
            {/* Mobile Header */}
            <motion.div 
              className="flex items-center justify-between mb-8 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-2">
                <Wand2 className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold">Video Generator AI</span>
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="text-purple-600"
                  onClick={() => router.push('/')}
                >
                  <Home className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Main Sign In Card */}
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
              
              <div className="mb-8 text-center">
                <motion.h2 
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Sign In to Create
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Your next amazing video awaits
                </motion.p>
              </div>

              <motion.div 
                className="py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <SignIn />
              </motion.div>

              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-sm text-gray-600">
                  New to Video Generator AI?{' '}
                  <motion.a 
                    href="/sign-up" 
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign up now 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.a>
                </p>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-center text-sm text-gray-500 mb-4">Trusted by creators worldwide</p>
              <div className="flex items-center justify-center space-x-8">
                {[1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="h-12 w-24 rounded-lg bg-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPage;