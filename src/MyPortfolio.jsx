import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import floatingCharacter from "./luffy.png"; // Hero image
import luffyYo from "./yo.png";
import bagImage from "./bag.png";
import loaderGif from "./load.gif";
import Project1 from "./project1.png";
import Project2 from "./project2.png";
import Project3 from "./project3.png";
import Project4 from "./project4.png";
import Project5 from "./project5.png";
import Project6 from "./project6.png";
import { useRef } from "react";
import { ReactTyped } from "react-typed";
import { Typewriter } from "react-simple-typewriter";

// Icons
import { 
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaWordpress, FaFileExcel, FaCode,
  FaLinkedin, FaInstagram, FaEnvelope
} from "react-icons/fa";

import { SiJupyter, SiGooglecolab, SiKaggle, SiGooglesheets, SiMysql } from "react-icons/si";

// Projects

const projects = [
  // Major Projects
  {
    title: "Rahman Timber Mart Website",
    description: "Business website built with React.js and Tailwind CSS.",
    tech: ["React.js", "Responsive Design"],
    link: "https://rahmantimbermart.netlify.app/",
    image: Project1,
  },
  {
    title: "Automatic Image Captioning with Voice-Over",
    description: "ML system generating captions & audio for visually impaired.",
    tech: ["Python", "CNN + LSTM", "TTS", "Machine Learning", "NLP"],
    link: "https://github.com/Rahman-Ar/Automatic_Image_Caption_For_Visually_Impaired_Individuals",
    image: Project2,
  },
  {
    title: "Intel Products Sentiment Analysis",
    description: "Scraped product reviews over the last 3–5 years. Applied EDA, machine learning, and NLP to identify sentiment trends, cluster reviews, extract keywords, and provide product improvement recommendations.",
    tech: ["Python", "ML", "NLP", "Data Analysis", "EDA"],
    link: "https://github.com/Rahman-Ar/sentiment-analysis",
    image: Project3,
  },
  {
    title: "Headphone Product Website",
    description: "Designed and developed a fully functional e-commerce WordPress website. Customized themes and plugins, integrated product listings, images, and contact forms for seamless customer interaction.",
    tech: ["WordPress", "PHP", "E-commerce", "Plugins"],
    link: "https://soniheadphonecom.wordpress.com/",
    image: Project4,
  },

  // Minor Projects
  {
    title: "Calculator",
    description: "Developed a functional calculator using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://rahman-ar.github.io/Calculator/",
    image: Project5,
  },
  {
    title: "SignUp Page",
    description: "Built a responsive login/signup interface for user authentication practice.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://rahman-ar.github.io/loginPage/",
    image: Project6,
  },
];

const blogs = [
  {
    title: "The Rise of AI Agents",
    excerpt: "How AI agents are transforming industries and workflows...",
    link: "https://medium.com/@namhar559/the-rise-of-ai-agents-how-they-are-shaping-the-future-of-work-01d6404adad6",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sbLToFWlXwQn3P5I8KzZuQ.png"
  },
  {
    title: "AI for Everything: 30 Days Challenge",
    excerpt: "What changed when I used AI tools for every task...",
    link: "https://medium.com/@namhar559/i-spent-30-days-using-ai-for-everything-heres-what-actually-changed-3406c8103712",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eEWsjKyQR5ihojWZpU916g.png"
  }
];


const timelineData = [
  {
    title: "Self-Learning",
    place: "React, AI/ML Projects",
    year: "Ongoing",
    details: ["Exploring advanced tools & technologies"],
  },
  {
    title: "Google Cloud Arcade Facilitator Program",
    place: "Remote",
    year: "04/2025 – 06/2025",
    details: [
      "Achieved Arcade Legend Tier, the highest recognition in the Skills Boost Arcade.",
      "Completed hands-on labs across cloud domains: Compute Engine, App Engine, Cloud Storage, BigQuery, Vertex AI.",
      "Recognized with an exclusive prize bundle for excellence in cloud learning."
    ],
  },
  {
    title: "Intel Unnati Industrial Training Program 2024",
    place: "Remote",
    year: "06/2024 – 08/2024",
    details: [
      "Scraped product reviews (3–5 years) using APIs, cleaned duplicates/nulls.",
      "Applied EDA, ML, and NLP techniques for sentiment analysis.",
      "Performed clustering, trend analysis, keyword extraction, and product improvement recommendations."
    ],
  },
  {
    title: "MCA - Master of Computer Applications",
    place: "B. S. Abdur Rahman Crescent Institute of Science & Technology",
    year: "2023 – 2025",
    details: ["CGPA: 9.15"],
  },
  {
    title: "B.Sc. Computer Science",
    place: "Jamal Mohamed College",
    year: "2020 – 2023",
    details: ["CGPA: 8.4"],
  },
];




// Skills with icons
const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Excel", icon: <FaFileExcel /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "VS Code", icon: <FaCode /> }, // replaced with FaCode
  { name: "Data Structures & Algorithms", icon: <FaCode /> },
  { name: "Google Sheets", icon: <SiGooglesheets /> },
  { name: "Jupyter Notebook", icon: <SiJupyter /> },
  { name: "Google Colab", icon: <SiGooglecolab /> },
  { name: "Kaggle Notebook", icon: <SiKaggle /> },
];

// Animated Section Heading
function AnimatedHeading({ children, darkMode }) {
  return (
    <motion.h2
      className="relative inline-block text-2xl md:text-3xl font-bold mb-8 md:mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className={`${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
        {children}
      </span>
      <motion.span
        className={`absolute left-0 -bottom-1 h-1 w-full rounded-full ${darkMode ? "bg-indigo-400/60" : "bg-indigo-600/60"}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.h2>
  );
}


// Sun / Moon icons
function SunIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 19v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 12h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.6 5.6l.7.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.7 17.7l.7.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.6 18.4l.7-.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.7 6.3l.7-.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}


export default function MyPortfolio() {
  const scrollRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  setSubmitted(true);
};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [selectedProject, setSelectedProject] = useState(null);
  const firstWords = ["Creativity", "Passion", "Dreams", "Imagination"];
  const secondWords = ["Technology", "Purpose", "Digital", "Innovation"];
  

  // Auto-scroll mobile projects
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000); // change project every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const childWidth = scrollContainer.children[0].offsetWidth + 24; // 24 = gap
      scrollContainer.scrollTo({
        left: currentIndex * childWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  const stored = localStorage.getItem("mp_theme");
  if (stored) setDarkMode(stored === "dark");
  else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }
}, []);


  useEffect(() => {
    localStorage.setItem("mp_theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rootBg = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    : "bg-gradient-to-br from-white via-gray-100 to-white text-gray-900";

  const navBg = darkMode ? "bg-black/30 border-gray-800" : "bg-white/60 border-gray-200";
  const navTextHover = darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600";
  const overlayBg = darkMode ? "bg-black/70" : "bg-white/70";

  if (loading) return <Loader />;
  return (
    <main className={`${rootBg} font-sans min-h-screen scroll-smooth relative`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 ${navBg} backdrop-blur-md border-b`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className={`text-lg md:text-xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
            Abdul Rahman
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className={navTextHover}>About</a>
            <a href="#education" className={navTextHover}>Education & Experience</a>
            <a href="#skills" className={navTextHover}>Skills</a>
            <a href="#projects" className={navTextHover}>Projects</a>
            <a href="#blogs" className={navTextHover}>Blogs</a>
            <a href="#contact" className={navTextHover}>Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((s) => !s)}
              aria-label="Toggle theme"
              className={`p-2 rounded-full ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}
              title="Toggle dark / light"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-indigo-400 rounded"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="block w-6 h-0.5 bg-indigo-400 rounded my-1"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-indigo-400 rounded"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`fixed inset-0 ${overlayBg} backdrop-blur-sm z-40`}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-14 left-0 right-0 z-50 md:hidden flex flex-col items-center ${darkMode ? "bg-black/90" : "bg-white"} border-t ${darkMode ? "border-gray-800" : "border-gray-200"} py-6 shadow-lg`}
            >
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
                className="flex flex-col space-y-4"
              >
                {["About", "Education", "Skills", "Projects", "Blogs", "Contact"].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg ${navTextHover}`}
                    variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.28 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </nav>
      {/* Hero Section */}
<section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden">
  <div className="relative z-10">
    <motion.div
      className={`absolute inset-0 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl ${
        darkMode
          ? "bg-gradient-to-tr from-indigo-500/30 to-purple-500/20"
          : "bg-gradient-to-tr from-indigo-300/50 to-purple-300/40"
      }`}
      animate={{ opacity: [0.6, 0.95, 0.6], rotate: [0, 15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className={`absolute inset-0 w-56 md:w-72 h-56 md:h-72 rounded-full blur-2xl ${
        darkMode
          ? "bg-gradient-to-br from-purple-500/20 to-indigo-400/10"
          : "bg-gradient-to-br from-purple-300/40 to-indigo-200/40"
      }`}
      animate={{ opacity: [0.4, 0.8, 0.4], rotate: [0, -15, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.img
  src={floatingCharacter}
  alt="Luffy"
  className="relative w-48 md:w-80 opacity-95 pointer-events-none select-none drop-shadow-2xl mx-auto"
  animate={{ y: [0, -30, 0] }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
/>

  </div>

  <h2 className="text-4xl md:text-7xl font-extrabold mt-6 md:mt-8 relative z-10">
    Abdul Rahman
  </h2>
  <p className={`text-lg md:text-2xl font-medium relative z-10 text-center ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
  Bridging{" "}
  <span 
    style={{ 
      fontWeight: "bold", 
      display: "inline-block", 
      minWidth: "8ch"  // enough for the longest word, adjusts on mobile
    }}
  >
    <Typewriter
      words={firstWords}  
      loop={0}          
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>{" "}
  with{" "}
  <span 
    style={{ 
      fontWeight: "bold", 
      display: "inline-block", 
      minWidth: "10ch"  // enough for the longest word, adjusts on mobile
    }}
  >
    <Typewriter
      words={secondWords} 
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>
</p>


  <div className="mt-6 relative z-10 flex flex-col items-center gap-4">
  <a
  href="/resume.pdf"
  className="inline-block px-5 py-2 rounded-full font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>


  {/* Social Icons */}
  <div className="flex gap-6 mt-2">
    <a href="https://github.com/Rahman-Ar" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-700"} text-2xl transition`}>
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/Abdul-rahman-offl/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-700"} text-2xl transition`}>
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/_rahman_offl/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-700"} text-2xl transition`}>
      <FaInstagram />
    </a>
    <a href="mailto:im.rahman.offl@gmail.com" className={`${darkMode ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-700"} text-2xl transition`}>
      <FaEnvelope />
    </a>
  </div>
</div>

</section>

{/* About Section */}
<section
  id="about"
  className="max-w-5xl mx-auto py-16 md:py-32 px-4 md:px-6"
>
  <AnimatedHeading darkMode={darkMode}>About Me</AnimatedHeading>

  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-8">
    {/* Luffy Image */}
    <motion.img
      src={luffyYo}
      alt="Luffy says Yo!"
      className="w-56 md:w-72 mx-auto drop-shadow-xl"
      loading="lazy"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    />

    {/* About Text */}
    <motion.p
      className={`${darkMode ? "text-gray-300" : "text-gray-800"} leading-relaxed text-base md:text-lg`}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      Yoo!, I’m Abdul Rahman, a software developer and AI enthusiast with an MCA. 
      I love building web apps, automating tasks, and experimenting with AI to solve real-world problems. 
      I don’t always have the answer right away but I know how to find it, learn it, and make it work. 
      For me, coding isn’t just about memorizing syntax; it’s about solving problems, exploring possibilities, and 
      building solutions that matter. When I’m not coding, I’m exploring new technologies, tinkering with side projects, 
      or thinking about what to build next.
    </motion.p>
  </div>
</section>


{/* Timeline Section (Education + Experience) */}
<section
  id="education"
  className={`relative py-20 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 via-white"}`}>

  <div className="text-center">
    <AnimatedHeading darkMode={darkMode}>Education & Experience</AnimatedHeading>
  </div>

  <div className="relative max-w-6xl mx-auto">
    {/* Vertical Line */}
    <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${darkMode ? "bg-gradient-to-b from-green-500 to-green-600" : "bg-gradient-to-b from-green-400 to-green-400"}`}></div>


    <div className="flex flex-col space-y-16">
      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className="relative w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Connector dot */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 z-10"></div>

            {/* Timeline box */}
            <div
              className={`w-full md:w-1/2 p-6 rounded-2xl shadow-lg ${darkMode ? "bg-gray-800/70 text-gray-300" : "bg-white/90 shadow-md text-gray-900"}
 
              ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"} 
              mx-auto md:mx-0`}
            >
              <h3 className={`text-lg font-bold ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{item.title}</h3>
<p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{item.place}</p>
<p className={`text-sm font-medium ${darkMode ? "text-blue-400" : "text-indigo-600"}`}>{item.year}</p>
{item.details && item.details.length > 0 && (
  <ul className={`list-disc pl-5 mt-2 space-y-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
    {item.details.map((detail, i) => (
      <li key={i}>{detail}</li>
    ))}
  </ul>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>

  {/* Bag at bottom-left */}
  <div className="absolute right-6 bottom-0 md:bottom-0 w-28 md:w-36">
  <img src={bagImage} alt="Knowledge Bag"  />
</div>
</section>



{/* Skills Section */}
<section id="skills" className="max-w-5xl mx-auto py-16 md:py-32 px-4 md:px-6 text-center">
  <AnimatedHeading darkMode={darkMode}>Skills</AnimatedHeading>

  {[0, 1].map(rowIdx => {
    const direction = rowIdx % 2 === 0 ? 1 : -1;
    return (
      <div key={rowIdx} className="overflow-visible mb-6 md:mb-8">
        <motion.div
          className="flex gap-6 md:gap-8 w-max"
          animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className={`${
                darkMode
                  ? "bg-gray-800/60 text-gray-300 shadow-md"
                  : "bg-gradient-to-br from-white-50 to-white-50 text-gray-900 shadow-lg"
              } rounded-xl py-6 md:py-8 px-4 md:px-6 flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[160px] transition relative`}
            >
              <div className={`${darkMode ? "text-white-400" : "text-black-600"} text-3xl md:text-4xl mb-2`}>
                {skill.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-center">{skill.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    );
  })}
</section>


{/* Projects Section */}
<section id="projects" className="max-w-6xl mx-auto py-16 md:py-32 px-4 md:px-6 text-center">
  <AnimatedHeading darkMode={darkMode}>Projects</AnimatedHeading>

       {/* 📱 Mobile view - horizontal scroll */}
<div
  className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
  ref={scrollRef}
>
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className={`min-w-[80%] snap-center rounded-2xl shadow-lg p-5 cursor-pointer transition ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedProject(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl w-full h-48 object-cover mb-4"
      />
      <h3
        className={`text-lg font-bold ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        {project.title}
      </h3>
    </motion.div>
  ))}
</div>



      {/* 💻 Desktop view - grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl shadow-lg p-5 cursor-pointer transition hover:shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3
              className={`text-lg font-bold mb-1 ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-sm line-clamp-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔍 Expanded View / Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className={`relative max-w-lg w-full rounded-2xl shadow-2xl p-6 ${
          darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
        }`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-3 right-3 text-xl font-bold hover:text-red-500"
        >
          ✕
        </button>
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-xl w-full h-56 object-cover mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
        <p className="mb-3">{selectedProject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedProject.tech.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                darkMode ? "bg-indigo-700/40 text-indigo-300" : "bg-indigo-100 text-indigo-600"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
        >
          View Project
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
</section>

{/* Blog Section */}
<section id="blogs" className="max-w-5xl mx-auto py-16 px-4 text-center">
  <AnimatedHeading darkMode={darkMode}>Articles & Blogs</AnimatedHeading>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    {blogs.map((blog, idx) => (
      <motion.div
        key={idx}
        className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900 border border-gray-200"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.2 }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
          <p className="text-sm mb-6">{blog.excerpt}</p>
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-4 py-2 rounded text-sm font-medium ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-indigo-500 hover:bg-indigo-600 text-white"
            } transition`}
          >
            Read More
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>





{/* Contact Section */}
<section
  id="contact"
  className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
    darkMode ? "bg-gray-900" : "bg-white"
  }`}
>
  <div className="text-center mb-12">
    <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
      Let’s Connect
    </h2>
    <div className="mt-4 flex flex-col md:flex-row items-center justify-center text-center md:text-lg gap-2">
  {/* Typed Text */}
  <span className="font-semibold text-green-500">
    <ReactTyped
      strings={[
        "Projects",
        "Jobs",
        "Feedback about my portfolio",
        "Random hellos"
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  </span>

  {/* Static Text */}
  <span className="font-semibold text-gray-400">— I’d love to hear from you!</span>
</div>

  </div>

  <div className="flex justify-center">
    <div
  className={`rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg ${
    darkMode ? "bg-gray-800" : "bg-gray-50 border border-gray-200"
  }`}
>

    <form action="https://formspree.io/f/mnnblvog" method="POST" className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={`w-full p-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={`w-full p-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        />
        <textarea
          rows="4"
          name="message"
          required
          placeholder="Your Message"
          className={`w-full p-3 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        ></textarea>
        <button
  type="submit"
  className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition disabled:opacity-50"
  disabled={submitted}
>
  Send Message
</button>
{submitted && <p className="text-green-500 text-sm">Thank you! Your message has been sent.</p>}
      </form>
    </div>
  </div>
</section>


      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScroll ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
       {/* Footer */}
      <footer className={`py-6 text-center ${darkMode ? "text-gray-400 border-t border-gray-800" : "text-gray-600 border-t border-gray-200"}`}>
        <p>© {new Date().getFullYear()} Abdul Rahman</p>
      </footer>
    </main>
  );
}


function Loader() {
  return (
    <div className="fixed inset-0 bg-indigo/70 flex justify-center items-center z-50">
      <img src={loaderGif} alt="Loading..." className="w-64 h-64" />
    </div>
  );
}