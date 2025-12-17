import "./Resume.css";
import { IoSchool } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";

const Resume = () => {
  const [isExperience, setIsExperience] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isLanguages, setIsLanguages] = useState(false);
  return (
    <article className="w-full overflow-hidden md: max-w-[600px] ">
      <div className="width-full flex flex-col gap-4">
        <section className="pl-5">
          <div className="resume-category__header">
            <div className="educacion-icon">
              <div className="icon">
                <IoSchool size={20} />
              </div>
              <h3 className="text-2xl">Education</h3>
            </div>
            <button
              type="button"
              className=" card-profile__floating-button3"
              onClick={() => setIsEducation(!isEducation)}
            >
              {isEducation ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={isEducation ? "down" : "up"}>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="timeline-item-title">Academlo</h4>
                <p className="timeline-text">
                  Full stack web development and computer science
                </p>
                <span className="text-gray-600">
                  January 2023 - September 2023
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="timeline-item-title">Universidad del Quindío</h4>
                <p className="timeline-text">
                  Bachelor’s degree in modern languages with emphasis on English
                  and French.
                </p>
                <span className="text-gray-600">
                  January 2017 - August 2022
                </span>
              </li>
            </ol>
          </div>
        </section>
        {/* Languages */}
        <section>
          <div className="resume-category__header">
            <div className="educacion-icon">
              <div className="icon">
                <LuLanguages size={20} />
              </div>
              <h3 className="text-2xl">Curriculum vitae</h3>
            </div>
            <button
              type="button"
              className=" card-profile__floating-button3"
              onClick={() => setIsLanguages(!isLanguages)}
            >
              {isLanguages ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={isLanguages ? "down" : "up"}>
            <ol className="timeline-list">
              <li className="timeline-item">
                <div className="btn-cv">
                  <div>
                    <h4 className="timeline-item-title">Spanish</h4>
                    <p className="timeline-text">Mother tongue</p>
                    <span className="text-gray-600">CEFR: C2</span>
                  </div>
                  <div className="flex-grow border-t border-gray-400 mx-2" />
                  <div>
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/C.V Alejandro Vasquez Español.pdf";
                        link.download = "C.V Alejandro Vasquez Español.pdf";
                        link.click();
                      }}
                      className="btn"
                    >
                      Download CV
                    </button>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="btn-cv">
                  <div>
                    <h4 className="timeline-item-title">English</h4>
                    <p className="timeline-text">Proficency</p>
                    <span className="text-gray-600">CEFR: C1</span>
                  </div>
                  <div className="flex-grow border-t border-gray-400 mx-2" />
                  <div>
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/Resume Alejandro Vasquez English.pdf";
                        link.download = "Resume Alejandro Vasquez English.pdf";
                        link.click();
                      }}
                      className="btn"
                    >
                      Download CV
                    </button>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="btn-cv">
                  <div>
                    <h4 className="timeline-item-title">Italian</h4>
                    <p className="timeline-text">Intermedium</p>
                    <span className="text-gray-600">CEFR: B2</span>
                  </div>
                  <div className="flex-grow border-t border-gray-400 mx-2" />
                  <div>
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href =
                          "/C.V Alejandro Vasquez Lingua italiana.pdf";
                        link.download =
                          "C.V Alejandro Vasquez Lingua italiana.pdf";
                        link.click();
                      }}
                      className="btn"
                    >
                      Download CV
                    </button>
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <h4 className="timeline-item-title">French</h4>
                <p className="timeline-text">Beginner</p>
                <span className="text-gray-600">CEFR: A2</span>
              </li>
            </ol>
          </div>
        </section>
        {/* Experience */}
        <section>
          <div className="resume-category__header">
            <div className="educacion-icon">
              <div className="icon">
                <FaBookReader size={20} />
              </div>
              <h3 className="text-2xl">Experience</h3>
            </div>
            <button
              type="button"
              className=" card-profile__floating-button3"
              onClick={() => setIsExperience(!isExperience)}
            >
              {isExperience ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={isExperience ? "down" : "up"}>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Teacher of modern technologies
                </h4>
                <p>Fondazione Sviluppo Europa</p>
                <span className="text-gray-600 text-sm">
                  May 2025 - Current
                  <span> 🟢 </span>
                  <p className="text-black">
                    Italy <span className="text-gray-600">(Remote)</span>
                  </p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Responsible for teaching the use of "Digital
                      Storytelling" with platforms such as Prezi, Genially, Book
                      Creator, etc. to teachers in schools in Italy.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Web developer
                </h4>
                <p>Smart Muscle Lab</p>
                <span className="text-gray-600 text-sm">
                  January 2023 - Current
                  <span> 🟢 </span>
                  <p className="text-black">
                    Italy <span className="text-gray-600">(Remote)</span>
                  </p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Building the company website.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Maintain, update and support the company website.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Content manager | Web developer
                </h4>
                <p>Freelance Services</p>
                <span className="text-gray-600 text-sm">
                  January 2021 - Current
                  <span> 🟢 </span>
                  <p className="text-black">
                    {" "}
                    <span className="text-gray-600">(Remote)</span>
                  </p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Develop web pages for companies and/or professionals
                      offering their services.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Maintain, update and support the company website.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Create and/or manage the digital content of the
                      companies in charge.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Mathematics and technology teacher
                </h4>
                <p>Colegio Gimnasio Los Robles SAS</p>
                <span className="text-gray-600 text-sm">
                  January 2024 - June 2024
                  <span> 🔘6 months </span>
                  <p className="text-black">Armenia, Quindio, Colombia</p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Teach math to children always in a fun and didactic way
                      using English as the main language.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Teach kids technology, teach them how to program video
                      games with PowerPoint.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Content manager and web developer
                </h4>
                <p>Pix Data</p>
                <span className="text-gray-600 text-sm">
                  October 2022 - May 2023
                  <span> 🔘7 months </span>
                  <p className="text-black">
                    Armenia, Quindio, Colombia{" "}
                    <span className="text-gray-600">(Remote)</span>
                  </p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Create and/or manage the digital content of the
                      companies in charge.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Create, maintain, update and support the websites of
                      companies.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Mathematics and biology teacher
                </h4>
                <p>Gimnasio los nogales bilingual school</p>
                <span className="text-gray-600 text-sm">
                  January 2022 - November 2023
                  <span> 🔘23 months </span>
                  <p className="text-black">Armenia, Quindio, Colombia</p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Teach math to children always in a fun and didactic way
                      using English as the main language.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Teaching biology using English as the main language.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="timeline-item">
                <h4 className="text-[18px] text-[var(--color-texto)]">
                  Content manager, virtual and administrative assistant
                </h4>
                <p>Sinerxlab</p>
                <span className="text-gray-600 text-sm">
                  June 2020 - January 2022
                  <span> 🔘18 months </span>
                  <p className="text-black">Armenia, Quindio, Colombia</p>
                  <ul>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Create and/or manage the digital content of the
                      companies in charge.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Provide support to customer websites.
                    </li>
                    <li className="timeline-item2 text-[15px]">
                      {" "}
                      ✅ Help lead the work team and coordinate using SCRUM
                      methodology.
                    </li>
                  </ul>
                </span>
              </li>
            </ol>
          </div>
        </section>
      </div>
      {/* Education */}
    </article>
  );
};

export default Resume;
