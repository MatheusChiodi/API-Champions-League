import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer, deletePlayer, updatePlayer } from "./controllers/players-controller";
import { getHome } from "./controllers/home-controller";
import { getClubById, getClubs } from "./controllers/clubs-controller";
const router = Router();

router.get("", getHome)
router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)
router.post("/players", postPlayer)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)

router.get("/clubs", getClubs)
router.get("/clubs/:id", getClubById)

export default router;