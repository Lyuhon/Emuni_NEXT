import JournalPage from './JournalPage';

export default async function ServerJournalPage() {
    const response = await fetch('https://next.emu.web-perfomance.uz/wp-json/acf/v3/pages/83679', {
        next: { revalidate: 0 }, // Revalidate every hour
    });
    const data = await response.json();

    return <JournalPage pageData={data} />;
}