import { Router, Request, Response } from 'express'
import games from '../data/games.json'

const router = Router()

// Google Play Games has NO public read API for a player's own level/achievements
// without an OAuth2 flow (Play Games Services, server-to-server). Until that is
// wired, this serves curated stats from server/data/games.json. Fill the null
// fields there with your real numbers and they render automatically.
//
// To go live later: create OAuth2 credentials in Google Cloud (Play Games
// Services API), store PLAY_GAMES_CLIENT_ID / PLAY_GAMES_CLIENT_SECRET /
// PLAY_GAMES_REFRESH_TOKEN in env, then fetch from
// https://www.googleapis.com/games/v1/players/me and /achievements here.

router.get('/', (_req: Request, res: Response) => {
	res.json({ data: games })
})

export default router
