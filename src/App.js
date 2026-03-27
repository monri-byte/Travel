import React, { useState } from 'react';
import './App.css';
import TravelCard from './components/TravelCard';
import Filter from './components/Filter';
import { ContactsModal, PaymentModal } from './components/Modals';

function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Все');

  const travels = [
    {
      id: Date.now() - 1,
      country: 'Япония',
      title: 'Сакура в Токио',
      description: 'Наслаждение цветением сакуры и знакомство с японской культурой'
    },
    {
      id: Date.now() - 2,
      country: 'Италия',
      title: 'Романтическая Венеция',
      description: 'Путешествие по каналам и мостам самого романтичного города Италии'
    },
    {
      id: Date.now() - 3,
      country: 'Норвегия',
      title: 'Лофотенские острова',
      description: 'Рыбацкие деревушки, горы и пляжи с бирюзовой водой за полярным кругом'
    },
    {
      id: Date.now() - 4,
      country: 'Таиланд',
      title: 'Чиангмай и горные племена',
      description: 'Знакомство с культурой северного Таиланда, храмы и слоны'
    },
    {
      id: Date.now() - 5,
      country: 'Италия',
      title: 'Побережье Амальфи',
      description: 'Живописные скалы, лимонные рощи и яркие домики на скалах'
    },
    {
      id: Date.now() - 6,
      country: 'Норвегия',
      title: 'Фьорды и северное сияние',
      description: 'Круиз по живописным фьордам, охота за авророй и прогулки по Тролльской тропе'
    },
    {
      id: Date.now() - 7,
      country: 'Италия',
      title: 'Тосканские холмы',
      description: 'Дегустация вин Кьянти, средневековые городки и кипарисовые аллеи'
    },
    {
      id: Date.now() - 8,
      country: 'Таиланд',
      title: 'Острова Пхукета',
      description: 'Отдых на белоснежных пляжах и дайвинг в Андаманском море'
    },
    {
      id: Date.now() - 9,
      country: 'Исландия',
      title: 'Голубая лагуна',
      description: 'Релакс в геотермальных источниках и северное сияние'
    }
  ];

  const countries = ['Все', ...new Set(travels.map(travel => travel.country))];

  const filteredTravels = selectedCountry === 'Все' 
    ? travels 
    : travels.filter(travel => travel.country === selectedCountry);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Каталог путешествий</h1>
        <div className="header-buttons">
          <button className="header-btn" onClick={() => setShowContacts(true)}>
            Контакты
          </button>
          <button className="header-btn" onClick={() => setShowPayment(true)}>
            Способы оплаты
          </button>
        </div>
      </header>

      <main className="main-content">
        <Filter 
          countries={countries}
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />

        <div className="travels-grid">
          {filteredTravels.map(travel => (
            <TravelCard key={travel.id} travel={travel} />
          ))}
        </div>
      </main>

      <ContactsModal isOpen={showContacts} onClose={() => setShowContacts(false)} />
      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} />
    </div>
  );
}

export default App;