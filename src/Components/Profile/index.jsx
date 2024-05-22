import Github from "../../assets/images/icons/github-white.png"
import LinkedIn from "../../assets/images/icons/linkedin-square-icon1.png";
import Socials from "../Socials";
import TechStack from "../TechStack";

const Profile = () => {
    return ( 
      <section id="profile" className="py-5 my-10 grid place-items-center">
      {/* Image profile */}
      <div className="profile-image-container h-56 aspect-square bg-center bg-cover bg-no-repeat border-2 border-black my-5"></div>
      {/* Profile title */}
      <div className="profile-text-container flex flex-col gap-4 text-center ">
        <h1 className="font-bold text-3xl tracking-wider">
          Développeur web full-stack 👋
        </h1>
        <h2 className="text-md tracking-wide">
          Salut moi c'est Zakarya, un Développeur Web passioné basé à Paris,
          France. 📍
        </h2>
      </div>
      {/* Profile socials */}
      <div className="profile-socials-container flex justify-center gap-x-7 my-5">
        <div className="profile-social-linkedin">
        <Socials link="https://www.linkedin.com/in/zakarya-elkhattabi/" icon={LinkedIn}/>
        </div>
        <div className="profile-social-github">
        <Socials link="https://github.com/Zakarya07" icon={Github}/>
        </div>
      </div>

      {/* Technologies stack */}
      <TechStack stack_title="Tech stack"/>
    </section>
     )
}
 
export default Profile;