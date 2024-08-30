import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const WebPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <section id="home" className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Welcome to EasyStudent</h1>
          <p className="text-lg">
            EasyStudent is your one-stop platform for managing your academic journey. Whether you are looking for internships, preparing for contests, or seeking guidance on preparation, we have you covered.
          </p>
        </section>

        <section id="contest" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contest</h2>
          <p className="text-lg">
            Stay ahead in the competition by participating in various contests we curate. We provide details on upcoming contests and tips on how to excel in them.
          </p>
          <Link to="/contest" className="text-blue-500 underline">Explore Contests</Link>
        </section>

        <section id="internship" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Internship</h2>
          <p className="text-lg">
            Find your next internship opportunity here. We offer a wide range of internships from top companies, tailored to your career goals.
          </p>
          <Link to="/internship" className="text-blue-500 underline">Explore Internships</Link>
        </section>

        <section id="preparation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Preparation Guide</h2>
          <p className="text-lg">
            Our preparation guide helps you get ready for the challenges ahead. We provide resources and tips to ensure you're well-prepared for your next steps.
          </p>
          <Link to="/preparation" className="text-blue-500 underline">Explore Preparation Guides</Link>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have any questions or need support? Reach out to us, and we'll be happy to assist you with your queries.
          </p>
          <Link to="/contact" className="text-blue-500 underline">Contact Us</Link>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <p className="text-lg">
            Find answers to the most frequently asked questions here. We aim to resolve any common doubts or issues you may have.
          </p>
          <Link to="/faq" className="text-blue-500 underline">Visit FAQ</Link>
        </section>

        <section id="applied" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Applied Files</h2>
          <p className="text-lg">
            Keep track of the files you have applied to. This section provides an organized view of your applications and their status.
          </p>
          <Link to="/applied" className="text-blue-500 underline">View Applied Files</Link>
        </section>
      </div>
    </div>
  );
}

export default WebPage;
