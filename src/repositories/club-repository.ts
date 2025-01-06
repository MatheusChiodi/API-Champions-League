import fs from "fs";
import { clubModel } from "../models/club-model";

const raw = fs.readFileSync("./src/data/club-data.json","utf-8");
const db:clubModel[] = JSON.parse(raw);

export const getClubList = async ():Promise<clubModel[]> => {
  return db;
}

export const getClubById = async (id:number):Promise<clubModel | undefined> => {
  return db.find( p => p.id === id );
}