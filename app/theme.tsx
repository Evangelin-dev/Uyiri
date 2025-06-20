'use client';


import React from 'react';
import { Leaf, Heart, Sparkles } from 'lucide-react';

const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-brfrom-rose-50 via-pink-25 to-purple-50 overflow-hidden">
      {/* Enhanced Floating Circles with Gradient and Better Animations */}
      <div className="absolute inset-0 z-0">
        {/* Large Breathing Circle */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.05) 70%)',
            animation: 'breathe 6s ease-in-out infinite, drift 20s linear infinite'
          }}
        ></div>
        
        {/* Pulsing Orb */}
        <div 
          className="absolute top-60 right-20 w-24 h-24 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, rgba(219, 39, 119, 0.02) 100%)',
            animation: 'pulse-glow 4s ease-in-out infinite, float-right 15s ease-in-out infinite'
          }}
        ></div>

        {/* Large Morphing Circle */}
        <div 
          className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full opacity-15"
          style={{
            background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.05), rgba(236, 72, 153, 0.1))',
            animation: 'morph 8s ease-in-out infinite, rotate-slow 30s linear infinite'
          }}
        ></div>

        {/* Bouncing Gradient Orb */}
        <div 
          className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.08))',
            animation: 'bounce-soft 5s ease-in-out infinite, sway 12s ease-in-out infinite'
          }}
        ></div>

        {/* Additional Ambient Circles */}
        <div 
          className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 20%, transparent 70%)',
            animation: 'float-gentle 10s ease-in-out infinite reverse'
          }}
        ></div>

        <div 
          className="absolute bottom-1/3 left-1/2 w-36 h-36 rounded-full opacity-8"
          style={{
            background: 'conic-gradient(from 180deg, rgba(219, 39, 119, 0.08), transparent, rgba(236, 72, 153, 0.05))',
            animation: 'spin-slow 25s linear infinite, scale-pulse 7s ease-in-out infinite'
          }}
        ></div>

        {/* Enhanced Floating Ayurvedic Icons */}
        <div 
          className="absolute top-32 right-10 opacity-15"
          style={{ animation: 'icon-float 8s ease-in-out infinite, rotate-gentle 20s linear infinite' }}
        >
          <Leaf className="h-12 w-12 text-pink-500 drop-shadow-sm" />
        </div>
        
        <div 
          className="absolute top-1/2 left-16 opacity-20"
          style={{ animation: 'heart-beat 3s ease-in-out infinite, drift-up 15s ease-in-out infinite' }}
        >
          <Heart className="h-10 w-10 text-pink-400 drop-shadow-sm" />
        </div>
        
        <div 
          className="absolute bottom-32 right-16 opacity-18"
          style={{ animation: 'sparkle-twinkle 4s ease-in-out infinite, bob 6s ease-in-out infinite' }}
        >
          <Sparkles className="h-14 w-14 text-pink-500 drop-shadow-md" />
        </div>

        {/* Floating Dots with Trail Effect */}
        <div 
          className="absolute top-1/3 left-1/3 opacity-12"
          style={{ animation: 'dot-trail 12s linear infinite' }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full shadow-lg"></div>
        </div>

        <div 
          className="absolute top-3/4 right-1/4 opacity-10"
          style={{ animation: 'orbit 18s linear infinite' }}
        >
          <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.2) translate(10px, -5px); }
        }

        @keyframes drift {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(20px) translateY(-15px); }
          50% { transform: translateX(-10px) translateY(-25px); }
          75% { transform: translateX(-25px) translateY(-10px); }
          100% { transform: translateX(0) translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }

        @keyframes float-right {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(15px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes morph {
          0%, 100% { border-radius: 50%; transform: scale(1); }
          33% { border-radius: 60% 40% 30% 70%; transform: scale(1.1); }
          66% { border-radius: 40% 60% 70% 30%; transform: scale(0.9); }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25px); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-3deg); }
        }

        @keyframes rotate-gentle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.2); }
          40% { transform: scale(1.1); }
        }

        @keyframes drift-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes sparkle-twinkle {
          0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
          25% { opacity: 0.3; transform: scale(1.1) rotate(90deg); }
          50% { opacity: 0.25; transform: scale(1.05) rotate(180deg); }
          75% { opacity: 0.35; transform: scale(1.15) rotate(270deg); }
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes dot-trail {
          0% { transform: translateX(0) translateY(0) scale(1); opacity: 0.12; }
          25% { transform: translateX(100px) translateY(-50px) scale(1.2); opacity: 0.2; }
          50% { transform: translateX(200px) translateY(20px) scale(0.8); opacity: 0.15; }
          75% { transform: translateX(150px) translateY(80px) scale(1.1); opacity: 0.25; }
          100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.12; }
        }

        @keyframes orbit {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(50px) translateY(-50px); }
          50% { transform: translateX(0) translateY(-100px); }
          75% { transform: translateX(-50px) translateY(-50px); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FloatingBackground;