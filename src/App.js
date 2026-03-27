import React, { useState, useEffect } from 'react';
import './App.css';
import TravelCard from './components/TravelCard';
import Filter from './components/Filter';
import AddForm from './components/AddForm';
import { ContactsModal, PaymentModal } from './components/Modals';

function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Все');
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const savedTravels = localStorage.getItem('travels');
    if (savedTravels) {
      setTravels(JSON.parse(savedTravels));
    } else {
      const initialTravels = [
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
      setTravels(initialTravels);
      localStorage.setItem('travels', JSON.stringify(initialTravels));
    }
  }, []);

  useEffect(() => {
    if (travels.length > 0) {
      localStorage.setItem('travels', JSON.stringify(travels));
    }
  }, [travels]);

  const countries = ['Все', ...new Set(travels.map(travel => travel.country))];

  const filteredTravels = selectedCountry === 'Все' 
    ? travels 
    : travels.filter(travel => travel.country === selectedCountry);

  const handleAddTravel = (newTravel) => {
    setTravels([...travels, newTravel]);
  };

  const handleDeleteTravel = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить это путешествие?')) {
      setTravels(travels.filter(travel => travel.id !== id));
    }
  };

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
          <button className="header-btn add-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Закрыть форму' : '+ Добавить путешествие'}
          </button>
        </div>
      </header>

      <main className="main-content">
        <Filter 
          countries={countries}
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />

        {showForm && (
          <AddForm 
            onAddTravel={handleAddTravel}
            onClose={() => setShowForm(false)}
          />
        )}

        <div className="travels-grid">
          {filteredTravels.map(travel => (
            <TravelCard 
              key={travel.id} 
              travel={travel}
              onDoubleClick={() => handleDeleteTravel(travel.id)}
            />
          ))}
        </div>
      </main>

      <ContactsModal isOpen={showContacts} onClose={() => setShowContacts(false)} />
      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} />
    </div>
  );
}

export default App;