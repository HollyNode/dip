import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto14 = () => {
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
      <h2 className="text-xl">Canto 14</h2>
      <br />
      <p>
    Love of our native city overcame me;<br />
    I gathered up the scattered boughs and gave<br />
    them back to him whose voice was spent already.<br />
    <br />
    From there we reached the boundary that divides<br />
    the second from the third ring—and the sight<br />
    of a dread work that justice had devised.<br />
    <br />
    To make these strange things clear, I must explain<br />
    that we had come upon an open plain<br />
    that banishes all green things from its bed.<br />
    <br />
    The wood of sorrow is a garland round it,<br />
    just as that wood is ringed by a sad channel;<br />
    here, at the very edge, we stayed our steps.<br />
    <br />
    The ground was made of sand, dry and compact,<br />
    a sand not different in kind from that<br />
    on which the feet of Cato had once tramped.<br />
    <br />
    O vengeance of the Lord, how you should be<br />
    dreaded by everyone who now can read<br />
    whatever was made manifest to me!<br />
    <br />
    I saw so many flocks of naked souls,<br />
    all weeping miserably, and it seemed that<br />
    they were ruled by different decrees.<br />
    <br />
    Some lay upon the ground, flat on their backs;<br />
    some huddled in a crouch, and there they sat;<br />
    and others moved about incessantly.<br />
    <br />
    The largest group was those who walked about,<br />
    the smallest, those supine in punishment;<br />
    but these had looser tongues to tell their torment.<br />
    <br />
    Above that plain of sand, distended flakes<br />
    of fire showered down; their fall was slow—<br />
    as snow descends on alps when no wind blows.<br />
    <br />
    Just like the flames that Alexander saw<br />
    in India&apos;s hot zones, when fires fell,<br />
    intact and to the ground, on his battalions,<br />
    <br />
    for which—wisely—he had his soldiers tramp<br />
    the soil to see that every fire was spent<br />
    before new flames were added to the old;<br />
    <br />
    so did the never-ending heat descend;<br />
    with this, the sand was kindled just as tinder<br />
    on meeting flint will flame—doubling the pain.<br />
    <br />
    The dance of wretched hands was never done;<br />
    now here, now there, they tried to beat aside<br />
    the fresh flames as they fell. And I began<br />
    <br />
    to speak: “My master, you who can defeat<br />
    all things except for those tenacious demons<br />
    who tried to block us at the entryway,<br />
    <br />
    who is that giant there, who does not seem<br />
    to heed the singeing—he who lies and scorns<br />
    and scowls, he whom the rains can&apos;t seem to soften?”<br />
    <br />
    And he himself, on noticing that I<br />
    was querying my guide about him, cried:<br />
    “That which I was in life, I am in death.<br />
    <br />
    Though Jove wear out the smith from whom he took,<br />
    in wrath, the keen—edged thunderbolt with which<br />
    on my last day I was to be transfixed;<br />
    <br />
    or if he tire the others, one by one,<br />
    in Mongibello, at the sooty forge,<br />
    while bellowing: &apos;O help, good Vulcan, help!’—<br />
    <br />
    just as he did when there was war at Phlegra—<br />
    and casts his shafts at me with all his force,<br />
    not even then would he have happy vengeance.”<br />
    <br />
    Then did my guide speak with such vehemence<br />
    as I had never heard him use before:<br />
    “O Capaneus, for your arrogance<br />
    <br />
    that is not quenched, you&apos;re punished all the more:<br />
    no torture other than your own madness<br />
    could offer pain enough to match your wrath.”<br />
    <br />
    But then, with gentler face he turned to me<br />
    and said: “That man was one of seven kings<br />
    besieging Thebes; he held—and still, it seems,<br />
    <br />
    holds—God in great disdain, disprizing Him;<br />
    but as I told him now, his maledictions<br />
    sit well as ornaments upon his chest.<br />
    <br />
    Now follow me and—take care—do not set<br />
    your feet upon the sand that&apos;s burning hot,<br />
    but always keep them back, close to the forest.”<br />
    <br />
    In silence we had reached a place where flowed<br />
    a slender watercourse out of the wood—<br />
    a stream whose redness makes me shudder still.<br />
    <br />
    As from the Bulicame pours a brook<br />
    whose waters then are shared by prostitutes,<br />
    so did this stream run down across the sand.<br />
    <br />
    Its bed and both its banks were made of stone,<br />
    together with the slopes along its shores,<br />
    so that I saw our passageway lay there.<br />
    <br />
    “Among all other things that I have shown you<br />
    since we first made our way across the gate<br />
    whose threshold is forbidden to no one,<br />
    <br />
    no thing has yet been witnessed by your eyes<br />
    as notable as this red rivulet,<br />
    which quenches every flame that burns above it.”<br />
    <br />
    These words were spoken by my guide; at this,<br />
    I begged him to bestow the food for which<br />
    he had already given me the craving.<br />
    <br />
    “A devastated land lies in midsea,<br />
    a land that is called Crete,” he answered me.<br />
    “Under its king the world once lived chastely.<br />
    <br />
    Within that land there was a mountain blessed<br />
    with leaves and waters, and they called it Ida;<br />
    but it is withered now like some old thing.<br />
    <br />
    It once was chosen as a trusted cradle<br />
    by Rhea for her son; to hide him better,<br />
    when he cried out, she had her servants clamor.<br />
    <br />
    Within the mountain is a huge Old Man,<br />
    who stands erect—his back turned toward Damietta—<br />
    and looks at Rome as if it were his mirror.<br />
    <br />
    The Old Man&apos;s head is fashioned of fine gold,<br />
    the purest silver forms his arms and chest,<br />
    but he is made of brass down to the cleft;<br />
    <br />
    below that point he is of choicest iron<br />
    except for his right foot, made of baked clay;<br />
    and he rests more on this than on the left.<br />
    <br />
    Each part of him, except the gold, is cracked;<br />
    and down that fissure there are tears that drip;<br />
    when gathered, they pierce through that cavern&apos;s floor<br />
    <br />
    and, crossing rocks into this valley, form<br />
    the Acheron and Styx and Phlegethon;<br />
    and then they make their way down this tight channel,<br />
    <br />
    and at the point past which there&apos;s no descent,<br />
    they form Cocytus; since you are to see<br />
    what that pool is, I&apos;ll not describe it here.”<br />
    <br />
    And I asked him: “But if the rivulet<br />
    must follow such a course down from our world,<br />
    why can we see it only at this boundary?”<br />
    <br />
    And he to me: “You know this place is round;<br />
    and though the way that you have come is long,<br />
    and always toward the left and toward the bottom,<br />
    <br />
    you still have not completed all the circle:<br />
    so that, if something new appears to us,<br />
    it need not bring such wonder to your face.”<br />
    <br />
    And I again: “Master, where&apos;s Phlegethon<br />
    and where is Lethe? You omit the second<br />
    and say this rain of tears has formed the first.”<br />
    <br />
    “I&apos;m pleased indeed,” he said, “with all your questions;<br />
    yet one of them might well have found its answer<br />
    already—when you saw the red stream boiling.<br />
    <br />
    You shall see Lethe, but past this abyss,<br />
    there where the spirits go to cleanse themselves<br />
    when their repented guilt is set aside.”<br />
    <br />
    Then he declared: “The time has come to quit<br />
    this wood; see that you follow close behind me;<br />
    these margins form a path that does not scorch,<br />
    <br />
    and over them, all flaming vapor is quenched.”<br />
  </p>



      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto14-bg.png')` }}>
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

export default Canto14;

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