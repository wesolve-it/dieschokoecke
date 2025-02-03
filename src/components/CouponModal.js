import React, { useState, useEffect } from 'react';

const CouponModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Modal nach 3 Sekunden anzeigen
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 3000);

    // Cleanup timer falls die Komponente unmontiert wird
    return () => clearTimeout(timer);
  }, []);

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-chocolateBrown text-textBrown p-8 rounded-lg w-96 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Wir sind ab sofort Akzeptanzstelle des Heimatgutscheins!</h2>
        <div className='pl-6'>
        <img className='object-cover mb-8' src={require('../assets/n-land-1j9c4filjl4limt8zxul-logowide.png')} alt='Bild des Heimatgutscheins' />
        </div>
        <p className="mb-4">Ab sofort bieten wir auch die Möglichkeit, bei uns den Heimatgutschein zu nutzen. Genieße unsere leckeren Produkte mit Deinen liebsten!</p>
        <button
          className="mt-4 px-6 py-2 bg-textBrown text-chocolateBrown rounded-full transition"
          onClick={() => setModalVisible(false)}
        >
          Schließen
        </button>
      </div>
    </div>
  );
};

export default CouponModal;
