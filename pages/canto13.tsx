import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto13 = () => {
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
      <h2 className="text-xl">Canto 13</h2>
      <br />
          <p>
    NOT yet had Nessus reached the other side,<br />
    When we had put ourselves within a wood,<br />
    That was not marked by any path whatever.<br />
    <br />
    Not foliage green, but of a dusky colour,<br />
    Not branches smooth, but gnarled and intertangled,<br />
    Not apple—trees were there, but thorns with poison.<br />
    <br />
    Such tangled thickets have not, nor so dense,<br />
    Those savage wild beasts, that in hatred hold<br />
    ‘Twixt Cecina and Corneto the tilled places.<br />
    <br />
    There do the hideous Harpies make their nests,<br />
    Who chased the Trojans from the Strophades,<br />
    With sad announcement of impending doom;<br />
    <br />
    Broad wings have they, and necks and faces human,<br />
    And feet with claws, and their great bellies fledged;<br />
    They make laments upon the wondrous trees.<br />
    <br />
    And the good Master: “Ere thou enter farther,<br />
    Know that thou art within the second round,”<br />
    Thus he began to say,”and shalt be, till<br />
    <br />
    Thou comest out upon the horrible sand;<br />
    Therefore look well around, and thou shalt see<br />
    Things that will credence give unto my speech.”<br />
    <br />
    I heard on all sides lamentations uttered,<br />
    And person none beheld I who might make them,<br />
    Whence, utterly bewildered, I stood still.<br />
    <br />
    I think he thought that I perhaps might think<br />
    So many voices issued through those trunks<br />
    From people who concealed themselves from us;<br />
    <br />
    Therefore the Master said: “If thou break off<br />
    Some little spray from any of these trees,<br />
    The thoughts thou hast will wholly be made vain.”<br />
    <br />
    Then stretched I forth my hand a little forward,<br />
    And plucked a branchlet off from a great thorn,<br />
    And the trunk cried, “Why dost thou mangle me ?”<br />
    <br />
    After it had become embrowned with blood,<br />
    It recommenced its cry: “Why dost thou rend me<br />
    Hast thou no spirit of pity whatsoever ?<br />
    <br />
    Men once we were, and now are changed to trees;<br />
    Indeed, thy hand should be more pitiful,<br />
    Even if the souls of serpents we had been.”<br />
    <br />
    As out of a green brand, that is on fire<br />
    At one of the ends, and from the other drips<br />
    And hisses with the wind that is escaping;<br />
    <br />
    So from that splinter issued forth together<br />
    Both words and blood; whereat I let the tip<br />
    Fall, and stood like a man who is afraid.<br />
    <br />
    “Had he been able sooner to believe,”<br />
    My Sage made answer, “O thou wounded soul,<br />
    What only in my verses he has seen,<br />
    <br />
    Not upon thee had he stretched forth his hand;<br />
    Whereas the thing incredible has caused me<br />
    To put him to an act which grieveth me.<br />
    <br />
    But tell him who thou wast, so that by way<br />
    Of some amends thy fame he may refresh<br />
    Up in the world, to which he can return.”<br />
    <br />
    And the trunk said: “So thy sweet words allure me,<br />
    I cannot silent be; and you be vexed not,<br />
    That I a little to discourse am tempted.<br />
    <br />
    I am the one who both keys had in keeping<br />
    Of Frederick’s heart, and turned them to and fro<br />
    So softly in unlocking and in locking,<br />
    <br />
    That from his secrets most men I withheld;<br />
    Fidelity I bore the glorious office<br />
    So great, I lost thereby my sleep and pulses.<br />
    <br />
    The courtesan who never from the dwelling<br />
    Of Caesar turned aside her strumpet eyes,<br />
    Death universal and the vice of courts,<br />
    <br />
    Inflamed against me all the other minds,<br />
    And they, inflamed, did so inflame Augustus,<br />
    That my glad honours turned to dismal mournings.<br />
    <br />
    My spirit, in disdainful exultation,<br />
    Thinking by dying to escape disdain,<br />
    Made me unjust against myself, the just.<br />
    <br />
    I, by the roots unwonted of this wood,<br />
    Do swear to you that never broke I faith<br />
    Unto my lord, who was so worthy of honour;<br />
    <br />
    And to the world if one of you return,<br />
    Let him my memory comfort, which is lying<br />
    Still prostrate from the blow that envy dealt it.”<br />
    <br />
    Waited awhile, and then: “Since he is silent,”<br />
    The Poet said to me, “lose not the time,<br />
    But speak, and question him, if more may please thee.”<br />
    <br />
    Whence I to him: “Do thou again inquire<br />
    Concerning what thou thinks’t will satisfy me;<br />
    For I cannot, such pity is in my heart.”<br />
    <br />
    Therefore he recommenced: “So may the man<br />
    Do for thee freely what thy speech implores,<br />
    Spirit incarcerate, again be pleased<br />
    <br />
    To tell us in what way the soul is bound<br />
    Within these knots; and tell us, if thou canst<br />
    If any from such members e’er is freed.”<br />
    <br />
    Then blew the trunk amain, and afterward<br />
    The wind was into such a voice converted:<br />
    “With brevity shall be replied to you.<br />
    <br />
    When the exasperated soul abandons<br />
    The body whence it rent itself away,<br />
    Minos consigns it to the seventh abyss.<br />
    <br />
    It falls into the forest, and no part<br />
    Is chosen for it; but where Fortune hurls it,<br />
    There like a grain of spelt it germinates.<br />
    <br />
    It springs a sapling, and a forest tree;<br />
    The Harpies, feeding then upon its leaves,<br />
    Do pain create, and for the pain an outlet.<br />
    <br />
    Like others for our spoils shall we return;<br />
    But not that any one may them revest,<br />
    For ’tis not just to have what one casts off.<br />
    <br />
    Here we shall drag them, and along the dismal<br />
    Forest our bodies shall suspended be,<br />
    Each to the thorn of his molested shade.”<br />
    <br />
    We were attentive still unto the trunk,<br />
    Thinking that more it yet might wish to tell us,<br />
    When by a tumult we were overtaken,<br />
    <br />
    In the same way as he is who perceives<br />
    The boar and chase approaching to his stand,<br />
    Who hears the crashing of the beasts and branches;<br />
    <br />
    And two behold ! upon our left—hand side,<br />
    Naked and scratched, fleeing so furiously,<br />
    That of the forest, every fan they broke.<br />
    <br />
    He who was in advance: “Now help, Death, help !”<br />
    And the other one, who seemed to lag too much,<br />
    Was shouting: “Lano, were not so alert<br />
    <br />
    Those legs of thine at joustings of the Toppo !”<br />
    And then, perchance because his breath was failing,<br />
    He grouped himself together with a bush.<br />
    <br />
    Behind them was the forest full of black<br />
    She—mastiffs, ravenous, and swift of foot<br />
    As greyhounds, who are issuing from the chain.<br />
    <br />
    On him who had crouched down they set their teeth,<br />
    And him they lacerated piece by piece,<br />
    Thereafter bore away those aching members.<br />
    <br />
    Thereat my Escort took me by the hand,<br />
    And led me to the bush, that all in vain<br />
    Was weeping from its bloody lacerations.<br />
    <br />
    “O Jacopo,” it said,”of Sant’ Andrea,<br />
    What helped it thee of me to make a screen ?<br />
    What blame have I in thy nefarious life ?”<br />
    <br />
    When near him had the Master stayed his steps,<br />
    He said: “Who wast thou, that through wounds so many<br />
    Art blowing out with blood thy dolorous speech ?”<br />
    <br />
    And he to us: “O souls, that hither come<br />
    To look upon the shameful massacre<br />
    That has so rent away from me my leaves,<br />
    <br />
    Gather them up beneath the dismal bush;<br />
    I of that city was which to the Baptist<br />
    Changed its first patron, wherefore he for this<br />
    <br />
    Forever with his art will make it sad.<br />
    And were it not that on the pass of Arno<br />
    Some glimpses of him are remaining still,<br />
    <br />
    Those citizens, who afterwards rebuilt it<br />
    Upon the ashes left by Attila,<br />
    In vain had caused their labour to be done.<br />
    <br />
    Of my own house I made myself a gibbet.”<br />
  </p>



      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto13-bg.png')` }}>
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

export default Canto13;

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