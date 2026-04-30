import { T } from "@/components/ui/t";
import { summitGuestGroups, type SummitGuest } from "@/content/data/guests";

function GuestAvatar({ guest }: { guest: SummitGuest }) {
  const initial = guest.nameEn.charAt(0).toUpperCase();
  return (
    <span
      aria-hidden
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl font-semibold text-blue-700"
    >
      {initial}
    </span>
  );
}

export function GuestRoster() {
  return (
    <div className="space-y-6">
      {summitGuestGroups.map((group) => (
        <div className="rounded-xl border border-gray-200 bg-white p-5" key={group.role}>
          <p className="text-base font-semibold text-blue-700">
            <T zh={group.role} en={group.roleEn} />
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {group.members.map((guest) => (
              <div className="flex items-center gap-3" key={guest.nameEn}>
                <GuestAvatar guest={guest} />
                <div className="min-w-0">
                  <p className="text-base font-semibold text-gray-900">
                    <T zh={`${guest.name} ${guest.title}`} en={`${guest.nameEn}, ${guest.titleEn}`} />
                  </p>
                  <p className="truncate text-base text-gray-500">
                    <T zh={guest.affiliation} en={guest.affiliationEn} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
