import React from 'react';
import { motion } from 'framer-motion';
import avatar from './assets/lukes-tech-avatar.png';

// Simple card component with shadow and rounded corners
const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl bg-white shadow-md p-6 flex flex-col gap-2 ${className}`}
  >
    {children}
  </div>
);

// Simple button component with primary colour styling
const Button = ({ children, href, className = '' }) => (
  <a
    href={href}
    className={`inline-block px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors ${className}`.trim()}
  >
    {children}
  </a>
);

// Main application component
export default function App() {
  // Example data for featured tips
  const tips = [
    {
      title: 'Using iSAMS: Data Drops',
      description:
        'Learn how to harness iSAMS Data Drops to quickly review and analyse student data.',
    },
    {
      title: 'AI Corner: Generate Lesson Plans',
      description:
        'Use AI to create engaging, differentiated lesson plans in seconds and save hours of preparation time.',
    },
    {
      title: 'Bonus Tip: Quick Parent Emails',
      description:
        'Generate polite and effective parent emails with AI tools to streamline your communication.',
    },
  ];

  // Example data for teacher apps
  const apps = [
    {
      name: 'ShuffleED',
      description: 'Random group maker for classroom activities and discussions.',
    },
    {
      name: 'SuperviseED',
      description: 'Seating planner to help allocate groups strategically and save time.',
    },
    {
      name: 'Worksheet Generator',
      description: 'Create printable worksheets using AI prompts tailored to your curriculum.',
    },
    {
      name: 'Prompt Bank',
      description: 'A bank of AI prompts for classroom tasks, admin work and more.',
    },
  ];

  // Simple assertion tests to ensure content arrays are populated
  if (typeof console !== 'undefined') {
    console.assert(
      tips.length >= 3,
      'There should be at least 3 featured tips defined.',
    );
    console.assert(
      apps.length >= 4,
      'There should be at least 4 teacher app cards defined.',
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="Luke's avatar"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <span className="text-xl font-semibold hidden sm:inline">
              Luke's Tech Toolbox
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            {['Tips', 'Newsletters', 'Apps', 'Prompt Bank', 'AI Corner'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="nav-item uppercase text-sm font-medium"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <div className="hidden md:block">
            <Button href="#submit">Submit a Problem</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Luke's Tech Toolbox
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="mt-4 text-lg md:text-xl max-w-xl"
            >
              Smart tech tools for busy teachers – tips, newsletters, apps and AI tricks that save you time.
            </motion.p>
            <div className="mt-8 flex gap-4">
              <Button href="#tips">Latest Tips</Button>
              <Button href="#submit" className="bg-accent hover:bg-accent-light">
                Submit a Problem
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Host card with avatar */}
            <Card className="bg-primary-light text-primary-dark max-w-xs">
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Luke's avatar"
                  className="w-16 h-16 rounded-full border-2 border-primary-dark"
                />
                <div>
                  <h3 className="text-lg font-semibold">Hosted by Luke</h3>
                  <p className="text-sm">Primary School Teacher</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Luke brings years of classroom experience and a passion for making technology work for teachers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tips Section */}
      <section id="tips" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-primary-dark">Featured Tech Tips</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {tips.map((tip) => (
            <Card key={tip.title} className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700">
                {tip.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Teacher Apps Section */}
      <section id="apps" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-dark">Teacher Apps</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {apps.map((app) => (
              <Card key={app.name} className="hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-700">
                  {app.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Problem Section */}
      <section id="submit" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-dark">Got a Tech Problem?</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Let us know about your classroom technology challenges and we will turn them into future tech tips, newsletters and apps.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="mailto:lukestechtoolbox@example.com?subject=Tech%20Problem">Email Luke</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Luke's Tech Toolbox for Teachers. All rights reserved.
        </div>
      </footer>
    </div>
  );
}