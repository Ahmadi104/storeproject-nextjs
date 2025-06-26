import Container from "@/components/Container";
import React from "react";

function About() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
          About <span className="text-sky-500">Next Store</span>
        </h1>

        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Welcome to <span className="font-semibold">Next Store</span>! We are
          committed to providing you with the best shopping experience. Our
          platform offers a wide range of products at unbeatable prices,
          ensuring quality and satisfaction for all our customers.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Thank you for choosing{" "}
          <span className="font-semibold">Next Store</span>. We look forward to
          serving you and making your shopping experience truly delightful
        </p>
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800 text-center">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 
              focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 
              focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 
              focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-xl 
              shadow-md transition active:scale-95 block mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default About;
