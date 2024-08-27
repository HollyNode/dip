import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Canto1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const placeholders = [
    { text: 'Wallpapers', img: '/ds-folder.png' },
    { text: 'Text', img: '/ds-text.png', action: () => setIsModalOpen(true) },
  ];

  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    };

    handleBodyScroll(isModalOpen);

    return () => handleBodyScroll(false);
  }, [isModalOpen]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const totalScroll = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / totalScroll) * 100;
    setScrollProgress(scrollPercentage);
  };

  const notepadStyle: React.CSSProperties = {
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  const Notepad = () => (
    <div className="flex flex-col h-full bg-gray-800" style={notepadStyle} onScroll={handleScroll}>
      <div className="fixed top-0 left-0 w-full bg-gray-900 h-1 z-50">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="flex items-center p-2 border-b bg-gray-700 z-40">
        <div className="flex items-center space-x-2">
          <StickyNoteIcon className="h-5 w-5" />
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
      <div className="flex-1 p-4 overflow-auto text-sm font-mono text-red-500 z-30">
        <h2 className="text-xl">Canto 1</h2>
        <br />
        <p>
          MIDWAY upon the journey of our life<br />
          I found myself within a forest dark,<br />
          For the straightforward pathway had been lost.<br />
          <br />
          Ah me! how hard a thing it is to say<br />
          What was this forest savage, rough, and stern,<br />
          Which in the very thought renews the fear.<br />
          <br />
          So bitter is it, death is little more;<br />
          But of the good to treat, which there I found,<br />
          Speak will I of the other things I saw there.<br />
          <br />
          I cannot well repeat how there I entered,<br />
          So full was I of slumber at the moment<br />
          In which I had abandoned the true way.<br />
          <br />
          But after I had reached a mountain&apos;s foot,<br />
          At that point where the valley terminated,<br />
          Which had with consternation pierced my heart,<br />
          <br />
          Upward I looked, and I beheld its shoulders<br />
          Vested already with that planet&apos;s rays<br />
          Which leadeth others right by every road.<br />
          <br />
          Then was the fear a little quieted<br />
          That in my heart&apos;s lake had endured throughout<br />
          The night, which I had passed so piteously<br />
          <br />
          And even as he, who, with distressful breath,<br />
          Forth issued from the sea upon the shore,<br />
          Turns to the water perilous and gazes;<br />
          <br />
          So did my soul, that still was fleeing onward,<br />
          Turn itself back to re-behold the pass<br />
          Which never yet a living person left.<br />
          <br />
          After my weary body I had rested,<br />
          The way resumed I on the desert slope,<br />
          So that the firm foot ever was the lower.<br />
          <br />
          And lo! almost where the ascent began,<br />
          A panther light and swift exceedingly,<br />
          Which with a spotted skin was covered o&apos;er!<br />
          <br />
          And never moved she from before my face,<br />
          Nay, rather did impede so much my way,<br />
          That many times I to return had turned.<br />
          <br />
          The time was the beginning of the morning,<br />
          And up the sun was mounting with those stars<br />
          That with him were, what time the Love Divine<br />
          <br />
          At first in motion set those beauteous things;<br />
          So were to me occasion of good hope,<br />
          The variegated skin of that wild beast,<br />
          <br />
          The hour of time, and the delicious season;<br />
          But not so much, that did not give me fear<br />
          A lion&apos;s aspect which appeared to me.<br />
          <br />
          He seemed as if against me he were coming<br />
          With head uplifted, and with ravenous hunger,<br />
          So that it seemed the air was afraid of him;<br />
          <br />
          And a she-wolf, that with all hungerings<br />
          Seemed to be laden in her meagreness,<br />
          And many folk has caused to live forlorn!<br />
          <br />
          She brought upon me so much heaviness,<br />
          With the affright that from her aspect came,<br />
          That I the hope relinquished of the height.<br />
          <br />
          And as he is who willingly acquires,<br />
          And the time comes that causes him to lose,<br />
          Who weeps in all his thoughts and is despondent,<br />
          <br />
          E’en such made me that beast withouten peace,<br />
          Which, coming on against me by degrees<br />
          Thrust me back thither where the sun is silent<br />
          <br />
          While I was rushing downward to the lowland,<br />
          Before mine eyes did one present himself,<br />
          Who seemed from long-continued silence hoarse.<br />
          <br />
          When I beheld him in the desert vast,<br />
          “Have pity on me,” unto him I cried,<br />
          “Whiche&apos;er thou art, or shade or real man!”<br />
          <br />
          He answered me: “Not man; man once I was,<br />
          And both my parents were of Lombardy,<br />
          And Mantuans by country both of them.<br />
          <br />
          Sub Julio was I born, though it was late,<br />
          And lived at Rome under the good Augustus,<br />
          During the time of false and Iying gods.<br />
          <br />
          A poet was I, and I sang that just<br />
          Son of Anchises, who came forth from Troy,<br />
          After that Ilion the superb was burned<br />
          <br />
          But thou, why goest thou back to such annoyance?<br />
          Why climb&apos;st thou not the Mount Delectable<br />
          Which is the source and cause of every joy?”
          <br />
          Now, art thou that Virgilius and that fountain<br />
          Which spreads abroad so wide a river of speech?”<br />
          I made response to him with bashful forehead.<br />
          <br />
          “O, of the other poets honour and light,<br />
          Avail me the long study and great love<br />
          That have impelled me to explore thy volume!<br />
          <br />
          Thou art my master, and my author thou,<br />
          Thou art alone the one from whom I took<br />
          The beautiful style that has done honour to me.<br />
          <br />
          Behold the beast, for which I have turned back;<br />
          Do thou protect me from her, famous Sage,<br />
          For she doth make my veins and pulses tremble.”<br />
          <br />
          “Thee it behoves to take another road,”<br />
          Responded he, when he beheld me weeping,<br />
          “If from this savage place thou wouldst escape;<br />
          <br />
          Because this beast, at which thou criest out,<br />
          Suffers not any one to pass her way,<br />
          But so doth harass him, that she destroys him;<br />
          <br />
          And has a nature so malign and ruthless,<br />
          That never doth she glut her greedy will,<br />
          And after food is hungrier than before.<br />
          <br />
          Many the animals with whom she weds,<br />
          And more they shall be still, until the Greyhound<br />
          Comes, who shall make her perish in her pain.<br />
          <br />
          He shall not feed on either earth or pelf,<br />
          But upon wisdom, and on love and virtue;<br />
          &apos;Twixt Feltro and Feltro shall his nation be;<br />
          <br />
          Of that low Italy shall he be the saviour,<br />
          On whose account the maid Camilla died,<br />
          Euryalus, Turnus, Nisus, of their wounds;<br />
          <br />
          Through every city shall he hunt her down,<br />
          Until he shall have driven her back to Hell,<br />
          There from whence envy first did let her loose.<br />
          <br />
          Therefore I think and judge it for thy best<br />
          Thou follow me, and I will be thy guide,<br />
          And lead thee hence through the eternal place,<br />
          <br />
          Where thou shalt hear the desperate lamentations,<br />
          Shalt see the ancient spirits disconsolate,<br />
          Who cry out each one for the second death;<br />
          <br />
          And thou shalt see those who contented are<br />
          Within the fire, because they hope to come,<br />
          Whene&apos;er it may be, to the blessed people;<br />
          <br />
          To whom, then, if thou wishest to ascend,<br />
          A soul shall be for that than I more worthy;<br />
          With her at my departure I will leave thee;<br />
          <br />
          Because that Emperor, who reigns above,<br />
          In that I was rebellious to his law,<br />
          Wills that through me none come into his city.<br />
          <br />
          He governs everywhere and there he reigns;<br />
          There is his city and his lofty throne;<br />
          O happy he whom thereto he elects!”<br />
          <br />
          And I to him: “Poet, I thee entreat,<br />
          By that same God whom thou didst never know,<br />
          So that I may escape this woe and worse,<br />
          <br />
          Thou wouldst conduct me there where thou hast said,<br />
          That I may see the portal of Saint Peter,<br />
          And those thou makest so disconsolate.”<br />
          <br />
          Then he moved on, and I behind him followed.
          </p>
      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto1-bg.png')` }}>
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

export default Canto1;

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