import React, { useState } from "react";

const  faqs=  [
    {
      "question": "What is SevaSetu and what services does it offer?",
      "answer": "SevaSetu is a platform that connects organizations in need of assistance during crises with volunteers willing to help. It facilitates communication and coordination between volunteers and organizations without handling donations."
    },
    {
      "question": "How does SevaSetu help during crises?",
      "answer": "SevaSetu allows organizations to post crisis-related tasks that need volunteers. Volunteers can view these tasks, check the crisis locations, and offer their help based on their skills and availability. The platform simplifies the process of connecting the right volunteers with the right tasks."
    },
    {
      "question": "Do volunteers receive any recognition for their efforts?",
      "answer": "Yes, upon successful completion of tasks, SevaSetu provides volunteers with certificates as recognition for their valuable contribution during crises."
    },
    {
      "question": "Can I view the location of a crisis before volunteering?",
      "answer": "Absolutely! SevaSetu enables volunteers to view the exact location of the crisis or affected area, helping them decide if they can provide help based on proximity or accessibility."
    },
    {
      "question": "How can I connect with an organization during a crisis?",
      "answer": "As a volunteer, you can directly connect with organizations through SevaSetu once you've identified a task you want to assist with. The organization can also view your details and reach out to you for coordination."
    },
    {
      "question": "Can organizations reach out to volunteers?",
      "answer": "Yes, organizations can review volunteer profiles and reach out to them for specific tasks or assistance as needed. This ensures a direct line of communication between both parties."
    },
    {
      "question": "Is donation management part of SevaSetu’s services?",
      "answer": "No, SevaSetu does not handle donations. Our focus is on facilitating volunteer efforts by connecting them with organizations during crises. Any donations or financial aid are managed outside of the platform."
    },
    {
      "question": "How do I get started with SevaSetu as a volunteer?",
      "answer": "Simply sign up on SevaSetu, create your volunteer profile, and start exploring the current crises and tasks that need help. You can choose based on location, skills, and availability, and coordinate directly with the organization."
    },
    {
      "question": "Can organizations view the details of volunteers?",
      "answer": "Yes, registered organizations can view the details of volunteers, including their skills and contact information, to ensure the right fit for the tasks they need assistance with."
    },
    {
      "question": "What makes SevaSetu unique compared to other crisis platforms?",
      "answer": "SevaSetu focuses on fostering direct communication between volunteers and organizations, enabling real-time responses to crises. Our platform provides volunteers with a certificate of recognition and makes it easier for them to view locations and take immediate action without handling donations."
    },
    {
      "question": "Who can use SevaSetu—individuals or organizations?",
      "answer": "Both individuals (volunteers) and organizations can use SevaSetu. Volunteers can sign up to offer their help during crises, while organizations can post tasks and connect with volunteers to get the assistance they need."
    },
    {
      "question": "What types of crises can I volunteer for through SevaSetu?",
      "answer": "SevaSetu supports various types of crises, including natural disasters, community emergencies, humanitarian aid, and other situations where help is needed. Volunteers can select the crisis that aligns with their interests and capacity."
    },
    {
      "question": "Is there a screening process for volunteers?",
      "answer": "SevaSetu allows organizations to review volunteer profiles and determine if the individual is a good fit for the tasks. Volunteers may need to provide some basic details during sign-up, but screening or background checks are conducted at the discretion of the organization."
    },
    {
      "question": "Can I choose which crises I want to help with?",
      "answer": "Yes, as a volunteer, you have full control over which crises or tasks you want to participate in. You can browse various crisis listings, view details, and decide where you want to contribute based on your skills and availability."
    },
    {
      "question": "Is there a minimum time commitment for volunteers?",
      "answer": "There’s no strict minimum time commitment for volunteers. Each task or crisis may have its own timeline and requirements, and you can choose opportunities that fit your schedule."
    },
    {
      "question": "How do I receive my volunteer certificate?",
      "answer": "Once you've successfully completed a task or volunteered for a crisis, SevaSetu will issue a digital certificate recognizing your efforts, which can be downloaded and shared."
    },
    {
      "question": "Can I volunteer remotely for crises through SevaSetu?",
      "answer": "Depending on the type of crisis and task, some opportunities may allow remote volunteering. For example, crisis coordination or digital assistance roles may be done from home, but most tasks are on-site and location-based."
    },
    {
      "question": "Is SevaSetu free to use for volunteers and organizations?",
      "answer": "Yes, SevaSetu is free for both volunteers and organizations. The platform is designed to facilitate the coordination of help without any charges for connecting the two parties."
    },
    {
      "question": "How can I track my volunteering history on SevaSetu?",
      "answer": "Volunteers can log in to their profile and view their past volunteering activities, including the crises they helped with and the certificates they earned for their contributions."
    },
    {
      "question": "Can volunteers work in teams on SevaSetu?",
      "answer": "Yes, some crises may require a group effort, and volunteers can work in teams. Organizations can assign multiple volunteers to the same task, ensuring that help is coordinated efficiently."
    },
    {
      "question": "What happens if I cannot complete a volunteer task?",
      "answer": "If you are unable to complete a task, it’s important to notify the organization as soon as possible so they can find alternative help. Clear communication helps ensure that the crisis management continues smoothly."
    },
    {
      "question": "How do organizations post a crisis or request help on SevaSetu?",
      "answer": "Organizations can sign up on SevaSetu, create a profile, and post details about the crises or tasks that need volunteer assistance. They can include information such as location, type of help required, and time commitment."
    },
    {
      "question": "How does SevaSetu handle privacy and data protection?",
      "answer": "SevaSetu takes privacy seriously. Volunteer and organization data are protected, and personal details are shared only with relevant parties for the purpose of coordinating crisis assistance."
    },
    {
      "question": "Can I edit my volunteer profile after signing up?",
      "answer": "Yes, you can update your volunteer profile at any time, including adding new skills, changing your contact information, or adjusting your availability."
    },
    {
      "question": "Does SevaSetu operate internationally or just within specific regions?",
      "answer": "SevaSetu can be used by both local and international organizations and volunteers. The platform is designed to help during crises in various regions, allowing volunteers to offer help wherever it's needed."
    },
    {
      "question": "How do I report issues or provide feedback on SevaSetu?",
      "answer": "If you encounter any problems or want to share feedback, you can reach out to the SevaSetu support team through the contact page or help section. We value user input to continuously improve the platform."
    },
    {
      "question": "How can I find a crisis that needs help on SevaSetu?",
      "answer": "After logging into your SevaSetu account, you can navigate to the 'Crises' section, where you will find a list of ongoing crises requiring assistance. You can filter the results based on location, type of crisis, or the skills needed."
    },
    {
      "question": "Is there any cost to join SevaSetu as a volunteer or organization?",
      "answer": "SevaSetu is a free platform for both volunteers and organizations. Our goal is to facilitate seamless collaboration during times of crisis without any financial burden."
    },
    {
      "question": "What types of crises does SevaSetu address?",
      "answer": "SevaSetu is equipped to handle various types of crises, including natural disasters, public health emergencies, and social or community crises that require immediate volunteer assistance."
    },
    {
      "question": "Can I volunteer for more than one crisis at a time?",
      "answer": "Yes, as a volunteer, you are free to offer your assistance to multiple crises simultaneously, depending on your availability and capacity to manage multiple tasks."
    },
    {
      "question": "How does SevaSetu verify the organizations listed on the platform?",
      "answer": "SevaSetu thoroughly reviews and verifies each organization before allowing them to post tasks or requests for volunteers. This ensures that all listed organizations are legitimate and credible."
    },
    {
      "question": "What information do I need to provide when signing up as a volunteer?",
      "answer": "Volunteers are required to provide basic personal details such as their name, contact information, and skill sets. This information helps organizations assess if a volunteer is suited for a particular task."
    },
    {
      "question": "Is there any legal obligation for volunteering through SevaSetu?",
      "answer": "Volunteering through SevaSetu is entirely voluntary, and there are no legal obligations attached. However, volunteers should adhere to the commitments they make and communicate with organizations if they are unable to fulfill their responsibilities."
    },
    {
      "question": "How often are crisis tasks updated on SevaSetu?",
      "answer": "Crisis tasks on SevaSetu are updated regularly as new crises arise and existing ones are resolved. Volunteers should check back frequently for new opportunities to assist."
    },
    {
      "question": "Can I share SevaSetu with others who want to volunteer?",
      "answer": "Absolutely! SevaSetu encourages sharing the platform with friends and family who may be interested in volunteering. The more people join, the greater the impact we can make together during crises."
    },
    {
      "question": "Does SevaSetu have a mobile app?",
      "answer": "Currently, SevaSetu is accessible via web browsers, but we are exploring the possibility of developing a mobile app to enhance user experience in the future."
    },
    {
      "question": "How do I stay updated on new crises and opportunities?",
      "answer": "Once registered, you can opt to receive notifications and updates from SevaSetu regarding new crises, volunteer opportunities, and important announcements to stay informed."
    },
    {
      "question": "Can I volunteer if I'm under 18?",
      "answer": "Yes, individuals under 18 can volunteer, but they may need parental consent or supervision depending on the task requirements and the organization's policies."
    },
    {
      "question": "How can organizations manage multiple volunteers?",
      "answer": "Organizations can use the SevaSetu platform to assign tasks, communicate with volunteers, and track their progress. They can designate team leaders if necessary to coordinate larger groups effectively."
    },
    {
      "question": "Are there any special training programs available for volunteers?",
      "answer": "While SevaSetu does not provide specific training programs, some organizations may offer training or orientation for volunteers based on the nature of the crisis or task at hand."
    }
  ]


const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFFCFA]">
      <div className="py-8 px-8 md:px-32">
        <div className="text-[36px] md:text-[48px] font-bold text-blue-500">
          FAQs
        </div>
        <div className="text-[16px] md:text-[18px] mb-8">
          Find answers to frequently asked questions about our home interior
          design process, pricing, timelines, and more.
        </div>
        <div className="space-y-4 mt-12">
          {faqs.map((faqs, index) => (
            <div key={index} className=" shadow-lg rounded-md bg-white">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-4 px-4 md:px-8 flex justify-between items-center"
              >
                <span className="text-[16px] md:text-[18px] font-bold">
                  {faqs.question}
                </span>
                <span className="text-gray-600">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 00-1 1v8a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-8 pb-4 text-gray-700">
                  <hr />
                  <p className="mt-8">{faqs.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;