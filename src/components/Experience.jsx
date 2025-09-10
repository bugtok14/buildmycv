import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Experience = ({ isEditable }) => {
  const [experiences, setExperiences] = useState([
    {
      company: "Borcelle Studio",
      title: "Marketing Manager & Specialist",
      startDate: new Date("2022"),
      endDate: null,
      isCurrent: true,
      tasks: [
        "Executed comprehensive marketing strategies that increased lead generation by 35% and improved conversion rates by 22%.",
        "Led a team of 8 marketing professionals, implementing performance metrics that boosted campaign efficiency by 40%",
        "Directed brand strategy across all channels, achieving 95% consistency in brand messaging and visual identity",
      ],
    },
    {
      company: "Fauget Studio",
      title: "Marketing Manager",
      startDate: new Date("2018"),
      endDate: new Date("2022"),
      isCurrent: false,
      tasks: [
        "Managed $1.2M annual marketing budget, optimizing spend to achieve 28% higher ROI through data-driven allocation",
        "Pioneered market research initiatives that identified 3 new customer segments, driving 15% revenue growth",
      ],
    },
    {
      company: "AmpUp Digital",
      title: "Marketing Associate",
      startDate: new Date("2015"),
      endDate: new Date("2018"),
      isCurrent: false,
      tasks: [
        "Executed multi-channel digital campaigns that increased social media engagement by 65% and website traffic by 45%",
      ],
    },
  ]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        title: "",
        startDate: null,
        endDate: null,
        isCurrent: false,
        tasks: [""],
      },
    ]);
  };

  const handleDeleteExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    if (field === "isCurrent" && value) {
      newExperiences[index].endDate = null;
    }
    setExperiences(newExperiences);
  };

  const handleTaskChange = (expIndex, taskIndex, value) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].tasks[taskIndex] = value;
    setExperiences(newExperiences);
  };

  const handleAddTask = (expIndex) => {
    const newExperiences = [...experiences];

    // ✅ limit tasks to 3 only
    if (newExperiences[expIndex].tasks.length >= 3) {
      alert("You can only add up to 3 tasks per experience.");
      return;
    }

    newExperiences[expIndex].tasks.push("");
    setExperiences(newExperiences);
  };

  const handleDeleteTask = (expIndex, taskIndex) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].tasks = newExperiences[expIndex].tasks.filter(
      (_, i) => i !== taskIndex
    );
    setExperiences(newExperiences);
  };

  const formatDate = (startDate, endDate, isCurrent) => {
    const startYear = startDate ? startDate.getFullYear() : "";
    if (isCurrent) {
      return `${startYear} - PRESENT`;
    }
    const endYear = endDate ? endDate.getFullYear() : "";
    return `${startYear} - ${endYear}`;
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-700 uppercase tracking-wider">
        Work Experience
      </h2>
      <div className="w-16 border-b-2 border-gray-400 my-2"></div>
      <div className="mt-4 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {isEditable ? (
              <div className="space-y-2 p-4 border border-dashed rounded-md">
                <div className="flex justify-between items-baseline">
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                    placeholder="Company"
                    className="font-bold text-lg text-gray-800 bg-transparent border-b w-full"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <DatePicker
                    selected={exp.startDate}
                    onChange={(date) =>
                      handleExperienceChange(index, "startDate", date)
                    }
                    dateFormat="yyyy"
                    showYearPicker
                    placeholderText="From"
                    className="text-sm font-medium text-gray-600 bg-transparent border-b w-1/3"
                  />
                  <span className="px-2"> - </span>
                  <DatePicker
                    selected={exp.endDate}
                    onChange={(date) =>
                      handleExperienceChange(index, "endDate", date)
                    }
                    dateFormat="yyyy"
                    showYearPicker
                    placeholderText="To"
                    disabled={exp.isCurrent}
                    className="text-sm font-medium text-gray-600 bg-transparent border-b w-1/3"
                  />
                  <label className="flex items-center space-x-2 ml-4">
                    <input
                      type="checkbox"
                      checked={exp.isCurrent}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "isCurrent",
                          e.target.checked
                        )
                      }
                    />
                    <span>Current</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) =>
                    handleExperienceChange(index, "title", e.target.value)
                  }
                  placeholder="Title"
                  className="text-gray-700 italic bg-transparent border-b w-full"
                />
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="text"
                        value={task}
                        onChange={(e) =>
                          handleTaskChange(index, i, e.target.value)
                        }
                        className="bg-transparent border-b w-full mr-2"
                      />
                      <button
                        onClick={() => handleDeleteTask(index, i)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleAddTask(index)}
                  className="text-sm text-blue-600"
                >
                  + Add Task
                </button>
                <button
                  onClick={() => handleDeleteExperience(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-gray-800">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-medium text-gray-600">
                    {formatDate(exp.startDate, exp.endDate, exp.isCurrent)}
                  </span>
                </div>
                <p className="text-gray-700 italic">{exp.title}</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      {isEditable && (
        <button
          onClick={handleAddExperience}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        >
          + Add Experience
        </button>
      )}
    </div>
  );
};

export default Experience;
