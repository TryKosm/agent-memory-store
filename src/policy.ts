import { MemoryItem } from "./types.js";

export function retentionDays(item: MemoryItem): number {
  return item.kind === "short" ? 7 : 90;
}
