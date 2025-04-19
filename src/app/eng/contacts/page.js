// contacts/page.js
import ContactInfo from './ContactInfo';

export default async function ContactsPage() {
    // Fetch data with ISR (revalidate every 1 day = 86400 seconds)
    const res = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/81391', {
        next: { revalidate: 86400 }
    });
    const data = await res.json();

    // Фирменные цвета
    const brandColor = '#631463';
    const brandColorLighter = '#f7eef7';

    // Данные для hero секции
    const heroData = {
        title: data.acf.sekcziya_hiro.zagolovok_straniczy_ang,
        description: data.acf.sekcziya_hiro.kratkoe_opisanie_ang,
        background: data.acf.sekcziya_hiro.zadnij_fon.url
    };

    // Данные о локациях
    const locations = {
        main: {
            title: data.acf.pervyj_adres.kontakty_ang.nazvanie_lokaczii,
            address: data.acf.pervyj_adres.kontakty_ang.adres,
            phone: data.acf.pervyj_adres.telefon,
            email: data.acf.pervyj_adres.email,
            workingHours: data.acf.pervyj_adres.kontakty_ang.vremya_raboty,
            mapPosition: {
                lat: parseFloat(data.acf.pervyj_adres.shirota),
                lng: parseFloat(data.acf.pervyj_adres.dolgota)
            },
            zoom: 15
        },
        clinic: {
            title: data.acf.vtoroj_adres.kontakty_ang.nazvanie_lokaczii,
            address: data.acf.vtoroj_adres.kontakty_ang.adres,
            phone: data.acf.vtoroj_adres.telefon,
            email: data.acf.vtoroj_adres.email,
            workingHours: data.acf.vtoroj_adres.kontakty_ang.vremya_raboty,
            mapPosition: {
                lat: parseFloat(data.acf.vtoroj_adres.shirota),
                lng: parseFloat(data.acf.vtoroj_adres.dolgota)
            },
            zoom: 15
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative h-80 flex items-center justify-center overflow-hidden"
                style={{
                    background: `linear-gradient(rgba(99, 20, 99, 0.70), rgba(99, 20, 99, 0.80)), url('${heroData.background}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-20"></div>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">{heroData.title}</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-white max-w-3xl">{heroData.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180 z-[100] mb-[-1px]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            fill="#f8f9fa"
                            opacity=".8"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            fill="#f8f9fa"
                            opacity=".5"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="#f8f9fa"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <ContactInfo locations={locations} brandColor={brandColor} brandColorLighter={brandColorLighter} />
            </div>
        </div>
    );
}