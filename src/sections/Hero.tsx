'use client';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Hero = () => {
  const [members, setMembers] = useState(0);
  const [awards, setAwards] = useState(0);
  const [recognitions, setRecognitions] = useState(0);
  const iconSize = 32;

  useEffect(() => {
    startCounting();
  }, []);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const emailTo = "igdtuieee@gmail.com";
    const ccEmail = "igdtuieee@gmail.com";
    const subject = encodeURIComponent("Contact from Website");
    const body = encodeURIComponent("Hello IEEE IGDTUW Team,");
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;
    const newWindow = window.open(gmailLink, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert("It seems like the pop-up was blocked. Please allow pop-ups for this site.");
    }
  };

  const startCounting = () => {
    const targetMembers = 230;
    const targetAwards = 30;
    const targetRecognitions = 50;
    const duration = 7000;

    const memberIntervalTime = duration / targetMembers;
    const awardsIntervalTime = duration / targetAwards;
    const recognitionIntervalTime = duration / targetRecognitions;

    const memberInterval = setInterval(() => {
      setMembers(prev => prev < targetMembers ? prev + 1 : prev);
    }, memberIntervalTime);

    const awardsInterval = setInterval(() => {
      setAwards(prev => prev < targetAwards ? prev + 1 : prev);
    }, awardsIntervalTime);

    const recognitionInterval = setInterval(() => {
      setRecognitions(prev => prev < targetRecognitions ? prev + 1 : prev);
    }, recognitionIntervalTime);

    return () => {
      clearInterval(memberInterval);
      clearInterval(awardsInterval);
      clearInterval(recognitionInterval);
    };
  };

  const Socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={iconSize} color="#ffffff" />,
      link: "https://www.linkedin.com/company/ieee-igdtuw/",
      hoverColor: "#0077b5"
    },
    {
      name: "X",
      icon: <SiX size={iconSize} color="#ffffff" />,
      link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
      hoverColor: "#1DA1F2"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={iconSize} color="#ffffff" />,
      link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D",
      hoverColor: "#E1306C"
    },
    {
      name: "Email",
      icon: <FaEnvelope size={iconSize} color="#ffffff" />,
      link: "#",
      hoverColor: "#d44638",
      onClick: handleEmailClick
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://storage.googleapis.com/prd-mercan-asset/2023/12/182951a6-img_4256-e1701917255923.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        {/* Title Section */}
        <div className="mb-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              IEEE IGDTUW
            </span>
          </h1>

          <p className="text-lg text-gray-300 md:text-xl">
            Institute of Electrical and Electronics Engineers IGDTUW Student Branch.
          </p>
        </div>

        {/* Explore Section with Hollow Style */}
        <div className="mb-10 inline-block border-2 border-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Explore our student branch
        </div>

        {/* Social Icons in a row */}
        <div className="mb-10 flex justify-center space-x-6">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.name === "Email" ? "#" : social.link}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={social.onClick}
              className="flex items-center justify-center text-gray-200 hover:text-gray-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="flex justify-center space-x-12">
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-xl">Members</span>
            <span className="text-white text-3xl font-bold">{members}+</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-xl">Awards</span>
            <span className="text-white text-3xl font-bold">{awards}+</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-xl">Events</span>
            <span className="text-white text-3xl font-bold">{recognitions}+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
