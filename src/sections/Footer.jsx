import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg::fc
      ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt='footer logo' className="" width={150} height={46}/>
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={social.src} alt={social.alt} width={24} height={24} className="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => (
            <div className="" key={link}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{link.title}</h4>
              <ul className="">
                {link.links.map((tag) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={tag.name}>
                    <a href="">{tag.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="m-0 rounded-full" />
          <p className="">Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer