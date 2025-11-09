import { User, Briefcase, GraduationCap, Calendar } from "lucide-react";

interface Job {
  company: string;
  position: string;
  dateRange: string;
  responsibilities: string[];
}

function Home() {
  const jobs: Job[] = [
    {
      company: "Meson Agency",
      position: "API Developer",
      dateRange: "Jan 2025 - Present",
      responsibilities: [
        "Secure API implementation between existing infrastructure and third party CRM's like Hubspot, Salesforce and Agentbox",
        "Built Client and Internal facing apps using WeWeb (front end) and Xano (back end) for day to day operations",
        "Helped guide a team of 2 developers in creating a custom calling system for real estate agents and effectively integrating it with existing software",
      ],
    },
    {
      company: "Meson Agency",
      position: "Account Executive",
      dateRange: "Jun 2020 - Dec 2021",
      responsibilities: [
        "Built and managed enterprise level contracts with some of Australia's largest Real Estate Companies",
        "3x Company Revenue and clients",
        "Coached a sales team on effective Prospecting, Pitching and Closing",
      ],
    },
    {
      company: "McDonalds",
      position: "Department Manager",
      dateRange: "Mar 2018 - Feb 2021",
      responsibilities: [
        "Ran the day to day operations of the store",
        "Led a team of over 20 staff",
        "Had the best KPI's in Australia",
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 transform hover:scale-[1.01] transition-transform duration-300">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/vincentprofilepicture.jpeg"
            alt="Vincent Bethlehem"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Vincent Bethlehem
            </h1>
            <p className="text-slate-600 text-lg">API Developer</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">
            I’m a Computer Science graduate with a strong focus on data
            analysis, automations, and applied statistics. I’m passionate about
            transforming complex information into meaningful insights and tools
            that help businesses make smarter decisions.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Experience</h2>
        </div>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="pb-6 border-b border-slate-200 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {job.position}
                  </h3>
                  <p className="text-slate-600">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <Calendar className="w-4 h-4" />
                {job.dateRange}
              </div>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-3 text-slate-600">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Education</h2>
        </div>
        <p className="text-slate-600 leading-relaxed">
          RMIT - Computer Science Degree
          <div></div>
          Minor Data Analysis
          <div></div>
          78 Grade Point Average
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript",
            "React",
            "TypeScript",
            "Node.js",
            "API Development",
            "Xano",
            "WeWeb",
            "Account Management",
            "Sales",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium hover:from-slate-200 hover:to-slate-300 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
