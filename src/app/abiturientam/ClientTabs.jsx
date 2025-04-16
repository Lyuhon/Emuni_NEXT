
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ClientTabs({ medicalSchoolRu, businessSchoolRu, brandColor }) {
    const [activeTab, setActiveTab] = useState('medical');
    const [modalImage, setModalImage] = useState(null);

    const tabs = [
        { id: 'medical', title: 'Medical School', image: medicalSchoolRu },
        { id: 'business', title: 'Business and Social School', image: businessSchoolRu }
    ];

    return (
        <div>
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                    tab.image?.url && (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-lg font-medium transition-colors ${activeTab === tab.id
                                    ? 'border-b-2'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                            style={{
                                borderColor: activeTab === tab.id ? brandColor : 'transparent',
                                color: activeTab === tab.id ? brandColor : undefined
                            }}
                        >
                            {tab.title}
                        </button>
                    )
                ))}
            </div>

            {/* Tab Content */}
            <div>
                {tabs.map((tab) => (
                    tab.image?.url && activeTab === tab.id && (
                        <div key={tab.id} className="relative h-64 cursor-pointer" onClick={() => setModalImage(tab.image.url)}>
                            <Image
                                src={tab.image.url}
                                alt={`${tab.title} Subjects`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )
                ))}
            </div>

            {/* Modal for Fullscreen Image */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setModalImage(null)}
                >
                    <div className="relative max-w-4xl w-full h-[80vh]">
                        <Image
                            src={modalImage}
                            alt="Fullscreen Subject Image"
                            fill
                            className="object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={() => setModalImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}