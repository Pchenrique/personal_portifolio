/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: 'Paulo Cesar',
  title: "Hi, I'm Paulo Cesar",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / PHP / Reactjs / Nodejs / AdonisJs /React Native and some other cool libraries and frameworks.'
  ),
  resumeLink: '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Pchenrique',
  linkedin: 'https://www.linkedin.com/in/paulo-cesar-henrique-da-silva-a3aa41140',
  gmail: 'pch452079@gmail.com',
  instagram: 'https://www.instagram.com/xpaulocesarx',
  gitlab: '',
  facebook: '',
  medium: 'https://medium.com/@pchenrique',
  stackoverflow: '',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'Developer specializing in new web technologies',
  skills: [
    emoji('⚡ Back-end developer with PHP or Javascript web technologies'),
    emoji('⚡ Front-end development with react and react native'),
    emoji('⚡ Database diagramming and structuring'),
    emoji('⚡ deploy and integrate with AWS'),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'Laravel',
      fontAwesomeClassname: 'fab fa-laravel',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'Github',
      fontAwesomeClassname: 'fab fa-github',
    },
    {
      skillName: 'Gitlab',
      fontAwesomeClassname: 'fab fa-git-alt',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Federal Institute of Education, Science and Technology of Ceará',
      logo: require('./assets/images/ifce.png'),
      subHeader: 'Bachelor of information systems',
      duration: 'December 2016 - Present',
      desc: 'Participated in several projects with IFCE scholarship and develops several scientific articles.',
      descBullets: [],
    },
    {
      schoolName: 'University of Évora',
      logo: require('./assets/images/uevora.png'),
      subHeader: 'Computer engineering',
      duration: 'February 2020 - July 2020',
      desc: 'Exchange at the university to study and research in the field of computer engineering.',
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend', //Insert stack or technology you have experience in
      progressPercentage: '50%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '90%',
    },
    {
      Stack: 'Engineering',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'System Engineer',
      company: 'Agility Monitoramento',
      companylogo: require('./assets/images/agility.png'),
      date: 'January 2021 – Present',
      desc:
        'Planning and development of web applications creating solutions for the company.',
      descBullets: [],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Pchenrique', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Projects',
  subtitle: 'Some startups and companies that i helpes to create their tech',
  projects: [
    {
      image: require('./assets/images/foodnow.jpg'),
      link: '',
    },
    {
      image: require('./assets/images/barriga.jpg'),
      link: 'https://play.google.com/store/apps/details?id=com.barrigapowerfit.barrigapowerfit',
    },
    {
      image: require('./assets/images/qchave.jpg'),
      link: 'https://github.com/Pchenrique/Qchave',
    },
    {
      image: require('./assets/images/uglyphoto.jpg'),
      link: 'https://github.com/Pchenrique/uglyphoto',
    },
    {
      image: require('./assets/images/recognition.jpg'),
      link: 'https://github.com/Pchenrique/FacialRecognition',
    },  
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: '1st Engineering project in the university category',
      subtitle:
        'The event brings together students from all over Brazil and from some Latin American countries with the purpose of presenting the projects developed at the college and competing for awards, my project won the 1st place in the engineering category of higher education.',
      image: require('./assets/images/mocica.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://1drv.ms/b/s!AtqHP1UMJZfClF_R06d7Cr6KK6wV?e=gsY7yp',
        },
        {
          name: 'Site',
          url:
            'http://mocica.com.br/',
        },
      ],
    },
    {
      title: '1st place in the presentation of the article computational thinking a systematic review',
      subtitle:
        'The event brought together all the courses of the IFCE campus cedro to present the articles developed in the research projects in four categories, the project was qualified with the 1st place overall of the event.',
      image: require('./assets/images/semic.png'),
      footerLink: [
        {
          name: 'Site',
          url:
            'http://semiccedro.rf.gd/?i=1',
        },
      ],
    },

    {
      title: '3rd place in the hackerflag marathon',
      subtitle: 'The event brought together teams from the jaguaribe valley and south central region, and created the hackerflag marathon to test knowledge in decryption and interpretation of flags, and the teams that get the most points wins, our team took 3rd place in the marathon.',
      image: require('./assets/images/rdcday.png'),
      footerLink: [
        { name: 'Certification', url: 'https://1drv.ms/b/s!AtqHP1UMJZfCilX4c3bZjyfR6tQl' },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'WITH LOVE FOR DEVELOPING, I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT.',

  blogs: [
    // {
    //   url:
    //     'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
    //   title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
    //   description:
    //     'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    // },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    // {
    //   title: 'Build Actions For Google Assistant',
    //   subtitle: 'Codelab at GDG DevFest Karachi 2019',
    //   slides_url: 'https://bit.ly/saadpasta-slides',
    //   event_url: 'https://www.facebook.com/events/2339906106275053/',
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '',
  emailAddress: 'pchenrique1998@hotmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
