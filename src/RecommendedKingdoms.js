import React from 'react';
import './RecommendedKingdoms.css';

const allCards = [
    { id: 27, name: 'Amulet', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Amulet.png` },
    { id: 34, name: 'Distant Lands', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Distant_Lands.png` },
    { id: 35, name: 'Dungeon', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Dungeon.png` },
    { id: 36, name: 'Duplicate', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Duplicate.png` },
    { id: 39, name: 'Giant', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Giant.png` },
    { id: 43, name: 'Hireling', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Hireling.png` },
    { id: 50, name: 'Port', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Port.png` },
    { id: 51, name: 'Ranger', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Ranger.png` },
    { id: 52, name: 'Ratcatcher', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Ratcatcher.png` },
    { id: 62, name: 'Treasure Trove', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Treasure_Trove.png` },
    { id: 86, name: 'scouting party', expansion: 'Adventures', cardgamename: 'GENTLE INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Events/Scouting_Party.png` },
    { id: 30, name: 'caravan guard', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Caravan_Guard.png` },
    { id: 32, name: 'coin of the realm', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Coin_of_the_Realm.png` },
    { id: 41, name: 'haunted woods', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Haunted_Woods.png` },
    { id: 44, name: 'lost city', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Lost_City.png` },
    { id: 45, name: 'magpie', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Magpie.png` },
    { id: 49, name: 'peasant', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Peasant.png` },
    { id: 53, name: 'raze', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Raze.png` },
    { id: 58, name: 'swamp hag', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Swamp_Hag.png` },
    { id: 60, name: 'transmogrify', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Transmogrify.png` },
    { id: 64, name: 'wine merchant', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Wine_Merchant.png` },
    { id: 79, name: 'mission', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Events/Mission.png` },
    { id: 82, name: 'plan', expansion: 'Adventures', cardgamename: 'EXPERT INTRO', image: `${process.env.PUBLIC_URL}/Adventures/Events/Plan.png` },
];

const RecommendedKingdoms = () => {
    const gentleIntroCards = allCards.filter(card => card.cardgamename === 'GENTLE INTRO');
    const expertIntroCards = allCards.filter(card => card.cardgamename === 'EXPERT INTRO');

    return (
        <div className="recommended-kingdoms">
            <h2>Gentle INTRO</h2>
            <hr />
            <div className="card-container">
                {gentleIntroCards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.name} />
                    </div>
                ))}
            </div>
            <h2>Expert INTRO</h2>
            <hr />
            <div className="card-container">
                {expertIntroCards.map((card) => (
                    <div key={`expert-${card.id}`} className="card">
                        <img src={card.image} alt={card.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedKingdoms;