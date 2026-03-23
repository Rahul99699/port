const config = {
  title: "Rahul | AI/ML Developer",
  description: {
    long: "I build intelligent systems, data-driven applications, and futuristic web experiences. Specialist in Artificial Intelligence and Machine Learning, blending cutting-edge tech with immersive UI.",
    short:
      "AI/ML Developer crafting intelligent systems and immersive web experiences.",
  },
  keywords: [
    "Rahul",
    "portfolio",
    "AI/ML Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "NLP",
    "Web Development",
    "Next.js",
    "Python",
    "Java",
    "interactive websites",
  ],
  author: "Rahul",
  email: "r9979413@gmail.com",
  resume: "https://drive.google.com/file/d/1s7vom-9bRIFRnbqf7LXPoR9ZmUdfzgrT/view?usp=sharing",
  site: "https://rahul.dev",

  // for github stars button
  githubUsername: "rahul-username",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/rahul",
    linkedin: "https://linkedin.com/in/rahul-profile",
    instagram: "https://www.instagram.com/rahul",
    facebook: "https://www.facebook.com/rahul",
    github: "https://github.com/rahul-username",
  },
};
export { config };
