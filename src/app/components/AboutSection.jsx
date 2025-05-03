"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2">
        <ul className=" list-disc pl-2">
          <li>Android</li>
          <li>Java</li>
          <li>C++</li>
        </ul>

        <ul className="grid-col list-disc pl-2">
          <li>HTML5</li>
          <li>Agile</li>
          <li>REST</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="flex flex-col gap-5">
        <dl className="list-disc pl-2">

          <dt className="sr-only">Job Title</dt>
          <dd className="">Senior Mobile Application Engineer</dd>

          <dt className="sr-only">Company</dt>
          <dd className="text-[16px] font-semibold">Pilot Flying J</dd>

          <dt className="sr-only">Location</dt>
          <dd className="text-gray-500">Knoxville, TN | Remote</dd>  

          <dt className="sr-only">Years Spent</dt>
          <dd className=" text-[13px] italic opacity-80">Oct 2021 - Present</dd>
        </dl>
        <dl className="list-disc pl-2">
          <dt className="sr-only">Job Title</dt>
          <dd className="">Senior Mobile Application Developer</dd>

          <dt className="sr-only">Company</dt>
          <dd className="text-[16px] font-bold">Papa John's International</dd>

          <dt className="sr-only">Location</dt>
          <dd className="text-gray-500">Kentucky, US</dd>   

          <dt className="sr-only">Years Spent</dt>
          <dd className="text-[13px] italic opacity-80">Feb 2020 - Jun 2022</dd>
        </dl>
        <dl className="list-disc pl-2">
        <dt className="sr-only">Job Title</dt>
          <dd className="">Mobile Release Manager</dd>

          <dt className="sr-only">Company</dt>
          <dd className="text-[16px] font-bold">SG Digital</dd>

          <dt className="sr-only">Location</dt>
          <dd className="text-gray-500">Greater Chicago Area</dd>   

          <dt className="sr-only">Years Spent</dt>
          <dd className="text-[13px] italic opacity-80">Apr 2018 - Feb 2020</dd>
        </dl>
        <dl className="list-disc pl-2">
        <dt className="sr-only">Job Title</dt>
          <dd className="">Mobile Application Developer</dd>

          <dt className="sr-only">Company</dt>
          <dd className="text-[16px] font-bold">Scientific Games</dd>

          <dt className="sr-only">Location</dt>
          <dd className="text-gray-500">Greater Chicago Area</dd>   

          <dt className="sr-only">Years Spent</dt>
          <dd className="text-[13px] italic opacity-80">Jun 2017 - Feb 2020</dd>
        </dl>
      </div>
      

    ),
    
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 flex flex-col justify-center items-start gap-1">
        <li className="font-bold text-[18px]">Mississippi State University (2005-2007)</li>
        <li className="text-[15px] italic">Computer Software Engineering</li>
        <li className="text-[12px]">Graduated with Honors</li>
      </ul>
    ),
    
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/dre-option-6.png" 
          width={500} 
          height={500}
          alt="Styled Portrait"
        />
        <div className="mt-4 md:mt-0 flex text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
