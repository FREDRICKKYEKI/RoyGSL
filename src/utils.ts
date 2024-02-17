import { IconMap, MidHeaderProps, Service } from "./types";
import scholarship_logo from "./assets/svgs/scholarship_logo.svg";
import scholarship_logo_light from "./assets/svgs/scholarship_logo-light.svg";
import scholarship_logo_prim from "./assets/svgs/scholarship_logo-prim.svg";
import calendar from "./assets/svgs/calendar.svg";
import calendar_light from "./assets/svgs/calendar-light.svg";
import flight from "./assets/svgs/flight.svg";
import flight_light from "./assets/svgs/flight-light.svg";
import flight_prim from "./assets/svgs/flight-prim.svg";
import job from "./assets/svgs/job.svg";
import job_light from "./assets/svgs/job-light.svg";
import job_prim from "./assets/svgs/job-prim.svg";

export const phone1 = "+254 726886488";
export const developer = "fredrickkyeki.github.io/portfolio-website/";
export const phone2 = "+254 782886488";
export const email = "hrdep@roygsl.com";
export const officeHrs = "Mon - Fri, 24hrs";
export const address = "P.O. Box 12345-00100, Nairobi, Kenya";
export const facebook = "https://www.facebook.com";
export const instagram = "https://www.instagram.com";
export const whatsapp = "https://www.whatsapp.com";
export const footerText =
  "Join us on a journey of empowerment and convenience. With our comprehensive services, we're committed to helping you reach new heights, explore new horizons, and seize every opportunity that comes your way. Experience excellence with us today.";
export const newsletterText =
  "Stay in the loop with our latest updates, exclusive offers, and insider insights. Subscribe to our newsletter and never miss a beat on your path to success. Sign up now to unlock a world of opportunities!";

export const MidHeaderElems: MidHeaderProps[] = [
  {
    icon: "icons/phone.svg",
    text: `${phone1} | ${phone2}`,
    smallText: "Hotline",
  },
  {
    icon: "icons/location.svg",
    text: address,
    smallText: "Address",
  },
  {
    icon: "icons/clock.svg",
    text: officeHrs,
    smallText: "Office Hours",
  },
];

export const icons: IconMap = {
  scholarships: scholarship_logo,
  scholarships_light: scholarship_logo_light,
  scholarships_prim: scholarship_logo_prim,
  jobs: job,
  jobs_light: job_light,
  jobs_prim: job_prim,
  flight: flight,
  flight_light: flight_light,
  flight_prim: flight_prim,
  calendar: calendar,
  calendar_light: calendar_light,
};

export const SERVICES_LIST: Service[] = [
  {
    name: "Scholarships",
    key: "scholarships",
    desc: "Elevate your career aspirations with the support you deserve. Dive into over 2000+ courses offered by esteemed institutions worldwide, while we guide you through seamless visa applications and secure scholarships tailored to your ambitions. Your journey to success starts here.",
    icon: "scholarships",
  },
  {
    name: "Job Placements",
    key: "jobs",
    desc: "Navigate the competitive job market with confidence. Our expert team connects you with lucrative opportunities that align with your skills and aspirations. Whether you're seeking a career change or aiming for advancement, we're here to propel you towards your professional goals.",
    icon: "jobs",
  },
  {
    name: "Flight Booking",
    key: "flight_booking",
    desc: "Embark on your next adventure hassle-free. With our streamlined flight booking service, planning your travels becomes a breeze. From budget-friendly options to luxurious getaways, discover a world of possibilities with just a few clicks. Your dream destination awaits.",
    icon: "flight",
  },
  {
    name: "Consultations and Appointments",
    key: "appointments",
    desc: "Take control of your schedule effortlessly. Our intuitive appointment booking platform simplifies the process of securing important meetings and engagements. Whether it's a crucial client discussion or a routine check-up, manage your time efficiently and stay ahead of the curve. Your success begins with organized planning.",
    icon: "calendar",
  },
];

export const featuredServices = {
  title: "Featured Services",
  desc: "Explore below to learn more about how we can help you achieve your goals and embark on new adventures with confidence.",
  services: [
    {
      name: "Scholarships Made Simple:",
      desc: "Explore a vast array of courses from renowned institutions, backed by personalized support every step of the way.",
      icon: "scholarships_prim",
    },
    {
      name: "Tailored Job Placements:",
      desc: "Seamlessly transition into your dream career with our tailored job placement services.",
      icon: "jobs_prim",
    },
    {
      name: "Effortless Flight Booking:",
      desc: "Our hassle-free flight booking platform simplifies the process of planning your next adventure.",
      icon: "flight_prim",
    },
  ],
};

export const partners = [
  "babylon.jpg",
  "bashneft.jpg",
  "borgata.jpg",
  "care.jpg",
  "chairmen.jpg",
  "dragon.jpg",
  "erbil.jpg",
  "ezdan.jpg",
  "ibis.jpg",
  "kuwait.jpg",
  "marina.jpg",
  "mercure.jpg",
  "mic.jpg",
  "palace.jpg",
  "palm.jpg",
  "petronas.jpg",
  "safir.jpg",
  "staybridge.jpg",
  "voco.jpg",
  "wyndham.jpg",
];

export const finalHeroText =
  "Get <b>Hired</b> today. <br/> Thousands of jobs. <br/>Available across the globe.";

export const flags = ["dubai.jpg", "afg.jpg", "canada.jpg"];
