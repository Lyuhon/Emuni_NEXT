// app/components/CampusContactInfo.jsx
import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

export default function CampusContactInfo({ title, location, phone, mapUrl }) {
    // Координаты для кнопки такси (вы можете добавить их в пропсы или использовать фиксированные)
    const coordinates = {
        lat: 41.2794427, // Примерные координаты из mapUrl
        lng: 69.2385207  // Примерные координаты из mapUrl
    };

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

                {/* Кнопка вызова такси */}
                <a
                    href={`https://3.redirect.appmetrica.yandex.com/route?end-lat=${coordinates.lat}&end-lon=${coordinates.lng}&appmetrica_tracking_id=1178268795219780156`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-[#5f1464] to-[#8a3c8a] text-white font-bold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center mt-4"
                >
                    <ExternalLink size={18} className="inline mr-2" />
                    Заказать такси
                </a>
            </div>
        </div>
    );
}