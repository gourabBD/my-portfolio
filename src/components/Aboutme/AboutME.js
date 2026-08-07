import React from 'react';

const AboutME = () => {
  return (
    <section id="aboutme" className="my-16 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/20 bg-[#020617]/80 p-10 shadow-2xl backdrop-blur-lg text-slate-100">
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.32em] text-primary">About Me</p>
          <h2 className="mt-4 text-4xl font-semibold">Strategic web development with clarity, quality, and craftsmanship.</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 text-slate-300">
          <div className="space-y-4 text-base leading-8">
            <p>
              I am a full-stack developer with 3+ years of software development experience and a B.Sc. in Computer Science & Engineering from Bangladesh Army International University of Science & Technology. I specialize in building scalable applications that combine performance, accessibility, and polished user experiences.
            </p>
            <p>
              I apply React, Next.js, MSSQL, and Claude-powered workflows to build dependable systems with clean interfaces, strong backend architecture, and thoughtful team collaboration — deploying to both IIS and cloud platforms depending on what the business needs.
            </p>
            <p>
              At Radiant Pharmaceuticals Ltd., I built and maintain an in-house approval system spanning multiple departments, helping the business run more effectively, efficiently, and smoothly. See the full experience timeline below.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-primary/30 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white">What I deliver</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Clean React & Next.js interfaces with responsive layout and modern UI patterns</li>
                <li>• Backend services with MSSQL/MongoDB and secure data flows</li>
                <li>• Collaboration-ready code and deployment-ready engineering practices</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white">Professional mindset</h3>
              <p className="mt-4 text-slate-300">
                I care about building products that are reliable, maintainable, and prepared for growth. Every project is an opportunity to solve real user problems with an elegant technical foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutME;
