/**
 * Centralized project data for the portfolio site
 * All project information is stored here for easier maintenance and updates
 */

export const softwareEngineeringProjects = {
  professional: [
    {
      imageSrc: '/fortier-website.png',
      imageAlt: 'Julie Fortier Campaign Website',
      title: 'Julie Fortier for Congress Campaign Website',
      linkUrl: 'https://www.juliefortier.com/',
      linkText: 'Visit Live Site',
      description: 'Full-stack campaign website built for Julie Fortier\'s Congressional campaign. Features dynamic content management for events, donation integration, and responsive design to engage voters across all devices. Built with React, Node.js, Express, and MongoDB.'
    },
    {
      imageSrc: '/fortier-signups.png',
      imageAlt: 'Volunteer Signup System',
      title: 'Campaign Volunteer Signup System',
      linkUrl: 'https://www.volunteer4julie.com/',
      linkText: 'Visit Live Site',
      description: 'A streamlined volunteer signup platform for the Fortier campaign, allowing supporters to register for volunteer opportunities with the campaign. Features integration with the volunteer management dashboard. Built with React and Node.js/Express backend.'
    },
    {
      imageSrc: '/volunteer-dashboard.png',
      imageAlt: 'Volunteer Management Dashboard',
      title: 'Volunteer Management Dashboard',
      linkUrl: null,
      linkText: 'Click Photo for Details',
      description: 'A comprehensive admin dashboard for managing campaign volunteers, tracking campaign event requests, coordinating outreach efforts, and analyzing volunteer data. Features secure authentication, role-based access control, data visualization, and export capabilities. Built with React, Node.js, Express, and MongoDB.',
      useModal: true
    },
    {
      imageSrc: '/OADC.png',
      imageAlt: 'OADC Website Project',
      title: "O'Fallon Area Democratic Club Website",
      linkUrl: 'https://ofallonildems.org/',
      linkText: 'Visit Live Site',
      description: 'Commissioned to build the entire website for our local Democratic Club after creating their newsletter management system. This full-stack application serves as the online hub of information and events, featuring dynamic content management, event calendars, and member resources powered by a custom Node.js/Express backend.'
    },
    {
      imageSrc: '/Newsletter-Events_App.png',
      imageAlt: 'Newsletter and Events Management App',
      title: 'Newsletter & Events Management App',
      linkUrl: null,
      linkText: 'Click Photo for Details',
      description: 'After noticing the local Democratic Club was manually sending individual emails from a personal Gmail account, I proactively built a comprehensive solution to streamline their community outreach. This full-stack application manages subscriber lists, automates newsletter distribution, and tracks events. Built with React, Node.js, Express, and MongoDB. The success of this initiative led to being commissioned to build their entire website.',
      useModal: true
    },
    {
      imageSrc: '/Pledge-to-Vote-2026.png',
      imageAlt: 'Pledge to Vote 2026 Project',
      title: 'Pledge to Vote 2026',
      linkUrl: 'https://pledgetovote2026.com/',
      linkText: 'Visit Live Site',
      description: 'A personal project to encourage participation in our civic process by pledging to make your voices heard in the 2026 Midterm Elections. Built with React and features an interactive pledge form with real-time validation.'
    }
  ],
  skills: [
    {
      imageSrc: '/survey-app.png',
      imageAlt: 'Survey & Polling App',
      title: 'Survey & Polling App',
      linkUrl: 'https://survey-app-zuvw.onrender.com',
      linkText: 'View Live Project',
      description: 'A full-stack polling application where users can vote on various topics and see the results update instantly. Built with a React front-end, a Node.js/Express back-end, and a MongoDB database.'
    },
    {
      imageSrc: '/markdown-previewer.png',
      imageAlt: 'Markdown Previewer Project',
      title: 'React Markdown Previewer',
      linkUrl: 'https://markdown-previewer-x5q6.onrender.com',
      linkText: 'View Live Project',
      description: 'A real-time Markdown editor built with React. Users can type Markdown in a text area and see the formatted HTML output rendered instantly on the page.'
    },
    {
      imageSrc: '/hp-api-app.png',
      imageAlt: 'Harry Potter API App Project',
      title: 'Harry Potter Character & Spell Finder',
      linkUrl: 'https://hp-api-app.onrender.com',
      linkText: 'View Live Project',
      description: 'A dynamic single-page application that fetches and displays data from the Harry Potter API, featuring real-time search, filtering, and a custom magic wand cursor effect.'
    },
    {
      imageSrc: '/naruto-api-app.png',
      imageAlt: 'Naruto API App Project',
      title: 'Naruto Character API App',
      linkUrl: 'https://naruto-api-app.onrender.com',
      linkText: 'View Live Project',
      description: 'A responsive web application that fetches and displays character data from a public Naruto API, built using React and Node.js.'
    },
    {
      imageSrc: '/digitalBusinessCard.png',
      imageAlt: 'Digital Business Card Project',
      title: 'Digital Business Card',
      linkUrl: '/projects/digital-business-card',
      linkText: 'View This Project\'s Page',
      description: 'A responsive digital business card featuring a functional back-end contact form built with Node.js and Express.'
    }
  ]
};

export const pythonProjects = {
  professional: [
    {
      imageSrc: '/python_project_parole_sim.png',
      title: 'Dynamic Parole Recommendation Simulator',
      description: 'Simulate 500 parole cases to analyze how adding dynamic variables changes release recommendations. This project explores responsible data-driven policy modeling using pandas and matplotlib.',
      linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Dynamic-Parole-Recommendation-Simulator.ipynb'
    }
  ],
  skills: [
    {
      imageSrc: '/python_project_web_scraper.png',
      title: 'Automated Web Scraper',
      description: 'Extract live cryptocurrency data using requests, BeautifulSoup, and store the results in a structured DataFrame.',
      linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Automated_Web_Scraper.ipynb'
    },
    {
      imageSrc: '/python_project_web_scraper_regex_pandas.png',
      title: 'Web Scraping + Regex + Pandas',
      description: 'Scrape sample HTML data, apply regex patterns for cleaning, and analyze results with pandas.',
      linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Web_Scraping_Regex_Pandas.ipynb'
    },
    {
      imageSrc: '/python_project_file_sorter.png',
      title: 'Automatic File Sorter',
      description: 'Organize and sort files in a folder based on file type using os, shutil, and Python automation.',
      linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Automatic_File_Sorter.ipynb'
    },
    {
      imageSrc: '/python_project_calculator.png',
      title: 'Calculator',
      description: 'A beginner-friendly CLI calculator that handles basic arithmetic operations with input validation.',
      linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Calculator.ipynb'
    },
    {
      imageSrc: '/python_project_unit_converter.png',
      title: 'Unit of Measurement Converter',
      description: 'Convert between units like length, weight, and temperature using reusable functions and clean user input.',
      linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Unit_of_Measurement_Converter.ipynb'
    }
  ]
};

export const sqlProjects = [
  {
    imageSrc: '/polling_analyst_sql.png',
    imageAlt: 'Polling Analyst SQL',
    title: 'Polling Analyst: AI & Misinformation',
    goal: 'Analyze public sentiment around AI-generated political content, trust, and misinformation by demographic groups using simulated survey data.',
    skills: 'Complex JOINs, aggregations, CASE logic for custom age bucketing, CTEs, subqueries, percentage breakdowns, and View creation for reusable cleaned data.',
    linkUrl: '/Polling_Analyst_SQL.pdf',
    linkText: 'View Full PDF Report',
    skillsLabel: 'SQL Skills'
  },
  {
    imageSrc: '/political_project_sql.png',
    imageAlt: 'Campaign Data Analysis SQL',
    title: 'Campaign Strategy SQL Analysis',
    goal: 'Identify which campaign factors most strongly predict election wins (fundraising, outreach, events, or turnout).',
    skills: 'Joins, CTEs, aggregations, conditional logic, window functions, and data validation across multiple tables.',
    linkUrl: '/Political_Project_SQL.pdf',
    linkText: 'View Full PDF Report',
    skillsLabel: 'SQL Skills'
  }
];

export const excelProjects = [
  {
    imageSrc: '/Excel_Screenshot.png',
    imageAlt: 'Excel Coffee Dashboard',
    title: 'Coffee Orders Dashboard',
    goal: 'Build an interactive Excel dashboard to explore trends in coffee orders and practice turning raw data into something useful and visual.',
    skills: 'Data cleaning, pivot tables, formulas like INDEX-MATCH, and dashboard design to make the insights easy to explore and understand.',
    linkUrl: '/Coffee_Orders_Portfolio.xlsx',
    linkText: 'Download Coffee Orders Dashboard (.xlsx)',
    skillsLabel: 'Excel Skills',
    download: true
  }
];

export const tableauProjects = [
  {
    imageSrc: '/british_airways_reviews.png',
    imageAlt: 'British Airways Tableau Dashboard',
    title: 'British Airways Reviews Dashboard',
    goal: 'Analyze British Airways customer reviews to uncover insights into passenger satisfaction and identify areas for service improvement.',
    skills: 'Tableau, data connection and preparation, calculated fields, heat maps, bar charts, and interactive dashboard design.',
    linkUrl: 'https://public.tableau.com/app/profile/joe.wiegert/viz/British_Airways_Reviews_17433707890850/Dashboard1',
    linkText: 'View Interactive Dashboard on Tableau Public',
    skillsLabel: 'Skills Used'
  }
];
