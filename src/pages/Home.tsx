import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { user, userData } = useAuth();

  return (
    <>
      {/* Hero Content Area */}
      <main className="relative z-30 flex-1 flex flex-col items-center pt-32 px-6 text-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-10 tracking-tight transition-colors" 
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Click. Notify. Simplify
        </h1>
        {user && (
          <Link
            to={userData?.role === 'faculty' ? '/faculty-dashboard' : '/student-dashboard'}
            className="mt-20 liquid-glass rounded-full px-8 py-4 text-gray-900 dark:text-white text-lg font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-lg border border-gray-200 dark:border-white/10"
          >
            Go to Dashboard
          </Link>
        )}
      </main>
    </>
  );
}
