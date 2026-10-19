// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AlienCow72', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Selected Work',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'DSTax - Tax Integration Platform',
          description:
            'Served as Lead Developer and Project Manager for a tax-integration platform, supporting requirements gathering, setup, troubleshooting, and go-live. Developed and supported integrations involving Acumatica, Chargebee, Sage Intacct, WooCommerce, Magento/Adobe Commerce, Thomson Reuters, Vertex, Sovos, and SureTax. Led the transition from Version 1 to Version 2, broadening provider and platform support, improving UI/UX, and optimizing asynchronous operations for performance and throughput. Migrated production workloads from DigitalOcean to AWS and created client guides and knowledge-base articles.',
          imageUrl:
            'https://raw.githubusercontent.com/AlienCow72/AlienCow72.github.io/5e63b4ad9339239e7dfb14f03ea9827ab11d66d5/src/assets/dstax-logo.png',
          link: 'https://dstax.com',
        },
        {
          title: 'Komatsu (Joy Global) - Asset and Facilities Systems',
          description:
            'Analyzed asset and facilities databases, identifying more than $10 million in previously unidentified asset value that informed the sale of unused assets before Komatsu’s acquisition of Joy Global. Evaluated, selected, and implemented a global mapping platform for facility information. Initiated web automations to reduce manual database maintenance and managed SharePoint sites, data, and input forms to improve accessibility, reduce errors, and support cross-department information sharing.',
          imageUrl:
            'https://raw.githubusercontent.com/AlienCow72/AlienCow72.github.io/5e63b4ad9339239e7dfb14f03ea9827ab11d66d5/src/assets/joyglobal-komatsu-logo.png',
          link: 'https://www.komatsu.com',
        },
      ],
    },
  },
  seo: {
    title: 'Kyle M. Anderson | Software Development & Systems Integration',
    description:
      'Technical professional with software development, systems integration, project management, and client-support experience. Builds and supports software platforms, connects business systems, improves delivery workflows, and translates operational needs into practical technical solutions.',
    imageURL: '',
  },
  social: {
    linkedin: 'kyle-anderson-mke',
    gitlab: 'KMA_DSTax',
    //twitter: 'arif_szn',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'kyle_anderson',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://kyleanderson.online',
    phone: '(630) 995-1529',
    email: 'TheKyleAnderson72@gmail.com',
  },
  resume: {
    fileUrl: 'KyleMAnderson-resume.pdf', // Served from public/ relative to the deployment base.
  },
  skills: [
    'Python',
    'Django',
    'Flask',
    'PHP',
    'C#',
    'C',
    'REST APIs',
    'AWS',
    'DigitalOcean',
    'Docker',
    'NGINX',
    'GitLab CI/CD',
    'Microsoft SQL Server',
    'PostgreSQL',
    'SQLite',
    'Git',
    'GitLab',
    'SharePoint',
    'Microsoft 365 Enterprise',
    'OpenAI / Codex',
    'Anthropic / Claude Code',
  ],
  experiences: [
    {
      company: 'DSTax Technologies',
      position: 'Manager',
      from: 'May 2020',
      to: 'Present',
      companyLink: 'https://dstax.com',
    },
    {
      company: 'Colectivo Coffee Roasters',
      position: 'Warehouse Associate',
      from: 'June 2019',
      to: 'May 2020',
      companyLink: 'https://colectivo.com',
    },
    {
      company: 'Komatsu Mining Corp. (Joy Global)',
      position: 'Facilities Management Intern',
      from: 'May 2016',
      to: 'December 2018',
      companyLink: 'https://www.komatsu.com',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'University of Wisconsin–Milwaukee',
      degree: 'BBA, Information Technology Management',
      from: '2017',
      to: '2020',
    },
    {
      institution: 'Milwaukee School of Engineering',
      degree:
        'Studied Industrial Engineering and Supply Chain/Operations Management',
      from: '2014',
      to: '2016',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'kyle_anderson', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['luxury', 'light', 'dark', 'black', 'coffee', 'winter', 'dim'],
    // Other themes available
    unused_themes: [
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
