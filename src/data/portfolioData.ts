export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Production Ready' | 'In Progress' | 'Open Source';
  featured: boolean;
  tags: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  category: 'AI & SaaS' | 'Cloud & DevOps' | 'Mobile & Web Platforms';
}

export interface SkillCategory {
  id: string;
  name: string;
  command: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    description: string;
  }[];
}

export interface JourneyMilestone {
  period: string;
  role: string;
  company: string;
  category: string;
  description: string;
  skills: string[];
  current?: boolean;
}

export const portfolioData = {
  profile: {
    name: "Md Sami",
    fullName: "Abdus Sami (Md Sami)",
    initials: "MS",
    title: "Software Engineer & Founder",
    subTitle: "CEO at AppifyDevs · DevOps & Cloud Architect",
    tagline: "I build scalable AI-driven SaaS, resilient cloud infrastructure, and high-performance web & mobile platforms.",
    bio: "I'm Md Sami, Founder & CEO of AppifyDevs and Co-Founder & CTO of Chondo. I specialize in software engineering, DevOps, cloud architecture (AWS/Azure), Kubernetes, and building modern SaaS MVPs with Next.js, Node.js, Flutter, and AI/ML.",
    extendedBio: "With a solid foundation in computer science and over a decade of hands-on engineering, I lead cross-functional teams to deliver AI-driven products, blockchain-enabled platforms, and high-availability cloud systems. My focus is on scalable architecture, automation, and shipping products that create measurable business impact.",
    statusText: "Open to collaborations",
    location: "Dhaka, Bangladesh",
    timezone: "UTC +06:00",
    email: "mdsami@appifydevs.com",
    calendly: "https://calendly.com/appifydevs/30min",
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Companies Led", value: "5+" },
      { label: "Cloud Platforms", value: "AWS/Azure" },
      { label: "Products Shipped", value: "30+" },
    ],
    socials: {
      github: "https://github.com/mdsami",
      linkedin: "https://www.linkedin.com/in/mdsami55/",
      twitter: "https://twitter.com/mdsami5",
      instagram: "https://www.instagram.com/mdsami5",
      biolink: "https://bio.link/mdsami",
      company: "https://appifydevs.com/",
    }
  },

  features: [
    {
      title: "AI-Driven SaaS",
      description: "Building Gen AI and ML-powered products that automate workflows and boost client efficiency by over 45%.",
      icon: "Sparkles",
      color: "emerald"
    },
    {
      title: "Cloud & DevOps Architecture",
      description: "Deep expertise in Kubernetes, Istio, AWS, Azure, OpenStack, and designing high-availability production systems.",
      icon: "Cloud",
      color: "cyan"
    },
    {
      title: "Full-Stack & Mobile",
      description: "Shipping production-grade web and mobile apps with Next.js, Node.js, Laravel, and Flutter across iOS & Android.",
      icon: "Smartphone",
      color: "purple"
    },
    {
      title: "Team Leadership",
      description: "Led engineering teams at MetaKave and HelloTask, owning deployment architecture, security, and delivery.",
      icon: "Layers",
      color: "blue"
    }
  ],

  skillCategories: [
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      command: "devops",
      skills: [
        { name: "Kubernetes & Istio", level: "Expert", description: "Cluster orchestration, service mesh, ingress, auto-scaling" },
        { name: "AWS / Azure", level: "Expert", description: "VPC, IAM, EC2, S3, capacity planning, cloud deployments" },
        { name: "Docker", level: "Expert", description: "Containerization, multi-stage builds, continuous delivery" },
        { name: "OpenStack", level: "Advanced", description: "On-premise private cloud platform deployment" },
        { name: "CI/CD Pipelines", level: "Advanced", description: "Automated build, test, and zero-downtime deployment" }
      ]
    },
    {
      id: "ai-ml",
      name: "AI / ML & Data",
      command: "aiml",
      skills: [
        { name: "Generative AI", level: "Advanced", description: "LLM integration, AI product features, intelligent automation" },
        { name: "MLOps & MLflow", level: "Advanced", description: "Model lifecycle, experiment tracking, production ML pipelines" },
        { name: "GPU Acceleration", level: "Intermediate", description: "CUDA optimization, high-performance computing, cluster design" },
        { name: "Big Data", level: "Advanced", description: "Scalable data processing and distributed architectures" }
      ]
    },
    {
      id: "backend",
      name: "Backend & Systems",
      command: "backend",
      skills: [
        { name: "Node.js", level: "Expert", description: "REST APIs, microservices, real-time systems" },
        { name: "Laravel / PHP", level: "Advanced", description: "Robust MVC backends, authentication, queuing" },
        { name: "Microservices", level: "Expert", description: "Event-driven architecture, service mesh, API gateways" },
        { name: "Blockchain / Web3", level: "Advanced", description: "Decentralized platforms, secure transparent data sharing" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend & Mobile",
      command: "frontend",
      skills: [
        { name: "Next.js & React", level: "Expert", description: "SSR, App Router, TypeScript, responsive design" },
        { name: "Flutter", level: "Expert", description: "Cross-platform iOS & Android apps with clean architecture" },
        { name: "Tailwind CSS", level: "Expert", description: "Design systems, custom themes, pixel-perfect UI" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Leadership",
      command: "tools",
      skills: [
        { name: "Agile & Kanban", level: "Expert", description: "Sprint planning, team delivery, continuous improvement" },
        { name: "Git & GitHub", level: "Expert", description: "Version control, open-source collaboration, code review" },
        { name: "Product Strategy", level: "Advanced", description: "SaaS MVP development, roadmap, founder-led engineering" },
        { name: "Technical Speaking", level: "Advanced", description: "AI, blockchain, DevOps, and startup strategy talks" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "appifydevs",
      title: "AppifyDevs Platform",
      subtitle: "AI/ML SaaS Product Studio",
      description: "An AI-driven product company building SaaS MVPs, mobile apps, and web platforms for founders. Specializes in Gen AI, Flutter, Next.js, Node.js, and Laravel.",
      status: "Production Ready",
      featured: true,
      category: "AI & SaaS",
      tags: ["Gen AI", "Next.js", "Flutter", "Node.js", "Laravel", "AWS"],
      keyFeatures: [
        "AI-driven SaaS MVPs for founders",
        "45%+ client efficiency improvement",
        "High-quality iOS & Android delivery",
        "Scalable cloud-native architecture"
      ],
      liveUrl: "https://appifydevs.com/",
    },
    {
      id: "chondo",
      title: "Chondo",
      subtitle: "Femtech Health Platform",
      description: "A Femtech platform enabling women to track menstrual and pregnancy cycles, access professional healthcare support, and order eco-friendly hygiene products to their doorstep.",
      status: "Production Ready",
      featured: true,
      category: "Mobile & Web Platforms",
      tags: ["Flutter", "Node.js", "Healthcare", "Mobile App", "REST APIs"],
      keyFeatures: [
        "Menstrual & pregnancy cycle tracking",
        "Professional health support & advice",
        "Eco-friendly product delivery",
        "Privacy-first Femtech architecture"
      ],
    },
    {
      id: "hellotask",
      title: "HelloTask",
      subtitle: "Blue-Collar Job Platform",
      description: "A high-availability blue-collar job platform where I owned the full deployment architecture, Kubernetes with Istio service mesh, and multi-cloud infrastructure.",
      status: "Production Ready",
      featured: true,
      category: "Cloud & DevOps",
      tags: ["Kubernetes", "Istio", "AWS", "Azure", "High Availability"],
      keyFeatures: [
        "Kubernetes with Istio service mesh",
        "On-premise & cloud capacity planning",
        "Zero-downtime production deployments",
        "Security & reliability focused"
      ],
    },
    {
      id: "docker-labs",
      title: "Docker Labs",
      subtitle: "Open-Source Containerization Guide",
      description: "A hands-on laboratory for mastering Docker concepts, multi-stage production builds, networking, and container orchestration.",
      status: "Open Source",
      featured: false,
      category: "Cloud & DevOps",
      tags: ["Docker", "Linux", "DevOps", "Open Source"],
      keyFeatures: [
        "Production-ready Dockerfiles",
        "Container security patterns",
        "Community-driven exercises"
      ],
      githubUrl: "https://github.com/mdsami/docker-labs",
      stars: 23
    },
    {
      id: "kubernetes-laravel",
      title: "Multi-Cloud Kubernetes",
      subtitle: "Enterprise Container Orchestration",
      description: "Production-grade Kubernetes deployment architecture across Azure AKS, Amazon EKS, and Google GKE with automated ingress and rolling updates.",
      status: "Open Source",
      featured: false,
      category: "Cloud & DevOps",
      tags: ["Kubernetes", "AKS", "EKS", "GKE", "Terraform"],
      keyFeatures: [
        "Multi-cloud deployment parity",
        "Helm charts & secret management",
        "Auto-scaling & SSL automation"
      ],
      githubUrl: "https://github.com/mdsami/kubernetes-laravel"
    }
  ] as Project[],

  journey: [
    {
      period: "2024 — Present",
      role: "Founder & CEO",
      company: "AppifyDevs",
      category: "AI/ML Product Company",
      current: true,
      description: "Founded an AI/ML product company building SaaS MVPs, mobile apps, and web platforms. Led product strategy, engineering, and delivery of Gen AI and cloud-native solutions for founders.",
      skills: ["Gen AI", "SaaS", "Flutter", "Next.js", "Node.js", "Product Strategy"]
    },
    {
      period: "2022 — Present",
      role: "Co-Founder & CTO",
      company: "Chondo",
      category: "Femtech Platform",
      current: true,
      description: "Co-founded a Femtech platform for cycle tracking, healthcare support, and eco-friendly product delivery. Own the technical architecture and engineering delivery.",
      skills: ["Flutter", "Node.js", "Healthcare", "Mobile Apps", "API Design"]
    },
    {
      period: "2023 — 2024",
      role: "DevOps Tech Lead",
      company: "HelloTask",
      category: "Blue-Collar Job Platform",
      description: "Owned deployment architecture, Kubernetes with Istio gateway, and capacity planning for production workloads across AWS and Azure with a focus on high availability and security.",
      skills: ["Kubernetes", "Istio", "AWS", "Azure", "Capacity Planning"]
    },
    {
      period: "2019 — 2022",
      role: "DevOps Engineer → Team Lead",
      company: "MetaKave",
      category: "Digital Transformation",
      description: "Led software engineering teams, deployed OpenStack platforms, and managed AWS/Azure infrastructure. Focused on high availability, security, and reliability for production workloads.",
      skills: ["OpenStack", "AWS", "Azure", "Team Leadership", "DevOps"]
    },
    {
      period: "2015 — 2018",
      role: "Software Engineer → Senior",
      company: "Analyzen",
      category: "Software Engineering",
      description: "Built full-stack software products and grew into senior engineering responsibilities, delivering scalable web applications and APIs for clients.",
      skills: ["Software Engineering", "Web Apps", "APIs", "Full-Stack"]
    }
  ] as JourneyMilestone[]
};
