import { AnimatePresence, motion } from "framer-motion";
import GoogleTemplate2 from "../pages/templates/GoogleTemplate2";
import MicrosoftTemplate2 from "../pages/templates/MicrosoftTemplate2";
import AmazonTemplate2 from "../pages/templates/AmazonTemplate2";
import MetaTemplate2 from "../pages/templates/MetaTemplate2";
import AdobeTemplate2 from "../pages/templates/AdobeTemplate2";
import UberTemplate2 from "../pages/templates/UberTemplate2";
import GoogleTemplate from "../assets/GoogleTemplate.png";
import MicrosoftTemplate from "../assets/MicrosoftTemplate.png";
import AmazonTemplate from "../assets/AmazonTemplate.png";
import { useEffect, useState } from "react";

const defaultResumeData = {
  name: "John Doe",
  role: "Senior Software Engineer",
  location: "San Francisco, CA",
  email: "john.doe@email.com",
  phone: "+1 (415) 555-0101",
  website: "johndoe.dev",
  summary:
    "Seasoned engineer with 8+ years building scalable web platforms. Passionate about DX, performance, and elegant UX.",
  experience: [
    {
      company: "NovaLabs",
      title: "Lead Frontend Engineer",
      period: "2022 — Present",
      bullets: [
        "Led migration to React Server Components; cut TTFB by 34%.",
        "Shipped design system used across 7 product lines.",
        "Mentored 5 engineers, instituted testing culture (95% coverage).",
      ],
    },
    {
      company: "Cloudyard",
      title: "Software Engineer",
      period: "2019 — 2022",
      bullets: [
        "Delivered billing microservice handling 1M+ tx/month.",
        "Introduced CI/CD with feature previews; reduced regressions by 40%.",
      ],
    },
    {
      company: "PixelForge",
      title: "Frontend Engineer",
      period: "2017 — 2019",
      bullets: [
        "Built component library with a11y-first patterns.",
        "Improved Lighthouse scores from 58 to 95+.",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      period: "2013 — 2017",
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Playwright",
  ],
  projects: [
    {
      name: "ResumeAI",
      desc: "LLM-powered resume writer with live preview.",
    },
    {
      name: "OpenCharts",
      desc: "Headless chart components for React.",
    },
  ],
  certifications: [
    "AWS Certified Developer – Associate",
    "Scrum Master (PSM I)",
  ],
  languages: ["English (Native)", "Spanish (Professional)"],
};

const templates = [
  { name: "Google", component: GoogleTemplate2 },
  { name: "Microsoft", component: MicrosoftTemplate2 },
  { name: "Amazon", component: AmazonTemplate2 },
  { name: "Meta", component: MetaTemplate2 },
  { name: "Adobe", component: AdobeTemplate2 },
  { name: "Uber", component: UberTemplate2 },
];

const images = [
  { name: "Google", image: GoogleTemplate },
  { name: "Microsoft", image: MicrosoftTemplate },
  { name: "Amazon", image: AmazonTemplate },
];

export default function ResumeCarousel() {
    const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  const TemplateComponent = images[current].image;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % templates.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  // const TemplateComponent = templates[current].component;

  return (
    <AnimatePresence mode="wait"> 
      <motion.img key={current} 
      src={TemplateComponent} 
      alt={''} 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} 
      transition={{ duration: 0.5 }} 
      className="h-[400px] md:h-[500px] object-contain bg-transparent justify-center mx-auto" /> 
      </AnimatePresence>
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={current}
    //     initial={{ opacity: 0, x: 50 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     exit={{ opacity: 0, x: -50 }}
    //     transition={{ duration: 0.5 }}
    //     className="h-[500px] md:h-[500px] rounded-xl overflow-hidden justify-center mx-auto landing-carousel-container"
    //   >
        
    //     <div className="h-auto overflow-hidden" style={{ padding: '27px 0px', height: '100%'}}>
        
    //               <div className="scale-75 origin-top -translate-y-10">
    //                 <TemplateComponent data={defaultResumeData} />
    //               </div>
    //             </div>
        
    //   </motion.div>
    // </AnimatePresence>
  );
}
