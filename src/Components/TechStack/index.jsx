import techs from "../../data/techs";

const TechStack = ({ stack_title }) => {
  return (
    <div className="tech-stack-container flex flex-col items-center lg:flex-row lg:mt-20">
      <h3 className="font-bold text-md my-5 lg:text-lg">{stack_title}</h3>
      <div className="underline-tech-title h-0.5 w-16 m-auto mb-8 bg-gray-700 lg:h-12 lg:w-0.5 lg:my-0"></div>
      <div className="stacks-category-container flex flex-col gap-10 my-8 lg:gap-y-14">
      {
        techs.map(tech => (
          <div key={tech.category}  className={`${tech.category}-techs p-2 flex flex-wrap justify-evenly gap-10`}>
            {
             Object.entries(tech.technologies).map(([techname, url]) => (
              <img className="h-10 aspect-square object-contain lg:h-11" src={url} alt={techname} key={techname}/>
            ))
          }
          </div>
        ))
      }
    
      </div>
    </div>
  );
};

export default TechStack;
