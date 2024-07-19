import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Footer() {
  return (
    <footer className="footer flex flex-col bg-footerAsh">
      <div className={poppins.className}>
        <div className="flex flex-col lg:flex-row justify-between sm:justify-start p-5">
          <div className="items-start text-start justify-start grid sm:grid-cols-1 lg:grid-cols-4 gap-4 lg:items-start lg:justify-between lg:text-start ">
            <div>
              <ul>
                <li className="font-bold">
                  <a href="#">EXPLORE</a>
                </li>
                <li>
                  <a href="#">New In</a>
                </li>
                <li>
                  <a href="#">Ready to Wear</a>
                </li>
                <li>
                  <a href="#">Gifts</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">
                  <a href="#">Ready to Buy</a>
                </li>
                <li>
                  <a href="#">T-shirts and Vests</a>
                </li>
                <li>
                  <a href="#">Hoodies and Sweaters</a>
                </li>
                <li>
                  <a href="#">Jeans</a>
                </li>
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Shorts</a>
                </li>
                <li>
                  <a href="#">Cargos</a>
                </li>
                <li>
                  <a href="#">Coats & Jackets</a>
                </li>
                <li>
                  <a href="#">Graphic Tees</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">About IVORY STREETS</a>
                </li>
                <li>
                  <a href="#">Get to Know the Team</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Contents</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="subscription">
            <h3 className="font-bold">Get the latest news from us</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="my-3 p-3 w-full md:w-1/2 lg:w-2/3"
            />
            <br />
            <label>
              By signing up, you agree to our Privacy Policy and Terms of
              Service.
            </label>
            <br />
            <Button variant="secondary" className="p-5 my-2 bg-black text-white hover:text-black hover:border-black font-bold" >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="sm:flex-col py-5 lg:flex lg:flex-row lg:justify-between lg:items-center p-5">
          <div>
            <Image
              width={"130"}
              height={"70"}
              alt=" logo"
              src="/logo.png"
            ></Image>
            <p>
              &copy;{new Date().getFullYear()} IVORY STREETS All right reserved
            </p>
          </div>
          <div className="py-3 flex m-15 lg:footer ">
            <TiSocialFacebook size={25} />
            <TiSocialTwitter size={25} />
            <SlSocialInstagram size={25} />
            <TiSocialLinkedin size={25} />
          </div>
        </div>
      </div>
    </footer>
  );
}
