const inTheMediaItems = [
    {
        id:1,
        featuredID:2,
        type:"media",
        number:"01",
        isFeatured:"false",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2022-08-18",
        title: "Navigate with Clarity - Dr. Kalpana Sundar",
        description: "Dr. Sundar is featured in GoSolo magazine’s interview series. She answers questions about the real issues that plague each and every entrepreneur.",
        src: '/image/media-06.jpg',
        isButtonActive:'true',
        buttonText:'Read Article',
        buttonHref:'https://gosolo.subkit.com/dr-kalpana-sundar/',
    },
    {
        id:2,
        featuredID:1,
        type:"media",
        number:"03",
        isFeatured:"true",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2022-08-11",
        title: "How Dr. Kalpana Sundar managed the entrepreneurial journey",
        description: "Featured in Morning Lazziness as part of their Rule Breaker Series.  Dr. Kalpana Sundar does a Q & A session to discuss how she manages her entrepreneurial journey in hopes to encourage other budding female entrepreneurs.",
        src: '/image/media-05.jpg',
        isButtonActive:'true',
        buttonText:'Read Article',
        buttonHref:'https://www.morninglazziness.com/rule-breakers/dr-kalpana-sundar-professional-speaker/',
    },

    {
        id:3,
        featuredID:2,
        type:"media",
        number:"01",
        isFeatured:"false",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2017-12-05",
        title: "Doctor Google",
        description: "Do you reach for the nearest Google search when you aren't feeling well? Watch Dr. Sundar's TV appearance where she discusses \"Doctor Google\" and the advantages and disadvantages of a self-diagnosis.",
        src: '/image/media-01.jpg',
        isButtonActive:'true',
        buttonText:'Watch Video',
        buttonHref:'https://youtu.be/S08zfmi9yIk',
    },
    {
        id:4,
        featuredID:2,
        type:"media",
        number:"03",
        isFeatured:"false",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2017-01-12",
        title: "What Skincare products should you ditch?",
        description: "Ever wonder what skincare products to ditch? The biggest thing? SOAP!!! Check out our TV appearance for more info!",
        src: '/image/media-02.jpg',
        isButtonActive:'true',
        buttonText:'Watch Video',
        buttonHref:'https://youtu.be/O20jLxjqGhY',
    },
    {
        id:5,
        featuredID:2,
        type:"media",
        number:"03",
        isFeatured:"false",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2021-04-01",
        title: "Empowering Women Through Beauty",
        description: "CCR magazine highlights Dr. Sundar and her Co-founder, Slade Sundar for their entrepreneurial venture during a global pandemic.  The company was built on the premise that beauty should be unbound from the expectations that the beauty industry has imposed upon women.  Everyone is beautiful when they have healthy skin and a healthy attitude about themselves.",
        src: '/image/media-04.jpg',
        isButtonActive:'true',
        buttonText:'Read Article',
        buttonHref:'https://issuu.com/bocdesigninc/docs/ccr-issue.2.21',
    },
    {
        id:6,
        featuredID:2,
        type:"media",
        number:"02",
        isFeatured:"true",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2022-10-06",
        title: "Dr. Sundar donates speaking engagements to help local community",
        description: "Dr. Sundar spoke as a panelist during the public event, Invest In Yourself, Shaping The Future of Healthcare Panel, sponsored by Junior Achievement of the Palm Beaches & Treasure Coast held at Keiser University. On the following day, Dr. Sundar spoke to students in eighth through 12th grades plus faculty and staff at Everglades Preparatory Academy in Pahokee, Fla. Her talk was entitled “How to Use Expectations to Empower You.",
        src: '/image/media-07.jpg',
        isButtonActive:'true',
        buttonText:'Read Article',
        buttonHref:'https://www.southcentralfloridalife.com/belle-glade/stories/dr-sundar-donates-speaking-engagements-to-help-local-community,50506#top-carousel',
    },
    {
        id:7,
        featuredID:1,
        type:"media",
        number:"01",
        isFeatured:"true",
        isOnHome:"false",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2022-10-20",
        title: "Invest in yourself to Reinvent yourself (Jacksonville Buzz)",
        description: "Dr. Sundar discusses the ways she has invested in herself to help women realize that they are always capable of changing direction in their lives as needed to live more mindfully.",
        src: '/image/media-08.jpg',
        isButtonActive:'true',
        buttonText:'Watch Video',
        buttonHref:'https://vimeo.com/762327523',
    },
    {
        id:8,
        featuredID:2,
        type:"event",
        number:"01",
        isFeatured:"false",
        isOnHome:"false",
        isEvent:"true",
        featuredHREF:"/events",
        featuredURL:"/ Events",
        featuredButtonLabel:"See all events",
        featuredHeader:"Upcoming Event (Paris, France)",
        date:"2023-03-09",
        title: "Premier Annual Summit on Women in Safety and Medicine",
        description: "Dr. Sundar will be giving a keynote on Feminine Entrepreneurship on March 9th, 2023 in Paris, France at the Premier Annual Summit on Women in Safety and Medicine.",
        src: '/image/event-01.jpg',
        isButtonActive:'false',
        buttonText:'Watch Video',
        buttonHref:'https://vimeo.com/762327523',
    },
    {
        id:9,
        featuredID:1,
        type:"event",
        number:"01",
        isFeatured:"true",
        isOnHome:"true",
        isEvent:"true",
        featuredHREF:"/events",
        featuredURL:"/ Events",
        featuredButtonLabel:"See all events",
        featuredHeader:"Upcoming Event (Long Beach Convention Center)",
        location:"Long Beach, California",
        date:"2023-05-10",
        title: "California HR Conference 2023",
        description: "Dr. Sundar will be giving the closing keynote on May 10th, 2023, for the Women’s Leadership track entitled Feminine Leadership",
        src: '/image/event-03.png',
        isButtonActive:'true',
        buttonText:'Register for this event',
        buttonHref:'https://cahrconference.org/register2023/?_zs=qROXl1&_zl=DnWt8',
    },
];

export default inTheMediaItems