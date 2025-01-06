import fs from "fs";
import playerModel from "../models/player-model";
import statisticsModel from "../models/statistics-model";

const raw = fs.readFileSync("./src/data/player-data.json", "utf-8");
const db:playerModel[] = JSON.parse(raw);

export const getPlayerList = async ():Promise<playerModel[]> => {
  return db;
}

export const getPlayerById = async (id:number):Promise<playerModel | undefined> => {
  return db.find( p => p.id === id );
}

export const postPlayer = async (player:playerModel) => {
  db.push(player);
}

export const deletePlayer = async (id:number) => {
  const index = db.findIndex( p => p.id === id );
  if(index !== -1){
    db.splice(index,1);
    return true;
  }else{
    return false;
  }
}

export const updatePlayer = async (id:number, stats:statisticsModel):Promise<playerModel> => {
  const index = db.findIndex(p => p.id === id)
  if(index !== -1){
    db[index].statistics = stats.statistics;
  }

  return db[index];
}