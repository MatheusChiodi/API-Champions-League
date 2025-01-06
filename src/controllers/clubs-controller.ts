import {Request, Response} from "express";
import { getPlayerService } from "../services/player-service";

export const getClubs = async (req:Request, res:Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getClubById = async (req:Request, res:Response) => {
  const id = req.params.id;
  const httpResponse = await getPlayerService(id);
  res.status(httpResponse.statusCode).send(httpResponse.body);
}