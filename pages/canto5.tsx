import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto5 = () => {
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
      <h2 className="text-xl">Canto 5</h2>
<br />
<p>
  THUS I descended out of the first circle<br />
  Down to the second, that less space begirds,<br />
  And so much greater dole, that goads to wailing.<br />
  <br />
  There standeth Minos horribly, and snarls;<br />
  Examines the transgressions at the entrance;<br />
  Judges, and sends according as he girds him.<br />
  <br />
  I say, that when the spirit evil-born<br />
  Cometh before him, wholly it confesses;<br />
  And this discriminator of transgressions<br />
  <br />
  Seeth what place in Hell is meet for it;<br />
  Girds himself with his tail as many times<br />
  As grades he wishes it should be thrust down.<br />
  <br />
  Always before him many of them stand;<br />
  They go by turns each one unto the judgment;<br />
  They speak, and hear, and then are downward hurled.<br />
  <br />
  “O thou, that to this dolorous hostelry<br />
  Comest,” said Minos to me, when he saw me,<br />
  Leaving the practice of so great an office,<br />
  <br />
  “Look how thou enterest, and in whom thou trustest;<br />
  Let not the portal’s amplitude deceive thee.”<br />
  And unto him my Guide: “Why criest thou too?<br />
  <br />
  Do not impede his journey fate-ordained;<br />
  It is so willed there where is power to go<br />
  That which is willed; and ask no further question.”<br />
  <br />
  And now begin the dolesome notes to grow<br />
  Audible unto me, now am I come<br />
  There where much lamentation strikes upon me.<br />
  <br />
  I came into a place mute of all light,<br />
  Which bellows as the sea does in a tempest,<br />
  If by opposing winds 't is combated.<br />
  <br />
  The infernal hurricane that never rests<br />
  Hurtles the spirits onward in its rapine;<br />
  Whirling them round, and smiting, it molests them.<br />
  <br />
  When they arrive before the precipice,<br />
  There are the shrieks, the plaints, and the laments,<br />
  There they blaspheme the puissance divine.<br />
  <br />
  I understood that unto such a torment<br />
  The carnal malefactors were condemned,<br />
  Who reason subjugate to appetite.<br />
  <br />
  And as the wings of starlings bear them on<br />
  In the cold season in large band and full,<br />
  So doth that blast the spirits maledict;<br />
  <br />
  It hither, thither, downward, upward, drives them;<br />
  No hope doth comfort them for evermore,<br />
  Not of repose, but even of lesser pain.<br />
  <br />
  And as the cranes go chanting forth their lays,<br />
  Making in air a long line of themselves,<br />
  So saw I coming, uttering lamentations,<br />
  <br />
  Shadows borne onward by the aforesaid stress.<br />
  Whereupon said I: “Master, who are those<br />
  People, whom the black air so castigates?”<br />
  <br />
  “The first of those, of whom intelligence<br />
  Thou fain wouldst have,” then said he unto me,<br />
  “The empress was of many languages.<br />
  <br />
  To sensual vices she was so abandoned,<br />
  That lustful she made licit in her law,<br />
  To remove the blame to which she had been led.<br />
  <br />
  She is Semiramis of whom we read<br />
  That she succeeded Ninus, and was his spouse;<br />
  She held the land which now the Sultan rules.<br />
  <br />
  The next is she who killed herself for love,<br />
  And broke faith with the ashes of Sichcaeus;<br />
  Then Cleopatra the voluptuous.”<br />
  <br />
  Helen I saw, for whom so many ruthless<br />
  Seasons revolved; and saw the great Achilles,<br />
  Who at the last hour combated with Love<br />
  <br />
  Paris I saw, Tristan; and more than a thousand<br />
  Shades did he name and point out with his finger,<br />
  Whom Love had separated from our life.<br />
  <br />
  After that I had listened to my Teacher,<br />
  Naming the dames of eld and cavaliers,<br />
  Pity prevailed, and I was nigh bewildered.<br />
  <br />
  And I began: “O Poet, willingly<br />
  Speak would I to those two, who go together,<br />
  And seem upon the wind to be so light.”<br />
  <br />
  And, he to me: “Thou'lt mark, when they shall be<br />
  Nearer to us; and then do thou implore them<br />
  By love which leadeth them, and they will come.”<br />
  <br />
  Soon as the wind in our direction sways them,<br />
  My voice uplift I: “O ye weary souls!<br />
  Come speak to us, if no one interdicts it.”<br />
  <br />
  As turtle-doves, called onward by desire,<br />
  With open and steady wings to the sweet nest<br />
  Fly through the air by their volition borne,<br />
  <br />
  So came they from the band where Dido is,<br />
  Approaching us athwart the air malign,<br />
  So strong was the affectionate appeal.<br />
  <br />
  “O living creature gracious and benignant,<br />
  Who visiting goest through the purple air<br />
  Us, who have stained the world incarnadine,<br />
  <br />
  If were the King of the Universe our friend,<br />
  We would pray unto him to give thee peace,<br />
  Since thou hast pity on our woe perverse.<br />
  <br />
  Of what it pleases thee to hear and speak,<br />
  That will we hear, and we will speak to you,<br />
  While silent is the wind, as it is now.<br />
  <br />
  Sitteth the city, wherein I was born,<br />
  Upon the sea-shore where the Po descends<br />
  To rest in peace with all his retinue.<br />
  <br />
  Love, that on gentle heart doth swiftly seize,<br />
  Seized this man for the person beautiful<br />
  That was ta’en from me, and still the mode offends me.<br />
  <br />
  Love, that exempts no one beloved from loving,<br />
  Seized me with pleasure of this man so strongly,<br />
  That, as thou seest, it doth not yet desert me;<br />
  <br />
  Love has conducted us unto one death;<br />
  Caina waiteth him who quenched our life!”<br />
  These words were borne along from them to us.<br />
  <br />
  As soon as I had heard those souls tormented,<br />
  I bowed my face, and so long held it down<br />
  Until the Poet said to me: “What thinkest?”<br />
  <br />
  When I made answer, I began: “Alas!<br />
  How many pleasant thoughts, how much desire,<br />
  Conducted these unto the dolorous pass!”<br />
  <br />
  Then unto them I turned me, and I spake,<br />
  And I began: “Thine agonies, Francesca,<br />
  Sad and compassionate to weeping make me.<br />
  <br />
  But tell me, at the time of those sweet sighs,<br />
  By what and in what manner Love conceded,<br />
  That you should know your dubious desires?”<br />
  <br />
  And she to me: “There is no greater sorrow<br />
  Than to be mindful of the happy time<br />
  In misery, and that thy Teacher knows.<br />
  <br />
  But, if to recognize the earliest root<br />
  Of love in us thou hast so great desire,<br />
  I will do even as he who weeps and speaks.<br />
  <br />
  One day we reading were for our delight<br />
  Of Launcelot, how Love did him enthral.<br />
  Alone we were and without any fear.<br />
  <br />
  Full many a time our eyes together drew<br />
  That reading, and drove the colour from our faces;<br />
  But one point only was it that o’ercame us.<br />
  <br />
  When as we read of the much-longed-for smile<br />
  Being by such a noble lover kissed,<br />
  This one, who ne’er from me shall be divided,<br />
  <br />
  Kissed me upon the mouth all palpitating.<br />
  Galeotto was the book and he who wrote it.<br />
  That day no farther did we read therein.”<br />
  <br />
  And all the while one spirit uttered this,<br />
  The other one did weep so, that, for pity,<br />
  I swooned away as if I had been dying,<br />
  <br />
  And fell, even as a dead body falls.<br />
</p>


      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto5-bg.png')` }}>
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

export default Canto5;

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