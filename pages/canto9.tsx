import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto9 = () => {
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
<br />
<h2 className="text-xl">Canto 9</h2>
<br />
<p>
  THAT hue which cowardice brought out on me,<br />
  Beholding my Conductor backward turn,<br />
  Sooner repressed within him his new colour.<br />
  <br />
  He stopped attentive, like a man who listens,<br />
  Because the eye could not conduct him far<br />
  Through the black air, and through the heavy fog.<br />
  <br />
  “Still it behoveth us to win the fight,”<br />
  Began he; “Else . . . Such offered us herself . . .<br />
  O how I long that some one here arrive !”<br />
  <br />
  Well I perceived, as soon as the beginning<br />
  He covered up with what came afterward,<br />
  That they were words quite different from the first;<br />
  <br />
  But none the less his saying gave me fear,<br />
  Because I carried out the broken phrase,<br />
  Perhaps to a worse meaning than he had.<br />
  <br />
  “Into this bottom of the doleful conch<br />
  Doth any e’er descend from the first grade,<br />
  Which for its pain has only hope cut off?”<br />
  <br />
  This question put I; and he answered me:<br />
  “Seldom it comes to pass that one of us<br />
  Maketh the journey upon which I go.<br />
  <br />
  True is it, once before I here below<br />
  Was conjured by that pitiless Erictho,<br />
  Who summoned back the shades unto their bodies.<br />
  <br />
  Naked of me short while the flesh had been,<br />
  Before within that wall she made me enter,<br />
  To bring a spirit from the circle of Judas;<br />
  <br />
  That is the lowest region and the darkest,<br />
  And farthest from the heaven which circles all.<br />
  Well know I the way; therefore be reassured.<br />
  <br />
  This fen, which a prodigious stench exhales,<br />
  Encompasses about the city dolent,<br />
  Where now we cannot enter without anger.”<br />
  <br />
  And more he said, but not in mind I have it;<br />
  Because mine eye had altogether drawn me<br />
  Tow’rds the high tower with the red—flaming summit,<br />
  <br />
  Where in a moment saw I swift uprisen<br />
  The three infernal Furies stained with blood,<br />
  Who had the limbs of women and their mien,<br />
  <br />
  And with the greenest hydras were begirt;<br />
  Small serpents and cerastes were their tresses,<br />
  Wherewith their horrid temples were entwined.<br />
  <br />
  And he who well the handmaids of the Queen<br />
  Of everlasting lamentation knew,<br />
  Said unto me: “Behold the fierce Erinnys.<br />
  <br />
  This is Megaera, on the left—hand side;<br />
  She who is weeping on the right, Alecto;<br />
  Tisiphone is between;”and then was silent.<br />
  <br />
  Each one her breast was rending with her nails;<br />
  They beat them with their palms, and cried so loud,<br />
  That I for dread pressed close unto the Poet.<br />
  <br />
  “Medusa come, so we to stone will change him !”<br />
  All shouted looking down; “in evil hour<br />
  Avenged we not on Theseus his assault !”<br />
  <br />
  “Turn thyself round, and keep thine eyes close shut,<br />
  For if the Gorgon appear, and thou shouldst see it,<br />
  No more returning upward would there be.”<br />
  <br />
  Thus said the Master; and he turned me round<br />
  Himself, and trusted not unto my hands<br />
  So far as not to blind me with his own.<br />
  <br />
  O ye who have undistempered intellects,<br />
  Observe the doctrine that conceals itself<br />
  Beneath the veil of the mysterious verses !<br />
  <br />
  And now there came across the turbid waves<br />
  The clangour of a sound with terror fraught,<br />
  Because of which both of the margins trembled;<br />
  <br />
  Not otherwise it was than of a wind<br />
  Impetuous on account of adverse heats,<br />
  That smites the forest, and, without restraint,<br />
  <br />
  The branches rends, beats down, and bears away;<br />
  Right onward, laden with dust, it goes superb,<br />
  And puts to flight the wild beasts and the shepherds.<br />
  <br />
  Mine eyes he loosed, and said: “Direct the nerve<br />
  Of vision now along that ancient foam,<br />
  There yonder where that smoke is most intense.”<br />
  <br />
  Even as the frogs before the hostile serpent<br />
  Across the water scatter all abroad,<br />
  Until each one is huddled in the earth.<br />
  <br />
  More than a thousand ruined souls I saw,<br />
  Thus fleeing from before one who on foot<br />
  Was passing o’er the Styx with soles unwet<br />
  <br />
  From off his face he fanned that unctuous air,<br />
  Waving his left hand oft in front of him,<br />
  And only with that anguish seemed he weary.<br />
  <br />
  Well I perceived one sent from Heaven was he,<br />
  And to the Master turned; and he made sign<br />
  That I should quiet stand, and bow before him.<br />
  <br />
  Ah! how disdainful he appeared to me !<br />
  He reached the gate, and with a little rod<br />
  He opened it, for there was no resistance.<br />
  <br />
  “O banished out of Heaven, people despised !”<br />
  Thus he began upon the horrid threshold;<br />
  “Whence is this arrogance within you couched ?<br />
  <br />
  Wherefore recalcitrate against that will,<br />
  From which the end can never be cut off,<br />
  And which has many times increased your pain ?<br />
  <br />
  What helpeth it to butt against the fates?<br />
  Your Cerberus, if you remember well,<br />
  For that still bears his chin and gullet peeled.”<br />
  <br />
  Then he returned along the miry road,<br />
  And spake no word to us, but had the look<br />
  Of one whom other care constrains and goads<br />
  <br />
  Than that of him who in his presence is;<br />
  And we our feet directed tow’rds the city,<br />
  After those holy words all confident.<br />
  <br />
  Within we entered without any contest;<br />
  And I, who inclination had to see<br />
  What the condition such a fortress holds,<br />
  <br />
  Soon as I was within, cast round mine eye,<br />
  And see on every hand an ample plain,<br />
  Full of distress and torment terrible.<br />
  <br />
  Even as at Arles, where stagnant grows the Rhone,<br />
  Even as at Pola near to the Quarnaro,<br />
  That shuts in Italy and bathes its borders,<br />
  <br />
  The sepulchres make all the place uneven;<br />
  So likewise did they there on every side,<br />
  Saving that there the manner was more bitter;<br />
  <br />
  For flames between the sepulchres were scattered,<br />
  By which they so intensely heated were,<br />
  That iron more so asks not any art.<br />
  <br />
  All of their coverings uplifted were,<br />
  And from them issued forth such dire laments,<br />
  Sooth seemed they of the wretched and tormented.<br />
  <br />
  And I: “My Master, what are all those people<br />
  Who, having sepulture within those tombs,<br />
  Make themselves audible by doleful sighs ?”<br />
  <br />
  And he to me: “Here are the Heresiarchs,<br />
  With their disciples of all sects, and much<br />
  More than thou thinkest laden are the tombs.<br />
  <br />
  Here like together with its like is buried;<br />
  And more and less the monuments are heated.”<br />
  And when he to the right had turned, we passed<br />
  <br />
  Between the torments and high parapets.<br />
</p>


      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto9-bg.png')` }}>
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

export default Canto9;

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