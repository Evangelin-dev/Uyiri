'use client';

import React from 'react';

const BeautifulPinkBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 overflow-hidden">
      {/* Flowing Pink Waves */}
      <div className="absolute inset-0">
        {/* Large Flowing Wave */}
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.4) 0%, rgba(244, 114, 182, 0.2) 50%, transparent 80%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'wave-morph 15s ease-in-out infinite'
          }}
        ></div>

        {/* Cascading Pink Bubbles */}
        <div className="absolute top-0 right-0 w-full h-full">
          {Array.from({length: 8}).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-25"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${20 + i * 10}%`,
                top: `${10 + i * 8}%`,
                background: `radial-gradient(circle, ${
                  i % 2 === 0 ? 'rgba(236, 72, 153, 0.3)' : 'rgba(244, 114, 182, 0.25)'
                } 0%, transparent 70%)`,
                animation: `bubble-float ${8 + i * 2}s ease-in-out infinite ${i * 1.5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Dreamy Pink Clouds */}
        <div 
          className="absolute top-1/4 left-1/3 w-80 h-40 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(244, 114, 182, 0.15) 50%, rgba(219, 39, 119, 0.2) 100%)',
            borderRadius: '100px 50px 80px 30px',
            animation: 'cloud-drift 20s linear infinite'
          }}
        ></div>

        <div 
          className="absolute bottom-1/3 right-1/4 w-64 h-32 opacity-18"
          style={{
            background: 'linear-gradient(45deg, rgba(244, 114, 182, 0.2) 0%, rgba(236, 72, 153, 0.12) 100%)',
            borderRadius: '80px 100px 40px 60px',
            animation: 'cloud-drift 25s linear infinite reverse'
          }}
        ></div>

        {/* Swirling Pink Vortex */}
        <div 
          className="absolute top-1/2 right-20 w-56 h-56 rounded-full opacity-15"
          style={{
            background: `
              conic-gradient(
                from 0deg,
                rgba(236, 72, 153, 0.3) 0deg,
                rgba(244, 114, 182, 0.2) 90deg,
                rgba(219, 39, 119, 0.25) 180deg,
                rgba(236, 72, 153, 0.15) 270deg,
                rgba(244, 114, 182, 0.3) 360deg
              )
            `,
            animation: 'vortex-spin 12s linear infinite, vortex-pulse 6s ease-in-out infinite'
          }}
        ></div>

        {/* Floating Pink Orbs */}
        <div 
          className="absolute bottom-40 left-1/4 w-32 h-32 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.4) 0%, rgba(244, 114, 182, 0.2) 60%, transparent 90%)',
            animation: 'orb-dance 10s ease-in-out infinite'
          }}
        ></div>

        <div 
          className="absolute top-32 left-1/2 w-24 h-24 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.35) 0%, rgba(219, 39, 119, 0.2) 70%)',
            animation: 'orb-dance 8s ease-in-out infinite 3s'
          }}
        ></div>

        {/* Magical Pink Sparkles */}
        <div className="absolute inset-0">
          {Array.from({length: 15}).map((_, i) => {
            const positions = [
              { left: '12%', top: '15%' }, { left: '75%', top: '8%' }, { left: '45%', top: '25%' },
              { left: '88%', top: '35%' }, { left: '25%', top: '42%' }, { left: '65%', top: '38%' },
              { left: '8%', top: '55%' }, { left: '82%', top: '62%' }, { left: '38%', top: '68%' },
              { left: '92%', top: '78%' }, { left: '18%', top: '85%' }, { left: '55%', top: '82%' },
              { left: '72%', top: '92%' }, { left: '35%', top: '5%' }, { left: '58%', top: '12%' }
            ];
            return (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${4 + (i % 3) * 2}px`,
                  height: `${4 + (i % 3) * 2}px`,
                  left: positions[i].left,
                  top: positions[i].top,
                  background: `radial-gradient(circle, ${
                    i % 3 === 0 ? 'rgba(236, 72, 153, 0.6)' :
                    i % 3 === 1 ? 'rgba(244, 114, 182, 0.5)' :
                    'rgba(219, 39, 119, 0.55)'
                  } 0%, transparent 60%)`,
                  animation: `sparkle-twinkle ${3 + (i % 4)}s ease-in-out infinite ${i * 0.3}s`
                }}
              ></div>
            );
          })}
        </div>

        

        {/* Dreamy Pink Gradient Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-1/2 opacity-8"
          style={{
            background: 'linear-gradient(to bottom, rgba(244, 114, 182, 0.15), transparent)',
            animation: 'gradient-shift 25s ease-in-out infinite'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes wave-morph {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: rotate(90deg) scale(1.1);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 50%;
          }
          50% { 
            transform: rotate(180deg) scale(0.9);
            border-radius: 50% 50% 50% 50% / 60% 40% 60% 40%;
          }
          75% { 
            transform: rotate(270deg) scale(1.05);
            border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
          }
        }

        @keyframes bubble-float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.25;
          }
          25% { 
            transform: translateY(-30px) scale(1.1);
            opacity: 0.35;
          }
          50% { 
            transform: translateY(-15px) scale(0.95);
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-40px) scale(1.05);
            opacity: 0.3;
          }
        }

        @keyframes cloud-drift {
          0% { 
            transform: translateX(-20px) translateY(0);
            opacity: 0.2;
          }
          25% { 
            transform: translateX(30px) translateY(-10px);
            opacity: 0.25;
          }
          50% { 
            transform: translateX(-10px) translateY(-5px);
            opacity: 0.18;
          }
          75% { 
            transform: translateX(40px) translateY(-15px);
            opacity: 0.22;
          }
          100% { 
            transform: translateX(-20px) translateY(0);
            opacity: 0.2;
          }
        }

        @keyframes vortex-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes vortex-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.15;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.22;
          }
        }

        @keyframes orb-dance {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
          }
          25% { 
            transform: translate(20px, -30px) scale(1.1);
          }
          50% { 
            transform: translate(-15px, -20px) scale(0.9);
          }
          75% { 
            transform: translate(30px, -10px) scale(1.05);
          }
        }

        @keyframes sparkle-twinkle {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          25% { 
            transform: scale(1.5) rotate(90deg);
            opacity: 0.4;
          }
          50% { 
            transform: scale(0.8) rotate(180deg);
            opacity: 0.15;
          }
          75% { 
            transform: scale(1.2) rotate(270deg);
            opacity: 0.35;
          }
        }

        @keyframes ribbon-wave {
          0%, 100% { 
            transform: translateY(0) scaleY(1);
            opacity: 0.12;
          }
          50% { 
            transform: translateY(-10px) scaleY(1.2);
            opacity: 0.18;
          }
        }

        @keyframes gradient-shift {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};

export default BeautifulPinkBackground;