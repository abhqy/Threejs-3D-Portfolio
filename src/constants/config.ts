type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Abhay Menon",
    fullName: "Abhay Menon",
    email: "a32menon@uwaterloo.ca",
  },
  hero: {
    name: "abhay.",
    p: ["a 4B CS student at UWaterloo interested in", "cloud technologies and full-stack development."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "About Me",
      h2: "Overview.",
      content: `I'm a fourth-year Computer Science student specializing in full-stack development and cloud infrastructure. Proficient in languages like C++, Python, and TypeScript, I've worked with technologies such as GCP, AWS, Kubernetes, Terraform, Node.js, Flask, and React.js.
      From optimizing cloud app performance to leading Agile projects, my journey showcases a commitment to innovation and growth. Explore further to learn about my experiences and skills!`,
    },
    experience: {
      p: "Where I have worked",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `From intuitive interfaces boosting productivity, to pioneering platforms enhancing engagement, each project is a testament to my commitment to excellence. Join me in navigating the confluence of creativity, technical finesse, and visionary leadership that defines my journey in software development.`,
    },
  },
};
