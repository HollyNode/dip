import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MusicPlayer from './MusicPlayer';

interface TaskBarProps {
  time: Date;
}

export const TaskBar: React.FC<TaskBarProps> = ({ time }) => {
  const router = useRouter();
  const formattedTime = time.toLocaleTimeString([], { timeStyle: 'short' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center justify-between bg-black text-white h-14 px-4">
      <div className="flex items-center space-x-4">
        <div
          className="w-8 h-8 rounded-full cursor-pointer transition-transform transform hover:scale-110"
          style={{ backgroundImage: `url(/dawapp.png)`, backgroundSize: 'cover' }}
          onClick={() => router.push('/')}
        ></div>
      </div>

      <div className="flex-grow mx-10">
        <input
          type="search"
          placeholder="Search..."
          className="w-1/2 h-10 px-4 bg-dark-gray text-white rounded-full border border-gray-700"
          style={{ backgroundColor: '#333', borderRadius: '15px' }}
        />
      </div>

      <div className="flex items-center space-x-4">
        <div
          className="w-8 h-8 rounded-full cursor-pointer transition-transform transform hover:scale-110"
          style={{ backgroundImage: `url(/images/Asset24.png)`, backgroundSize: 'cover' }}
        ></div>
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        <div
          className="w-8 h-8 bg-gray-700 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-600 transition duration-300"
          onClick={toggleModal}
          style={{
            backgroundImage: 'url(/images/rotify-icon.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-full rounded-full hover:animate-spin transition duration-300"></div>
        </div>
        <div>{formattedTime}</div>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleModal}></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <MusicPlayer onClose={toggleModal} />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskBar;
