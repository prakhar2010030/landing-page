import Logo from "@/assets/logo.svg";
import TwitterSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YoutubeSocial from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:items-center gap-8 lg:justify-between lg:flex-row">
          <div>
            <Logo className="h-6 w-6" />
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 items-start">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 ">
            <TwitterSocial className="text-white/40 hover:text-white transition cursor-pointer" />
            <InstaSocial className="text-white/40 hover:text-white transition cursor-pointer" />
            <YoutubeSocial className="text-white/40 hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
