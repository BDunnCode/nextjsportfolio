import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex justify-center items-center gap-4">
          <Image 
            src="/spoon-fork-nobg.png"
            height={40}
            width={40}
            alt="logo"
          />
        <p className="text-slate-600"> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
