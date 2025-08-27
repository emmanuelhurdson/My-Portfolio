import { ImageWithFallback } from "./figma/ImageWithFallback";

const skills = [
  {
    name: "React",
    favicon: "https://react.dev/favicon.ico",
  },
  {
    name: "JavaScript",
    favicon:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    favicon: "https://www.typescriptlang.org/favicon-32x32.png",
  },
  {
    name: "HTML/CSS",
    favicon: "https://www.w3.org/favicon.ico",
  },
  {
    name: "Tailwind CSS",
    favicon: "https://tailwindcss.com/favicon.ico",
  },
  {
    name: "Material-UI",
    favicon: "https://mui.com/static/favicon.ico",
  },
  {
    name: "Next.js",
    favicon: "https://nextjs.org/favicon.ico",
  },
  {
    name: "Swiper.js",
    favicon: "https://swiperjs.com/images/swiper-logo.svg",
  },
  {
    name: "Node.js",
    favicon: "https://nodejs.org/favicon.ico",
  },
  {
    name: "PHP",
    favicon: "https://www.php.net/favicon.ico",
  },
  {
    name: "MySQL",
    favicon: "https://www.mysql.com/common/logos/powered-by-mysql-125x64.png",
  },
  {
    name: "Git",
    favicon: "https://git-scm.com/favicon.ico",
  },
  {
    name: "Figma",
    favicon: "https://static.figma.com/app/icon/1/favicon.ico",
  },
  {
    name: "Flutter",
    favicon:
      "https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Skills & Technologies
          </h2>
        </div>

        {/* Single Horizontal Row for All Screen Sizes */}
        <div className="flex gap-3 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 px-2 sm:px-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0 min-w-[60px] sm:min-w-[80px]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 flex items-center justify-center">
                <ImageWithFallback
                  src={skill.favicon}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-center font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
