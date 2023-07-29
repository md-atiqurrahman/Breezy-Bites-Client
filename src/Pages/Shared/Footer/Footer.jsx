import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className="flex justify-center text-white text-center">
        <div className="bg-[#1F2937] py-[97px] w-full">
          <h3 className="text-[32px] font-medium mb-[10px]">CONTACT US</h3>
          <div className="text-[20px] font-medium">
            <p>567 Wajed Street, Uni 27, Bangladesh</p>
            <p>+88 01784009104</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] py-[97px] w-full">
          <h3 className="text-[32px] font-medium mb-[10px]">Follow US</h3>
          <p className="text-[20px] font-medium mb-[22px]">
            Join us on social media
          </p>
          <div className="flex justify-center gap-[32px] items-center">
            <Link target="_blank" to="https://www.facebook.com">
              <span className="text-[33px] ">
                <FaFacebookF />
              </span>
            </Link>
            <Link target="_blank" to="https://www.instagram.com">
              <span className="text-[35px]">
                <FaInstagram />
              </span>
            </Link>
            <Link target="_blank" to="https://www.twitter.com">
              <span className="text-[35px]">
                <FaTwitter />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-[20px] font-medium  text-center text-white py-[17px] ">
        <div>
          <p>Copyright © {year} Breezy Bites - All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
