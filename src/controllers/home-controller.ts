import {Request, Response} from "express";

export const getHome = (req:Request, res:Response) => {
  res.status(200).send({"status":"Server up - api v1.0"});
}