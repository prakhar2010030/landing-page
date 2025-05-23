"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Ramika",
    title: "Director @ Pulse",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Aman",
    title: "Founder @ Teal",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Priyadarshini",
    title: "Product @ Dharma",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Yash",
    title: "CTO @ CRM Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl text-center tracking-tighter font-medium md:text-6xl">
          Beyond Expectation
        </h2>
        <p className="text-white/70 text-lg md:text-lg text-center mt-5 tracking-tight max-w-xs mx-auto">
          Our revlotionary SEO tools have transformed our clients strategies.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex flex-none gap-5 pr-5"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="border-white/15  border p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <div className="text-lg md:text-2xl tracking-tight ">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div
                    className="before:content-[''] before:inset-0  before:z-10 before:rounded-lg
              relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light "
                  >
                    <Image
                      src={testimonial.avatarImg}
                      alt={`avatar for ${testimonial.name}`}
                      className="h-20w-20 rounded-lg grayscale "
                    />
                  </div>
                  <div className="">
                    <div className="">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
