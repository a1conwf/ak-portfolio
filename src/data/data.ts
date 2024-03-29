import { nanoid } from "nanoid";
import { TypeProjectItem, TypeSkillDataItem } from "../types";

//project imgs
import pizzaPalaceImg from "../assets/img/pizza-palace.png";
import gpuShopImg from "../assets/img/gpu-shop.png";
import passwordGeneratorAppImg from "../assets/img/password-generator-app.webp";
import todoAppImg from "../assets/img/todo-app.webp";
import tipCalculatorAppImg from "../assets/img/tip-calculator-app.webp";
import fyloDarkThemeLandingPageImg from "../assets/img/fylo-dark-theme-landing-page.webp";
import pricingComponentWithToggleImg from "../assets/img/pricing-component-with-toggle.webp";
import insureLandingPageImg from "../assets/img/insure-landing-page.webp";
import makerPreLaunchLandingPageImg from "../assets/img/maker-pre-launch-landing-page.webp";
import projectTrackingIntroComponentImg from "../assets/img/project-tracking-intro-component.webp";
import newsHomepageImg from "../assets/img/news-homepage.webp";
import interactivePricingComponentImg from "../assets/img/interactive-pricing-component.webp";
import adviceGeneratorAppImg from "../assets/img/advice-generator-app.webp";
import loopstudiosLandingPageImg from "../assets/img/loopstudios-landing-page.webp";
import sunnysideAgencyLandingPageImg from "../assets/img/sunnyside-agency-landing-page.webp";
import singlePageDesignPortfolioImg from "../assets/img/single-page-design-portfolio.webp";
import artGalleryWebsiteImg from "../assets/img/art-gallery-website.webp";

export const skillsData: TypeSkillDataItem[] = [
  {
    id: nanoid(),
    title: "HTML",
  },
  {
    id: nanoid(),
    title: "CSS/SCSS",
  },
  {
    id: nanoid(),
    title: "CSS Modules",
  },
  {
    id: nanoid(),
    title: "Bootstrap",
  },
  {
    id: nanoid(),
    title: "Javascript",
  },
  {
    id: nanoid(),
    title: "TypeScript",
  },
  {
    id: nanoid(),
    title: "React",
  },
  {
    id: nanoid(),
    title: "Redux Toolkit",
  },
  {
    id: nanoid(),
    title: "Wordpress",
  },
  {
    id: nanoid(),
    title: "Prestashop",
  },
  {
    id: nanoid(),
    title: "Git",
  },
  {
    id: nanoid(),
    title: "Figma",
  },
];

export const projectsData: TypeProjectItem[] = [
  {
    id: nanoid(),
    img: pizzaPalaceImg,
    name: "Pizza Palace",
    techList: [
      "React",
      "React router",
      "React skeleton",
      "Typescript",
      "Redux Toolkit",
      "Axios",
      "css modules",
    ],
    liveLink: "https://pizza-palace-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/pizza-palace",
  },
  {
    id: nanoid(),
    img: todoAppImg,
    name: "Todo app",
    techList: ["React", "css modules"],
    liveLink: "https://todo-app-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/todo-app",
  },
  {
    id: nanoid(),
    img: passwordGeneratorAppImg,
    name: "Password Generator App",
    techList: ["React", "css modules"],
    liveLink: "https://password-generator-app-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/password-generator-app",
  },
  {
    id: nanoid(),
    img: gpuShopImg,
    name: "GPU Online Shop",
    techList: ["React", "React Router", "React Skeleton", "Axios", "Scss"],
    liveLink: "https://gpu-shop.vercel.app/",
    gitRepo: "https://github.com/a1conwf/gpu-shop",
  },
  {
    id: nanoid(),
    img: tipCalculatorAppImg,
    name: "Tip calculator app",
    techList: ["React", "Scss"],
    liveLink: "https://tip-calculator-app-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/tip-calculator-app",
  },
  {
    id: nanoid(),
    img: interactivePricingComponentImg,
    name: "Interactive pricing component",
    techList: ["React", "Scss"],
    liveLink: "https://interactive-pricing-component-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/interactive-pricing-component",
  },
  {
    id: nanoid(),
    img: pricingComponentWithToggleImg,
    name: "Pricing component with toggle",
    techList: ["React", "Scss"],
    liveLink: "https://pricing-component-with-toggle-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/pricing-component-with-toggle",
  },
  {
    id: nanoid(),
    img: fyloDarkThemeLandingPageImg,
    name: "Fylo dark theme landing page",
    techList: ["React", "Scss"],
    liveLink: "https://fylo-dark-theme-landing-page-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/fylo-dark-theme-landing-page",
  },
  {
    id: nanoid(),
    img: insureLandingPageImg,
    name: "Insure landing page",
    techList: ["React", "Scss"],
    liveLink: "https://insure-landing-page-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/insure-landing-page",
  },
  {
    id: nanoid(),
    img: makerPreLaunchLandingPageImg,
    name: "Maker pre-launch landing page",
    techList: ["React", "Scss"],
    liveLink: "https://maker-pre-launch-landing-page-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/maker-pre-launch-landing-page",
  },
  {
    id: nanoid(),
    img: projectTrackingIntroComponentImg,
    name: "Project tracking intro component",
    techList: ["React", "Scss"],
    liveLink: "https://project-tracking-intro-component-ten.vercel.app/",
    gitRepo: "https://github.com/a1conwf/project-tracking-intro-component",
  },
  {
    id: nanoid(),
    img: newsHomepageImg,
    name: "News homepage",
    techList: ["React", "Scss"],
    liveLink: "https://news-homepage-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/news-homepage",
  },
  {
    id: nanoid(),
    img: adviceGeneratorAppImg,
    name: "Advice generator app",
    techList: ["React", "Scss", "Api"],
    liveLink: "https://advice-generator-app-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/advice-generator-app",
  },
  {
    id: nanoid(),
    img: loopstudiosLandingPageImg,
    name: "Loopstudios landing page",
    techList: ["React", "Scss"],
    liveLink: "https://loopstudios-landing-page-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/loopstudios-landing-page",
  },
  {
    id: nanoid(),
    img: sunnysideAgencyLandingPageImg,
    name: "Sunnyside agency landing page",
    techList: ["React", "Scss"],
    liveLink: "https://sunnyside-agency-landing-page-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/sunnyside-agency-landing-page",
  },
  {
    id: nanoid(),
    img: artGalleryWebsiteImg,
    name: "Art gallery website",
    techList: ["React", "Scss"],
    liveLink: "https://art-gallery-website-a1conwf.vercel.app/",
    gitRepo: "https://github.com/a1conwf/art-gallery-website",
  },
  {
    id: nanoid(),
    img: singlePageDesignPortfolioImg,
    name: "Single-page design portfolio",
    techList: ["Html", "Scss", "Javascript"],
    liveLink: "https://a1conwf.github.io/single-page-design-portfolio/",
    gitRepo: "https://github.com/a1conwf/single-page-design-portfolio",
  },
];
