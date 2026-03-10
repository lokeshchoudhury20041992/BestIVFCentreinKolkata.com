import { MapPin, Navigation } from 'lucide-react';

export default function MapPlaceholder({ query, label }: { query: string; label: string }) {
    return (
        <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 flex flex-col items-center justify-center">
            <MapPin className="w-12 h-12 text-rose-deep mb-3" />
            <p className="font-heading font-semibold text-navy text-lg mb-1">{label}</p>
            <p className="text-sm text-gray-500 mb-4">Google Maps Embed</p>
            <a
                href={query}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors shadow-sm"
            >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
            </a>
        </div>
    );
}
