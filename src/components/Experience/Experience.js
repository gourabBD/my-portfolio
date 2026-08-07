import React from "react";

const experience = [
  {
    role: "Full-Stack Web Developer",
    company: "Radiant Pharmaceuticals Ltd.",
    duration: "3+ Years",
    highlights: [
      "Designed and built Paperlite, an in-house approval management system used across multiple departments, replacing manual, paper-based approval workflows.",
      "Streamlined cross-department request and approval processes, helping the business run more effectively, efficiently, and smoothly.",
      "Built Radius, an internal utility suite covering meeting room reservations, a company address book, meal management, and task tracking — built with ASP.NET, both REST APIs and an MVC web application.",
      "Deployed and maintained both applications on IIS and cloud infrastructure, keeping business-critical, company-wide tools reliably available.",
      "Worked directly with stakeholders across departments to gather requirements and iterate on systems used company-wide.",
    ],
    note: "Due to company privacy, I'm unable to share source code, live access, or internal screenshots for Paperlite and Radius.",
  },
  {
    role: "Project Implementation Officer (Intern)",
    company: "TechnoHaven Company Ltd.",
    duration: "Internship",
    highlights: [
      "Supported the implementation of the RAJUK construction-permit automation system, building foundational experience in production rollouts and team collaboration.",
    ],
  },
  {
    role: "Risk & Compliance Analyst",
    company: "ServicEngine BPO Ltd.",
    duration: "Analyst",
    highlights: [
      "Performed analytical work in a Risk & Compliance department, sharpening attention to detail and cross-functional communication.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experienceID" className="my-16 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800/70 bg-[#020617]/90 p-10 shadow-2xl text-slate-100">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Experience</p>
          <h2 className="mt-4 text-4xl font-semibold">Professional experience building real business software.</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.company}
              className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-lg"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-primary/40 px-4 py-1 text-xs uppercase tracking-[0.24em] text-primary">
                  {item.duration}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-slate-300">
                {item.highlights.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
              {item.note && (
                <p className="mt-4 text-sm italic text-slate-500">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
