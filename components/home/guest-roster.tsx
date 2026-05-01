import Image from "next/image";

import { T } from "@/components/ui/t";
import { summitGuestGroups, type SummitGuest } from "@/content/data/guests";
import { cn } from "@/lib/utils";

type GuestRosterProps = {
  layout?: "compact" | "wide";
};

function GuestCard({
  compact = false,
  guest,
  role,
  roleEn,
}: {
  compact?: boolean;
  guest: SummitGuest;
  role?: string;
  roleEn?: string;
}) {
  return (
    <article
      className="flex h-full items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-[0_8px_22px_rgba(15,23,42,0.04)]"
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-md bg-slate-100",
          compact ? "size-16 sm:size-[4.5rem]" : "size-20 sm:size-24",
        )}
      >
        <Image
          alt={guest.imageAlt}
          className="object-cover object-top"
          fill
          sizes="(min-width: 1280px) 112px, (min-width: 640px) 96px, 80px"
          src={guest.imageSrc}
        />
      </div>
      <div className="min-w-0">
        {role && roleEn ? (
          <p className="mb-1 text-xs font-semibold leading-none text-blue-700">
            <T zh={role} en={roleEn} />
          </p>
        ) : null}
        <p className="text-base font-semibold leading-snug text-gray-900">
          <T zh={`${guest.name} ${guest.title}`} en={`${guest.nameEn}, ${guest.titleEn}`} />
        </p>
        <p className="mt-1 text-sm leading-5 text-gray-500">
          <T zh={guest.affiliation} en={guest.affiliationEn} />
        </p>
      </div>
    </article>
  );
}

export function GuestRoster({ layout = "compact" }: GuestRosterProps) {
  if (layout === "compact") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {summitGuestGroups.flatMap((group) =>
          group.members.map((guest) => (
            <GuestCard
              compact
              guest={guest}
              key={guest.nameEn}
              role={group.role}
              roleEn={group.roleEn}
            />
          )),
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {summitGuestGroups.map((group) => (
        <div className="rounded-xl border border-gray-200 bg-slate-50/70 p-4" key={group.role}>
          <p className="text-base font-semibold text-blue-700">
            <T zh={group.role} en={group.roleEn} />
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {group.members.map((guest) => (
              <GuestCard guest={guest} key={guest.nameEn} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
