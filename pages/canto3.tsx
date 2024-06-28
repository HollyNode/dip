import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto3 = () => {
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
      <h2 className="text-xl">Canto 3</h2>
<br />
<p>
  THROUGH me the way is to the city dolent;<br />
  Through me the way is to eternal dole;<br />
  Through me the way among the people lost.<br />
  <br />
  Justice incited my sublime Creator;<br />
  Created me divine Omnipotence,<br />
  The highest Wisdom and the primal Love.<br />
  <br />
  Before me there were no created things,<br />
  Only eterne, and I eternal last.<br />
  All hope abandon, ye who enter in!<br />
  <br />
  These words in sombre colour I beheld<br />
  Written upon the summit of a gate;<br />
  Whence I: “Their sense is, Master, hard to me!”<br />
  <br />
  And he to me, as one experienced:<br />
  “Here all suspicion needs must be abandoned,<br />
  All cowardice must needs be here extinct.<br />
  <br />
  We to the place have come, where I have told thee<br />
  Thou shalt behold the people dolorous<br />
  Who have foregone the good of intellect.”<br />
  <br />
  And after he had laid his hand on mine<br />
  With joyful mien, whence I was comforted,<br />
  He led me in among the secret things.<br />
  <br />
  There sighs, complaints, and ululations loud<br />
  Resounded through the air without a star,<br />
  Whence I, at the beginning, wept thereat.<br />
  <br />
  Languages diverse, horrible dialects,<br />
  Accents of anger, words of agony,<br />
  And voices high and hoarse, with sound of hands,<br />
  <br />
  Made up a tumult that goes whirling on<br />
  For ever in that air for ever black,<br />
  Even as the sand doth, when the whirlwind breathes.<br />
  <br />
  And I, who had my head with horror bound,<br />
  Said: “Master, what is this which now I hear?<br />
  What folk is this, which seems by pain so vanquished?”<br />
  <br />
  And he to me: “This miserable mode<br />
  Maintain the melancholy souls of those<br />
  Who lived withouten infamy or praise.<br />
  <br />
  Commingled are they with that caitiff choir<br />
  Of Angels, who have not rebellious been,<br />
  Nor faithful were to God, but were for self.<br />
  <br />
  The heavens expelled them, not to be less fair;<br />
  Nor them the nethermore abyss receives,<br />
  For glory none the damned would have from them.”<br />
  <br />
  And I: “O Master, what so grievous is<br />
  To these, that maketh them lament so sore?”<br />
  He answered: “I will tell thee very briefly.<br />
  <br />
  These have no longer any hope of death;<br />
  And this blind life of theirs is so debased,<br />
  They envious are of every other fate.<br />
  <br />
  No fame of them the world permits to be;<br />
  Misericord and Justice both disdain them.<br />
  Let us not speak of them, but look, and pass.”<br />
  <br />
  And I, who looked again, beheld a banner,<br />
  Which, whirling round, ran on so rapidly,<br />
  That of all pause it seemed to me indignant;<br />
  <br />
  And after it there came so long a train<br />
  Of people, that I ne’er would have believed<br />
  That ever Death so many had undone.<br />
  <br />
  When some among them I had recognised,<br />
  I looked, and I beheld the shade of him<br />
  Who made through cowardice the great refusal.<br />
  <br />
  Forthwith I comprehended, and was certain,<br />
  That this the sect was of the caitiff wretches<br />
  Hateful to God and to his enemies.<br />
  <br />
  These miscreants, who never were alive,<br />
  Were naked, and were stung exceedingly<br />
  By gadflies and by hornets that were there.<br />
  <br />
  These did their faces irrigate with blood,<br />
  Which, with their tears commingled, at their feet<br />
  By the disgusting worms was gathered up.<br />
  <br />
  And when to gazing farther I betook me,<br />
  People I saw on a great river’s bank;<br />
  Whence said I: “Master, now vouchsafe to me,<br />
  <br />
  That I may know who these are, and what law<br />
  Makes them appear so ready to pass over,<br />
  As I discern athwart the dusky light.”<br />
  <br />
  And he to me: “These things shall all be known<br />
  To thee, as soon as we our footsteps stay<br />
  Upon the dismal shore of Acheron.”<br />
  <br />
  Then with mine eyes ashamed and downward cast,<br />
  Fearing my words might irksome be to him,<br />
  From speech refrained I till we reached the river.<br />
  <br />
  And lo! towards us coming in a boat<br />
  An old man, hoary with the hair of eld,<br />
  Crying: “Woe unto you, ye souls depraved!”<br />
  <br />
  Hope nevermore to look upon the heavens;<br />
  I come to lead you to the other shore,<br />
  To the eternal shades in heat and frost.<br />
  <br />
  And thou, that yonder standest, living soul,<br />
  Withdraw thee from these people, who are dead!”<br />
  But when he saw that I did not withdraw,<br />
  <br />
  He said: “By other ways, by other ports<br />
  Thou to the shore shalt come, not here, for passage;<br />
  A lighter vessel needs must carry thee.”<br />
  <br />
  And unto him the Guide: “Vex thee not, Charon;<br />
  It is so willed there where is power to do<br />
  That which is willed; and farther question not.”<br />
  <br />
  Thereat were quieted the fleecy cheeks<br />
  Of him the ferryman of the livid fen,<br />
  Who round about his eyes had wheels of flame.<br />
  <br />
  But all those souls who weary were and naked<br />
  Their colour changed and gnashed their teeth together,<br />
  As soon as they had heard those cruel words.<br />
  <br />
  God they blasphemed and their progenitors,<br />
  The human race, the place, the time, the seed<br />
  Of their engendering and of their birth!<br />
  <br />
  Thereafter all together they drew back,<br />
  Bitterly weeping, to the accursed shore,<br />
  Which waiteth every man who fears not God.<br />
  <br />
  Charon the demon, with the eyes of glede,<br />
  Beckoning to them, collects them all together,<br />
  Beats with his oar whoever lags behind.<br />
  <br />
  As in the autumn-time the leaves fall off,<br />
  First one and then another, till the branch<br />
  Unto the earth surrenders all its spoils;<br />
  <br />
  In similar wise the evil seed of Adam<br />
  Throw themselves from that margin one by one,<br />
  At signals, as a bird unto its lure.<br />
  <br />
  So they depart across the dusky wave,<br />
  And ere upon the other side they land,<br />
  Again on this side a new troop assembles.<br />
  <br />
  “My son,” the courteous Master said to me,<br />
  “All those who perish in the wrath of God<br />
  Here meet together out of every land;<br />
  <br />
  And ready are they to pass o’er the river,<br />
  Because celestial Justice spurs them on,<br />
  So that their fear is turned into desire.<br />
  <br />
  This way there never passes a good soul;<br />
  And hence if Charon doth complain of thee,<br />
  Well mayst thou know now what his speech imports.”<br />
  <br />
  This being finished, all the dusk champaign<br />
  Trembled so violently, that of that terror<br />
  The recollection bathes me still with sweat.<br />
  <br />
  The land of tears gave forth a blast of wind,<br />
  And fulminated a vermilion light,<br />
  Which overmastered in me every sense,<br />
  <br />
  And as a man whom sleep hath seized I fell.<br />
</p>

      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto3-bg.png')` }}>
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

export default Canto3;

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