import React, { useState, useEffect } from 'react';

const ChristmasModal = () => {
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
      <div className="bg-red-600 text-white p-8 rounded-lg w-80 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Frohe Weihnachten!</h2>
        <p className="mb-4">In der Weihnachtszeit können Sie samstags von 9 bis 13 Uhr bei uns bestellen und ihre Lieferung abholen..</p>
        <div className="text-xl mb-4">🎄</div>
        <button
          className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full transition"
          onClick={() => setModalVisible(false)}
        >
          Schließen
        </button>
      </div>
    </div>
  );
};

export default ChristmasModal;
