import React, { useState } from 'react';
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
  const [travels, setTravels] = useState([
    {
      id: Date.now() - 1,
      country: 'Япония',
      title: 'Сакура в Токио',
      description: 'Наслаждение цветением сакуры и знакомство с японской культурой',
      likes: 15
    },
    {
      id: Date.now() - 2,
      country: 'Италия',
      title: 'Романтическая Венеция',
      description: 'Путешествие по каналам и мостам самого романтичного города Италии',
      likes: 10
    },
    {
      id: Date.now() - 3,
      country: 'Норвегия',
      title: 'Лофотенские острова',
      description: 'Рыбацкие деревушки, горы и пляжи с бирюзовой водой за полярным кругом',
      likes: 9
    },
    {
      id: Date.now() - 4,
      country: 'Таиланд',
      title: 'Чиангмай и горные племена',
      description: 'Знакомство с культурой северного Таиланда, храмы и слоны',
      likes: 12
    },
    {
      id: Date.now() - 5,
      country: 'Италия',
      title: 'Побережье Амальфи',
      description: 'Живописные скалы, лимонные рощи и яркие домики на скалах',
      likes: 21
    },
    {
      id: Date.now() - 6,
      country: 'Норвегия',
      title: 'Фьорды и северное сияние',
      description: 'Круиз по живописным фьордам, охота за авророй и прогулки по Тролльской тропе',
      likes: 13
    },
    {
      id: Date.now() - 7,
      country: 'Италия',
      title: 'Тосканские холмы',
      description: 'Дегустация вин Кьянти, средневековые городки и кипарисовые аллеи',
      likes: 6
    },
    {
      id: Date.now() - 8,
      country: 'Таиланд',
      title: 'Острова Пхукета',
      description: 'Отдых на белоснежных пляжах и дайвинг в Андаманском море',
      likes: 11
    },
    {
      id: Date.now() - 9,
      country: 'Исландия',
      title: 'Голубая лагуна',
      description: 'Релакс в геотермальных источниках и северное сияние',
      likes: 5
    }
  ]);

  // Получаем уникальные страны
  function getUniqueCountries() {
    var countryList = [];
    countryList.push('Все');
    
    for (var i = 0; i < travels.length; i++) {
      var country = travels[i].country;
      var alreadyExists = false;
      
      for (var j = 0; j < countryList.length; j++) {
        if (countryList[j] === country) {
          alreadyExists = true;
          break;
        }
      }
      
      if (!alreadyExists) {
        countryList.push(country);
      }
    }
    
    return countryList;
  }
  var countries = getUniqueCountries();

  // Фильтрация путешествий
  var filteredTravels;
  if (selectedCountry === 'Все') {
    filteredTravels = travels;
  } else {
    filteredTravels = [];
    for (var i = 0; i < travels.length; i++) {
      if (travels[i].country === selectedCountry) {
        filteredTravels.push(travels[i]);
      }
    }
  }

  // Добавление нового путешествия
  function handleAddTravel(newTravel) {
    var newTravelsList = [];
    
    for (var i = 0; i < travels.length; i++) {
      newTravelsList.push(travels[i]);
    }
    
    var travelWithLikes = {
      id: newTravel.id,
      country: newTravel.country,
      title: newTravel.title,
      description: newTravel.description,
      likes: 0
    };
    
    newTravelsList.push(travelWithLikes);
    setTravels(newTravelsList);
  }

  // Увеличение лайка
  function handleLike(id) {
    var updatedTravels = [];
    
    for (var i = 0; i < travels.length; i++) {
      var travel = travels[i];
      
      if (travel.id === id) {
        var likedTravel = {
          id: travel.id,
          country: travel.country,
          title: travel.title,
          description: travel.description,
          likes: travel.likes + 1
        };
        updatedTravels.push(likedTravel);
      } else {
        updatedTravels.push(travel);
      }
    }
    
    setTravels(updatedTravels);
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Каталог путешествий</h1>
        <div className="header-buttons">
          <button className="header-btn" onClick={function() { setShowContacts(true); }}>
            Контакты
          </button>
          <button className="header-btn" onClick={function() { setShowPayment(true); }}>
            Способы оплаты
          </button>
          <button className="header-btn add-btn" onClick={function() { setShowForm(!showForm); }}>
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
            onClose={function() { setShowForm(false); }}
          />
        )}

        <div className="travels-grid">
          {function() {
            var cards = [];
            for (var i = 0; i < filteredTravels.length; i++) {
              var travel = filteredTravels[i];
              cards.push(
                <TravelCard 
                  key={travel.id} 
                  travel={travel}
                  onLike={handleLike}
                />
              );
            }
            return cards;
          }()}
        </div>
      </main>

      <ContactsModal isOpen={showContacts} onClose={function() { setShowContacts(false); }} />
      <PaymentModal isOpen={showPayment} onClose={function() { setShowPayment(false); }} />
    </div>
  );
}

export default App;