// EventContent.tsx
import { useEventFetcher } from "@/hooks/useEventFetcher";
import { useTranslation } from "react-i18next";
import { EventList } from ".";

export function EventContent() {
    const { t } = useTranslation();
    const { events, eventType, toggleEventType } = useEventFetcher();

    return (
        <div>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => toggleEventType()}
                    className={`px-4 py-2 mx-2 text-sm font-medium text-black ${eventType === 'future' ? 'bg-green-300' : 'bg-green-200 hover:bg-green-300'}`}
                >
                    {t("available")}
                </button>
                <button
                    onClick={() => toggleEventType()}
                    className={`px-4 py-2 mx-2 text-sm font-medium text-black ${eventType === 'past' ? 'bg-green-300' : 'bg-green-200 hover:bg-green-300'}`}
                >
                     {t("closed")}
                </button>
            </div>
            {events.length === 0 ? <p>{t("noEvents")}</p> : <EventList events={events} />}
        </div>
    );
}
