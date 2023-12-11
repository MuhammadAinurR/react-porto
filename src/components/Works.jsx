import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { Crud } from "../api/crud";
import { fadeIn, textVariant } from "../utils/motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    // <motion.div variants={fadeIn("up", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="flex flex-wrap h-[400px]">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[150px] overflow-auto mx-0.5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] text-justify ">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${tag.name}-${tag.color}`}
              className={`text-${tag.color}-500 text-[14px] font-medium overflow-auto`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
    // </motion.div>
  );
};

const Works = () => {
  const [projects, isLoading] = Crud();
  const ProjectsList = () => {
    return (
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    );
  };

  const SkeleLoads = () => {
    return (
      <div className="mt-10">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <div className="flex flex-wrap h-[400px]">
                <div className="relative w-full h-[230px]">
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                      <img
                        src={github}
                        alt="source code"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-[150px] overflow-auto mx-0.5">
                  <h3 className="text-white font-bold text-[24px]">
                    {<Skeleton />}
                  </h3>
                  <p className="mt-2 text-secondary text-[14px] text-justify ">
                    {<Skeleton count={4} />}
                  </p>
                </div>
              </div>
            </Tilt>
          </p>
        </SkeletonTheme>
      </div>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {isLoading ? <SkeleLoads /> : <ProjectsList />}
    </>
  );
};

export default SectionWrapper(Works, "projects");
