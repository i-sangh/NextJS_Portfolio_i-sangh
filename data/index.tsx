export const navItems = [
    { name: "Scroll up", link: "#testimonials" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Software developer who thrives in awesome teams and never stops learning. If you\'re looking for someone who\'s as excited about your project as you are. I\'m in. Let\'s make something amazing together!",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications. Enjoy working with diverse teams.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: (
        <>
          Love working with OpenSource tech. Amazing{' '}
          <span className="cross-out">shit</span> tech all for free!
        </>
      ),
      description: "Sometimes I try to Contribute",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "opacity-50", 
      titleClassName: "justify-center",
      img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "My tech Stack",
      description: "One step at a time!",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-end",
      // img: "/b5.svg",
      // spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "MERN Stack CRUD-WebApp ",
      des: "Create, Read, Update and Delete recipes. Login and jump into the tasty world of cusines.Your delecious recipes waiting to be uploaded. ",
      img: "https://www.shutterstock.com/image-photo/tableware-600nw-585678371.jpg",
      // "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg","/mongo.png", "/node.png", "/express.png"],
      link: "/ui.earth.com",
    },
    {
      id: 2,
      title: "Python-Django Video Streaming Website ",
      des: "Grab the latest bockbuster movies on your finger tips. Enjoys series and movies at same place!",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcztbfs-b6f639ee-6faa-4047-baa8-c71ab43b4eab.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGN6dGJmcy1iNmY2MzllZS02ZmFhLTQwNDctYmFhOC1jNzFhYjQzYjRlYWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nH231WU8la8y_bZOBgjVexeWlZlLvZ6j51YEwhVzNdQ",
      // "/p2.svg",
      iconLists: ["/python.png","/django.png", "/tail.svg", "/ts.svg", "/bootstrap.png", "/html.png"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "Ultimate Gym Work-Out App ReactJS",
      des: "Achive your daily goals with the Ultimate Gym app. Amazing build in workout plan for all yours weeks sechule. Customise the plan according to your Daily workout style",
      img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg", 
      // "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/html.png", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "CRUD - Blog App NextJS",
      des: "If reading is your hobby grab on with us for the amazing blog contents. Share and enjoy with the delightful stories. A blog app for all the latest trends.",
      img: "https://thecontentpanel.com/wp-content/uploads/2020/05/img-feat-web-design-1024x576.jpg", 
      // "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/js.png"],
      link: "/ui.apple.com",
    },
  ];
  
  // export const testimonials = [
  //   {
  //     quote:
  //       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //     name: "Michael Johnson",
  //     title: "Director of AlphaStream Technologies",
  //   },
  //   {
  //     quote:
  //       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //     name: "Michael Johnson",
  //     title: "Director of AlphaStream Technologies",
  //   },
  //   {
  //     quote:
  //       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //     name: "Michael Johnson",
  //     title: "Director of AlphaStream Technologies",
  //   },
  //   {
  //     quote:
  //       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //     name: "Michael Johnson",
  //     title: "Director of AlphaStream Technologies",
  //   },
  //   {
  //     quote:
  //       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //     name: "Michael Johnson",
  //     title: "Director of AlphaStream Technologies",
  //   },
  // ];
  
  // export const companies = [
  //   {
  //     id: 1,
  //     name: "cloudinary",
  //     img: "/cloud.svg",
  //     nameImg: "/cloudName.svg",
  //   },
  //   {
  //     id: 2,
  //     name: "appwrite",
  //     img: "/app.svg",
  //     nameImg: "/appName.svg",
  //   },
  //   {
  //     id: 3,
  //     name: "HOSTINGER",
  //     img: "/host.svg",
  //     nameImg: "/hostName.svg",
  //   },
  //   {
  //     id: 4,
  //     name: "stream",
  //     img: "/s.svg",
  //     nameImg: "/streamName.svg",
  //   },
  //   {
  //     id: 5,
  //     name: "docker.",
  //     img: "/dock.svg",
  //     nameImg: "/dockerName.svg",
  //   },
  // ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Web Developer - Mars Motors",
      desc: "As a Startup Developer, I utilized Django & Bootstrap, Tailwind CSS and JavaScript to design and implement responsive, user-friendly web interfaces, while also engaging in UI design to ensure a seamless and visually appealing user experience across various devices and platforms.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Lead Engineer - FMAE",
      desc: "Engaged in building Electric Vehicle for a startup workshop, utilized my skill of HEV to develop EV two-wheeler. BMS and Chassis integration lead.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance",
      desc: "Enjoy taking on projects that allow me to put my skills to the test and deliver to real-world solutions. Experience in working with remote clients",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Mentor - Planet Sparks",
      desc: "Public speaking expert at PLANET SPARKS, Engaged as personal mentor-cum-tutor for communication skill and writing skill development.",
      className: "md:col-span-2",
      thumbnail: 
      "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/i-sangh",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/sanghapal-mangale-67a060266/",
    },
  ];