import React from "react";
import Daniel from "../assets/images/image-daniel.jpg";
import Jonathan from "../assets/images/image-jonathan.jpg";
import Kira from "../assets/images/image-kira.jpg";
import Jeanette from "../assets/images/image-jeanette.jpg";
import Patrick from "../assets/images/image-patrick.jpg";

const Grid = () => {
  return (
    <div className="flex justify-center place-items-center h-full xl:h-screen mx-10 md:mx-28">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 duration-300 my-6">
        <div className="lg:col-span-2 rounded-lg danielBg shadow-xl duration-300">
          <div className="mx-8 my-4">
            <div className="">
              <img
                className="rounded-full scale-75 mr-3 mt-[-3px] float-left"
                src={Daniel}
                alt=""
              />
              <span className=" text-white ">
                Daniel Clifford <br />
                <span className="text-gray-300"> Verified Graduate</span>
              </span>
            </div>
          </div>
          <h1 className="mx-8 my-4 mb-5 text-white text-xl font-semibold">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </h1>{" "}
          <p className="mx-8 mb-5 text-sm subText leading-5">
            {" "}
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
        <div className="rounded-lg jonathanBg shadow-xl">
          <div className="mx-8 my-4">
            <div className="">
              <img
                className="rounded-full scale-75 mr-3 mt-[-3px] float-left"
                src={Jonathan}
                alt=""
              />
              <span className=" text-white ">
                Jonathan Walters <br />
                <span className="text-gray-300"> Verified Graduate</span>
              </span>
            </div>
          </div>
          <h1 className="mx-8 my-4 mb-5 text-white text-xl font-semibold">
            The team was very supportive and kept me motivated
          </h1>{" "}
          <p className="mx-8 mb-5  text-sm subText">
            {" "}
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>
        <div className="bg-white rounded-lg lg:row-span-2 shadow-xl duration-300">
          <div className="mx-8 my-4">
            <div className="">
              <img
                className="rounded-full scale-75 mr-3 mt-[-3px] float-left"
                src={Kira}
                alt=""
              />
              <span className=" text-black ">
                Kira Whittle <br />
                <span className="text-gray-500"> Verified Graduate</span>
              </span>
            </div>
          </div>
          <h1 className="mx-8 my-4 mb-5 text-black text-xl font-semibold">
            Such a life-changing experience. Highly recommended!
          </h1>{" "}
          <p className="mx-8 mb-5 text-sm text-gray-700">
            {" "}
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-xl">
          <div className="mx-8 my-4">
            <div className="">
              <img
                className="rounded-full scale-75 mr-3 mt-[-3px] float-left"
                src={Jeanette}
                alt=""
              />
              <span className=" text-black ">
                Jeanette Harmon <br />
                <span className="text-gray-500"> Verified Graduate</span>
              </span>
            </div>
          </div>
          <h1 className="mx-8 my-4 mb-5 text-black text-xl font-semibold">
            An overall wonderful and rewarding experience
          </h1>{" "}
          <p className="mx-8 mb-5 text-sm text-gray-700">
            {" "}
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
        <div className="patrickBg lg:col-span-2 rounded-lg shadow-xl duration-300">
          <div className="mx-8 my-4">
            <div className="">
              <img
                className="rounded-full scale-75 mr-3 mt-[-3px] float-left"
                src={Patrick}
                alt=""
              />
              <span className=" text-white ">
                Patrick Abrams <br />
                <span className="text-gray-300"> Verified Graduate</span>
              </span>
            </div>
          </div>
          <h1 className="mx-8 my-4 mb-5 text-white text-xl font-semibold">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>{" "}
          <p className="mx-8 mb-5 text-sm text-gray-300">
            {" "}
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
