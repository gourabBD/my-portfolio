import React from "react";

const ContactMe = () => {
  return (
    <section id="contactMeID" className="my-16 px-6 lg:px-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800/70 bg-[#020617]/90 p-10 shadow-2xl backdrop-blur-lg text-slate-100">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Work together</p>
          <h2 className="mt-4 text-4xl font-semibold">Let’s build something exceptional.</h2>
          <p className="mt-4 text-slate-400">
            Send a message with your project idea, timeline, or collaboration goals. I’ll respond promptly and help you shape the next great product.
          </p>
        </div>

        <form action="https://formspree.io/f/xyyvrlyb" method="POST" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</label>
              <input
                className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 p-4 text-slate-100 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-[0.28em] text-slate-400">Subject</label>
              <input
                className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 p-4 text-slate-100 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="text"
                name="subject"
                placeholder="Project request or question"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-[0.28em] text-slate-400">Message</label>
            <textarea
              className="min-h-[220px] w-full rounded-3xl border border-slate-700/80 bg-slate-900/90 p-4 text-slate-100 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              name="message"
              placeholder="Tell me about your goals, timeline, or requirements."
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="btn btn-primary btn-lg w-full max-w-sm" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
