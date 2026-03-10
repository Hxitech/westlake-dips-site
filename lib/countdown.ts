export type CountdownStatus = "upcoming" | "live" | "ended";

export type CountdownState = {
  status: CountdownStatus;
  label: string;
  parts: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
};

export function getCountdownParts(totalMs: number) {
  const normalized = Math.max(0, totalMs);

  return {
    days: Math.floor(normalized / 86_400_000),
    hours: Math.floor((normalized % 86_400_000) / 3_600_000),
    minutes: Math.floor((normalized % 3_600_000) / 60_000),
    seconds: Math.floor((normalized % 60_000) / 1_000),
  };
}

export function getCountdownState(
  eventStart: string,
  eventEnd: string,
  now: Date = new Date(),
): CountdownState {
  const start = new Date(eventStart);
  const end = new Date(eventEnd);

  if (now < start) {
    return {
      status: "upcoming",
      label: "距离大会开幕",
      parts: getCountdownParts(start.getTime() - now.getTime()),
    };
  }

  if (now <= end) {
    return {
      status: "live",
      label: "大会进行中",
      parts: getCountdownParts(0),
    };
  }

  return {
    status: "ended",
    label: "大会已圆满收官",
    parts: getCountdownParts(0),
  };
}
