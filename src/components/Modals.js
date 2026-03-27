import React from 'react';

export function ContactsModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Контакты</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p><b>Название организации:</b> ООО "Дижитал-групс"</p>
          <p><b>Контактное лицо:</b> Надеев Алексей Егорович</p>
          <p><b>Телефон:</b> +7 (999) 143-52-89</p>
          <p><b>Email:</b> support@digital.ru</p>
          <p><b>Адрес:</b> г. Москва, ул. Сергея Макеева, 13</p>
        </div>
      </div>
    </div>
  );
}

export function PaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Способы оплаты</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>Мы принимаем следующие способы оплаты:</p>
          <ul>
            <li>Наличные при получении</li>
            <li>Банковские карты (Visa, Mastercard, Мир)</li>
            <li>Электронные кошельки (OZON карта, ЮMoney, WebMoney)</li>
            <li>Оплата частями (до 12 месяцев)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}