import React from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    closeModal();
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Stop the propagation to prevent overlay click from closing the modal
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleOverlayClick}></div>
      {/* Content */}
      <div 
        className={`rounded-lg p-8 overflow-auto z-50 m-auto
                    sm:max-w-sm sm:max-h-full
                    md:max-w-[calc(840px*0.8)] md:max-h-[calc(600px*0.8)]
                    lg:max-w-[960px] lg:max-h-[600px]`} // Adjust the width for large screens here
                    onClick={handleContentClick}
        style={{
          width: '100%', // Default to full width on small screens
          //maxWidth: '340px', // Default max width on small screens
          height: '600px', // Height is auto by default
          maxHeight: '600px', // Default max height
        }}
      >
        {children}
        
      </div>
    </div>
  );
};

export default Modal;
