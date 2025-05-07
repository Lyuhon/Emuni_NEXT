import { motion } from 'framer-motion';

const BestChoiceSection = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } }
            }}
            className="py-10 md:py-20 px-4 relative overflow-hidden bg-white -min-h-screen -md:min-h-[90vh]"
        >
            {/* Декоративный полукруг */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#6b0e55]/5 rounded-tl-[100%]"></div>

            <div className="max-w-screen-xl container mx-auto relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white text-center py-4 md:py-6 rounded-lg mb-8 md:mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Выбирайте лучшее для своего будущего!
                    </h2>
                    <p className="text-sm md:text-base mt-2 opacity-80">
                        EMU University – ваш путь к успеху
                    </p>
                </motion.div>

                <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 flex flex-col justify-center"
                    >
                        <div className="relative pl-4 md:pl-8">
                            <div className="absolute left-0 top-0 h-full w-1 bg-[#ddb74b]"></div>
                            <h3 className="text-lg md:text-2xl font-semibold text-[#6b0e55] mb-3">
                                Современные методики обучения
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 mb-4">
                                С 2020 года EMU University лидирует в медицинском образовании. Мы удостоены наград <span className="text-[#ddb74b] font-semibold">«Лучший медицинский университет 2024»</span> и <span className="text-[#ddb74b] font-semibold">«Лучший негосударственный университет».</span>
                            </p>
                            <div className="space-y-3 text-sm md:text-base text-gray-600">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-[#8f3178] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Международные программы и партнёрства с ведущими университетами.</p>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-[#8f3178] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Современные кампусы с передовыми лабораториями.</p>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-[#8f3178] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Карьерные перспективы в мировой индустрии.</p>
                                </div>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                className="h-1 bg-[#8f3178] mt-6 rounded-full"
                            >
                                <div className="h-full bg-[#ddb74b] rounded-full" style={{ width: '75%' }}></div>
                            </motion.div>
                            <p className="text-xs md:text-sm text-gray-500 mt-2">Студентов: 2500+ и растём!</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 flex flex-col items-end"
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-xl w-full">
                            <video
                                playsInline
                                autoPlay
                                muted
                                loop
                                preload="auto"
                                className="w-full h-auto"
                            >
                                <source src="https://next.emu.web-perfomance.uz/wp-content/uploads/2025/05/welcome.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute top-0 left-0 w-16 h-16 bg-[#6b0e55]/20 rounded-br-full"></div>
                        </div>
                        <motion.a
                            href="https://apply.emuni.uz/ru"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                            className="mt-4 md:mt-6 w-fit ml-auto md:ml-auto relative px-6 md:px-8 py-1 md:py-2 bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white rounded-3xl text-sm md:text-base text-center overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                Подать заявку
                                <motion.svg
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="w-4 h-4 md:w-5 md:h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-gradient-to-r from-[#6b0e55]/50 to-[#8f3178]/50 rounded-lg"
                            ></motion.div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                @media (max-width: 767px) {
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .text-sm {
                        font-size: 0.875rem;
                    }
                    .py-10 {
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }
                    .min-h-screen {
                        min-height: 100vh;
                    }
                }
            `}</style>
        </motion.section>
    );
};

export default BestChoiceSection;