import React, { useState } from 'react';

function AddForm({ onAddTravel, onClose }) {
  const [newTravel, setNewTravel] = useState({
    country: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTravel({ ...newTravel, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newTravel.country || !newTravel.title || !newTravel.description) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    onAddTravel({
      id: Date.now(),
      ...newTravel
    });
    
    onClose();
  };

  return (
    <div className="form-container">
      <h2>Добавить новое путешествие</h2>
      <form onSubmit={handleSubmit} className="travel-form">
        <div className="form-group">
          <label htmlFor="country">Страна</label>
          <input
            type="text"
            id="country"
            name="country"
            value={newTravel.country}
            onChange={handleChange}
            placeholder="Введите страну"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Название</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newTravel.title}
            onChange={handleChange}
            placeholder="Введите название путешествия"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Краткое описание</label>
          <textarea
            id="description"
            name="description"
            value={newTravel.description}
            onChange={handleChange}
            placeholder="Введите описание"
            rows="3"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Сохранить
          </button>
          <button 
            type="button" 
            className="cancel-button"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;