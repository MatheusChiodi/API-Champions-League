import {Request, Response} from "express";
import { deletePlayerService, getPlayerService, postPlayerService, updatePlayerService } from "../services/player-service";
import { noContent } from "../utils/http-helper";
import statisticsModel from "../models/statistics-model";

export const getPlayer = async (req:Request, res:Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getPlayerById = async (req:Request, res:Response) => {
  const id = req.params.id;
  const httpResponse = await getPlayerService(id);
  res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const postPlayer = async (req:Request, res: Response) => {
  let httpResponse = await postPlayerService(req.body);
  if(httpResponse){
    res.status(httpResponse.statusCode).send(httpResponse.body);
  }else{
    httpResponse = await noContent();
    res.status(httpResponse.statusCode).send(httpResponse.body);
  }
}

export const deletePlayer = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse!.statusCode).send(httpResponse!.body);
}

export const updatePlayer = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue:statisticsModel = req.body;
  let httpResponse = await updatePlayerService(id, bodyValue);
  if(httpResponse){
    res.status(httpResponse.statusCode).send(httpResponse.body);
  }else{
    httpResponse = await noContent();
    res.status(httpResponse.statusCode).send(httpResponse.body);
  }
}