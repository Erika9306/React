import React, { useState } from 'react';
import './Home.css';
import lannister from '../../assets/images/lannister.jpg';
import stark from '../../assets/images/stark.jpg';
import targaryen from '../../assets/images/targaryen.jpg';
import baratheon from '../../assets/images/baratheon.jpg';
import greyjoy from '../../assets/images/greyjoy.jpg'

export const Home = () => {
  const banners = [
    { id: 1, name: 'Lannister', description: 'The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also ruled directly over the Crownlands from their seat of the Red Keep in King\'s Landing, Their unofficial motto, which is as well known as the official one, is "A Lannister always pays his debts".', src: lannister },
    { id: 2, name: 'Stark', description: 'House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before Aegon\'s Conquest, as well as during the War of the Five Kings and early on in the Last War, the leaders of House Stark ruled over the region as the Kings in the North.', src: stark },
    { id: 3, name: 'Targaryen', description: 'House Targaryen of Dragonstone, known poetically as the House of the Dragon, is an exiled Great House of Westeros and the former royal house of the Seven Kingdoms. House Targaryen conquered and unified the realm before it was deposed during Robert\'s Rebellion, where House Baratheon replaced it as the new royal house. The two surviving Targaryens, Viserys and Daenerys, fled into exile to the Free Cities of Essos across the Narrow Sea.', src: targaryen },
    { id: 4, name: 'Baratheon', description: "House Baratheon became the royal house of the Seven Kingdoms (as House Baratheon of King's Landing) after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.", src: baratheon },
    { id: 5, name: 'Greyjoy', description: "House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are \"We Do Not Sow,\" although the phrase \"What Is Dead May Never Die\" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.", src: greyjoy },

  ];
 //que onclich lleve a los personajes de cada casa
 //responsive
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => setActiveId(activeId === id ? null : id);

  return (
    <div className="home">
      
      <div className="banner-container">
        {banners.map(b => (
          <div key={b.id} className="banner-card" onClick={() => toggleCard(b.id)}>
            <img src={b.src} alt={b.name} />
            <h1>{b.name}</h1>
            {activeId === b.id && <p className="banner-description">{b.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
