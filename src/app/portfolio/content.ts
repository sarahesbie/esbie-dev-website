export interface PortfolioItem {
  slug: string;
  title: string;
  subtitle?: string;
  images?: string[];
  description: string;
  content: {
    heading: string;
    paragraphs: string[];
    link?: { href: string; label: string };
  }[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "esbie-components",
    title: "Esbie Components",
    // images: [
    //   "/dreamy-pastel-clouds.jpeg",
    //   "/dreamy-pastel-clouds.jpeg",
    //   "/dreamy-pastel-clouds.jpeg",
    // ],
    description:
      "A component library built to quickly create apps and websites with a personal touch.",
    content: [
      {
        heading: "Overview",
        paragraphs: [
          "Esbie Components is a custom-built component library designed to streamline the process of building front-end apps and websites for my personal projects. Instead of relying on existing libraries like MUI or Chakra UI, I wanted something that leaned into my front-end skills while adding a personalised touch.",
          "The library includes reusable, styled components that adhere to the atomic design methodology. It serves as both a productivity booster and a creative outlet, giving me control over aesthetics and functionality without reinventing the wheel for every project.",
        ],
      },
      {
        heading: "Inspiration",
        paragraphs: [
          "The inspiration for Esbie Components came from my admiration for clean, functional design seen in tools like Vercel, GitHub, and OpenAI. I aimed to incorporate elements of brutalism while keeping the interface modern and approachable.",
          "It's a nod to the leaders in tech while allowing room for my own creative expression.",
        ],
      },
      {
        heading: "Technology Used",
        paragraphs: [
          "Esbie Components is built with React and TypeScript, bundled using Rollup for distribution on NPM. SCSS modules are used for styling, enabling both consistency and flexibility. It supports features like reusable layouts, light and dark mode (upcoming), and custom themes.",
        ],
      },
      {
        heading: "Motivation and Goals",
        paragraphs: [
          "This project gave me an opportunity to revisit front-end best practices and sharpen my skills in bundling and distributing packages. Beyond that, it's been an enjoyable creative exercise—a mix of coding and design that lets me make something uniquely mine.",
          "Future plans include expanding the component library with additional templates and utilities, fixing import issues, and enhancing customisation options.",
        ],
      },
      {
        heading: "How It's Built",
        paragraphs: [
          "The library is structured around atomic design principles, with components categorised into atoms, molecules, organisms, and templates. Rollup is used for bundling, ensuring the library can be imported seamlessly into other projects. Each component is built with reusability in mind, with SCSS modules used to encapsulate styles.",
          "A sandbox app serves as a playground for developing and testing the components in real-time.",
        ],
      },
      {
        heading: "How to Use It",
        paragraphs: [
          "To use Esbie Components in your own project, simply install it from NPM using the command:",
          "`npm install esbie-component-library`",
          "Then, import components as needed:",
          "`import { Button, CardGallery, FullWidthSection } from 'esbie-component-library';`",
          "You can check out the full documentation and examples on [GitHub](https://github.com/your-repo-link).",
        ],
      },
      {
        heading: "Live Site",
        paragraphs: [],
        link: {
          href: "https://github.com/your-repo-link",
          label: "View the Project on GitHub",
        },
      },
    ],
  },

  {
    slug: "talent-community-platform",
    title: "Talent Community Platform",
    // images: ["/dreamy-pastel-clouds.jpeg", "/dreamy-pastel-clouds.jpeg"],
    description:
      "A comprehensive portal designed to streamline job placement programs, fostering collaboration between companies and candidates.",
    content: [
      {
        heading: "Overview",
        paragraphs: [
          "The Talent Community Platform is a Code Like a Girl product. It is a feature-rich platform built to match companies with interns, manage applications, and enhance communication throughout the internship lifecycle.",
          "It was designed to solve the challenges of managing internship programs, from application tracking to feedback collection, while keeping the user experience simple and intuitive.",
        ],
      },
      {
        heading: "Features",
        paragraphs: [
          "Customisable company profiles to showcase workplace culture and values.",
          "Intern profiles with skills, availability, and preferred industries.",
          "Application tracking and streamlined candidate review workflows.",
          "Automated reminders and notifications for key milestones.",
          "Rich analytics dashboard for internship program performance insights.",
        ],
      },
      {
        heading: "Technologies",
        paragraphs: [
          "React for dynamic front-end interfaces.",
          "Node.js and AWS Lambda for a scalable, serverless back end.",
          "AWS DynamoDB for efficient, schema-less data storage.",
          "Next.js for SSR and optimised performance.",
          "NextAuth for secure user authentication and authorisation.",
        ],
      },
      {
        heading: "Challenges",
        paragraphs: [
          "Balancing performance with feature complexity in a serverless architecture.",
          "Ensuring a seamless user experience for both company admins and interns.",
          "Building a flexible yet robust data model to handle diverse use cases.",
        ],
      },
      {
        heading: "Outcomes",
        paragraphs: [
          "Improved candidate matching, reducing time-to-hire for companies.",
          "Enhanced intern onboarding experience with centralised communication tools.",
          "Scalable platform architecture capable of handling future growth.",
        ],
      },
      {
        heading: "The Team",
        paragraphs: [
          "We were a small but mighty team that brought this project to life.",
          "As the project lead, I wore many hats, including Product Manager, Project Manager, Solution Architect, and Front and Back-End Developer.",
          "Our program coordinator for the internship placement program was a key consultant, helping define business logic and requirements. I worked closely with her to ensure the portal met the needs of our users.",
          "The CEO and leadership team provided high-level direction, ensuring the portal aligned with business deliverables and long-term goals.",
          "Our UX/UI Lead conducted user research, created mockups and UI designs, and collaborated on front-end interfaces through pair programming.",
          "Other members of the Code Like a Girl team supported us with QA, marketing, and communications, and our wonderful community stepped in as beta testers, providing valuable feedback and assisting with usability and acceptance testing.",
        ],
      },
      {
        heading: "Live Site",
        paragraphs: [],
        link: {
          href: "https://internship-portal.example.com",
          label: "Visit the Portal",
        },
      },
    ],
  },
  {
    slug: "school-of-code",
    title: "School of Code",
    subtitle: "Building an Inclusive Online Learning Platform",
    // images: [
    //   "/dreamy-pastel-clouds.jpeg",
    //   "/dreamy-pastel-clouds.jpeg",
    //   "/dreamy-pastel-clouds.jpeg",
    // ],
    description:
      "The School of Code is an inclusive online learning platform empowering women and gender-diverse individuals with foundational and advanced coding skills.",
    content: [
      {
        heading: "Overview",
        paragraphs: [
          "The School of Code was developed as a custom-built online learning platform to empower women and gender-diverse individuals with coding skills. Transitioning from in-person workshops to an entirely online model in 2020, the platform features engaging 10-week courses with video tutorials, quizzes, assignments, and progress tracking.",
          "The platform has since expanded, adding new courses and features to support a growing student base and fostering a supportive community for learning and development.",
        ],
      },
      {
        heading: "Technologies",
        paragraphs: [
          "React for a responsive and interactive front end.",
          "Node.js and AWS Lambda for a scalable serverless backend.",
          "DynamoDB for storing user data, course progress, and quiz results.",
          "AWS for hosting and deployment.",
        ],
      },
      {
        heading: "Key Features",
        paragraphs: [
          "Custom LMS with scalable architecture.",
          "Integrated video player with captions for accessibility.",
          "Interactive quiz modules for reinforcing learning.",
          "Student progress dashboards for tracking achievements.",
          "Student admin app for managing participants, assignments, and progress.",
          "Expanded curriculum covering Python, C#, Web Development, JavaScript, React, and Node.js.",
        ],
      },
      {
        heading: "Challenges and Solutions",
        paragraphs: [
          "Transitioning to an online education model within a tight timeline was achieved by employing agile development practices and rapidly iterating on user feedback.",
          "Addressing accessibility for beginners involved creating digital literacy modules and integrating accessible features like captions.",
          "Scaling the platform for new courses and increased demand was achieved through serverless architecture and a flexible data model.",
        ],
      },
      {
        heading: "Impact",
        paragraphs: [
          "Launched the platform within one month of project initiation.",
          "Supported hundreds of participants with an inclusive and scalable education model.",
          "Expanded course offerings from three foundational courses to six in the first year.",
          "Achieved high participant satisfaction due to the platform's beginner-friendly design and community support.",
        ],
      },
      {
        heading: "The Team",
        paragraphs: [
          "The School of Code's success was built on the efforts of a skilled and cross-functional team.",
          "In the first phase, our team included subject matter experts (Python, C#, Web Development), a creative director, and a project manager. My role included stepping in to support the C# SME with tutorials and demos while aligning technical and educational goals.",
          "In the second phase, the team expanded to include SMEs for JavaScript, React, and Node.js, a learning designer, a creative director, and a project manager. I acted as a technical product manager, liaising between contractors and ensuring accessibility and student-focused design remained at the forefront.",
          "Throughout both phases, I collaborated with team members to align technical, branding, and educational goals while advocating for the students' needs.",
        ],
      },
      {
        heading: "Live Site",
        paragraphs: [],
        link: {
          href: "https://school-of-code.example.com",
          label: "Visit the School of Code",
        },
      },
    ],
  },
  {
    slug: "echobot-journal",
    title: "Echobot Journal",
    subtitle: "A Generative AI Interface for Journaling",
    // images: [
    //   "/dreamy-pastel-clouds.jpeg",
    //   "/dreamy-pastel-clouds.jpeg",
    //   "/dreamy-pastel-clouds.jpeg",
    // ],
    description:
      "Echobot Journal is an experimental interface for generative AI journaling, blending reflective practices with AI insights in a locally-run app.",
    content: [
      {
        heading: "Overview",
        paragraphs: [
          "Echobot Journal is a personal project that combines my love for journaling with my interest in generative AI. It's an interface for journaling that uses OpenAI's API to generate insights and reflections from a user's journal entries. The project explores ways to process and interact with large volumes of personal data securely and locally, balancing privacy concerns with the benefits of AI-driven feedback.",
          "The project originated from a desire to feed over 35,000 words of my own journal entries into AI while maintaining control over where that data was processed.",
        ],
      },
      {
        heading: "Motivation",
        paragraphs: [
          "Journaling has been a lifelong practice for me—it's my mental health anchor, a way to reflect, refine my thoughts, and define my goals. With stacks of handwritten journals, I decided to digitise some of my entries and explore what AI could reveal.",
          "However, I hesitated to share such personal insights directly with ChatGPT. This inspired me to build something local that could offer AI-driven reflections in a more controlled environment.",
        ],
      },
      {
        heading: "How It Works",
        paragraphs: [
          "The Echobot Journal app operates in two parts: a Python backend and a Next.js frontend.",
          "The backend uses FAISS for segmenting and indexing the journal text into manageable chunks. It serves as a locally run service to ensure more control over data processing.",
          "The frontend is a clean and intuitive Next.js interface where users can upload journal entries, submit queries, and view AI-generated responses. Requests to the OpenAI API are made via the local backend, ensuring minimal data exposure.",
          "Data is stored locally, and while it's not entirely private, it offers a more secure alternative to feeding data directly into a hosted service.",
        ],
      },
      {
        heading: "Technologies",
        paragraphs: [
          "Next.js for the frontend interface.",
          "FAISS and Python for text chunking and indexing.",
          "OpenAI API for generative responses and insights.",
          "Local storage for maintaining data control.",
        ],
      },
      {
        heading: "Key Learnings",
        paragraphs: [
          "This project taught me how to work with the OpenAI API and process large volumes of text in a meaningful way.",
          "It provided insights into building a locally hosted app while balancing user experience, performance, and privacy.",
          "On a personal level, the generative AI responses highlighted patterns in my thinking, such as my ability to see the big picture but also becoming overwhelmed by its details—a valuable reflection that underscored the project's purpose of self-guided insight.",
        ],
      },
      {
        heading: "Future Plans",
        paragraphs: [
          "I'd love to continue developing Echobot Journal into a cloud-based app that others can use. While ChatGPT exists, I believe there's a unique opportunity to create a journaling-specific tool that offers guidance and structure for reflective practices.",
          "Drawing on my lifelong journaling experience (I may have hit my 10,000 hours since my first pink journal with a lock and key at age 7!), I'd love to offer journaling prompts and techniques that align with AI insights to empower users in their reflective journeys.",
        ],
      },
      {
        heading: "The Name",
        paragraphs: [
          "The project is called 'Echobot Journal' because, at its core, it's about helping users hear their own thoughts and advice reflected back to them. It's a tool for uncovering patterns and wisdom already present, amplified through AI.",
        ],
      },
    ],
  },
  {
    slug: "capri-theatre",
    title: "Capri Theatre",
    subtitle: "Preserving History Through Technology",
    images: [
      "/images/portfolio/capri/capri-movies.png",
      "/images/portfolio/capri/capri-branding.png",
      "/images/portfolio/capri/capri-about.png",
    ],
    description:
      "A decade-long collaboration with the Capri Theatre to build and maintain its online presence, blending modern technology with the charm of a historic art-deco cinema.",
    content: [
      {
        heading: "Overview",
        paragraphs: [
          "The Capri Theatre is a local treasure, a historic art-deco cinema with a beautifully preserved theatre organ managed by The Theatre Organ Society. Growing up near the theatre, it holds a special place in my heart with countless childhood memories of its magic.",
          "For much of the past decade, I've worked closely with the Capri to maintain and enhance its online presence, ensuring it serves the local community while preserving its historic charm.",
        ],
      },
      {
        heading: "Design Collaboration",
        paragraphs: [
          "I partnered with Draw Studio, a graphic design house that meticulously captured the essence of the Capri's art-deco aesthetic. My role was to translate their designs into a fully functional website, ensuring every detail of the theatre's character was reflected in the digital experience.",
        ],
      },
      {
        heading: "Key Features and Deliverables",
        paragraphs: [
          "Custom WordPress website and theme development, tailored to the Capri's needs.",
          "Filterable movie displays for easy browsing of showtimes.",
          "News and events sections to keep the community updated.",
          "eCommerce functionality for gift vouchers and donations, integrating third-party and custom-built plugins.",
          "Internal membership functionality with a member portal, enabling discounted tickets and exclusive access.",
          "Documentation to support the management team in administering the site and its many features.",
        ],
      },
      {
        heading: "Technologies",
        paragraphs: [
          "WordPress CMS for content management.",
          "PHP for custom theme and plugin development.",
          "JavaScript and JQuery for dynamic front-end functionality.",
          "CSS for maintaining the theatre's art-deco visual style.",
        ],
      },
      {
        heading: "Reflections",
        paragraphs: [
          "This project was a blend of modern technology and historic preservation, which made it incredibly rewarding. The Capri Theatre is more than just a cinema—it's a community hub with a rich history. Being part of its evolution into the digital age while respecting its legacy was a privilege.",
          "The work also honed my skills in building user-friendly CMS solutions, custom plugin development, and collaborating with designers to create seamless user experiences.",
        ],
      },
      {
        heading: "Impact",
        paragraphs: [
          "The Capri Theatre's online presence has strengthened its connection with the community, enabling easier access to tickets, events, and donations.",
          "The membership portal fostered greater engagement with loyal patrons, while the eCommerce functionality opened up new revenue streams.",
          "This project ensured the Capri's legacy could continue to thrive in a modern, digital-first world.",
        ],
      },
    ],
  },

  {
    slug: "speaking-and-workshops",
    title: "Speaking and Workshops",
    // images: ["/images/speaking.jpg"],
    description:
      "Sharing knowledge and inspiration through public speaking and interactive workshops.",
    content: [
      {
        heading: "Overview",
        paragraphs: [
          "Are you looking for your next event speaker or workshop facilitator? I bring a unique blend of technical expertise and a love for storytelling to every stage.",
          "With a background in music, teaching, and theatre, I thrive in front of an audience and take pride in crafting engaging and accessible presentations.",
          "Whether it's a keynote, panel, or hands-on workshop, I aim to inform, inspire, and leave attendees with actionable insights.",
        ],
      },
      {
        heading: "Speaking Highlights",
        paragraphs: [
          "I've been privileged to speak at a range of events, including:",
          "- MC'ing the main stage at the 2024 Virtual Engineers Summit for Code Like a Girl.",
          "- Producing and delivering multiple events in South Australia for Code Like a Girl, including 'Let's Get Ethical,' 'Unmanning Aviation,' and 'Rebel.'",
          "- Speaking at WordCamp Australia, sharing insights on web development and open source.",
          "- Presenting at the National Librarians Symposium, focusing on the intersection of technology and accessibility.",
        ],
      },
      {
        heading: "Workshops and Online Learning",
        paragraphs: [
          "Workshops have always been a passion of mine, from in-person sessions to large-scale online events:",
          "- Delivered Python and Web Development workshops to diverse audiences, including over 400 Victorian State Government employees (yes, we crashed Code Sandbox together – my apologies to the team there!).",
          "- Created online learning content on topics such as Web Development Foundations, C# Programming, Cybersecurity with Python, and Git Fundamentals.",
          "- Led project groups for Hacktoberfest open-source projects in 2022 and 2023, fostering collaboration and mentorship.",
        ],
      },
      {
        heading: "A Unique Perspective",
        paragraphs: [
          "Beyond my technical expertise, my past life as a musician and amateur theatre enthusiast shapes my approach to public speaking. I value clear communication, creativity, and making complex topics approachable.",
          "On a lighter note, I also perform an unforgettable rendition of 'The Nightmare Before Christmas' with my toddler, but that's a private show for invited guests only!",
        ],
      },
      {
        heading: "Get in Touch",
        paragraphs: [
          "If you're interested in having me speak at your event or facilitate a workshop, I'd love to hear from you. Let's create something memorable together!",
        ],
        link: {
          href: "/contact",
          label: "Contact Me",
        },
      },
    ],
  },
];
