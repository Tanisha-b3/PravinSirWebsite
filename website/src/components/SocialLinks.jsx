import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      name: "Udemy",
      url: "https://www.udemy.com/user/pravin-mishra-30/?kw=prav&src=sac",
      icon: <FaGraduationCap size={38} className="text-yellow-600" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/results?search_query=pravin+mishra",
      icon: <FaYoutube size={38} className="text-red-600" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pravin-mishra-aws-trainer/",
      icon: <FaLinkedin size={38} className="text-blue-700" />,
    },
    {
      name: "Twitter (X)",
      url: "https://x.com/pravinmishra88",
      icon: <FaTwitter size={38} className="text-black" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/awspravinmishra/",
      icon: <FaInstagram size={38} className="text-pink-600" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/pravinmishraaws",
      icon: <FaGithub size={38} className="text-gray-900" />,
    },
  ];

  return (
    <section className="w-full py-20 font-jakarta text-center bg-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
        Connect with <span className="text-yellow-600">Pravin Mishra</span>
      </h2>

      <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
        Follow Pravin for updates, insights, and tutorials on Cloud & DevOps
      </p>

      {/* Simple Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 px-6">
        {links.map(({ name, url, icon }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white border border-gray-200 rounded-xl 
              p-6 flex flex-col items-center justify-center
              hover:shadow-lg hover:-translate-y-2 transition-all duration-300
            "
          >
            <div className="mb-3">{icon}</div>
            <span className="font-semibold text-black">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
