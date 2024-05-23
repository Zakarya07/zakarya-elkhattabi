import Github from "../../assets/images/icons/github-white.png";
import LinkedIn from "../../assets/images/icons/linkedin-square-icon1.png";
import Socials from "../Socials";
import TechStack from "../TechStack";

const Profile = () => {
  return (
    <section id="profile" className="py-5 my-10 lg:my-52">
      <div className="profile-main-container flex flex-col items-center lg:flex-row-reverse lg:justify-between">
      {/* Image profile */}
      <div className="profile-image-container h-56 aspect-square bg-center bg-cover bg-no-repeat border-2 border-black my-5 lg:my-0 lg:h-64"></div>
      {/* Profile title */}
      <div className="profile-text-container flex flex-col gap-4 text-center lg:text-left lg:items-start lg:gap-y-12 lg:w-2/5">
        <h1 className="font-bold text-2xl tracking-wider lg:text-4xl">
          Développeur web full-stack  MERN 👋
        </h1>
        <h2 className="text-sm tracking-wide">
          Salut moi c'est Zakarya, un Développeur Web passioné basé à Paris,
          France. 📍
        </h2>
        {/* Profile socials */}
        <div className="profile-socials-container flex justify-center gap-x-7 my-5 lg:my-0">
          <div className="profile-social-linkedin">
            <Socials
              link="https://www.linkedin.com/in/zakarya-elkhattabi/"
              icon={LinkedIn}
            />
          </div>
          <div className="profile-social-github">
            <Socials link="https://github.com/Zakarya07" icon={Github} />
          </div>
        </div>
      </div>
      </div>

      {/* Technologies stack */}
      <TechStack stack_title="Tech stack" />
    </section>
  );
};

export default Profile;
