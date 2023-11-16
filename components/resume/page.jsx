// import React from 'react'
// import { FaCertificate } from "react-icons/fa";
// import { FaGraduationCap } from "react-icons/fa";
// import { MdOutlineDeveloperMode } from "react-icons/md";


// const Resume = () => {
//   return (
//     <div className='mx-auto py-16 items-center text-center'>
//       <hr className="w-14 h-1 mx-auto my-4 bg-[#f03e73] border-0 rounded"></hr>
//       <h2 className='text-5xl font-semibold'>Here is my <span className='text-[#DA6085]'> Resume</span></h2>
//       <hr className="w-14 h-1 mx-auto my-4 bg-[#f03e73] border-0 rounded"></hr>
//       <div className='flex justify-between mt-20'>
//         <div className='text-left w-[50%] justify-center'>
//           <h4 className='text-xl text-[#383535]'>2019 - 2023</h4>
//           <h2 className='text-4xl text-[#f03e73] pb-7'>Education</h2>
//           <div>
//             <div className='flex gap-3 items-center'>
//               <FaCertificate className='text-lg'/>
//               <h2 className='text-lg pb-2'>JavaScript Certification</h2>
//             </div>
//             <div className='flex gap-3 items-center'>
//               <FaCertificate className='text-lg'/>
//               <h2 className='text-lg pb-2'>Microsoft Excel Certification</h2>
//             </div>
//             <div className='flex gap-3 items-center'>
//               <FaGraduationCap className='text-lg'/>
//               <h2 className='text-lg pb-2'>Bachelor of Information Technology Degree</h2>
//             </div>
//           </div>
//         </div>
//         <div className='text-left w-[50%]'>
//           <h4 className='text-xl text-[#383535]'>2023</h4>
//           <h2 className='text-4xl text-[#f03e73] pb-7'>Job Experience</h2>
//           <div>
//             <div className='flex gap-3 items-center'>
//               <MdOutlineDeveloperMode className='text-lg'/>
//               <h2 className='text-lg pb-2'>Web Development Intern</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Resume

"use client";
import React, {  useState } from 'react'
import Title from './title';
import Education from './Education';
import Experience from "./Experience"

const resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li> */}
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li> */}
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li> */}
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default resume