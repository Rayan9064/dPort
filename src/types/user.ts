export type User = {
    name: string;
    about: string;
    projects: Array<{
      name: string;
      description: string;
    }>;
    skills: string[];
    experiences: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
    }>;
    contact: {
      email: string;
      github: string;
      linkedin: string;
      twitter: string;
    };
  }
  
  