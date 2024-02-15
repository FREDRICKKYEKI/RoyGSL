import { Service } from "./types";

export const phone1 = "+254 726886488";
export const phone2 = "+254 782886488";
export const email = "hrdep@roygsl.com";
export const officeHrs = "Mon - Fri, 24hrs";
export const address = "P.O. Box 12345-00100, Nairobi, Kenya";
export const facebook = "https://www.facebook.com";
export const instagram = "https://www.instagram.com";
export const whatsapp = "https://www.whatsapp.com";
export const footerText = "Join us on a journey of empowerment and convenience. With our comprehensive services, we're committed to helping you reach new heights, explore new horizons, and seize every opportunity that comes your way. Experience excellence with us today.";
export const newsletterText ="Stay in the loop with our latest updates, exclusive offers, and insider insights. Subscribe to our newsletter and never miss a beat on your path to success. Sign up now to unlock a world of opportunities!";


// services
export const SERVICES: {[key: string]: string} = {
    scholarships: "Elevate your career aspirations with the support you deserve. Dive into over 2000+ courses offered by esteemed institutions worldwide, while we guide you through seamless visa applications and secure scholarships tailored to your ambitions. Your journey to success starts here.",
    jobs: "Navigate the competitive job market with confidence. Our expert team connects you with lucrative opportunities that align with your skills and aspirations. Whether you're seeking a career change or aiming for advancement, we're here to propel you towards your professional goals.",
    flight_booking: "Embark on your next adventure hassle-free. With our streamlined flight booking service, planning your travels becomes a breeze. From budget-friendly options to luxurious getaways, discover a world of possibilities with just a few clicks. Your dream destination awaits.",
    appointments: "Take control of your schedule effortlessly. Our intuitive appointment booking platform simplifies the process of securing important meetings and engagements. Whether it's a crucial client discussion or a routine check-up, manage your time efficiently and stay ahead of the curve. Your success begins with organized planning."
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
    icon: "calendar"
  },
];
