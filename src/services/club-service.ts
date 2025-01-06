import { getClubById, getClubList } from "../repositories/club-repository";
import { noContent, ok } from "../utils/http-helper";

export const getClubService = async (id?:string) => {
  const data = id === undefined ? await getClubList() : await getClubById(parseInt(id!));
  let response = null;
  if(!data){
    response= await noContent();
  }else{
    response = await ok(data);
  }
  
  return response;
}