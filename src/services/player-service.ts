import playerModel from "../models/player-model";
import statisticsModel from "../models/statistics-model";
import { getPlayerList, getPlayerById, postPlayer, deletePlayer, updatePlayer } from "../repositories/player-repository";
import { noContent, ok, badRequest, created } from "../utils/http-helper";

export const getPlayerService = async (id?:string) => {
  const data = id === undefined ? await getPlayerList() : await getPlayerById(parseInt(id!));
  let response = null;
  if(!data){
    response= await noContent();
  }else{
    response = await ok(data);
  }
  
  return response;
}

export const postPlayerService = async (player:playerModel) => {
  if(Object.keys(player).length > 0){
    postPlayer(player);
    return await created();
  }else{
    return await badRequest();
  }
}

export const deletePlayerService = async (id:number) => {
  let response = null;
  const isDeleted = await deletePlayer(id);
  if(isDeleted){
    response = ok({message:"deleted"});
  }else{
    response = await badRequest();
  }
  return response;
}

export const updatePlayerService = async (id:number, stats:statisticsModel) => {
  if(Object.keys(stats).length > 0){
    const response = await updatePlayer(id, stats);
    return await ok(response);
  }else{
    return await badRequest();
  }
}