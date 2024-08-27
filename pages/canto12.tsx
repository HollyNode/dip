import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto12 = () => {
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
      <div className="flex-1 p-4 overflow-auto text-sm font-mono text-red-500"><br />
      <h2 className="text-xl">Canto 12</h2>
<br />
<p>
    THE place where to descend the bank we came<br />
    Was alpine, and from what was there, moreover,<br />
    Of such a kind that every eye would shun it.<br />
    <br />
    Such as that ruin is which in the flank<br />
    Smote, on this side of Trent, the Adige,<br />
    Either by earthquake or by failing stay,<br />
    <br />
    For from the mountain’s top, from which it moved,<br />
    Unto the plain the cliff is shattered so,<br />
    Some path ‘twould give to him who was above;<br />
    <br />
    Even such was the descent of that ravine,<br />
    And on the border of the broken chasm<br />
    The infamy of Crete was stretched along,<br />
    <br />
    Who was conceived in the fictitious cow;<br />
    And when he us beheld, he bit himself,<br />
    Even as one whom anger racks within.<br />
    <br />
    My Sage towards him shouted: “Peradventure<br />
    Thou think’st that here may be the Duke of Athens,<br />
    Who in the world above brought death to thee ?<br />
    <br />
    Get thee gone, beast, for this one cometh not<br />
    Instructed by thy sister, but he comes<br />
    In order to behold your punishments.”<br />
    <br />
    As is that bull who breaks loose at the moment<br />
    In which he has received the mortal blow,<br />
    Who cannot walk, but staggers here and there,<br />
    <br />
    The Minotaur beheld I do the like;<br />
    And he, the wary, cried: “Run to the passage;<br />
    While he wroth, ’tis well thou shouldst descend.”<br />
    <br />
    Thus down we took our way o’er that discharge<br />
    Of stones, which oftentimes did move themselves<br />
    Beneath my feet, from the unwonted burden.<br />
    <br />
    Thoughtful I went; and he said: “Thou art thinking<br />
    Perhaps upon this ruin, which is guarded<br />
    By that brute anger which just now I quenched.<br />
    <br />
    Now will I have thee know, the other time<br />
    I here descended to the nether Hell,<br />
    This precipice had not yet fallen down.<br />
    <br />
    But truly, if I well discern, a little<br />
    Before His coming who the mighty spoil<br />
    Bore off from Dis, in the supernal circle,<br />
    <br />
    Upon all sides the deep and loathsome valley<br />
    Trembled so, that I thought the Universe<br />
    Was thrilled with love, by which there are who think<br />
    <br />
    The world ofttimes converted into chaos;<br />
    And at that moment this primeval crag<br />
    Both here and elsewhere made such overthrow.<br />
    <br />
    But fix thine eyes below; for draweth near<br />
    The river of blood, within which boiling is<br />
    Whoe’er by violence doth injure others.”<br />
    <br />
    O blind cupidity, O wrath insane,<br />
    That spurs us onward so in our short life,<br />
    And in the eternal then so badly steeps us!<br />
    <br />
    I saw an ample moat bent like a bow,<br />
    As one which all the plain encompasses,<br />
    Conformable to what my Guide had said.<br />
    <br />
    And between this and the embankment’s foot<br />
    Centaurs in file were running, armed with arrows,<br />
    As in the world they used the chase to follow.<br />
    <br />
    Beholding us descend, each one stood still,<br />
    And from the squadron three detached themselves,<br />
    With bows and arrows in advance selected;<br />
    <br />
    And from afar one cried: “Unto what torment<br />
    Come ye, who down the hillside are descending?<br />
    Tell us from there; if not, I draw the bow.”<br />
    <br />
    My Master said: “Our answer will we make<br />
    To Chiron, near you there; in evil hour,<br />
    That will of thine was evermore so hasty.”<br />
    <br />
    Then touched he me, and said: “This one is Nessus,<br />
    Who perished for the lovely Dejanira,<br />
    And for himself, himself did vengeance take.<br />
    <br />
    And he in the midst, who at his breast is gazing,<br />
    Is the great Chiron, who brought up Achilles;<br />
    That other Pholus is, who was so wrathful.<br />
    <br />
    Thousands and thousands go about the moat<br />
    Shooting with shafts whatever soul emerges<br />
    Out of the blood, more than his crime allots.”<br />
    <br />
    Near we approached unto those monsters fleet;<br />
    Chiron an arrow took, and with the notch<br />
    Backward upon his jaws he put his beard.<br />
    <br />
    After he had uncovered his great mouth,<br />
    He said to his companions: “Are you ware<br />
    That he behind moveth whate’er he touches?<br />
    <br />
    Thus are not wont to do the feet of dead men.”<br />
    And my good Guide, who now was at his breast,<br />
    Where the two natures are together joined,<br />
    <br />
    Replied: “Indeed he lives, and thus alone<br />
    Me it behoves to show him the dark valley;<br />
    Necessity, and not delight, impels us.<br />
    <br />
    Some one withdrew from singing Halleluja,<br />
    Who unto me committed this new office;<br />
    No thief is he, nor I a thievish spirit.<br />
    <br />
    But by that virtue through which I am moving<br />
    My steps along this savage thoroughfare,<br />
    Give us some one of thine, to be with us,<br />
    <br />
    And who may show us where to pass the ford,<br />
    And who may carry this one on his back;<br />
    For ’tis no spirit that can walk the air.”<br />
    <br />
    Upon his right breast Chiron wheeled about,<br />
    And said to Nessus: “Turn and do thou guide them,<br />
    And warn aside, if other band may meet you.”<br />
    <br />
    We with our faithful escort onward moved<br />
    Along the brink of the vermilion boiling,<br />
    Wherein the boiled were uttering loud laments.<br />
    <br />
    People I saw within up to the eyebrows,<br />
    And the great Centaur said: “Tyrants are these,<br />
    Who dealt in bloodshed and in pillaging.<br />
    <br />
    Here they lament their pitiless mischiefs; here<br />
    Is Alexander, and fierce Dionysius<br />
    Who upon Sicily brought dolorous years.<br />
    <br />
    That forehead there which has the hair so black<br />
    Is Azzolin; and the other who is blond,<br />
    Obizzo is of Esti, who, in truth,<br />
    <br />
    Up in the world was by his stepson slain.”<br />
    Then turned I to the Poet; and he said,<br />
    “Now he be first to thee, and second I.”<br />
    <br />
    A little farther on the Centaur stopped<br />
    Above a folk, who far down as the throat<br />
    Seemed from that boiling stream to issue forth.<br />
    <br />
    A shade he showed us on one side alone,<br />
    Saying: “He cleft asunder in God’s bosom<br />
    The heart that still upon the Thames is honoured.”<br />
    <br />
    Then people saw I, who from out the river<br />
    Lifted their heads and also all the chest;<br />
    And many among these I recognised.<br />
    <br />
    Thus ever more and more grew shallower<br />
    That blood, so that the feet alone it covered;<br />
    And there across the moat our passage was.<br />
    <br />
    “Even as thou here upon this side beholdest<br />
    The boiling stream, that aye diminishes,”<br />
    The Centaur said,”I wish thee to believe<br />
    <br />
    That on this other more and more declines<br />
    Its bed, until it reunites itself<br />
    Where it behoveth tyranny to groan.<br />
    <br />
    Justice divine, upon this side, is goading<br />
    That Attila, who was a scourge on earth,<br />
    And Pyrrhus, and Sextus; and for ever milks<br />
    <br />
    The tears which with the boiling it unseals<br />
    In Rinier da Corneto and Rinier Pazzo,<br />
    Who made upon the highways so much war.”<br />
    <br />
    Then back he turned, and passed again the ford.<br />
  </p>



      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto12-bg.png')` }}>
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

export default Canto12;

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