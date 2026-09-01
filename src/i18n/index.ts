export type Locale = 'en' | 'de' | 'bn';

export interface LocaleMeta {
  code: Locale;
  label: string;
  short: string;
}

export const locales: LocaleMeta[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'bn', label: 'বাংলা', short: 'BN' },
];

export const defaultLocale: Locale = 'en';

export const isLocale = (value: string | null | undefined): value is Locale =>
  locales.some((l) => l.code === value);

export type Dictionary = {
  nav: {
    about: string;
    services: string;
    skills: string;
    projects: string;
    journey: string;
    contact: string;
    getInTouch: string;
    letsTalk: string;
  };
  hero: {
    greeting: string;
    viewProjects: string;
    openTerminal: string;
  };
  about: {
    badge: string;
    heading: string;
    paragraph: string;
    pillar1: string;
    pillar2: string;
    pillar3: string;
    pillar4: string;
    profileComment: string;
    specialization: string;
    specializationValue: string;
    stackSnapshot: string;
    quote: string;
    available: string;
    hire: string;
  };
  services: {
    badge: string;
    heading: string;
    paragraph: string;
    productionTested: string;
  };
  skills: {
    badge: string;
    heading: string;
    paragraph: string;
    online: string;
    wipe: string;
    triggerMatrix: string;
    loaded: string;
    toolsIn: string;
    architecture: string;
    architectureValue: string;
  };
  projects: {
    badge: string;
    heading: string;
    paragraph: string;
    sourceCode: string;
    liveDemo: string;
  };
  github: {
    badge: string;
    heading: string;
    onGithub: string;
    publicRepos: string;
    followers: string;
    openSource: string;
    commits2026: string;
    calendar: string;
    yearlyFor: string;
    contributions: string;
    less: string;
    more: string;
    recentRepos: string;
    noDescription: string;
  };
  journey: {
    badge: string;
    heading: string;
    paragraph: string;
    active: string;
  };
  contact: {
    badge: string;
    heading: string;
    paragraph: string;
    directLine: string;
    letsWork: string;
    paragraph2: string;
    emailAddress: string;
    linkedinProfile: string;
    githubProfile: string;
    bookMeeting: string;
    transmitted: string;
    thanks: string;
    sendAnother: string;
    fillPayload: string;
    name: string;
    email: string;
    messageScope: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    dispatching: string;
    transmit: string;
  };
  footer: {
    rights: string;
  };
};
