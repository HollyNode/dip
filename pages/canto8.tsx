import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto8 = () => {
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
      <h2 className="text-xl">Canto 8</h2>
<br />
<p>
  I say, continuing, that long before<br />
  we two had reached the foot of that tall tower,<br />
  our eyes had risen upward, toward its summit,<br />
  <br />
  because of two small flames that flickered there,<br />
  while still another flame returned their signal,<br />
  so far off it was scarcely visible.<br />
  <br />
  And I turned toward the sea of all good sense;<br />
  I said: “What does this mean? And what reply<br />
  comes from that other fire? Who kindled it?”<br />
  <br />
  And he to me: “Above the filthy waters<br />
  you can already see what waits for us,<br />
  if it’s not hid by vapors from the marsh.”<br />
  <br />
  Bowstring has not thrust from itself an arrow<br />
  that ever rushed as swiftly through the air<br />
  as did the little bark that at that moment<br />
  <br />
  I saw as it skimmed toward us on the water,<br />
  a solitary boatman at its helm.<br />
  I heard him howl: “Now you are caught, foul soul!”<br />
  <br />
  “O Phlegyas, Phlegyas, such a shout is useless<br />
  this time,” my master said; “we’re yours no longer<br />
  than it will take to cross the muddy sluice.”<br />
  <br />
  And just as one who hears some great deception<br />
  was done to him, and then resents it, so<br />
  was Phlegyas when he had to store his anger.<br />
  <br />
  My guide preceded me into the boat.<br />
  Once he was in, he had me follow him;<br />
  there seemed to be no weight until I boarded.<br />
  <br />
  No sooner were my guide and I embarked<br />
  than off that ancient prow went, cutting water<br />
  more deeply than it does when bearing others.<br />
  <br />
  And while we steered across the stagnant channel,<br />
  before me stood a sinner thick with mud,<br />
  saying: “Who are you, come before your time?”<br />
  <br />
  And I to him: “I’ve come, but I don’t stay;<br />
  but who are you, who have become so ugly?”<br />
  He answered: “You can see—I’m one who weeps.”<br />
  <br />
  And I to him: “In weeping and in grieving,<br />
  accursed spirit, may you long remain;<br />
  though you’re disguised by filth, I know your name.”<br />
  <br />
  Then he stretched both his hands out toward the boat,<br />
  at which my master quickly shoved him back,<br />
  saying: “Be off there with the other dogs!”<br />
  <br />
  That done, he threw his arms around my neck<br />
  and kissed my face and said: “Indignant soul,<br />
  blessed is she who bore you in her womb!<br />
  <br />
  When in the world, he was presumptuous;<br />
  there is no good to gild his memory,<br />
  and so his shade down here is hot with fury.<br />
  <br />
  How many up above now count themselves<br />
  great kings, who’ll wallow here like pigs in slime,<br />
  leaving behind foul memories of their crimes!”<br />
  <br />
  And I: “O master, I am very eager<br />
  to see that spirit soused within this broth<br />
  before we’ve made our way across the lake.”<br />
  <br />
  And he to me: “Before the other shore<br />
  comes into view, you shall be satisfied;<br />
  to gratify so fine a wish is right.”<br />
  <br />
  Soon after I had heard these words, I saw<br />
  the muddy sinners so dismember him<br />
  that even now I praise and thank God for it.<br />
  <br />
  They all were shouting: “At Filippo Argenti!”<br />
  At this, the Florentine, gone wild with spleen,<br />
  began to turn his teeth against himself.<br />
  <br />
  We left him there; I tell no more of him.<br />
  But in my ears so loud a wailing pounded<br />
  that I lean forward, all intent to see.<br />
  <br />
  The kindly master said: “My son, the city<br />
  that bears the name of Dis is drawing near,<br />
  with its grave citizens, its great battalions.”<br />
  <br />
  I said: “I can already see distinctly—<br />
  master—the mosques that gleam within the valley,<br />
  as crimson as if they had just been drawn<br />
  <br />
  out of the fire.” He told me: “The eternal<br />
  flame burning there appears to make them red,<br />
  as you can see, within this lower Hell.”<br />
  <br />
  So we arrived inside the deep-cut trenches<br />
  that are the moats of this despondent land:<br />
  the ramparts seemed to me to be of iron.<br />
  <br />
  But not before we’d ranged in a wide circuit<br />
  did we approach a place where that shrill pilot<br />
  shouted: “Get out; the entrance way is here.”<br />
  <br />
  About the gates I saw more than a thousand—<br />
  who once had rained from Heaven—and they cried<br />
  in anger: “Who is this who, without death,<br />
  <br />
  can journey through the kingdom of the dead?”<br />
  And my wise master made a sign that said<br />
  he wanted to speak secretly to them.<br />
  <br />
  Then they suppressed-somewhat-their great disdain<br />
  and said: “You come alone; let him be gone—<br />
  for he was reckless, entering this realm.<br />
  <br />
  Let him return alone on his mad road—<br />
  or try to, if he can, since you, his guide<br />
  across so dark a land, you are to stay.”<br />
  <br />
  Consider, reader, my dismay before<br />
  the sound of those abominable words:<br />
  returning here seemed so impossible.<br />
  <br />
  “O my dear guide, who more than seven times<br />
  has given back to me my confidence<br />
  and snatched me from deep danger that had menaced,<br />
  <br />
  do not desert me when I’m so undone;<br />
  and if they will not let us pass beyond,<br />
  let us retrace our steps together, quickly.”<br />
  <br />
  These were my words; the lord who’d led me there<br />
  replied: “Forget your fear, no one can hinder<br />
  our passage; One so great has granted it.<br />
  <br />
  But you wait here for me, and feed and comfort<br />
  your tired spirit with good hope, for I<br />
  will not abandon you in this low world.”<br />
  <br />
  So he goes on his way; that gentle father<br />
  has left me there to wait and hesitate,<br />
  for yes and no contend within my head.<br />
  <br />
  I could not hear what he was telling them;<br />
  but he had not been long with them when each<br />
  ran back into the city, scrambling fast.<br />
  <br />
  And these, our adversaries, slammed the gates<br />
  in my lord’s face; and he remained outside,<br />
  then, with slow steps, turned back again to me.<br />
  <br />
  His eyes turned to the ground, his brows deprived<br />
  of every confidence, he said with sighs:<br />
  “See who has kept me from the house of sorrow!’<br />
  <br />
  To me he added: “You—though I am vexed—<br />
  must not be daunted; I shall win this contest,<br />
  whoever tries—within—to block our way.<br />
  <br />
  This insolence of theirs is nothing new;<br />
  they used it once before and at a gate<br />
  less secret—it is still without its bolts—<br />
  <br />
  the place where you made out the fatal text;<br />
  and now, already well within that gate,<br />
  across the circles—and alone—descends<br />
  the one who will unlock this realm for us.”<br />
</p>


      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto8-bg.png')` }}>
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

export default Canto8;

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