import { MemoryItem } from "./types.js";

export function toLine(item: MemoryItem): string {
  return `${item.id}|${item.sessionId}|${item.kind}|${item.content}`;
}
