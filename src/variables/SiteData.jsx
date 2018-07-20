var siteData = {
  Website:"https://register.bsord.io/",
  SiteTitle:"BSord.io",
  FooterNote: "made with love in React",

  pages: [
    {
    //home Page
    path: "/home",
    name: "Home",
    icon: "pe-7s-home",
    elements: [
        { component: 'Github',
          props: {
            repo: 'bsord',
            col_md: 3
          },
        },
        { component: 'Docker',
          props: {
            username: 'bsord',
            corsproxy: 'https://cop.bsord.io/',
            col_md: 3
          }
        },
        { component: 'LinkedIn',
          props: {
            username: 'brandon-sorgdrager-23104026',
            col_md: 3
          }
        },
        { component: 'DigitalOcean',
          props: {
            col_md: 3,
            doReferral: '/#'
          }
        },
        { component: 'FullGallery',
          props: {
            col_md: 8,
            photos: [
              { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, caption: "Image 1", alt: "Image1" },
              { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, caption: "Image 2", alt: "Image2" },
              { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4, caption: "Image 3", alt: "Image3" },
              { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4, caption: "Image 4", alt: "Image4" },
              { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4, caption: "Image 5", alt: "Image5" },
              { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3, caption: "Image 6", alt: "Image6" },
              { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4, caption: "Image 7", alt: "Image7" },
              { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3, caption: "Image 8", alt: "Image8" },
              { src: 'assets/images/local_file.jpg', width: 4, height: 3, caption: "Image 9", alt: "Image9" }
            ]
          }
        },
        { component: 'ThisSiteCard',
          props: {
            col_md: 4,
            doReferral: '/#',
            siteRepo: "https://github.com/Fairbanks-io/react-register"
          }
        },
        { component: 'GoogleMaps',
          props: {
            mapConfig: {
              "apiKey":"AIzaSyCVo0ZFOp5UvPhwM1fvuDoe2q9q7oAfRlM",
              "mapLat":43.431351,
              "mapLon":-96.697798,
              "markerLat":43.431351,
              "markerLon":-96.697798,
              "defaultZoom": 11,
              "defaultOptions": { scrollwheel: false, zoomControl: true }
            },
            col_md: 4
          }
        },
      ]
    },

    {
      //Gallery Page
      path: "/gallery",
      name: "Gallery",
      icon: "pe-7s-photo",
      elements: [
        { component: 'FullGallery',
          props: {
            col_md: 12,
            photos: [
              { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, caption: "Image 1", alt: "Image1" },
              { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, caption: "Image 2", alt: "Image2" },
              { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4, caption: "Image 3", alt: "Image3" },
              { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4, caption: "Image 4", alt: "Image4" },
              { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4, caption: "Image 5", alt: "Image5" },
              { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3, caption: "Image 6", alt: "Image6" },
              { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4, caption: "Image 7", alt: "Image7" },
              { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3, caption: "Image 8", alt: "Image8" },
              { src: 'assets/images/local_file.jpg', width: 4, height: 3, caption: "Image 9", alt: "Image9" }
            ]
          }
        }
      ]
    },

    {
    //Links Page
    path: "/links",
    name: "Links",
    icon: "pe-7s-link",
    elements: [
        { component: 'Links',
          props: {
            userLinksHead: {Title: "Links", SubTitle: "These are some user specified links"},
            userLinks: [
              { Img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x600', Name:"Google", URL: "https://google.com", Desc: "This is a link description"  },
              { Img: 'https://source.unsplash.com/epcsn8Ed8kY/800x600', Name:"YouTube", URL: "https://youtube.com", Desc: "This is a link description" },
              { Img: 'https://source.unsplash.com/Dm-qxdynoEc/800x600', Name:"DockerHub", URL: "https://Hub.docker.com", Desc: "This is a link description" },
              { Img: 'assets/images/local_file.jpg', Name:"GitHub", URL: "https://github.com", Desc: "This is a link description" }
            ]
          }
        }
      ]
    },

    {
    //About ME
    path: "/about",
    name: "About Me",
    icon: "pe-7s-id",
    elements: [
        { component: 'UserCard',
          props: {
            col_md: 4,
            name: 'Brandon Sorgdrager',
            avatar: 'assets/images/profilecard.jpg',
            bgImage: 'assets/images/profilecardbg.jpg',
            jobTitle: 'Sr Systems Engineer | Software Developer',
            socials: [
              {icon: "fab fa-github", url: "https://github.com/bsord"},
              {icon: "fab fa-linkedin", url: "https://linkedin.com/in/brandon-sorgdrager-23104026"},
              {icon: "fab fa-docker", url: "https://hub.docker.com/r/bsord"},
              {icon: "fab fa-npm", url: "https://npmjs.com/~bsord"},
              {icon: "fab fa-paypal", url: "https://paypal.me/swissbooth/25"},
              {icon: "fa fa-envelope", url: "mailto:Brandon.Sorgdrager@gmail.com"},

            ],
            quotes: [
              'Technology is a wonderful thing if one does not have to make a living at it.',
            ],

          }
        },
        { component: 'SkillsCard',
          props: {
            col_md: 4,
            skillsData: [
              {type: "Node", level: 85},
              {type: "Javascript", level: 75},
              {type: "Powershell", level: 75},
              {type: "Automation", level: 85},
              {type: "Linux", level: 75},
              {type: "Infosec", level: 75},
              {type: "Mergers", level: 85},

            ],
            skillsColors: {
              bar: '#959595',
              title: {
                text: '#FFF',
                background: '#265874'
              }
            }
          }
        },
        { component: 'WorkExperience',
          props: {
            workExperienceTitle: "Work Experience",
            workExperienceSubtitle: "Work Experience Subtitle",
            workExperience: [
              {
                "EmployerName":"ICU Medical",
                "JobTitle":"Sr. Systems Engineer",
                "JobLocation":"San Clemente, CA",
                "JobDescription":"Technical Migration and Business Acquistion SME for enterprise infrastructure. Deploy/Manage identity managent and cloud hosted solutions. Scale infrastructure and merge manufacturing facilities from acqusition.",
                "StartDate":"Nov 2017",
                "EndDate":"Current",
                "JobIcon":"fas fa-5x fa-user-cog",
                "JobIconColor":"#009CDE"
              },
              {
                "EmployerName":"Alorica",
                "JobTitle":"Sr. Systems Engineer",
                "JobLocation":"Irvine, CA",
                "JobDescription":"Deploy and maintain enterprise solutions for 100k+ user base. Consolidate infrastructure through multiple 10-40k user company mergers and acquisitions. Develop powershell automation scripts. Messaging SME",
                "StartDate":"Feb 2014",
                "EndDate":"Nov 2017",
                "JobIcon":"fas fa-5x fa-user-cog",
                "JobIconColor":"#265874"
              },
              {
                "EmployerName":"Alorica",
                "JobTitle":"IT Manager",
                "JobLocation":"Irvine, CA",
                "JobDescription":"Oversee technical site operations and IT Staff for multiple large call centers. Implement and maintain global image deployment infrastructure.",
                "StartDate":"Jun 2009",
                "EndDate":"Feb 2014",
                "JobIcon":"fas fa-5x fa-user-tie",
                "JobIconColor":"#265874"
              },
              {
                "EmployerName":"Self Employeed",
                "JobTitle":"IT Consultant/Developer",
                "JobLocation":"Sioux City, IA",
                "JobDescription":"Build and host websites, provide IT consulting and PC repair services, provide multimedia services for business events.",
                "StartDate":"Jan 2008",
                "EndDate":"Current",
                "JobIcon":"fas fa-5x fa-code",
                "JobIconColor":"#959595"
              },
            ],
          }
        },
        { component: 'EducationInfo',
          props: {
            educationInfoTitle: "Schooling and Certifications",
            educationInfoSubtitle: "Schooling and Certifications Subtitle",
            educationInfo: [
              {
                "SchoolName":"Western Iowa Tech",
                "SchoolLocation":"Sioux City, IA",
                "DegreeName":"NA - Computer Science",
                "StartDate":"2007",
                "EndDate":"2009",
                "DegreeDescription":"Computer Science",
                "SchoolIcon":"fas fa-5x fa-university",
                "SchoolIconColor":"#00634A"
              },
              {
                "SchoolName":"North High School",
                "SchoolLocation":"Sioux City, IA",
                "DegreeName":"General Studies",
                "StartDate":"2003",
                "EndDate":"2007",
                "DegreeDescription":"General Studies",
                "SchoolIcon":"fas fa-5x fa-star",
                "SchoolIconColor":"#AE1301"
              },
            ]
          }
        },
      ]
    },

  ]
};

export default siteData;
//export default MasterConfig;
