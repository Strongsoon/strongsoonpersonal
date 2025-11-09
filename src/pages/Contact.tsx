import { Mail, Linkedin, Phone, MapPin, Github } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  color: string;
}

function Contact() {
  const contactDetails: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vincent.bethlehem1@gmail.com",
      link: "mailto:vincent.bethlehem1@gmail.com",
      color: "from-red-100 to-red-200 text-red-600",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Vincent Bethlehem",
      link: "https://www.linkedin.com/in/vincent-bethlehem-651317205/",
      color: "from-blue-100 to-blue-200 text-blue-600",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Strongsoon",
      link: "https://github.com/Strongsoon",
      color: "from-gray-100 to-gray-200 text-gray-700",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+61 405 928 967",
      link: "tel:+61405928967",
      color: "from-green-100 to-green-200 text-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Melbourne, Australia",
      color: "from-purple-100 to-purple-200 text-purple-600",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Thanks for viewing my page, if you would like to reach out to chat,
          don't hesitate to on any of these channels!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {contactDetails.map((contact) => (
          <div
            key={contact.label}
            className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
          >
            {contact.link ? (
              <a
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-start gap-4 group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-slate-600 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            ) : (
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-slate-600">{contact.value}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
