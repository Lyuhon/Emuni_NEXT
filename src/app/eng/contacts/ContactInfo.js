// eng/contacts/ContactInfo.js
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, ExternalLink } from 'lucide-react';

// Simplified animations
const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const ContactInfo = ({ locations, brandColor, brandColorLighter }) => {
    const [activeLocation, setActiveLocation] = useState('main');

    // Fallback if locations is invalid
    if (!locations || !locations.main || !locations.clinic) {
        return (
            <div className="text-red-500 text-center p-4 bg-white rounded-xl shadow-md">
                Error: Location data unavailable. Please check the API.
            </div>
        );
    }

    const changeLocation = (location) => {
        if (location !== activeLocation) {
            setActiveLocation(location);
        }
    };

    const currentLocation = locations[activeLocation];

    // Validate mapPosition
    const isValidMapPosition =
        currentLocation.mapPosition &&
        typeof currentLocation.mapPosition.lat === 'number' &&
        typeof currentLocation.mapPosition.lng === 'number' &&
        !isNaN(currentLocation.mapPosition.lat) &&
        !isNaN(currentLocation.mapPosition.lng);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft}
                className="lg:col-span-1"
            >
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                    {/* Location switcher */}
                    <div className="flex border-b">
                        <button
                            className={`flex-1 text-center py-4 font-medium ${activeLocation === 'main'
                                ? 'bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white'
                                : 'bg-gray-50 text-gray-700'
                                }`}
                            onClick={() => changeLocation('main')}
                        >
                            University
                        </button>
                        <button
                            className={`flex-1 text-center py-4 font-medium ${activeLocation === 'clinic'
                                ? 'bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white'
                                : 'bg-gray-50 text-gray-700'
                                }`}
                            onClick={() => changeLocation('clinic')}
                        >
                            Medical School
                        </button>
                    </div>

                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLocation}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-bold mb-6" style={{ color: brandColor }}>
                                    {currentLocation.title}
                                </h2>

                                <ul className="space-y-6 mb-8">
                                    <li className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                            style={{ backgroundColor: brandColorLighter }}
                                        >
                                            <MapPin size={20} style={{ color: brandColor }} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Address:</p>
                                            <p className="text-gray-600">{currentLocation.address}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                            style={{ backgroundColor: brandColorLighter }}
                                        >
                                            <Phone size={20} style={{ color: brandColor }} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Phone:</p>

                                            <a href={`tel:${currentLocation.phone.replace(/[^0-9+]/g, '')}`}
                                                className="text-gray-600 hover:text-[#6b0e55] transition-colors"
                                            >
                                                {currentLocation.phone}
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                            style={{ backgroundColor: brandColorLighter }}
                                        >
                                            <Mail size={20} style={{ color: brandColor }} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Email:</p>

                                            <a href={`mailto:${currentLocation.email}`}
                                                className="text-gray-600 hover:text-[#6b0e55] transition-colors"
                                            >
                                                {currentLocation.email}
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                            style={{ backgroundColor: brandColorLighter }}
                                        >
                                            <Clock size={20} style={{ color: brandColor }} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Working Hours:</p>
                                            <p className="text-gray-600">{currentLocation.workingHours}</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="space-y-3">

                                    <a href={`https://3.redirect.appmetrica.yandex.com/route?end-lat=${currentLocation.mapPosition.lat}&end-lon=${currentLocation.mapPosition.lng}&appmetrica_tracking_id=1178268795219780156`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-gradient-to-r from-[#6b0e55] to-[#8f3178] text-white font-bold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center"
                                    >
                                        <ExternalLink size={18} className="inline mr-2" />
                                        Order a Taxi
                                    </a>


                                    <a href={`tel:${currentLocation.phone.replace(/[^0-9+]/g, '')}`}
                                        className="block w-full bg-gradient-to-r from-[#427a42] to-[#549c54] text-white font-bold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center"
                                    >
                                        <Phone size={18} className="inline mr-2" />
                                        Call Us
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div >
                </div >
            </motion.div >

            {/* Map */}
            < motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromRight}
                className="lg:col-span-2"
            >
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                    <div className="relative flex-grow w-full h-[350px] sm:h-[400px] md:h-full">
                        {isValidMapPosition ? (
                            <iframe
                                key={`${currentLocation.mapPosition.lat}-${currentLocation.mapPosition.lng}`} // Force re-render on location change
                                src={`https://maps.google.com/maps?q=${currentLocation.mapPosition.lat},${currentLocation.mapPosition.lng}&z=${currentLocation.zoom}&output=embed`}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        ) : (
                            <div className="text-red-500 text-center p-4 bg-white h-full flex items-center justify-center">
                                Error: Invalid map coordinates. Please check the API data.
                            </div>
                        )}
                    </div>
                </div>
            </motion.div >
        </div >
    );
};

export default ContactInfo;