import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto6 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const placeholders = [
    { text: 'Wallpapers', img: '/ds-folder.png' },
    { text: 'Text', img: '/ds-text.png', action: () => setIsModalOpen(true) }, // Add an action to open the modal
  ];
  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    };

    handleBodyScroll(isModalOpen);

    return () => handleBodyScroll(false);
  }, [isModalOpen]);

  const notepadStyle: React.CSSProperties = {
    maxHeight: '90vh',
    overflowY: 'auto',
  };
  const Notepad = () => (
  <div className="flex flex-col h-full bg-gray-800" style={notepadStyle}>
      <div className="flex items-center p-2 border-b bg-gray-700">
        <div className="flex items-center space-x-2 ">
          <StickyNoteIcon className="h-5 w-5 " />
          <span className="text-sm font-semibold text-white">Notepad</span>
        </div>
        <div className="ml-auto flex space-x-2">
          <Button className="rounded-full w-8 h-8" size="sm" variant="ghost">
            <MinimizeIcon className="w-4 h-4" />
            <span className="sr-only">Minimize</span>
          </Button>
          <Button className="rounded-full w-8 h-8" size="sm" variant="ghost">
            <MaximizeIcon className="w-4 h-4" />
            <span className="sr-only">Maximize</span>
          </Button>
          <Button className="rounded-full w-8 h-8" size="sm" variant="ghost" onClick={() => setIsModalOpen(false)}>
            <PanelTopCloseIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto text-sm font-mono text-red-500">
      <h2 className="text-xl">Canto 6</h2>
<br />
<p>
  WHEN I awoke before the dawn of day<br />
  And turned my head to see where I had been,<br />
  I found myself upon a mountainside,<br />
  <br />
  Where broken crags and fallen rock lay heaped<br />
  Before me, in a dismal vale below.<br />
  And I beheld a phantom race, who went<br />
  <br />
  Round in a circle, weeping, and the wind,<br />
  Which beat against their faces, rent their flesh<br />
  And made them howl like dogs before the storm.<br />
  <br />
  Then I, to learn what punishment they bore,<br />
  Stood still, and thus I heard the tempest voice:<br />
  <br />
  "Upon the left-hand bank, I stand alone,<br />
  A solitary rock, and here I hold<br />
  The standard of the people I betrayed.<br />
  <br />
  The path is full of stones, and when I see<br />
  The people pass by on the other side,<br />
  I shout aloud, 'Remember how I stood!'<br />
  <br />
  The people turn, and with a scornful look,<br />
  They shout back at me, 'Traitor, thou shalt die!'<br />
  And then they pass, and I am left alone<br />
  <br />
  To weep and wail, until the end of time.<br />
  But, when the wind is blowing from the south,<br />
  I hear a voice, which seems to come from far:<br />
  <br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'<br />
  <br />
  Then I, to learn what punishment they bore,<br />
  Stood still, and thus I heard the tempest voice:<br />
  <br />
  "Upon the left-hand bank, I stand alone,<br />
  A solitary rock, and here I hold<br />
  The standard of the people I betrayed.<br />
  <br />
  The path is full of stones, and when I see<br />
  The people pass by on the other side,<br />
  I shout aloud, 'Remember how I stood!'<br />
  <br />
  The people turn, and with a scornful look,<br />
  They shout back at me, 'Traitor, thou shalt die!'<br />
  And then they pass, and I am left alone<br />
  <br />
  To weep and wail, until the end of time.<br />
  But, when the wind is blowing from the south,<br />
  I hear a voice, which seems to come from far:<br />
  <br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'<br />
  <br />
  And I, who was still full of wonderment,<br />
  To see what manner of men they were,<br />
  And what their fate might be, drew near to them,<br />
  <br />
  And spoke to one who seemed to be their chief:<br />
  "O thou, who standest on the left-hand bank,<br />
  And holdest the standard of the people,<br />
  <br />
  Tell me, I pray thee, who are these people,<br />
  And what their fate may be, that they should wail<br />
  And weep, and beat their breasts, and rend their hair?"<br />
  <br />
  Then he, who seemed to be their chief, replied:<br />
  "We are the souls of those who have betrayed<br />
  Their friends, and brought them to destruction.<br />
  <br />
  For this, we are condemned to wander here,<br />
  And wail, and weep, and beat our breasts, and rend<br />
  Our hair, until the end of time.<br />
  <br />
  And when the wind is blowing from the south,<br />
  We hear a voice, which seems to come from far:<br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'"<br />
  <br />
  Then I, to learn what punishment they bore,<br />
  Stood still, and thus I heard the tempest voice:<br />
  "Upon the left-hand bank, I stand alone,<br />
  A solitary rock, and here I hold<br />
  The standard of the people I betrayed.<br />
  <br />
  The path is full of stones, and when I see<br />
  The people pass by on the other side,<br />
  I shout aloud, 'Remember how I stood!'<br />
  <br />
  The people turn, and with a scornful look,<br />
  They shout back at me, 'Traitor, thou shalt die!'<br />
  And then they pass, and I am left alone<br />
  <br />
  To weep and wail, until the end of time.<br />
  But, when the wind is blowing from the south,<br />
  I hear a voice, which seems to come from far:<br />
  <br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'"<br />
  <br />
  And I, who was still full of wonderment,<br />
  To see what manner of men they were,<br />
  And what their fate might be, drew near to them,<br />
  <br />
  And spoke to one who seemed to be their chief:<br />
  "O thou, who standest on the left-hand bank,<br />
  And holdest the standard of the people,<br />
  <br />
  Tell me, I pray thee, who are these people,<br />
  And what their fate may be, that they should wail<br />
  And weep, and beat their breasts, and rend their hair?"<br />
  <br />
  Then he, who seemed to be their chief, replied:<br />
  "We are the souls of those who have betrayed<br />
  Their friends, and brought them to destruction.<br />
  <br />
  For this, we are condemned to wander here,<br />
  And wail, and weep, and beat our breasts, and rend<br />
  Our hair, until the end of time.<br />
  <br />
  And when the wind is blowing from the south,<br />
  We hear a voice, which seems to come from far:<br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'"<br />
  <br />
  Then I, to learn what punishment they bore,<br />
  Stood still, and thus I heard the tempest voice:<br />
  "Upon the left-hand bank, I stand alone,<br />
  A solitary rock, and here I hold<br />
  The standard of the people I betrayed.<br />
  <br />
  The path is full of stones, and when I see<br />
  The people pass by on the other side,<br />
  I shout aloud, 'Remember how I stood!'<br />
  <br />
  The people turn, and with a scornful look,<br />
  They shout back at me, 'Traitor, thou shalt die!'<br />
  And then they pass, and I am left alone<br />
  <br />
  To weep and wail, until the end of time.<br />
  But, when the wind is blowing from the south,<br />
  I hear a voice, which seems to come from far:<br />
  <br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'"<br />
  <br />
  And I, who was still full of wonderment,<br />
  To see what manner of men they were,<br />
  And what their fate might be, drew near to them,<br />
  <br />
  And spoke to one who seemed to be their chief:<br />
  "O thou, who standest on the left-hand bank,<br />
  And holdest the standard of the people,<br />
  <br />
  Tell me, I pray thee, who are these people,<br />
  And what their fate may be, that they should wail<br />
  And weep, and beat their breasts, and rend their hair?"<br />
  <br />
  Then he, who seemed to be their chief, replied:<br />
  "We are the souls of those who have betrayed<br />
  Their friends, and brought them to destruction.<br />
  <br />
  For this, we are condemned to wander here,<br />
  And wail, and weep, and beat our breasts, and rend<br />
  Our hair, until the end of time.<br />
  <br />
  And when the wind is blowing from the south,<br />
  We hear a voice, which seems to come from far:<br />
  'O wretched soul, that art so full of woe,<br />
  Know that thy punishment shall never end,<br />
  For thou shalt never be forgiven.'"<br />
</p>


      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto6-bg.png')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex justify-center items-center h-full overflow-hidden">
        {placeholders.map((placeholder, index) => (
          <div key={index} className="flex flex-col items-center m-4 transition duration-300 transform hover:scale-110 cursor-pointer" onClick={placeholder.action}>
            <img src={placeholder.img} alt={placeholder.text} className="w-full max-w-xs h-auto" />
            <div className="mt-2 text-white text-center">{placeholder.text}</div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <Notepad />
      </Modal>
    </div>
  );
};

export default Canto6;

function StickyNoteIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
      <path d="M15 3v6h6" />
    </svg>
  );
}

function MinimizeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function MaximizeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function PanelTopCloseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}