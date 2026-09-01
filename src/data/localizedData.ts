import { Locale } from '@/i18n';
import {
  portfolioData,
  Project,
  SkillCategory,
  JourneyMilestone,
} from './portfolioData';

export interface PortfolioData {
  profile: {
    name: string;
    fullName: string;
    initials: string;
    title: string;
    subTitle: string;
    tagline: string;
    bio: string;
    extendedBio: string;
    statusText: string;
    location: string;
    timezone: string;
    email: string;
    calendly: string;
    stats: { label: string; value: string }[];
    socials: {
      github: string;
      linkedin: string;
      twitter: string;
      instagram: string;
      biolink: string;
      company: string;
    };
  };
  features: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  journey: JourneyMilestone[];
}

const de: PortfolioData = {
  profile: {
    name: 'Md Sami',
    fullName: 'Abdus Sami (Md Sami)',
    initials: 'MS',
    title: 'Software-Ingenieur & Gründer',
    subTitle: 'CEO bei AppifyDevs · DevOps- & Cloud-Architekt',
    tagline:
      'Ich baue skalierbare KI-gestützte SaaS, belastbare Cloud-Infrastruktur und leistungsstarke Web- & Mobile-Plattformen.',
    bio: 'Ich bin Md Sami, Gründer & CEO von AppifyDevs und Mitgründer & CTO von Chondo. Ich spezialisiere mich auf Softwareentwicklung, DevOps, Cloud-Architektur (AWS/Azure), Kubernetes und moderne SaaS-MVPs mit Next.js, Node.js, Flutter und AI/ML.',
    extendedBio:
      'Mit einer soliden Grundlage in der Informatik und über einem Jahrzehnt praktischer Erfahrung leite ich funktionsübergreifende Teams bei der Umsetzung KI-gestützter Produkte, Blockchain-fähiger Plattformen und hochverfügbarer Cloud-Systeme. Mein Fokus liegt auf skalierbarer Architektur, Automatisierung und dem Ausliefern von Produkten mit messbarem Geschäftseinfluss.',
    statusText: 'Offen für Zusammenarbeit',
    location: 'Dhaka, Bangladesch',
    timezone: 'UTC +06:00',
    email: 'mdsami@appifydevs.com',
    calendly: 'https://calendly.com/appifydevs/30min',
    stats: [
      { label: 'Jahre Erfahrung', value: '10+' },
      { label: 'Geführte Unternehmen', value: '5+' },
      { label: 'Cloud-Plattformen', value: 'AWS/Azure' },
      { label: 'Produkte veröffentlicht', value: '30+' },
    ],
    socials: {
      github: 'https://github.com/mdsami',
      linkedin: 'https://www.linkedin.com/in/mdsami55/',
      twitter: 'https://twitter.com/mdsami5',
      instagram: 'https://www.instagram.com/mdsami5',
      biolink: 'https://bio.link/mdsami',
      company: 'https://appifydevs.com/',
    },
  },
  features: [
    {
      title: 'KI-gestütztes SaaS',
      description:
        'Aufbau von Gen-AI- und ML-basierten Produkten, die Arbeitsabläufe automatisieren und die Effizienz von Kunden um über 45 % steigern.',
      icon: 'Sparkles',
      color: 'emerald',
    },
    {
      title: 'Cloud- & DevOps-Architektur',
      description:
        'Tiefe Expertise in Kubernetes, Istio, AWS, Azure, OpenStack und dem Design hochverfügbarer Produktionssysteme.',
      icon: 'Cloud',
      color: 'cyan',
    },
    {
      title: 'Full-Stack & Mobile',
      description:
        'Auslieferung produktionsreifer Web- und Mobile-Apps mit Next.js, Node.js, Laravel und Flutter für iOS & Android.',
      icon: 'Smartphone',
      color: 'purple',
    },
    {
      title: 'Teamführung',
      description:
        'Leitung von Engineering-Teams bei MetaKave und HelloTask mit Verantwortung für Deployment-Architektur, Sicherheit und Lieferung.',
      icon: 'Layers',
      color: 'blue',
    },
  ],
  skillCategories: [
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      command: 'devops',
      skills: [
        { name: 'Kubernetes & Istio', level: 'Experte', description: 'Cluster-Orchestrierung, Service Mesh, Ingress, Auto-Skalierung' },
        { name: 'AWS / Azure', level: 'Experte', description: 'VPC, IAM, EC2, S3, Kapazitätsplanung, Cloud-Deployments' },
        { name: 'Docker', level: 'Experte', description: 'Containerisierung, Multi-Stage-Builds, kontinuierliche Auslieferung' },
        { name: 'OpenStack', level: 'Fortgeschritten', description: 'Bereitstellung privater On-Premise-Cloud-Plattformen' },
        { name: 'CI/CD-Pipelines', level: 'Fortgeschritten', description: 'Automatisierter Build, Test und Deployment ohne Ausfallzeiten' },
      ],
    },
    {
      id: 'ai-ml',
      name: 'AI / ML & Daten',
      command: 'aiml',
      skills: [
        { name: 'Generative AI', level: 'Fortgeschritten', description: 'LLM-Integration, AI-Produktfeatures, intelligente Automatisierung' },
        { name: 'MLOps & MLflow', level: 'Fortgeschritten', description: 'Modelllebenszyklus, Experiment-Tracking, produktive ML-Pipelines' },
        { name: 'GPU-Beschleunigung', level: 'Mittel', description: 'CUDA-Optimierung, High-Performance-Computing, Cluster-Design' },
        { name: 'Big Data', level: 'Fortgeschritten', description: 'Skalierbare Datenverarbeitung und verteilte Architekturen' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend & Systeme',
      command: 'backend',
      skills: [
        { name: 'Node.js', level: 'Experte', description: 'REST-APIs, Microservices, Echtzeitsysteme' },
        { name: 'Laravel / PHP', level: 'Fortgeschritten', description: 'Robuste MVC-Backends, Authentifizierung, Queuing' },
        { name: 'Microservices', level: 'Experte', description: 'Ereignisgesteuerte Architektur, Service Mesh, API-Gateways' },
        { name: 'Blockchain / Web3', level: 'Fortgeschritten', description: 'Dezentrale Plattformen, sicherer transparenter Datenaustausch' },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend & Mobile',
      command: 'frontend',
      skills: [
        { name: 'Next.js & React', level: 'Experte', description: 'SSR, App Router, TypeScript, responsives Design' },
        { name: 'Flutter', level: 'Experte', description: 'Plattformübergreifende iOS- & Android-Apps mit sauberer Architektur' },
        { name: 'Tailwind CSS', level: 'Experte', description: 'Designsysteme, eigene Themes, pixelgenaue UI' },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Führung',
      command: 'tools',
      skills: [
        { name: 'Agile & Kanban', level: 'Experte', description: 'Sprintplanung, Teamlieferung, kontinuierliche Verbesserung' },
        { name: 'Git & GitHub', level: 'Experte', description: 'Versionskontrolle, Open-Source-Zusammenarbeit, Code-Review' },
        { name: 'Produktstrategie', level: 'Fortgeschritten', description: 'SaaS-MVP-Entwicklung, Roadmap, gründergeführtes Engineering' },
        { name: 'Technisches Sprechen', level: 'Fortgeschritten', description: 'Vorträge zu AI, Blockchain, DevOps und Startup-Strategie' },
      ],
    },
  ],
  projects: [
    {
      id: 'appifydevs',
      title: 'AppifyDevs Platform',
      subtitle: 'AI/ML-SaaS-Produktstudio',
      description:
        'Ein KI-gestütztes Produktunternehmen, das SaaS-MVPs, Mobile-Apps und Web-Plattformen für Gründer baut. Spezialisiert auf Gen AI, Flutter, Next.js, Node.js und Laravel.',
      status: 'Produktionsreif',
      statusKind: 'production',
      featured: true,
      category: 'AI & SaaS',
      categoryKey: 'ai-saas',
      tags: ['Gen AI', 'Next.js', 'Flutter', 'Node.js', 'Laravel', 'AWS'],
      keyFeatures: [
        'KI-gestützte SaaS-MVPs für Gründer',
        'Über 45 % Effizienzsteigerung für Kunden',
        'Hochwertige iOS- & Android-Auslieferung',
        'Skalierbare Cloud-native Architektur',
      ],
      liveUrl: 'https://appifydevs.com/',
    },
    {
      id: 'chondo',
      title: 'Chondo',
      subtitle: 'Femtech-Gesundheitsplattform',
      description:
        'Eine Femtech-Plattform, die Frauen ermöglicht, Menstruations- und Schwangerschaftszyklen zu tracken, professionelle Gesundheitsunterstützung zu erhalten und umweltfreundliche Hygieneprodukte zu bestellen.',
      status: 'Produktionsreif',
      statusKind: 'production',
      featured: true,
      category: 'Mobile- & Web-Plattformen',
      categoryKey: 'mobile-web',
      tags: ['Flutter', 'Node.js', 'Gesundheit', 'Mobile App', 'REST-APIs'],
      keyFeatures: [
        'Tracking von Menstruations- & Schwangerschaftszyklen',
        'Professionelle Gesundheitsunterstützung & Beratung',
        'Lieferung umweltfreundlicher Produkte',
        'Privacy-first-Femtech-Architektur',
      ],
    },
    {
      id: 'hellotask',
      title: 'HelloTask',
      subtitle: 'Job-Plattform für gewerbliche Berufe',
      description:
        'Eine hochverfügbare Job-Plattform, bei der ich die gesamte Deployment-Architektur, Kubernetes mit Istio Service Mesh und Multi-Cloud-Infrastruktur verantwortet habe.',
      status: 'Produktionsreif',
      statusKind: 'production',
      featured: true,
      category: 'Cloud & DevOps',
      categoryKey: 'cloud-devops',
      tags: ['Kubernetes', 'Istio', 'AWS', 'Azure', 'Hochverfügbarkeit'],
      keyFeatures: [
        'Kubernetes mit Istio Service Mesh',
        'Kapazitätsplanung für On-Premise & Cloud',
        'Produktions-Deployments ohne Ausfallzeiten',
        'Sicherheits- & Zuverlässigkeitsfokus',
      ],
    },
    {
      id: 'docker-labs',
      title: 'Docker Labs',
      subtitle: 'Open-Source-Leitfaden für Containerisierung',
      description:
        'Ein praxisnahes Labor zum Erlernen von Docker-Konzepten, Multi-Stage-Produktionsbuilds, Netzwerken und Container-Orchestrierung.',
      status: 'Open Source',
      statusKind: 'open-source',
      featured: false,
      category: 'Cloud & DevOps',
      categoryKey: 'cloud-devops',
      tags: ['Docker', 'Linux', 'DevOps', 'Open Source'],
      keyFeatures: [
        'Produktionsreife Dockerfiles',
        'Container-Sicherheitsmuster',
        'Community-getriebene Übungen',
      ],
      githubUrl: 'https://github.com/mdsami/docker-labs',
      stars: 23,
    },
    {
      id: 'kubernetes-laravel',
      title: 'Multi-Cloud Kubernetes',
      subtitle: 'Enterprise-Container-Orchestrierung',
      description:
        'Produktionsreife Kubernetes-Deployment-Architektur über Azure AKS, Amazon EKS und Google GKE mit automatisiertem Ingress und Rolling Updates.',
      status: 'Open Source',
      statusKind: 'open-source',
      featured: false,
      category: 'Cloud & DevOps',
      categoryKey: 'cloud-devops',
      tags: ['Kubernetes', 'AKS', 'EKS', 'GKE', 'Terraform'],
      keyFeatures: [
        'Multi-Cloud-Deployment-Parität',
        'Helm-Charts & Secret-Management',
        'Auto-Skalierung & SSL-Automatisierung',
      ],
      githubUrl: 'https://github.com/mdsami/kubernetes-laravel',
    },
  ],
  journey: [
    {
      period: '2024 — Heute',
      role: 'Gründer & CEO',
      company: 'AppifyDevs',
      category: 'AI/ML-Produktunternehmen',
      current: true,
      description:
        'Gründete ein AI/ML-Produktunternehmen für SaaS-MVPs, Mobile-Apps und Web-Plattformen. Leitung von Produktstrategie, Engineering und Lieferung von Gen-AI- und Cloud-native-Lösungen für Gründer.',
      skills: ['Gen AI', 'SaaS', 'Flutter', 'Next.js', 'Node.js', 'Produktstrategie'],
    },
    {
      period: '2022 — Heute',
      role: 'Mitgründer & CTO',
      company: 'Chondo',
      category: 'Femtech-Plattform',
      current: true,
      description:
        'Mitgründung einer Femtech-Plattform für Zyklus-Tracking, Gesundheitsunterstützung und Lieferung umweltfreundlicher Produkte. Verantwortung für technische Architektur und Engineering-Lieferung.',
      skills: ['Flutter', 'Node.js', 'Gesundheit', 'Mobile Apps', 'API-Design'],
    },
    {
      period: '2023 — 2024',
      role: 'DevOps Tech Lead',
      company: 'HelloTask',
      category: 'Job-Plattform für gewerbliche Berufe',
      description:
        'Verantwortung für Deployment-Architektur, Kubernetes mit Istio Gateway und Kapazitätsplanung für Produktions-Workloads über AWS und Azure mit Fokus auf Hochverfügbarkeit und Sicherheit.',
      skills: ['Kubernetes', 'Istio', 'AWS', 'Azure', 'Kapazitätsplanung'],
    },
    {
      period: '2019 — 2022',
      role: 'DevOps Engineer → Team Lead',
      company: 'MetaKave',
      category: 'Digitale Transformation',
      description:
        'Leitung von Software-Engineering-Teams, Deployment von OpenStack-Plattformen und Verwaltung der AWS/Azure-Infrastruktur mit Fokus auf Hochverfügbarkeit, Sicherheit und Zuverlässigkeit.',
      skills: ['OpenStack', 'AWS', 'Azure', 'Teamführung', 'DevOps'],
    },
    {
      period: '2015 — 2018',
      role: 'Software Engineer → Senior',
      company: 'Analyzen',
      category: 'Softwareentwicklung',
      description:
        'Entwicklung von Full-Stack-Softwareprodukten und Aufstieg zum Senior mit Verantwortung für skalierbare Webanwendungen und APIs.',
      skills: ['Softwareentwicklung', 'Web Apps', 'APIs', 'Full-Stack'],
    },
  ],
};

const bn: PortfolioData = {
  profile: {
    name: 'মোঃ সামি',
    fullName: 'আব্দুস সামি (মোঃ সামি)',
    initials: 'MS',
    title: 'সফটওয়্যার ইঞ্জিনিয়ার ও প্রতিষ্ঠাতা',
    subTitle: 'AppifyDevs-এর CEO · DevOps ও ক্লাউড আর্কিটেক্ট',
    tagline:
      'আমি স্কেলেবল AI-চালিত SaaS, নির্ভরযোগ্য ক্লাউড ইনফ্রাস্ট্রাকচার এবং উচ্চ-পারফরম্যান্স ওয়েব ও মোবাইল প্ল্যাটফর্ম তৈরি করি।',
    bio: 'আমি মোঃ সামি, AppifyDevs-এর প্রতিষ্ঠাতা ও CEO এবং Chondo-র সহ-প্রতিষ্ঠাতা ও CTO। আমি সফটওয়্যার ইঞ্জিনিয়ারিং, DevOps, ক্লাউড আর্কিটেকচার (AWS/Azure), Kubernetes এবং Next.js, Node.js, Flutter ও AI/ML দিয়ে আধুনিক SaaS MVP নির্মাণে বিশেষজ্ঞ।',
    extendedBio:
      'কম্পিউটার সায়েন্সে দৃঢ় ভিত্তি এবং এক দশকেরও বেশি হাতে-কলমে ইঞ্জিনিয়ারিং অভিজ্ঞতা নিয়ে আমি AI-চালিত পণ্য, ব্লকচেইন-সক্ষম প্ল্যাটফর্ম এবং উচ্চ-উপলব্ধ ক্লাউড সিস্টেম ডেলিভারি করতে ক্রস-ফাংশনাল টিম পরিচালনা করি। আমার লক্ষ্য স্কেলেবল আর্কিটেকচার, অটোমেশন এবং পরিমাপযোগ্য ব্যবসায়িক প্রভাব সৃষ্টিকারী পণ্য শিপ করা।',
    statusText: 'সহযোগিতার জন্য উন্মুক্ত',
    location: 'ঢাকা, বাংলাদেশ',
    timezone: 'UTC +06:00',
    email: 'mdsami@appifydevs.com',
    calendly: 'https://calendly.com/appifydevs/30min',
    stats: [
      { label: 'বছরের অভিজ্ঞতা', value: '10+' },
      { label: 'পরিচালিত কোম্পানি', value: '5+' },
      { label: 'ক্লাউড প্ল্যাটফর্ম', value: 'AWS/Azure' },
      { label: 'শিপ করা পণ্য', value: '30+' },
    ],
    socials: {
      github: 'https://github.com/mdsami',
      linkedin: 'https://www.linkedin.com/in/mdsami55/',
      twitter: 'https://twitter.com/mdsami5',
      instagram: 'https://www.instagram.com/mdsami5',
      biolink: 'https://bio.link/mdsami',
      company: 'https://appifydevs.com/',
    },
  },
  features: [
    {
      title: 'AI-চালিত SaaS',
      description:
        'জেনারেটিভ AI ও ML-চালিত পণ্য নির্মাণ যা ওয়ার্কফ্লো স্বয়ংক্রিয় করে এবং ক্লায়েন্টের দক্ষতা ৪৫% এর বেশি বাড়ায়।',
      icon: 'Sparkles',
      color: 'emerald',
    },
    {
      title: 'ক্লাউড ও DevOps আর্কিটেকচার',
      description:
        'Kubernetes, Istio, AWS, Azure, OpenStack এবং উচ্চ-উপলব্ধ প্রোডাকশন সিস্টেম ডিজাইনে গভীর দক্ষতা।',
      icon: 'Cloud',
      color: 'cyan',
    },
    {
      title: 'ফুল-স্ট্যাক ও মোবাইল',
      description:
        'Next.js, Node.js, Laravel এবং Flutter দিয়ে iOS ও Android-এ প্রোডাকশন-গ্রেড ওয়েব ও মোবাইল অ্যাপ শিপ করা।',
      icon: 'Smartphone',
      color: 'purple',
    },
    {
      title: 'টিম লিডারশিপ',
      description:
        'MetaKave ও HelloTask-এ ইঞ্জিনিয়ারিং টিম পরিচালনা, ডিপ্লয়মেন্ট আর্কিটেকচার, সুরক্ষা ও ডেলিভারির দায়িত্ব।',
      icon: 'Layers',
      color: 'blue',
    },
  ],
  skillCategories: [
    {
      id: 'cloud-devops',
      name: 'ক্লাউড ও DevOps',
      command: 'devops',
      skills: [
        { name: 'Kubernetes ও Istio', level: 'বিশেষজ্ঞ', description: 'ক্লাস্টার অর্কেস্ট্রেশন, সার্ভিস মেশ, ইনগ্রেস, অটো-স্কেলিং' },
        { name: 'AWS / Azure', level: 'বিশেষজ্ঞ', description: 'VPC, IAM, EC2, S3, ক্যাপাসিটি প্ল্যানিং, ক্লাউড ডিপ্লয়মেন্ট' },
        { name: 'Docker', level: 'বিশেষজ্ঞ', description: 'কন্টেইনারাইজেশন, মাল্টি-স্টেজ বিল্ড, কন্টিনিউয়াস ডেলিভারি' },
        { name: 'OpenStack', level: 'অ্যাডভান্সড', description: 'অন-প্রিমাইস প্রাইভেট ক্লাউড প্ল্যাটফর্ম ডিপ্লয়মেন্ট' },
        { name: 'CI/CD পাইপলাইন', level: 'অ্যাডভান্সড', description: 'অটোমেটেড বিল্ড, টেস্ট ও জিরো-ডাউনটাইম ডিপ্লয়মেন্ট' },
      ],
    },
    {
      id: 'ai-ml',
      name: 'AI / ML ও ডেটা',
      command: 'aiml',
      skills: [
        { name: 'জেনারেটিভ AI', level: 'অ্যাডভান্সড', description: 'LLM ইন্টিগ্রেশন, AI পণ্য ফিচার, বুদ্ধিমান অটোমেশন' },
        { name: 'MLOps ও MLflow', level: 'অ্যাডভান্সড', description: 'মডেল লাইফসাইকেল, এক্সপেরিমেন্ট ট্র্যাকিং, প্রোডাকশন ML পাইপলাইন' },
        { name: 'GPU অ্যাক্সিলারেশন', level: 'ইন্টারমিডিয়েট', description: 'CUDA অপ্টিমাইজেশন, হাই-পারফরম্যান্স কম্পিউটিং, ক্লাস্টার ডিজাইন' },
        { name: 'বিগ ডেটা', level: 'অ্যাডভান্সড', description: 'স্কেলেবল ডেটা প্রসেসিং ও ডিস্ট্রিবিউটেড আর্কিটেকচার' },
      ],
    },
    {
      id: 'backend',
      name: 'ব্যাকএন্ড ও সিস্টেম',
      command: 'backend',
      skills: [
        { name: 'Node.js', level: 'বিশেষজ্ঞ', description: 'REST API, মাইক্রোসার্ভিস, রিয়েল-টাইম সিস্টেম' },
        { name: 'Laravel / PHP', level: 'অ্যাডভান্সড', description: 'শক্তিশালী MVC ব্যাকএন্ড, অথেনটিকেশন, কিউইং' },
        { name: 'মাইক্রোসার্ভিস', level: 'বিশেষজ্ঞ', description: 'ইভেন্ট-ড্রিভেন আর্কিটেকচার, সার্ভিস মেশ, API গেটওয়ে' },
        { name: 'ব্লকচেইন / Web3', level: 'অ্যাডভান্সড', description: 'বিকেন্দ্রীকৃত প্ল্যাটফর্ম, নিরাপদ স্বচ্ছ ডেটা শেয়ারিং' },
      ],
    },
    {
      id: 'frontend',
      name: 'ফ্রন্টএন্ড ও মোবাইল',
      command: 'frontend',
      skills: [
        { name: 'Next.js ও React', level: 'বিশেষজ্ঞ', description: 'SSR, App Router, TypeScript, রেসপন্সিভ ডিজাইন' },
        { name: 'Flutter', level: 'বিশেষজ্ঞ', description: 'পরিচ্ছন্ন আর্কিটেকচারসহ ক্রস-প্ল্যাটফর্ম iOS ও Android অ্যাপ' },
        { name: 'Tailwind CSS', level: 'বিশেষজ্ঞ', description: 'ডিজাইন সিস্টেম, কাস্টম থিম, পিক্সেল-পারফেক্ট UI' },
      ],
    },
    {
      id: 'tools',
      name: 'টুলস ও নেতৃত্ব',
      command: 'tools',
      skills: [
        { name: 'Agile ও Kanban', level: 'বিশেষজ্ঞ', description: 'স্প্রিন্ট প্ল্যানিং, টিম ডেলিভারি, ক্রমাগত উন্নতি' },
        { name: 'Git ও GitHub', level: 'বিশেষজ্ঞ', description: 'ভার্সন কন্ট্রোল, ওপেন-সোর্স সহযোগিতা, কোড রিভিউ' },
        { name: 'প্রোডাক্ট স্ট্র্যাটেজি', level: 'অ্যাডভান্সড', description: 'SaaS MVP ডেভেলপমেন্ট, রোডম্যাপ, প্রতিষ্ঠাতা-নেতৃত্বাধীন ইঞ্জিনিয়ারিং' },
        { name: 'টেকনিক্যাল স্পিকিং', level: 'অ্যাডভান্সড', description: 'AI, ব্লকচেইন, DevOps ও স্টার্টআপ স্ট্র্যাটেজি বিষয়ক আলোচনা' },
      ],
    },
  ],
  projects: [
    {
      id: 'appifydevs',
      title: 'AppifyDevs Platform',
      subtitle: 'AI/ML SaaS প্রোডাক্ট স্টুডিও',
      description:
        'প্রতিষ্ঠাতাদের জন্য SaaS MVP, মোবাইল অ্যাপ এবং ওয়েব প্ল্যাটফর্ম নির্মাণকারী একটি AI-চালিত প্রোডাক্ট কোম্পানি। Gen AI, Flutter, Next.js, Node.js ও Laravel-এ বিশেষজ্ঞ।',
      status: 'প্রোডাকশন রেডি',
      statusKind: 'production',
      featured: true,
      category: 'AI ও SaaS',
      categoryKey: 'ai-saas',
      tags: ['Gen AI', 'Next.js', 'Flutter', 'Node.js', 'Laravel', 'AWS'],
      keyFeatures: [
        'প্রতিষ্ঠাতাদের জন্য AI-চালিত SaaS MVP',
        'ক্লায়েন্ট দক্ষতায় ৪৫%+ উন্নতি',
        'উচ্চ-মানের iOS ও Android ডেলিভারি',
        'স্কেলেবল ক্লাউড-নেটিভ আর্কিটেকচার',
      ],
      liveUrl: 'https://appifydevs.com/',
    },
    {
      id: 'chondo',
      title: 'Chondo',
      subtitle: 'ফেমটেক হেলথ প্ল্যাটফর্ম',
      description:
        'নারীদের মাসিক ও গর্ভাবস্থা সাইকেল ট্র্যাক, পেশাদার স্বাস্থ্যসেবা সহায়তা এবং পরিবেশবান্ধব হাইজিন পণ্য অর্ডার করার সুযোগ করে দেওয়া একটি ফেমটেক প্ল্যাটফর্ম।',
      status: 'প্রোডাকশন রেডি',
      statusKind: 'production',
      featured: true,
      category: 'মোবাইল ও ওয়েব প্ল্যাটফর্ম',
      categoryKey: 'mobile-web',
      tags: ['Flutter', 'Node.js', 'হেলথকেয়ার', 'মোবাইল অ্যাপ', 'REST API'],
      keyFeatures: [
        'মাসিক ও গর্ভাবস্থা সাইকেল ট্র্যাকিং',
        'পেশাদার স্বাস্থ্য সহায়তা ও পরামর্শ',
        'পরিবেশবান্ধব পণ্য ডেলিভারি',
        'প্রাইভেসি-ফার্স্ট ফেমটেক আর্কিটেকচার',
      ],
    },
    {
      id: 'hellotask',
      title: 'HelloTask',
      subtitle: 'ব্লু-কলার জব প্ল্যাটফর্ম',
      description:
        'একটি উচ্চ-উপলব্ধ ব্লু-কলার জব প্ল্যাটফর্ম যেখানে আমি সম্পূর্ণ ডিপ্লয়মেন্ট আর্কিটেকচার, Istio সার্ভিস মেশসহ Kubernetes এবং মাল্টি-ক্লাউড ইনফ্রাস্ট্রাকচারের দায়িত্বে ছিলাম।',
      status: 'প্রোডাকশন রেডি',
      statusKind: 'production',
      featured: true,
      category: 'ক্লাউড ও DevOps',
      categoryKey: 'cloud-devops',
      tags: ['Kubernetes', 'Istio', 'AWS', 'Azure', 'উচ্চ উপলব্ধতা'],
      keyFeatures: [
        'Istio সার্ভিস মেশসহ Kubernetes',
        'অন-প্রিমাইস ও ক্লাউড ক্যাপাসিটি প্ল্যানিং',
        'জিরো-ডাউনটাইম প্রোডাকশন ডিপ্লয়মেন্ট',
        'সুরক্ষা ও নির্ভরযোগ্যতা-কেন্দ্রিক',
      ],
    },
    {
      id: 'docker-labs',
      title: 'Docker Labs',
      subtitle: 'ওপেন-সোর্স কন্টেইনারাইজেশন গাইড',
      description:
        'Docker কনসেপ্ট, মাল্টি-স্টেজ প্রোডাকশন বিল্ড, নেটওয়ার্কিং ও কন্টেইনার অর্কেস্ট্রেশন আয়ত্ত করার জন্য একটি হ্যান্ডস-অন ল্যাবরেটরি।',
      status: 'ওপেন সোর্স',
      statusKind: 'open-source',
      featured: false,
      category: 'ক্লাউড ও DevOps',
      categoryKey: 'cloud-devops',
      tags: ['Docker', 'Linux', 'DevOps', 'ওপেন সোর্স'],
      keyFeatures: [
        'প্রোডাকশন-রেডি Dockerfile',
        'কন্টেইনার সিকিউরিটি প্যাটার্ন',
        'কমিউনিটি-চালিত এক্সারসাইজ',
      ],
      githubUrl: 'https://github.com/mdsami/docker-labs',
      stars: 23,
    },
    {
      id: 'kubernetes-laravel',
      title: 'Multi-Cloud Kubernetes',
      subtitle: 'এন্টারপ্রাইজ কন্টেইনার অর্কেস্ট্রেশন',
      description:
        'অটোমেটেড ইনগ্রেস ও রোলিং আপডেটসহ Azure AKS, Amazon EKS এবং Google GKE জুড়ে প্রোডাকশন-গ্রেড Kubernetes ডিপ্লয়মেন্ট আর্কিটেকচার।',
      status: 'ওপেন সোর্স',
      statusKind: 'open-source',
      featured: false,
      category: 'ক্লাউড ও DevOps',
      categoryKey: 'cloud-devops',
      tags: ['Kubernetes', 'AKS', 'EKS', 'GKE', 'Terraform'],
      keyFeatures: [
        'মাল্টি-ক্লাউড ডিপ্লয়মেন্ট প্যারিটি',
        'Helm চার্ট ও সিক্রেট ম্যানেজমেন্ট',
        'অটো-স্কেলিং ও SSL অটোমেশন',
      ],
      githubUrl: 'https://github.com/mdsami/kubernetes-laravel',
    },
  ],
  journey: [
    {
      period: '২০২৪ — বর্তমান',
      role: 'প্রতিষ্ঠাতা ও CEO',
      company: 'AppifyDevs',
      category: 'AI/ML প্রোডাক্ট কোম্পানি',
      current: true,
      description:
        'SaaS MVP, মোবাইল অ্যাপ ও ওয়েব প্ল্যাটফর্ম নির্মাণকারী একটি AI/ML প্রোডাক্ট কোম্পানি প্রতিষ্ঠা করেছি। প্রতিষ্ঠাতাদের জন্য Gen AI ও ক্লাউড-নেটিভ সমাধানের প্রোডাক্ট স্ট্র্যাটেজি, ইঞ্জিনিয়ারিং ও ডেলিভারির নেতৃত্ব দিয়েছি।',
      skills: ['Gen AI', 'SaaS', 'Flutter', 'Next.js', 'Node.js', 'প্রোডাক্ট স্ট্র্যাটেজি'],
    },
    {
      period: '২০২২ — বর্তমান',
      role: 'সহ-প্রতিষ্ঠাতা ও CTO',
      company: 'Chondo',
      category: 'ফেমটেক প্ল্যাটফর্ম',
      current: true,
      description:
        'সাইকেল ট্র্যাকিং, স্বাস্থ্যসেবা সহায়তা ও পরিবেশবান্ধব পণ্য ডেলিভারির জন্য একটি ফেমটেক প্ল্যাটফর্ম সহ-প্রতিষ্ঠা করেছি। প্রযুক্তিগত আর্কিটেকচার ও ইঞ্জিনিয়ারিং ডেলিভারির দায়িত্ব পালন করছি।',
      skills: ['Flutter', 'Node.js', 'হেলথকেয়ার', 'মোবাইল অ্যাপস', 'API ডিজাইন'],
    },
    {
      period: '২০২৩ — ২০২৪',
      role: 'DevOps টেক লিড',
      company: 'HelloTask',
      category: 'ব্লু-কলার জব প্ল্যাটফর্ম',
      description:
        'উচ্চ উপলব্ধতা ও নিরাপত্তার উপর ফোকাস করে AWS ও Azure জুড়ে প্রোডাকশন ওয়ার্কলোডের জন্য ডিপ্লয়মেন্ট আর্কিটেকচার, Istio গেটওয়েসহ Kubernetes এবং ক্যাপাসিটি প্ল্যানিংয়ের দায়িত্ব পালন করেছি।',
      skills: ['Kubernetes', 'Istio', 'AWS', 'Azure', 'ক্যাপাসিটি প্ল্যানিং'],
    },
    {
      period: '২০১৯ — ২০২২',
      role: 'DevOps ইঞ্জিনিয়ার → টিম লিড',
      company: 'MetaKave',
      category: 'ডিজিটাল ট্রান্সফরমেশন',
      description:
        'সফটওয়্যার ইঞ্জিনিয়ারিং টিম পরিচালনা, OpenStack প্ল্যাটফর্ম ডিপ্লয় এবং AWS/Azure ইনফ্রাস্ট্রাকচার পরিচালনা করেছি। প্রোডাকশন ওয়ার্কলোডের জন্য উচ্চ উপলব্ধতা, নিরাপত্তা ও নির্ভরযোগ্যতার উপর ফোকাস করেছি।',
      skills: ['OpenStack', 'AWS', 'Azure', 'টিম লিডারশিপ', 'DevOps'],
    },
    {
      period: '২০১৫ — ২০১৮',
      role: 'সফটওয়্যার ইঞ্জিনিয়ার → সিনিয়র',
      company: 'Analyzen',
      category: 'সফটওয়্যার ইঞ্জিনিয়ারিং',
      description:
        'ফুল-স্ট্যাক সফটওয়্যার পণ্য তৈরি করেছি এবং ক্লায়েন্টদের জন্য স্কেলেবল ওয়েব অ্যাপ্লিকেশন ও API ডেলিভারি করে সিনিয়র ইঞ্জিনিয়ারিং দায়িত্বে উন্নীত হয়েছি।',
      skills: ['সফটওয়্যার ইঞ্জিনিয়ারিং', 'ওয়েব অ্যাপস', 'API', 'ফুল-স্ট্যাক'],
    },
  ],
};

export const getPortfolioData = (locale: Locale): PortfolioData => {
  if (locale === 'de') return de;
  if (locale === 'bn') return bn;
  return portfolioData as PortfolioData;
};
