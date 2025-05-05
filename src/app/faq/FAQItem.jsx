// // FAQItem.jsx
// "use client"
// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// export default function FAQItem({ question, answer }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleFAQ = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//             <button
//                 onClick={toggleFAQ}
//                 className="w-full text-left px-6 py-5 flex justify-between items-center"
//             >
//                 <h2 className="text-lg md:text-xl font-bold text-[#5f1464]">{question}</h2>
//                 {isOpen ? (
//                     <ChevronUp className="w-6 h-6 text-[#5f1464]" />
//                 ) : (
//                     <ChevronDown className="w-6 h-6 text-[#5f1464]" />
//                 )}
//             </button>
//             {isOpen && (
//                 <div
//                     className="px-6 py-4 bg-gray-50 text-gray-700 text-sm md:text-base animate-fade-in"
//                     dangerouslySetInnerHTML={{ __html: answer }}
//                 />
//             )}
//         </div>
//     );
// }


// FAQItem.jsx
"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button
                onClick={toggleFAQ}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
            >
                <h2 className="text-lg md:text-xl font-bold text-[#6b0e55]">{question}</h2>
                {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#6b0e55]" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-[#6b0e55]" />
                )}
            </button>
            {isOpen && (
                <div
                    className="px-6 py-4 bg-gray-50 text-gray-700 text-sm md:text-base animate-fade-in"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            )}
        </div>
    );
}