import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto11 = () => {
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
      <h2 className="text-xl">Canto 11</h2>
<br />
`
  <p>
    UPON the margin of a lofty bank<br />
    Which great rocks broken in a circle made,<br />
    We came upon a still more cruel throng;<br />
    <br />
    And there, by reason of the horrible<br />
    Excess of stench the deep abyss throws out,<br />
    We drew ourselves aside behind the cover<br />
    <br />
    Of a great tomb, whereon I saw a writing,<br />
    Which said: “Pope Anastasius I hold,<br />
    Whom out of the right way Photinus drew.”<br />
    <br />
    “Slow it behoveth our descent to be,<br />
    So that the sense be first a little used<br />
    To the sad blast, and then we shall not heed it.”<br />
    <br />
    The Master thus; and unto him I said,<br />
    “Some compensation find, that the time pass not<br />
    Idly;” and he: “Thou seest I think of that.<br />
    <br />
    My son, upon the inside of these rocks,”<br />
    Began he then to say, “are three small circles,<br />
    From grade to grade, like those which thou art leaving<br />
    <br />
    They all are full of spirits maledict;<br />
    But that hereafter sight alone suffice thee,<br />
    Hear how and wherefore they are in constraint.<br />
    <br />
    Of every malice that wins hate in Heaven,<br />
    Injury is the end; and all such end<br />
    Either by force or fraud afflicteth others.<br />
    <br />
    But because fraud is man’s peculiar vice,<br />
    More it displeases God; and so stand lowest<br />
    The fraudulent, and greater dole assails them.<br />
    <br />
    All the first circle of the Violent is;<br />
    But since force may be used against three persons,<br />
    In three rounds ’tis divided and constructed.<br />
    <br />
    To God, to ourselves, and to our neighbour can we<br />
    Use force; I say on them and on their things,<br />
    As thou shalt hear with reason manifest.<br />
    <br />
    A death by violence, and painful wounds,<br />
    Are to our neighbour given; and in his substance<br />
    Ruin, and arson, and injurious levies;<br />
    <br />
    Whence homicides, and he who smites unjustly,<br />
    Marauders, and freebooters, the first round<br />
    Tormenteth all in companies diverse.<br />
    <br />
    Man may lay violent hands upon himself<br />
    And his own goods; and therefore in the second<br />
    Round must perforce without avail repent<br />
    <br />
    Whoever of your world deprives himself,<br />
    Who games, and dissipates his property,<br />
    And weepeth there, where he should jocund be.<br />
    <br />
    Violence can be done the Deity,<br />
    In heart denying and blaspheming Him,<br />
    And by disdaining Nature and her bounty.<br />
    <br />
    And for this reason doth the smallest round<br />
    Seal with its signet Sodom and Cahors,<br />
    And who, disdaining God, speaks from the heart.<br />
    <br />
    Fraud, wherewithal is every conscience stung,<br />
    A man may practise upon him who trusts,<br />
    And him who doth no confidence imburse.<br />
    <br />
    This latter mode, it would appear, dissevers<br />
    Only the bond of love which Nature makes;<br />
    Wherefore within the second circle nestle<br />
    <br />
    Hypocrisy, flattery, and who deals in magic,<br />
    Falsification, theft, and simony,<br />
    Panders, and barrators, and the like filth.<br />
    <br />
    By the other mode, forgotten is that love<br />
    Which Nature makes, and what is after added,<br />
    From which there is a special faith engendered.<br />
    <br />
    Hence in the smallest circle, where the point is<br />
    Of the Universe, upon which Dis is seated,<br />
    Whoe’er betrays for ever is consumed.”<br />
    <br />
    And I: “My Master, clear enough proceeds<br />
    Thy reasoning, and full well distinguishes<br />
    This cavern and the people who possess it.<br />
    <br />
    But tell me, those within the fat lagoon,<br />
    Whom the wind drives, and whom the rain doth beat,<br />
    And who encounter with such bitter tongues,<br />
    <br />
    Wherefore are they inside of the red city<br />
    Not punished, if God has them in his wrath,<br />
    And if he has not, wherefore in such fashion?”<br />
    <br />
    And unto me he said: “Why wanders so<br />
    Thine intellect from that which it is wont ?<br />
    Or, sooth, thy mind where is it elsewhere looking ?<br />
    <br />
    Hast thou no recollection of those words<br />
    With which thine Ethics thoroughly discusses<br />
    The dispositions three, that Heaven abides not,—<br />
    <br />
    Incontinence, and Malice, and insane<br />
    Bestiality ? and how Incontinence<br />
    Less God offendeth, and less blame attracts?<br />
    <br />
    If thou regardest this conclusion well,<br />
    And to thy mind recallest who they are<br />
    That up outside are undergoing penance,<br />
    <br />
    Clearly wilt thou perceive why from these felons<br />
    They separated are, and why less wroth<br />
    Justice divine doth smite them with its hammer.”<br />
    <br />
    “O Sun, that healest all distempered vision,<br />
    Thou dost content me so, when thou resolvest,<br />
    That doubting pleases me no less than knowing !<br />
    <br />
    Once more a little backward turn thee,” said I,<br />
    “There where thou sayest that usury offends<br />
    Goodness divine, and disengage the knot.”<br />
    <br />
    “Philosophy,” he said, “to him who heeds it,<br />
    Noteth, not only in one place alone,<br />
    After what manner Nature takes her course<br />
    <br />
    From Intellect Divine, and from its art;<br />
    And if thy Physics carefully thou notest,<br />
    After not many pages shalt thou find,<br />
    <br />
    That this your art as far as possible<br />
    Follows, as the disciple doth the master;<br />
    So that your art is, as it were, God’s grandchild.<br />
    <br />
    From these two, if thou bringest to thy mind<br />
    Genesis at the beginning, it behoves<br />
    Mankind to gain their life and to advance;<br />
    <br />
    And since the usurer takes another way,<br />
    Nature herself and in her follower<br />
    Disdains he, for elsewhere he puts his hope.<br />
    <br />
    But follow, now, as I would fain go on,<br />
    For quivering are the Fishes on the horizon,<br />
    And the Wain wholly over Caurus lies,<br />
    <br />
    And far beyond there we descend the crag.<br />
  </p>


      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto11-bg.png')` }}>
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

export default Canto11;

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