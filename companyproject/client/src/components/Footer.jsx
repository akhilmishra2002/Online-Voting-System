import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer
      container
      className="footer bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-none" // Sky Blue to Deep Blue gradient
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mt-5">
            <Link to="/">
              <span className="text-black text-lg hover:text-[#ADD8E6] transition duration-300">APNAMAT</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            <div className="mt-2 sm:mt-0">
              <Footer.Title title="About" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.eci.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-lg hover:text-[#ADD8E6] transition duration-300 no-underline"
                >
                  Election Commission Of India
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  rel="noopener noreferrer"
                  className="text-black text-lg hover:text-[#ADD8E6] transition duration-300 no-underline"
                >
                  APNAMAT
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-black text-lg hover:text-[#ADD8E6] transition duration-300 no-underline"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-black text-lg hover:text-[#ADD8E6] transition duration-300 no-underline"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-lg hover:text-[#ADD8E6] transition duration-300 no-underline"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-lg hover:text-[#ADD8E6] transition duration-300 no-underline"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <div className="flex space-x-1 mb-4 sm:mb-0">
            <Footer.Copyright
              href="#"
              by="APNAMAT"
              year={new Date().getFullYear()}
              className="text-black"
            />
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-black hover:text-[#ADD8E6]" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-black hover:text-[#ADD8E6]" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-black hover:text-[#ADD8E6]" />
            <Footer.Icon href="#" icon={BsGithub} className="text-black hover:text-[#ADD8E6]" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
