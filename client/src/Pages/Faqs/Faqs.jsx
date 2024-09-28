import React, { useState } from "react";

const faq = [
  {
    question: "What services does Rigved offer?",
    answer: "Rigved specializes in comprehensive interior design services, including residential and commercial design, space planning, and customized furniture solutions tailored to your needs."
  },
  {
    question: "How does the design process work at Rigved?",
    answer: "Our process begins with a consultation to understand your vision, followed by concept development, design implementation, and final touches to ensure your space reflects your style."
  },
  {
    question: "Can I customize my interior design project?",
    answer: "Absolutely! At Rigved, we believe every project should be unique. We work closely with you to incorporate your preferences and personalize every detail of your design."
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline varies based on project scope. Generally, residential projects take between 6-12 weeks, while larger commercial projects may take longer, depending on complexity."
  },
  {
    question: "Do you offer budget-friendly options?",
    answer: "Yes! Rigved is committed to providing stylish solutions for various budgets. We’ll help you maximize your investment while ensuring quality and aesthetics."
  },
  {
    question: "Can I see past projects from Rigved?",
    answer: "Certainly! Visit our portfolio section to explore our completed projects, showcasing a range of styles and innovative designs that highlight our expertise."
  },
  {
    question: "Do you work with contractors and suppliers?",
    answer: "Yes, we collaborate with trusted contractors and suppliers to ensure high-quality materials and workmanship, delivering exceptional results on every project."
  },
  {
    question: "Is Rigved available for virtual consultations?",
    answer: "Absolutely! We offer virtual consultations for clients who prefer remote interactions, making it easy to discuss ideas and designs from the comfort of your home."
  },
  {
    question: "How do I get started with Rigved?",
    answer: "Getting started is simple! Contact us through our website or call our office to schedule an initial consultation, and we’ll guide you through the next steps."
  },
  {
    question: "What sets Rigved apart from other interior design firms?",
    answer: "Rigved stands out for its commitment to client satisfaction, personalized designs, and a seamless process that combines creativity with functionality to transform your space beautifully."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFFCFA]">
      <div className="py-8 px-8 md:px-32">
        <div className="text-[36px] md:text-[48px] font-bold text-[#FF8D24]">
          FAQs
        </div>
        <div className="text-[16px] md:text-[18px] mb-8">
          Find answers to frequently asked questions about our home interior
          design process, pricing, timelines, and more.
        </div>
        <div className="space-y-4 mt-12">
          {faq.map((faqs, index) => (
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
