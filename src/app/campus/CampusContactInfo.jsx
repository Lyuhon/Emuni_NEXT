// app/components/CampusContactInfo.jsx
import React from "react";
import { MapPin } from "lucide-react";

export default function CampusContactInfo({ title, location, phone, mapUrl }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-[40px]">
            <p className="text-gray-700">
                <span className="inline-block px-2 py-1 bg-[#5f1464]/10 text-[#5f1464] text-xs font-medium rounded-full mb-2">
                    <MapPin className="w-3 h-3 inline-block mr-1" />
                    {location}
                </span>
            </p>
            <p className="text-gray-700 mt-2">
                <a href={`tel:${phone}`} className="text-[#5f1464] hover:underline">
                    {phone}
                </a>
            </p>
            <div className="mt-4">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                ></iframe>
            </div>
        </div>
    );
}