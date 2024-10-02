import React, { useState } from 'react';
import './App.css';


const Randomizer = () => {
    const cardOptions = [
        { id: 1, name: 'artisan', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Artisan.png` },
        { id: 2, name: 'bandit', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Bandit.png` },
        { id: 3, name: 'bureaucrat', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Bureaucrat.png` },
        { id: 4, name: 'cellar', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Cellar.png` },
        { id: 5, name: 'chapel', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Chapel.png` },
        { id: 6, name: 'council room', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Council_Room.png` },
        { id: 7, name: 'festival', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Festival.png` },
        { id: 8, name: 'gardens', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Gardens.png` },
        { id: 9, name: 'harbinger', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Harbinger.png` },
        { id: 10, name: 'laboratory', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Laboratory.png` },
        { id: 11, name: 'library', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Library.png` },
        { id: 12, name: 'market', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Market.png` },
        { id: 13, name: 'merchant', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Merchant.png` },
        { id: 14, name: 'militia', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Militia.png` },
        { id: 15, name: 'mine', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Mine.png` },
        { id: 16, name: 'moat', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Moat.png` },
        { id: 17, name: 'moneylender', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Moneylender.png` },
        { id: 18, name: 'poacher', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Poacher.png` },
        { id: 19, name: 'remodel', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Remodel.png` },
        { id: 20, name: 'sentry', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Sentry.png` },
        { id: 21, name: 'smithy', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Smithy.png` },
        { id: 22, name: 'throne room', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Throne_Room.png` },
        { id: 23, name: 'vassal', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Vassal.png` },
        { id: 24, name: 'village', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Village.png` },
        { id: 25, name: 'witch', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Witch.png` },
        { id: 26, name: 'workshop', expansion: 'Base Set', image: `${process.env.PUBLIC_URL}/Base Set/Workshop.png` },
        { id: 27, name: 'amulet', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Amulet.png` },
        { id: 28, name: 'artificer', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Artificer.png` },
        { id: 29, name: 'bridge troll', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Bridge_Troll.png` },
        { id: 30, name: 'caravan guard', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Caravan_Guard.png` },
        { id: 31, name: 'champion', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Champion.png` },
        { id: 32, name: 'coin of the realm', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Coin_of_the_Realm.png` },
        { id: 33, name: 'disciple', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Disciple.png` },
        { id: 34, name: 'distant lands', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Distant_Lands.png` },
        { id: 35, name: 'dungeon', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Dungeon.png` },
        { id: 36, name: 'duplicate', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Duplicate.png` },
        { id: 37, name: 'fugitive', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Fugitive.png` },
        { id: 38, name: 'gear', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Gear.png` },
        { id: 39, name: 'giant', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Giant.png` },
        { id: 40, name: 'guide', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Guide.png` },
        { id: 41, name: 'haunted woods', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Haunted_Woods.png` },
        { id: 42, name: 'hero', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Hero.png` },
        { id: 43, name: 'hireling', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Hireling.png` },
        { id: 44, name: 'lost city', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Lost_City.png` },
        { id: 45, name: 'magpie', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Magpie.png` },
        { id: 46, name: 'messenger', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Messenger.png` },
        { id: 47, name: 'miser', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Miser.png` },
        { id: 48, name: 'page', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Page.png` },
        { id: 49, name: 'peasant', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Peasant.png` },
        { id: 50, name: 'port', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Port.png` },
        { id: 51, name: 'ranger', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Ranger.png` },
        { id: 52, name: 'ratcatcher', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Ratcatcher.png` },
        { id: 53, name: 'raze', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Raze.png` },
        { id: 54, name: 'relic', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Relic.png` },
        { id: 55, name: 'royal carriage', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Royal_Carriage.png` },
        { id: 56, name: 'soldier', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Soldier.png` },
        { id: 57, name: 'storyteller', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Storyteller.png` },
        { id: 58, name: 'swamp hag', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Swamp_Hag.png` },
        { id: 59, name: 'teacher', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Teacher.png` },
        { id: 60, name: 'transmogrify', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Transmogrify.png` },
        { id: 61, name: 'treasure hunter', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Treasure_Hunter.png` },
        { id: 62, name: 'treasure trove', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Treasure_Trove.png` },
        { id: 63, name: 'warrior', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Warrior.png` },
        { id: 64, name: 'wine merchant', expansion: 'Adventures', image: `${process.env.PUBLIC_URL}/Adventures/Wine_Merchant.png` },
        { id: 65, name: 'alchemist', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Alchemist.png` },
        { id: 66, name: 'apothecary', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Apothecary.png` },
        { id: 67, name: 'apprentice', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Apprentice.png` },
        { id: 68, name: 'familiar', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Familiar.png` },
        { id: 69, name: 'golem', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Golem.png` },
        { id: 70, name: 'herbalist', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Herbalist.png` },
        { id: 71, name: 'philosophers stone', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Philosophers_Stone.png` },
        { id: 72, name: 'possession', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Possession.png` },
        { id: 73, name: 'potion', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Potion.png` },
        { id: 74, name: 'scrying pool', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Scrying_Pool.png` },
        { id: 75, name: 'transmute', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Transmute.png` },
        { id: 76, name: 'university', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/University.png` },
        { id: 77, name: 'vineyard', expansion: 'Alchemy', image: `${process.env.PUBLIC_URL}/Alchemy/Vineyard.png` },
        { id: 78, name: 'acolyte', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Acolyte.png` },
        { id: 79, name: 'archer', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Archer.png` },
        { id: 80, name: 'augurs', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Augurs.png` },
        { id: 81, name: 'barbarian', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Barbarian.png` },
        { id: 82, name: 'battle plan', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Battle_Plan.png` },
        { id: 83, name: 'bauble', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Bauble.png` },
        { id: 84, name: 'blacksmith', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Blacksmith.png` },
        { id: 85, name: 'broker', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Broker.png` },
        { id: 86, name: 'capital city', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Capital_City.png` },
        { id: 87, name: 'carpenter', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Carpenter.png` },
        { id: 88, name: 'clashes', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Clashes.png` },
        { id: 89, name: 'conjurer', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Conjurer.png` },
        { id: 90, name: 'contract', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Contract.png` },
        { id: 91, name: 'courier', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Courier.png` },
        { id: 92, name: 'distant shore', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Distant_Shore.png` },
        { id: 93, name: 'elder', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Elder.png` },
        { id: 94, name: 'emissary', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Emissary.png` },
        { id: 95, name: 'forts', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Forts.png` },
        { id: 96, name: 'galleria', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Galleria.png` },
        { id: 97, name: 'garrison', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Garrison.png` },
        { id: 98, name: 'guildmaster', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Guildmaster.png` },
        { id: 99, name: 'herb gatherer', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Herb_Gatherer.png` },
        { id: 100, name: 'highwayman', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Highwayman.png` },
        { id: 101, name: 'hill fort', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Hill_Fort.png` },
        { id: 102, name: 'hunter', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Hunter.png` },
        { id: 103, name: 'importer', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Importer.png` },
        { id: 104, name: 'innkeeper', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Innkeeper.png` },
        { id: 105, name: 'lich', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Lich.png` },
        { id: 106, name: 'marquis', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Marquis.png` },
        { id: 107, name: 'merchant camp', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Merchant_Camp.png` },
        { id: 108, name: 'miller', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Miller.png` },
        { id: 109, name: 'modify', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Modify.png` },
        { id: 110, name: 'odysseys', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Odysseys.png` },
        { id: 111, name: 'old map', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Old_Map.png` },
        { id: 112, name: 'royal galley', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Royal_Galley.png` },
        { id: 113, name: 'sentinel', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Sentinel.png` },
        { id: 114, name: 'sibyl', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Sibyl.png` },
        { id: 115, name: 'skirmisher', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Skirmisher.png` },
        { id: 116, name: 'sorcerer', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Sorcerer.png` },
        { id: 117, name: 'sorceress', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Sorceress.png` },
        { id: 118, name: 'specialist', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Specialist.png` },
        { id: 119, name: 'stronghold', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Stronghold.png` },
        { id: 120, name: 'student', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Student.png` },
        { id: 121, name: 'sunken treasure', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Sunken_Treasure.png` },
        { id: 122, name: 'swap', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Swap.png` },
        { id: 123, name: 'sycophant', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Sycophant.png` },
        { id: 124, name: 'tent', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Tent.png` },
        { id: 125, name: 'territory', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Territory.png` },
        { id: 126, name: 'town crier', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Town_Crier.png` },
        { id: 127, name: 'town', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Town.png` },
        { id: 128, name: 'townsfolk', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Townsfolk.png` },
        { id: 129, name: 'underling', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Underling.png` },
        { id: 130, name: 'voyage', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Voyage.png` },
        { id: 131, name: 'warlord', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Warlord.png` },
        { id: 132, name: 'wizards', expansion: 'Allies', image: `${process.env.PUBLIC_URL}/Allies/KC/Wizards.png` },
        { id: 133, name: 'fairgrounds', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Fairgrounds.png` },
        { id: 134, name: 'farming village', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Farming_Village.png` },
        { id: 135, name: 'fortune teller', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Fortune_Teller.png` },
        { id: 136, name: 'hamlet', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Hamlet.png` },
        { id: 137, name: 'harvest', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Harvest.png` },
        { id: 138, name: 'horn of plenty', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Horn_of_Plenty.png` },
        { id: 139, name: 'horse traders', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Horse_Traders.png` },
        { id: 140, name: 'hunting party', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Hunting_Party.png` },
        { id: 141, name: 'jester', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Jester.png` },
        { id: 142, name: 'menagerie', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Menagerie.png` },
        { id: 143, name: 'remake', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Remake.png` },
        { id: 144, name: 'tournament', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Tournament.png` },
        { id: 145, name: 'young witch', expansion: 'Cornucopia', image: `${process.env.PUBLIC_URL}/Cornucopia/KC/Young_Witch.png` },
        { id: 146, name: 'altar', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Altar.png` },
        { id: 147, name: 'armory', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Armory.png` },
        { id: 148, name: 'band of misfits', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Band_of_Misfits.png` },
        { id: 149, name: 'bandit camp', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Bandit_Camp.png` },
        { id: 150, name: 'beggar', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Beggar.png` },
        { id: 151, name: 'catacombs', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Catacombs.png` },
        { id: 152, name: 'count', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Count.png` },
        { id: 153, name: 'counterfeit', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Counterfeit.png` },
        { id: 154, name: 'cultist', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Cultist.png` },
        { id: 155, name: 'death cart', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Death_Cart.png` },
        { id: 156, name: 'feodum', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Feodum.png` },
        { id: 157, name: 'forager', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Forager.png` },
        { id: 158, name: 'fortress', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Fortress.png` },
        { id: 159, name: 'graverobber', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Graverobber.png` },
        { id: 160, name: 'hermit', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Hermit.png` },
        { id: 161, name: 'hunting grounds', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Hunting_Grounds.png` },
        { id: 162, name: 'ironmonger', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Ironmonger.png` },
        { id: 163, name: 'junk dealer', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Junk_Dealer.png` },
        { id: 164, name: 'knights', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Knights.png` },
        { id: 165, name: 'marauder', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Marauder.png` },
        { id: 166, name: 'market square', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Market_Square.png` },
        { id: 167, name: 'mystic', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Mystic.png` },
        { id: 168, name: 'pillage', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Pillage.png` },
        { id: 169, name: 'poor house', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Poor_House.png` },
        { id: 170, name: 'procession', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Procession.png` },
        { id: 171, name: 'rats', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Rats.png` },
        { id: 172, name: 'rebuild', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Rebuild.png` },
        { id: 173, name: 'rogue', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Rogue.png` },
        { id: 174, name: 'sage', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Sage.png` },
        { id: 175, name: 'scavenger', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Scavenger.png` },
        { id: 176, name: 'squire', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Squire.png` },
        { id: 177, name: 'storeroom', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Storeroom.png` },
        { id: 178, name: 'urchin', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Urchin.png` },
        { id: 179, name: 'vagrant', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Vagrant.png` },
        { id: 180, name: 'wandering minstrel', expansion: 'Dark Ages', image: `${process.env.PUBLIC_URL}/Dark Ages/KC/Wandering_Minstrel.png` },
        { id: 181, name: 'archive', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Archive.png` },
        { id: 182, name: 'bustling village', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Bustling_Village.png` },
        { id: 183, name: 'capital', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Capital.png` },
        { id: 184, name: 'castles', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Castles.png` },
        { id: 185, name: 'catapult', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Catapult.png` },
        { id: 186, name: 'chariot race', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Chariot_Race.png` },
        { id: 187, name: 'charm', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Charm.png` },
        { id: 188, name: 'city quarter', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/City_Quarter.png` },
        { id: 189, name: 'crown', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Crown.png` },
        { id: 190, name: 'emporium', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Emporium.png` },
        { id: 191, name: 'encampment', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Encampment.png` },
        { id: 192, name: 'enchantress', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Enchantress.png` },
        { id: 193, name: 'engineer', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Engineer.png` },
        { id: 194, name: 'farmers market', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Farmers_Market.png` },
        { id: 195, name: 'fortune', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Fortune.png` },
        { id: 196, name: 'forum', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Forum.png` },
        { id: 197, name: 'gladiator', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Gladiator.png` },
        { id: 198, name: 'groundskeeper', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Groundskeeper.png` },
        { id: 199, name: 'legionary', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Legionary.png` },
        { id: 200, name: 'overlord', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Overlord.png` },
        { id: 201, name: 'patrician', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Patrician.png` },
        { id: 202, name: 'plunder', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Plunder.png` },
        { id: 203, name: 'rocks', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Rocks.png` },
        { id: 204, name: 'royal blacksmith', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Royal_Blacksmith.png` },
        { id: 205, name: 'sacrifice', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Sacrifice.png` },
        { id: 206, name: 'settlers', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Settlers.png` },
        { id: 207, name: 'temple', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Temple.png` },
        { id: 208, name: 'villa', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Villa.png` },
        { id: 209, name: 'wild hunt', expansion: 'Empires', image: `${process.env.PUBLIC_URL}/Empires/KC/Wild_Hunt.png` },
        { id: 210, name: 'advisor', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Advisor.png` },
        { id: 211, name: 'baker', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Baker.png` },
        { id: 212, name: 'butcher', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Butcher.png` },
        { id: 213, name: 'candlestick maker', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Candlestick_Maker.png` },
        { id: 214, name: 'doctor', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Doctor.png` },
        { id: 215, name: 'herald', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Herald.png` },
        { id: 216, name: 'journeyman', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Journeyman.png` },
        { id: 217, name: 'masterpiece', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Masterpiece.png` },
        { id: 218, name: 'merchant guild', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Merchant_Guild.png` },
        { id: 219, name: 'plaza', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Plaza.png` },
        { id: 220, name: 'soothsayer', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Soothsayer.png` },
        { id: 221, name: 'stonemason', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Stonemason.png` },
        { id: 222, name: 'taxman', expansion: 'Guilds', image: `${process.env.PUBLIC_URL}/Guilds/Taxman.png` },
        { id: 223, name: 'berserker', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Berserker.png` },
        { id: 224, name: 'border village', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Border_Village.png` },
        { id: 225, name: 'cartographer', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Cartographer.png` },
        { id: 226, name: 'cauldron', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Cauldron.png` },
        { id: 227, name: 'crossroads', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Crossroads.png` },
        { id: 228, name: 'develop', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Develop.png` },
        { id: 229, name: 'farmland', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Farmland.png` },
        { id: 230, name: 'fools gold', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Fools_Gold.png` },
        { id: 231, name: 'guard dog', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Guard_Dog.png` },
        { id: 232, name: 'haggler', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Haggler.png` },
        { id: 233, name: 'highway', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Highway.png` },
        { id: 234, name: 'inn', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Inn.png` },
        { id: 235, name: 'jack of all trades', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Jack_of_All_Trades.png` },
        { id: 236, name: 'margrave', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Margrave.png` },
        { id: 237, name: 'nomads', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Nomads.png` },
        { id: 238, name: 'oasis', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Oasis.png` },
        { id: 239, name: 'scheme', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Scheme.png` },
        { id: 240, name: 'souk', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Souk.png` },
        { id: 241, name: 'spice merchant', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Spice_Merchant.png` },
        { id: 242, name: 'stables', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Stables.png` },
        { id: 243, name: 'trader', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Trader.png` },
        { id: 244, name: 'trail', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Trail.png` },
        { id: 245, name: 'tunnel', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Tunnel.png` },
        { id: 246, name: 'weaver', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Weaver.png` },
        { id: 247, name: 'wheelwright', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Wheelwright.png` },
        { id: 248, name: 'witchs hut', expansion: 'Hinterlands', image: `${process.env.PUBLIC_URL}/Hinterlands/Witchs_Hut.png` },
        { id: 249, name: 'animal fair', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Animal_Fair.png` },
        { id: 250, name: 'barge', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Barge.png` },
        { id: 251, name: 'black cat', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Black_Cat.png` },
        { id: 252, name: 'bounty hunter', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Bounty_Hunter.png` },
        { id: 253, name: 'camel train', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Camel_Train.png` },
        { id: 254, name: 'cardinal', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Cardinal.png` },
        { id: 255, name: 'cavalry', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Cavalry.png` },
        { id: 256, name: 'coven', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Coven.png` },
        { id: 257, name: 'destrier', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Destrier.png` },
        { id: 258, name: 'displace', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Displace.png` },
        { id: 259, name: 'falconer', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Falconer.png` },
        { id: 260, name: 'fisherman', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Fisherman.png` },
        { id: 261, name: 'gatekeeper', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Gatekeeper.png` },
        { id: 262, name: 'goatherd', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Goatherd.png` },
        { id: 263, name: 'groom', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Groom.png` },
        { id: 264, name: 'hostelry', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Hostelry.png` },
        { id: 265, name: 'hunting lodge', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Hunting_Lodge.png` },
        { id: 266, name: 'kiln', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Kiln.png` },
        { id: 267, name: 'livery', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Livery.png` },
        { id: 268, name: 'mastermind', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Mastermind.png` },
        { id: 269, name: 'paddock', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Paddock.png` },
        { id: 270, name: 'sanctuary', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Sanctuary.png` },
        { id: 271, name: 'scrap', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Scrap.png` },
        { id: 272, name: 'sheepdog', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Sheepdog.png` },
        { id: 273, name: 'sleigh', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Sleigh.png` },
        { id: 274, name: 'snowy village', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Snowy_Village.png` },
        { id: 275, name: 'stockpile', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Stockpile.png` },
        { id: 276, name: 'supplies', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Supplies.png` },
        { id: 277, name: 'village green', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Village_Green.png` },
        { id: 278, name: 'wayfarer', expansion: 'Menagerie', image: `${process.env.PUBLIC_URL}/Menagerie/KC/Wayfarer.png` },
        { id: 279, name: 'abundance', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Abundance.png` },
        { id: 280, name: 'buried treasure', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Buried_Treasure.png` },
        { id: 281, name: 'cabin boy', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Cabin_Boy.png` },
        { id: 282, name: 'cage', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Cage.png` },
        { id: 283, name: 'crew', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Crew.png` },
        { id: 284, name: 'crucible', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Crucible.png` },
        { id: 285, name: 'cutthroat', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Cutthroat.png` },
        { id: 286, name: 'enlarge', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Enlarge.png` },
        { id: 287, name: 'figurine', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Figurine.png` },
        { id: 288, name: 'first mate', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/First_Mate.png` },
        { id: 289, name: 'flagship', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Flagship.png` },
        { id: 290, name: 'fortune hunter', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Fortune_Hunter.png` },
        { id: 291, name: 'frigate', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Frigate.png` },
        { id: 292, name: 'gondola', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Gondola.png` },
        { id: 293, name: 'grotto', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Grotto.png` },
        { id: 294, name: 'harbor village', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Harbor_Village.png` },
        { id: 295, name: 'jewelled egg', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Jewelled_Egg.png` },
        { id: 296, name: 'kings cache', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Kings_Cache.png` },
        { id: 297, name: 'landing party', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Landing_Party.png` },
        { id: 298, name: 'longship', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Longship.png` },
        { id: 299, name: 'mapmaker', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Mapmaker.png` },
        { id: 300, name: 'maroon', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Maroon.png` },
        { id: 301, name: 'mining road', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Mining_Road.png` },
        { id: 302, name: 'pendant', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Pendant.png` },
        { id: 303, name: 'pickaxe', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Pickaxe.png` },
        { id: 304, name: 'pilgrim', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Pilgrim.png` },
        { id: 305, name: 'quartermaster', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Quartermaster.png` },
        { id: 306, name: 'rope', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Rope.png` },
        { id: 307, name: 'sack of loot', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Sack_of_Loot.png` },
        { id: 308, name: 'search', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Search.png` },
        { id: 309, name: 'secluded shrine', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Secluded_Shrine.png` },
        { id: 310, name: 'shaman', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Shaman.png` },
        { id: 311, name: 'silver mine', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Silver_Mine.png` },
        { id: 312, name: 'siren', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Siren.png` },
        { id: 313, name: 'stowaway', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Stowaway.png` },
        { id: 314, name: 'swamp shacks', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Swamp_Shacks.png` },
        { id: 315, name: 'taskmaster', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Taskmaster.png` },
        { id: 316, name: 'tools', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Tools.png` },
        { id: 317, name: 'trickster', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Trickster.png` },
        { id: 318, name: 'wealthy village', expansion: 'Plunder', image: `${process.env.PUBLIC_URL}/Plunder/KC/Wealthy_Village.png` },
        { id: 319, name: 'avanto', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Avanto.png` },
        { id: 320, name: 'black market', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Black_Market.png` },
        { id: 321, name: 'captain', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Captain.png` },
        { id: 322, name: 'church', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Church.png` },
        { id: 323, name: 'dismantle', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Dismantle.png` },
        { id: 324, name: 'envoy', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Envoy.png` },
        { id: 325, name: 'governor', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Governor.png` },
        { id: 326, name: 'prince', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Prince.png` },
        { id: 327, name: 'sauna', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Sauna.png` },
        { id: 328, name: 'summon', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Summon.png` },
        { id: 329, name: 'walled village', expansion: 'Promos', image: `${process.env.PUBLIC_URL}/Promos/Walled_Village.png` },
        { id: 330, name: 'anvil', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Anvil.png` },
        { id: 331, name: 'bank', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Bank.png` },
        { id: 332, name: 'bishop', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Bishop.png` },
        { id: 333, name: 'charlatan', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Charlatan.png` },
        { id: 334, name: 'city', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/City.png` },
        { id: 335, name: 'clerk', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Clerk.png` },
        { id: 336, name: 'collection', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Collection.png` },
        { id: 337, name: 'crystal ball', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Crystal_Ball.png` },
        { id: 338, name: 'expand', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Expand.png` },
        { id: 339, name: 'forge', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Forge.png` },
        { id: 340, name: 'grand market', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Grand_Market.png` },
        { id: 341, name: 'hoard', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Hoard.png` },
        { id: 342, name: 'investment', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Investment.png` },
        { id: 343, name: 'kings court', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Kings_Court.png` },
        { id: 344, name: 'magnate', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Magnate.png` },
        { id: 345, name: 'mint', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Mint.png` },
        { id: 346, name: 'monument', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Monument.png` },
        { id: 347, name: 'peddler', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Peddler.png` },
        { id: 348, name: 'quarry', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Quarry.png` },
        { id: 349, name: 'rabble', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Rabble.png` },
        { id: 350, name: 'tiara', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Tiara.png` },
        { id: 351, name: 'vault', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Vault.png` },
        { id: 352, name: 'war chest', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/War_Chest.png` },
        { id: 353, name: 'watchtower', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Watchtower.png` },
        { id: 354, name: 'workers village', expansion: 'Prosperity', image: `${process.env.PUBLIC_URL}/Prosperity/Workers_Village.png` },
        { id: 355, name: 'old witch', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Old_Witch.png` },
        { id: 356, name: 'acting troupe', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Acting_Troupe.png` },
        { id: 357, name: 'border guard', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Border_Guard.png` },
        { id: 358, name: 'cargo ship', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Cargo_Ship.png` },
        { id: 359, name: 'ducat', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Ducat.png` },
        { id: 360, name: 'experiment', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Experiment.png` },
        { id: 361, name: 'flag bearer', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Flag_Bearer.png` },
        { id: 362, name: 'hideout', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Hideout.png` },
        { id: 363, name: 'improve', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Improve.png` },
        { id: 364, name: 'inventor', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Inventor.png` },
        { id: 365, name: 'lackeys', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Lackeys.png` },
        { id: 366, name: 'mountain village', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Mountain_Village.png` },
        { id: 367, name: 'patron', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Patron.png` },
        { id: 368, name: 'priest', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Priest.png` },
        { id: 369, name: 'recruiter', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Recruiter.png` },
        { id: 370, name: 'research', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Research.png` },
        { id: 371, name: 'scepter', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Scepter.png` },
        { id: 372, name: 'scholar', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Scholar.png` },
        { id: 373, name: 'sculptor', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Sculptor.png` },
        { id: 374, name: 'seer', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Seer.png` },
        { id: 375, name: 'silk merchant', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Silk_Merchant.png` },
        { id: 376, name: 'spices', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Spices.png` },
        { id: 377, name: 'swashbuckler', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Swashbuckler.png` },
        { id: 378, name: 'treasurer', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Treasurer.png` },
        { id: 379, name: 'villain', expansion: 'Renaissance', image: `${process.env.PUBLIC_URL}/Renaissance/KC/Villain.png` },
        { id: 380, name: 'ambassador', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Ambassador.png` },
        { id: 381, name: 'bazaar', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Bazaar.png` },
        { id: 382, name: 'caravan', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Caravan.png` },
        { id: 383, name: 'cutpurse', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Cutpurse.png` },
        { id: 384, name: 'embargo', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Embargo.png` },
        { id: 385, name: 'explorer', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Explorer.png` },
        { id: 386, name: 'fishing village', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Fishing Village.png` },
        { id: 387, name: 'ghost ship', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Ghost Ship.png` },
        { id: 388, name: 'haven', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Haven.png` },
        { id: 389, name: 'island', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Island.png` },
        { id: 390, name: 'lighthouse', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Lighthouse.png` },
        { id: 391, name: 'lookout', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Lookout.png` },
        { id: 392, name: 'merchant ship', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Merchant Ship.png` },
        { id: 393, name: 'native village', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Native Village.png` },
        { id: 394, name: 'navigator', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Navigator.png` },
        { id: 395, name: 'outpost', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Outpost.png` },
        { id: 396, name: 'pearl diver', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Pearl Diver.png` },
        { id: 397, name: 'pirate ship', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Pirate Ship.png` },
        { id: 398, name: 'salvager', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Salvager.png` },
        { id: 399, name: 'sea chart', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Sea Chart.png` },
        { id: 400, name: 'sea hag', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Sea Hag.png` },
        { id: 401, name: 'smugglers', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Smugglers.png` },
        { id: 402, name: 'tactician', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Tactician.png` },
        { id: 403, name: 'treasure map', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Treasure Map.png` },
        { id: 404, name: 'treasury', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Treasury.png` },
        { id: 405, name: 'warehouse', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Warehouse.png` },
        { id: 406, name: 'wharf', expansion: 'Seaside', image: `${process.env.PUBLIC_URL}/Seaside/Wharf.png` },
        { id: 407, name: 'beast mode', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Beast_Mode.png` },
        { id: 408, name: 'citadel', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Citadel.png` },
        { id: 409, name: 'copper harvest', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Copper_Harvest.png` },
        { id: 410, name: 'divide and conquer', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Divide_and_Conquer.png` },
        { id: 411, name: 'duskhaven', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Duskhaven.png` },
        { id: 412, name: 'eco warrior', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Eco_Warrior.png` },
        { id: 413, name: 'emperors blessing', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Emperors_Blessing.png` },
        { id: 414, name: 'empire', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Empire.png` },
        { id: 415, name: 'fortify', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Fortify.png` },
        { id: 416, name: 'homestead', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Homestead.png` },
        { id: 417, name: 'imperial market', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Imperial_Market.png` },
        { id: 418, name: 'infiltrate', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Infiltrate.png` },
        { id: 419, name: 'jester', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Jester.png` },
        { id: 420, name: 'last stand', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Last_Stand.png` },
        { id: 421, name: 'lost in time', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Lost_in_Time.png` },
        { id: 422, name: 'manor', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Manor.png` },
        { id: 423, name: 'mystic portal', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Mystic_portal.png` },
        { id: 424, name: 'mystify', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Mystify.png` },
        { id: 425, name: 'night rat', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Night_Rat.png` },
        { id: 426, name: 'nightfall nexus', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Nightfall_Nexus.png` },
        { id: 427, name: 'stormy seas', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Stormy_Seas.png` },
        { id: 428, name: 'temporal shift', expansion: 'Custom', image: `${process.env.PUBLIC_URL}/Custom/Temporal_Shift.png` },
        { id: 429, name: 'baron', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Baron.png` },
        { id: 430, name: 'bridge', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Bridge.png` },
        { id: 431, name: 'conspirator', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Conspirator.png` },
        { id: 432, name: 'courtier', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Courtier.png` },
        { id: 433, name: 'courtyard', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Courtyard.png` },
        { id: 434, name: 'diplomat', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Diplomat.png` },
        { id: 435, name: 'duke', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Duke.png` },
        { id: 436, name: 'harem', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Harem.png` },
        { id: 437, name: 'ironworks', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Ironworks.png` },
        { id: 438, name: 'lurker', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Lurker.png` },
        { id: 439, name: 'masquerade', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Masquerade.png` },
        { id: 440, name: 'mill', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Mill.png` },
        { id: 441, name: 'mining village', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Mining_Village.png` },
        { id: 442, name: 'minion', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Minion.png` },
        { id: 443, name: 'nobles', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Nobles.png` },
        { id: 444, name: 'patrol', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Patrol.png` },
        { id: 445, name: 'pawn', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Pawn.png` },
        { id: 446, name: 'replace', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Replace.png` },
        { id: 447, name: 'secret passage', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Secret_Passage.png` },
        { id: 448, name: 'shanty town', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Shanty_Town.png` },
        { id: 449, name: 'steward', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Steward.png` },
        { id: 450, name: 'swindler', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Swindler.png` },
        { id: 451, name: 'torturer', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Torturer.png` },
        { id: 452, name: 'trading post', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Trading_Post.png` },
        { id: 453, name: 'upgrade', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Upgrade.png` },
        { id: 454, name: 'wishing well', expansion: 'Intrigue', image: `${process.env.PUBLIC_URL}/Intrigue/Wishing_Well.png` },
        { id: 455, name: 'bard', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Bard.png` },
        { id: 456, name: 'blessed village', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Blessed_Village.png` },
        { id: 457, name: 'cemetery', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Cemetery.png` },
        { id: 458, name: 'changeling', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Changeling.png` },
        { id: 459, name: 'cobbler', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Cobbler.png` },
        { id: 460, name: 'conclave', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Conclave.png` },
        { id: 461, name: 'crypt', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Crypt.png` },
        { id: 462, name: 'cursed village', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Cursed_Village.png` },
        { id: 463, name: 'den of sin', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Den_of_Sin.png` },
        { id: 464, name: 'devils workshop', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Devils_Workshop.png` },
        { id: 465, name: 'druid', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Druid.png` },
        { id: 466, name: 'exorcist', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Exorcist.png` },
        { id: 467, name: 'faithful hound', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Faithful_Hound.png` },
        { id: 468, name: 'fool', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Fool.png` },
        { id: 469, name: 'ghost town', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Ghost_Town.png` },
        { id: 470, name: 'guardian', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Guardian.png` },
        { id: 471, name: 'idol', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Idol.png` },
        { id: 472, name: 'leprechaun', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Leprechaun.png` },
        { id: 473, name: 'monastery', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Monastery.png` },
        { id: 474, name: 'necromancer', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Necromancer.png` },
        { id: 475, name: 'night watchman', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Night_Watchman.png` },
        { id: 476, name: 'pixie', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Pixie.png` },
        { id: 477, name: 'pooka', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Pooka.png` },
        { id: 478, name: 'raider', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Raider.png` },
        { id: 479, name: 'sacred grove', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Sacred_Grove.png` },
        { id: 480, name: 'secret cave', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Secret_Cave.png` },
        { id: 481, name: 'shepherd', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Shepherd.png` },
        { id: 482, name: 'skulk', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Skulk.png` },
        { id: 483, name: 'tormentor', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Tormentor.png` },
        { id: 484, name: 'tracker', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Tracker.png` },
        { id: 485, name: 'tragic hero', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Tragic_Hero.png` },
        { id: 486, name: 'vampire', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Vampire.png` },
        { id: 487, name: 'werewolf', expansion: 'Nocturne', image: `${process.env.PUBLIC_URL}/Nocturne/KC/Werewolf.png` },



    ]


    const [selectedCards, setSelectedCards] = useState(cardOptions.slice(0, 10)); // Initial 10 cards
    const [includeBaseSet, setIncludeBaseSet] = useState(false);
    const [includeAdventures, setIncludeAdventures] = useState(false);
    const [includeAlchemy, setIncludeAlchemy] = useState(false);
    const [includeAllies, setIncludeAllies] = useState(false);
    const [includeCornucopia, setIncludeCornucopia] = useState(false);
    const [includeCustom, setIncludeCustom] = useState(false);
    const [includeDarkAges, setIncludeDarkAges] = useState(false);
    const [includeEmpires, setIncludeEmpires] = useState(false);
    const [includeGuilds, setIncludeGuilds] = useState(false);
    const [includeHinterlands, setIncludeHinterlands] = useState(false);
    const [includeIntrigue, setIncludeIntrigue] = useState(false);
    const [includeMenagerie, setIncludeMenagerie] = useState(false);
    const [includeNocturne, setIncludeNocturne] = useState(false);
    const [includePlunder, setIncludePlunder] = useState(false);
    const [includePromos, setIncludePromos] = useState(false);
    const [includeProsperity, setIncludeProsperity] = useState(false);
    const [includeRenaissance, setIncludeRenaissance] = useState(false);
    const [includeSeaside, setIncludeSeaside] = useState(false);

    const randomizeCards = () => {
        // Check if any expansion is selected
        const anyExpansionSelected =
            includeBaseSet || includeAdventures || includeAlchemy || includeAllies ||
            includeCornucopia || includeCustom || includeDarkAges || includeEmpires ||
            includeGuilds || includeHinterlands || includeIntrigue || includeMenagerie ||
            includeNocturne || includePlunder || includePromos || includeProsperity ||
            includeRenaissance || includeSeaside;

        // If no expansion is selected, return early without changing the cards
        if (!anyExpansionSelected) {
            // Optionally, you can show an alert or message to the user
            alert("Please select at least one expansion before randomizing cards.");
            return;
        }

        // The rest of your existing code
        const filteredCards = cardOptions.filter(card =>
            (includeBaseSet && card.expansion === 'Base Set') ||
            (includeAdventures && card.expansion === 'Adventures') ||
            (includeAlchemy && card.expansion === 'Alchemy') ||
            (includeAllies && card.expansion === 'Allies') ||
            (includeCornucopia && card.expansion === 'Cornucopia') ||
            (includeCustom && card.expansion === 'Custom') ||
            (includeDarkAges && card.expansion === 'Dark Ages') ||
            (includeEmpires && card.expansion === 'Empires') ||
            (includeGuilds && card.expansion === 'Guilds') ||
            (includeHinterlands && card.expansion === 'Hinterlands') ||
            (includeIntrigue && card.expansion === 'Intrigue') ||
            (includeMenagerie && card.expansion === 'Menagerie') ||
            (includeNocturne && card.expansion === 'Nocturne') ||
            (includePlunder && card.expansion === 'Plunder') ||
            (includePromos && card.expansion === 'Promos') ||
            (includeProsperity && card.expansion === 'Prosperity') ||
            (includeRenaissance && card.expansion === 'Renaissance') ||
            (includeSeaside && card.expansion === 'Seaside')
        );

        const shuffled = filteredCards.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 10); // Select 10 cards
        setSelectedCards(selected);
    };

    return (
        <div className="container">
            <h1>Dominion Randomizer</h1>
            <button
                className="dominion-button"
                onClick={randomizeCards}
            >
                Randomize Cards
            </button>
            <div className="card-section">
                <div className="card-container">
                    {selectedCards.map((card) => (
                        <div key={card.id} className="card">
                            <img src={card.image} alt={card.name} className="card-image" />
                        </div>
                    ))}
                </div>
                <div className="checkbox-container">
                    <h2>Sets</h2>
                    <hr className="divider" /> {/* Horizontal line added here */}
                    <label>
                        <input
                            type="checkbox"
                            checked={includeBaseSet}
                            onChange={() => setIncludeBaseSet(!includeBaseSet)}
                        />
                        Base Set
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeAdventures}
                            onChange={() => setIncludeAdventures(!includeAdventures)}
                        />
                        Adventures
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeAlchemy}
                            onChange={() => setIncludeAlchemy(!includeAlchemy)}
                        />
                        Alchemy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeAllies}
                            onChange={() => setIncludeAllies(!includeAllies)}
                        />
                        Allies
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeCornucopia}
                            onChange={() => setIncludeCornucopia(!includeCornucopia)}
                        />
                        Cornucopia
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeCustom}
                            onChange={() => setIncludeCustom(!includeCustom)}
                        />
                        Custom
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeDarkAges}
                            onChange={() => setIncludeDarkAges(!includeDarkAges)}
                        />
                        Dark Ages
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeEmpires}
                            onChange={() => setIncludeEmpires(!includeEmpires)}
                        />
                        Empires
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeGuilds}
                            onChange={() => setIncludeGuilds(!includeGuilds)}
                        />
                        Guilds
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeHinterlands}
                            onChange={() => setIncludeHinterlands(!includeHinterlands)}
                        />
                        Hinterlands
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeIntrigue}
                            onChange={() => setIncludeIntrigue(!includeIntrigue)}
                        />
                        Intrigue
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeMenagerie}
                            onChange={() => setIncludeMenagerie(!includeMenagerie)}
                        />
                        Menagerie
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeNocturne}
                            onChange={() => setIncludeNocturne(!includeNocturne)}
                        />
                        Nocturne
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includePlunder}
                            onChange={() => setIncludePlunder(!includePlunder)}
                        />
                        Plunder
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includePromos}
                            onChange={() => setIncludePromos(!includePromos)}
                        />
                        Promos
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeProsperity}
                            onChange={() => setIncludeProsperity(!includeProsperity)}
                        />
                        Prosperity (2nd Edition)
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeRenaissance}
                            onChange={() => setIncludeRenaissance(!includeRenaissance)}
                        />
                        Renaissance
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeSeaside}
                            onChange={() => setIncludeSeaside(!includeSeaside)}
                        />
                        Seaside (2nd Edition)
                    </label>
                    {/* New section for additional options */}
                    <h2>Options</h2>
                    <hr className="divider" /> {/* Divider for the options section */}
                    <label>
                        <input type="checkbox" />
                        Require +2 Action
                    </label>
                    <label>
                        <input type="checkbox" />
                        Require Drawer
                    </label>
                    <label>
                        <input type="checkbox" />
                        Require Buy
                    </label>
                    <label>
                        <input type="checkbox" />
                        Allow Attacks
                    </label>
                    <label>
                        <input type="checkbox" />
                        Require Reaction
                    </label>
                    <label>
                        <input type="checkbox" />
                        Require Trashing
                    </label>
                    <label>
                        <input type="checkbox" />
                        Distribute Cost
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Randomizer;
