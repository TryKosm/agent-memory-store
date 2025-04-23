import { MemoryItem } from "./types.js";

const db: MemoryItem[] = [];

export function add(item: MemoryItem): void {
  db.push(item);
}

export function list(sessionId: string): MemoryItem[] {
  return db.filter((m) => m.sessionId === sessionId);
}
