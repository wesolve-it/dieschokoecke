import React, { useState, useEffect } from 'react';

const ClosedModal = () => {
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
        <h2 className="text-2xl mb-4"><span className='font-bold'>dieschokoecke<br/></span> ist am 20. & 21.11 wegen Umzug geschlossen!</h2>
        <div className='pl-6'>
        <img className='object-cover mb-8' src={require('../assets/closedImage.png')} alt='Bild des Heimatgutscheins' />
        </div>
        <p className="mb-4">Sie können gerne Ihre Bestellungen per Email schicken und diese am 25.11 bei mir in neuen Räumlichkeiten (kein Ladenlokal) abholen.</p>
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

export default ClosedModal;
