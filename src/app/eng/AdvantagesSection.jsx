import { motion } from 'framer-motion';
import Image from 'next/image';

const AdvantagesSection = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Advantages data
    const advantages = [
        {
            title: "International Connections",
            description: "We actively collaborate with foreign universities, providing students access to advanced methodologies and experience from global specialists.",
            number: "01",
        },
        {
            title: "Strong Practical Foundation",
            description: "The university has the largest number of clinical bases and partnerships with hospitals, which gives the opportunity to gain practical skills in real conditions.",
            number: "02",
        },
        {
            title: "Internships in Leading Clinics",
            description: "Our students practice in local and private institutions, and participate in additional internships twice a year to broaden their horizons.",
            number: "03",
        },
        {
            title: "Extensive Funding Opportunities",
            description: "In 2025-2026, 20 government grants, more than 200 founder grants, and scholarships for applicants are available.",
            number: "04",
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="py-12 md:py-6 md:mb-16 px-4 relative bg-gradient-to-b from-white via-[#f9eef5] to-white overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#6b0e55] opacity-5 blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#8f3178] opacity-5 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#6b0e55] opacity-15"></div>

            <div className="max-w-screen-xl container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block mb-4">
                        <div className="h-1 w-20 bg-gradient-to-r from-[#6b0e55] to-[#8f3178] rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Training Advantages
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Find out why EMU University is your best choice for a successful future
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(107, 14, 85, 0.1)" }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                        >
                            <div className="h-2 w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178]"></div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-[#f9eef5] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-transparent bg-clip-text">
                                        {advantage.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                                <p className="text-gray-600 text-sm">{advantage.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AdvantagesSection;