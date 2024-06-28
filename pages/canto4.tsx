import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto4 = () => {
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
      <h2 className="text-xl">Canto 4</h2>
<br />
<p>
  The heavy sleep within my head was smashed<br />
  by an enormous thunderclap, so that<br />
  I started up as one whom force awakens;<br />
  <br />
  I stood erect and turned my rested eyes<br />
  from side to side, and I stared steadily<br />
  to learn what place it was surrounding me.<br />
  <br />
  In truth I found myself upon the brink<br />
  of an abyss, the melancholy valley<br />
  containing thundering, unending wailings.<br />
  <br />
  That valley, dark and deep and filled with mist,<br />
  is such that, though I gazed into its pit,<br />
  I was unable to discern a thing.<br />
  <br />
  “Let us descend into the blind world now,”<br />
  the poet, who was deathly pale, began;<br />
  “I shall go first and you will follow me.”<br />
  <br />
  But I, who’d seen the change in his complexion,<br />
  said: “How shall I go on if you are frightened,<br />
  you who have always helped dispel my doubts?”<br />
  <br />
  And he to me: “The anguish of the people<br />
  whose place is here below, has touched my face<br />
  with the compassion you mistake for fear.<br />
  <br />
  Let us go on, the way that waits is long.”<br />
  So he set out, and so he had me enter<br />
  on that first circle girdling the abyss.<br />
  <br />
  Here, for as much as hearing could discover,<br />
  there was no outcry louder than the sighs<br />
  that caused the everlasting air to tremble.<br />
  <br />
  The sighs arose from sorrow without torments,<br />
  out of the crowds—the many multitudes—<br />
  of infants and of women and of men.<br />
  <br />
  The kindly master said: “Do you not ask<br />
  who are these spirits whom you see before you?<br />
  I’d have you know, before you go ahead,<br />
  <br />
  they did not sin; and yet, though they have merits,<br />
  that’s not enough, because they lacked baptism,<br />
  the portal of the faith that you embrace.<br />
  <br />
  And if they lived before Christianity,<br />
  they did not worship God in fitting ways;<br />
  and of such spirits I myself am one.<br />
  <br />
  For these defects, and for no other evil,<br />
  we now are lost and punished just with this:<br />
  we have no hope and yet we live in longing.”<br />
  <br />
  Great sorrow seized my heart on hearing him,<br />
  for I had seen some estimable men<br />
  among the souls suspended in that limbo.<br />
  <br />
  “Tell me, my master, tell me, lord.” I then<br />
  began because I wanted to be certain<br />
  of that belief which vanquishes all errors,<br />
  <br />
  “did any ever go—by his own merit<br />
  or others’—from this place toward blessedness?”<br />
  And he, who understood my covert speech,<br />
  <br />
  replied: “I was new—entered on this state<br />
  when I beheld a Great Lord enter here;<br />
  the crown he wore, a sign of victory.<br />
  <br />
  He carried off the shade of our first father,<br />
  of his son Abel, and the shade of Noah,<br />
  of Moses, the obedient legislator,<br />
  <br />
  of father Abraham, David the king,<br />
  of Israel, his father, and his sons,<br />
  and Rachel, she for whom he worked so long,<br />
  <br />
  and many others—and He made them blessed;<br />
  and I should have you know that, before them,<br />
  there were no human souls that had been saved.”<br />
  <br />
  We did not stay our steps although he spoke;<br />
  we still continued onward through the wood—<br />
  the wood, I say, where many spirits thronged.<br />
  <br />
  Our path had not gone far beyond the point<br />
  where I had slept, when I beheld a fire<br />
  win out against a hemisphere of shadows.<br />
  <br />
  We still were at a little distance from it,<br />
  but not so far I could not see in part<br />
  that honorable men possessed that place.<br />
  <br />
  “O you who honor art and science both,<br />
  who are these souls whose dignity has kept<br />
  their way of being, separate from the rest?”<br />
  <br />
  And he to me: “The honor of their name,<br />
  which echoes up above within your life,<br />
  gains Heaven’s grace, and that advances them.”<br />
  <br />
  Meanwhile there was a voice that I could hear:<br />
  “Pay honor to the estimable poet;<br />
  his shadow, which had left us, now returns.”<br />
  <br />
  After that voice was done, when there was silence,<br />
  I saw four giant shades approaching us;<br />
  in aspect, they were neither sad nor joyous.<br />
  <br />
  My kindly master then began by saying:<br />
  “Look well at him who holds that sword in hand<br />
  who moves before the other three as lord.<br />
  <br />
  That shade is Homer, the consummate poet;<br />
  the other one is Horace, satirist;<br />
  the third is Ovid, and the last is Lucan.<br />
  <br />
  Because each of these spirits shares with me<br />
  the name called out before by the lone voice,<br />
  they welcome me—and, doing that, do well.”<br />
  <br />
  And so I saw that splendid school assembled<br />
  led by the lord of song incomparable,<br />
  who like an eagle soars above the rest.<br />
  <br />
  Soon after they had talked a while together,<br />
  they turned to me, saluting cordially;<br />
  and having witnessed this, my master smiled;<br />
  <br />
  and even greater honor then was mine,<br />
  for they invited me to join their ranks—<br />
  I was the sixth among such intellects.<br />
  <br />
  So did we move along and toward the light,<br />
  talking of things about which silence here<br />
  is just as seemly as our speech was there.<br />
  <br />
  We reached the base of an exalted castle,<br />
  encircled seven times by towering walls,<br />
  defended all around by a fair stream.<br />
  <br />
  We forded this as if upon hard ground;<br />
  I entered seven portals with these sages;<br />
  we reached a meadow of green flowering plants.<br />
  <br />
  The people here had eyes both grave and slow;<br />
  their features carried great authority;<br />
  they spoke infrequently, with gentle voices.<br />
  <br />
  We drew aside to one part of the meadow,<br />
  an open place both high and filled with light,<br />
  and we could see all those who were assembled.<br />
  <br />
  Facing me there, on the enameled green,<br />
  great-hearted souls were shown to me and I<br />
  still glory in my having witnessed them.<br />
  <br />
  I saw Electra with her many comrades,<br />
  among whom I knew Hector and Aeneas,<br />
  and Caesar, in his armor, falcon-eyed.<br />
  <br />
  I saw Camilla and Penthesilea<br />
  and, on the other side, saw King Latinus,<br />
  who sat beside Lavinia, his daughter.<br />
  <br />
  I saw that Brutus who drove Tarquin out,<br />
  Lucretia, Julia, Marcia, and Cornelia,<br />
  and, solitary, set apart, Saladin.<br />
  <br />
  When I had raised my eyes a little higher,<br />
  I saw the master of the men who know<br />
  seated in philosophic family.<br />
  <br />
  There all look up to him, all do him honor:<br />
  there I beheld both Socrates and Plato,<br />
  closest to him, in front of all the rest;<br />
  <br />
  Democritus, who ascribes the world to chance,<br />
  Diogenes, Empedocles, and Zeno,<br />
  and Thales, Anaxagoras, Heraclitus;<br />
  <br />
  I saw the good collector of medicinals,<br />
  I mean Dioscorides; and I saw Orpheus,<br />
  and Tully, Linus, moral Seneca;<br />
  <br />
  and Euclid the geometer, and Ptolemy,<br />
  Hippocrates and Galen, Avicenna,<br />
  Averroes, of the great Commentary.<br />
  <br />
  I cannot here describe them all in full;<br />
  my ample theme impels me onward so:<br />
  what’s told is often less than the event.<br />
  <br />
  The company of six divides in two;<br />
  my knowing guide leads me another way,<br />
  beyond the quiet, into trembling air.<br />
  <br />
  And I have reached a part where no thing gleams.<br />
</p>


      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto4-bg.png')` }}>
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

export default Canto4;

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