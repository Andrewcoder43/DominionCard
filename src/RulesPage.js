const rulesData = [
    { id: 1, image: `${process.env.PUBLIC_URL}/RulesPage/adventures.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/03/Dominion-Rules-Adventures.pdf' },
    { id: 2, image: `${process.env.PUBLIC_URL}/RulesPage/alchemy.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/03/Dominion-Rules-Alchemy.pdf' },
    { id: 3, image: `${process.env.PUBLIC_URL}/RulesPage/allies.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2021/09/Dominion-Allies-Rules.pdf' },
    { id: 4, image: `${process.env.PUBLIC_URL}/RulesPage/baseset2.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2016/09/Dominion2nd.pdf' },
    { id: 5, image: `${process.env.PUBLIC_URL}/RulesPage/cornucopia.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2024/02/CornucopiaGuilds.pdf' },
    { id: 6, image: `${process.env.PUBLIC_URL}/RulesPage/darkages.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/03/Dominion-Rules-DarkAges.pdf' },
    { id: 7, image: `${process.env.PUBLIC_URL}/RulesPage/empires.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2016/01/Dominion-Empires-Rules.pdf' },
    { id: 8, image: `${process.env.PUBLIC_URL}/RulesPage/guilds.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2024/02/CornucopiaGuilds.pdf' },
    { id: 9, image: `${process.env.PUBLIC_URL}/RulesPage/hinterlands.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/05/Hinterlands2nd.pdf' },
    { id: 10, image: `${process.env.PUBLIC_URL}/RulesPage/intrigue.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/03/Dominion-Rules-Intrigue-2nd-Edition.pdf' },
    { id: 11, image: `${process.env.PUBLIC_URL}/RulesPage/menagerie.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2020/01/Dominion-Menagerie-Rules.pdf' },
    { id: 12, image: `${process.env.PUBLIC_URL}/RulesPage/nocturne.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/03/Dominion-Rules-Nocturne.pdf' },
    { id: 13, image: `${process.env.PUBLIC_URL}/RulesPage/plunder.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/08/DomPlunder.pdf' },
    { id: 14, image: `${process.env.PUBLIC_URL}/RulesPage/prosperity2.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/05/Prosperity2nd.pdf' },
    { id: 15, image: `${process.env.PUBLIC_URL}/RulesPage/renaissance.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/03/Dominion-Rules-Renaissance.pdf' },
    { id: 16, image: `${process.env.PUBLIC_URL}/RulesPage/seaside2.jpg`, rulesUrl: 'https://www.riograndegames.com/wp-content/uploads/2022/01/Seaside2nd.pdf' },
];

const RulesPage = () => {
    return (
        <div className="rules-container">
            {rulesData.map(rule => (
                <div className="rule-card" key={rule.id}>
                    {rule.rulesUrl ? (
                        <a href={rule.rulesUrl} target="_blank" rel="noopener noreferrer">
                            <img src={rule.image} alt="" className="rule-image" />
                        </a>
                    ) : (
                        <img src={rule.image} alt="" className="rule-image" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default RulesPage;