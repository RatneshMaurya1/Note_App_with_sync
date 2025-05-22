import Dexie from "dexie";

export const db = new Dexie("notesAppDB");

db.version(1).stores({
  notes: "id, title, updatedAt, synced" 
});
