import { HeartIcon, MapPinIcon } from "lucide-react";

type EventCardProps = {
    image: string;
    date: string;
    title: string;
    attendees: string[];
    attendeeCount: number;
    location: string;
};

const events: EventCardProps[] = [
    {
        image: "/images/slide_images/berlin-3005717_1280.jpg",
        date: "24 ABR",
        title: "Fiesta Electrónica",
        attendees: ["/images/slide_images/avatar-1295429_640.png", "/images/slide_images/avatar-1295429_640.png", "/images/slide_images/avatar-1295429_640.png"],
        attendeeCount: 100,
        location: "Calle 45 #12-30, Medellín",
    },
    {
        image: "/images/slide_images/captivating-8339639_1280.jpg",
        date: "24 ABR",
        title: "Fiesta Electrónica",
        attendees: ["/images/slide_images/avatar-1295429_640.png", "/images/slide_images/avatar-1295429_640.png", "/images/slide_images/avatar-1295429_640.png"],
        attendeeCount: 100,
        location: "Calle 45 #12-30, Medellín",
    },
    {
        image: "/images/slide_images/text_DISCOVER_yellow_icon.png",
        date: "24 ABR",
        title: "Fiesta Electrónica",
        attendees: ["/images/slide_images/avatar-1295429_640.png", "/images/slide_images/avatar-1295429_640.png", "/images/slide_images/avatar-1295429_640.png"],
        attendeeCount: 100,
        location: "Calle 45 #12-30, Medellín",
    },
];

export default function SlideScreen() {

    return (
        <div className="overflow-x-auto flex gap-4 p-4 snap-x scroll-smooth">
            {events.map((event, index) => (
                <div
                    key={index}
                    className="min-w-[250px] max-w-[250px] bg-white rounded-2xl shadow-md snap-center"
                >
                    <div className="relative h-40 rounded-t-2xl overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover p-2 rounded-2xl"
                        />
                        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                            {event.date}
                        </span>
                        <button className="absolute top-2 right-2 bg-white/70 p-1 rounded-full">
                            <HeartIcon size={16} className="text-red-500" />
                        </button>
                    </div>
                    <div className="p-3">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="flex -space-x-2">
                                {event.attendees.slice(0, 3).map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        className="w-6 h-6 rounded-full border-2 border-white"
                                        alt={`Asistente ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-600">+{event.attendeeCount} asistirán</span>
                        </div>
                        <div className="flex items-start text-xs text-gray-500">
                            <MapPinIcon size={14} className="mt-0.5 mr-1 text-indigo-500" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}