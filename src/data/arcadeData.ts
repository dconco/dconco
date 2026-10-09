// Favorite anime. Covers are the real art committed under src/assets/anime.
import demonSlayer from '../assets/anime/demon-slayer.webp'
import soloLeveling from '../assets/anime/solo-leveling.webp'
import eminenceInShadow from '../assets/anime/eminence-in-shadow.webp'
import blackClover from '../assets/anime/black-clover.webp'
import claymore from '../assets/anime/claymore.webp'
import shieldHero from '../assets/anime/shield-hero.webp'
import sakamotoDays from '../assets/anime/sakamoto-days.webp'
import overlord from '../assets/anime/overlord.webp'
import arifureta from '../assets/anime/arifureta.webp'
import devilMayCry from '../assets/anime/devil-may-cry.webp'
import nimona from '../assets/anime/nimona.webp'
import mysteryOfAaravos from '../assets/anime/mystery-of-aaravos.webp'
import lolirock from '../assets/anime/lolirock.webp'

export type Anime = {
	title: string
	cover: string
	genre: string
	accent: 'primary' | 'secondary' | 'tertiary'
}

export const favoriteAnime: Anime[] = [
	{ title: 'The Eminence in Shadow', cover: eminenceInShadow, genre: 'Isekai / Comedy', accent: 'secondary' },
	{ title: 'Black Clover', cover: blackClover, genre: 'Action / Magic', accent: 'primary' },
	{ title: 'The Dragon Prince: Mystery of Aaravos', cover: mysteryOfAaravos, genre: 'Fantasy / Adventure', accent: 'tertiary' },
	{ title: 'Demon Slayer', cover: demonSlayer, genre: 'Action / Shonen', accent: 'tertiary' },
	{ title: 'Claymore', cover: claymore, genre: 'Dark Fantasy', accent: 'tertiary' },
	{ title: 'Nimona', cover: nimona, genre: 'Adventure / Sci-Fi', accent: 'secondary' },
	{ title: 'LoliRock', cover: lolirock, genre: 'Magical Girl / Fantasy', accent: 'primary' },
	{ title: 'Solo Leveling', cover: soloLeveling, genre: 'Action / Fantasy', accent: 'primary' },
	{ title: 'The Rising of the Shield Hero', cover: shieldHero, genre: 'Isekai / Adventure', accent: 'secondary' },
	{ title: 'Sakamoto Days', cover: sakamotoDays, genre: 'Action / Comedy', accent: 'primary' },
	{ title: 'Overlord', cover: overlord, genre: 'Isekai / Dark Fantasy', accent: 'tertiary' },
	{ title: 'Arifureta', cover: arifureta, genre: 'Isekai / Action', accent: 'secondary' },
	{ title: 'Devil May Cry', cover: devilMayCry, genre: 'Action / Supernatural', accent: 'primary' },
]

// Game icons. Real Play Store art committed under src/assets/games.
import shadowFight from '../assets/games/shadow-fight-4.webp'
import annelids from '../assets/games/annelids.webp'
import archery from '../assets/games/archery-battle-3d.webp'
import pianoFire from '../assets/games/piano-fire.webp'
import drDriving from '../assets/games/dr-driving.webp'
import efootball from '../assets/games/efootball.webp'

export const gameIcons: Record<string, string> = {
	'shadow-fight-4': shadowFight,
	'annelids': annelids,
	'archery-battle-3d': archery,
	'piano-fire': pianoFire,
	'dr-driving': drDriving,
	'efootball': efootball,
}
