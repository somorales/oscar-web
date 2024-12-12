import React from "react";

const ExperienceSection = () => {
  const education = [
    {
      title: "Master in UX/UI Design",
      institution: "ESDI, Barcelona",
      period: "September 2022 - September 2023",
    },
    {
      title: "UX/UI Design Bootcamp",
      institution: "BEDU, CDMX",
      period: "April - July 2021",
    },
    {
      title: "B.A Animation and Digital Arts",
      period: "2007 - 2012",
    },
  ];

  const courses = [
    {
      title: "UX Writing",
      institution: "Domestika",
    },
    {
      title: "Design Systems",
      institution: "Domestika",
    },
    {
      title: "HTML, CSS & JavaScript for Beginners",
      institution: "Domestika",
    },
  ];
  const skills = [
    
    'UX Research',
    'UI Design',
    'Wireframing',
    'User Centered Design',
    'Design Thinking',
    'Figma',
    'Photoshop',
    'Illustrator',

    'After Effects',
    'Premiere',
    'Miro',
    'Slack',
    'Figjam',
    'Wordpress',
    'Elementor',
    'Landing Pages',
    'Web design'
  ];

  const experiences = [
    {
      title: "UX/UI Designer (Freelance)",
      period: "January 2024 - Now",
      responsibilities: [
        "Specialized in web and mobile app design",
        "Research competitors, market trends and user needs to guide my design decisions",
        "Create both low and high-fidelity wireframes to visualize structure",
        "Create UI elements, responsive components and visual design from begin to end",
        "Craft prototypes and user testing, iterate with results and received feedback",
        "Work with typography, color, tokens and basic design systems",
      ],
    },
    {
      title: "Web Design and UI Intern (Cronuts Digital, Barcelona)",
      period: "  May 2023 - October 2023 ",
      responsibilities: [
        "Discovery sessions to understand client's goals, expectations and preferences",
        "Keep user-centric design and consistency, implementing basic design systems that included color palettes, tokens, typography, buttons and other responsive components in Figma",
        "Designed innovative landing page proposals for real clients",
        "Developed both low and high-fidelity wireframes",
        "Worked as support in design projects that included the creation of logos, presentations, graphic materials etc.",
        "Crafted designs in Wordpress and Elementor",
      ],
    },
    {
      title: "Social Media Manager (Medical Specialties Clinic)",
      period: "January 2022 - January 2023 ",
      responsibilities: [
        "Developed social media strategies focused on Health sector",
        "Planned engaging and organic content for social media",
        "Managed paid media campaigns for Facebook and Instagram with Meta Business Manager",
        "Identified and segmented the target audience for each campaign, generating leads as a result",
        "Videography, photography, design, basic motion graphics, crafted communication and marketing materials.",
      ],
    },
    {
      title: "Social Media Manager (Universidad de Monterrey)",
      period: "May 2018 - October 2021  ",
      responsibilities: [
        "Managed platforms such as Facebook, Instagram, Twitter, and YouTube",
        "Created and designed organic content in a daily basis",
        "Planned monthly content boards in Social Sprout",
        "Created and optimized social media ad campaigns with Meta Business Manager",
        "Managed, created content and writing articles for the website with Drupal",
        "Created graphic design, photography, videography, and basic motion graphics for reels.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-8 bg-white">
      <h1 className="text-4xl font-bold mb-12">My Experience</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education:</h2>
        <ul className="space-y-4">
          {education.map((edu, index) => (
            <li key={index} className="flex flex-col">
              <span className="font-bold">{edu.title}</span>
              {edu.institution && (
                <span>
                  ({edu.institution}), {edu.period}
                </span>
              )}
              {!edu.institution && <span>{edu.period}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Courses:</h2>
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li key={index}>
              <span className="font-bold">{course.title}</span> (
              {course.institution})
            </li>
          ))}
        </ul>
      </section>

      {experiences.map((exp, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{exp.title}</h2>
          <p className="mb-4">{exp.period}</p>
          <ul className="list-disc pl-5 space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </section>
      ))}
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-amber-200 rounded-full text-black font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download my CV
              </a>
            </div>
    </div>
    </div>
  );
};

export default ExperienceSection;
