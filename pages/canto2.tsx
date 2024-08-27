import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto2 = () => {
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
      <h2 className="text-xl">Canto 2</h2>
<br />
<p>
  DAY was departing, and the embrowned air<br />
  Released the animals that are on earth<br />
  From their fatigues; and I the only one<br />
  <br />
  Made myself ready to sustain the war,<br />
  Both of the way and likewise of the woe,<br />
  Which memory that errs not shall retrace.<br />
  <br />
  O Muses, O high genius, now assist me!<br />
  O memory, that didst write down what I saw,<br />
  Here thy nobility shall be manifest!<br />
  <br />
  And I began: “Poet, who guidest me,<br />
  Regard my manhood, if it be sufficient,<br />
  Ere to the arduous pass thou dost confide me.<br />
  <br />
  Thou sayest, that of Silvius the parent,<br />
  While yet corruptible, unto the world<br />
  Immortal went, and was there bodily.<br />
  <br />
  But if the adversary of all evil<br />
  Was courteous, thinking of the high effect<br />
  That issue would from him, and who, and what,<br />
  <br />
  To men of intellect unmeet it seems not;<br />
  For he was of great Rome, and of her empire<br />
  In the empyreal heaven as father chosen;<br />
  <br />
  The which and what, wishing to speak the truth,<br />
  Were stablished as the holy place, wherein<br />
  Sits the successor of the greatest Peter.<br />
  <br />
  Upon this journey, whence thou givest him vaunt,<br />
  Things did he hear, which the occasion were<br />
  Both of his victory and the papal mantle.<br />
  <br />
  Thither went afterwards the Chosen Vessel,<br />
  To bring back comfort thence unto that Faith,<br />
  Which of salvation&apos;s way is the beginning.<br />
  <br />
  But I, why thither come, or who concedes it?<br />
  I not Aeneas am, I am not Paul,<br />
  Nor I, nor others, think me worthy of it.<br />
  <br />
  Therefore, if I resign myself to come,<br />
  I fear the coming may be ill-advised;<br />
  Thou&apos;rt wise, and knowest better than I speak.”<br />
  <br />
  And as he is, who unwills what he willed,<br />
  And by new thoughts doth his intention change,<br />
  So that from his design he quite withdraws,<br />
  <br />
  Such I became, upon that dark hillside,<br />
  Because, in thinking, I consumed the emprise,<br />
  Which was so very prompt in the beginning.<br />
  <br />
  “If I have well thy language understood,”<br />
  Replied that shade of the Magnanimous,<br />
  “Thy soul attainted is with cowardice,<br />
  <br />
  Which many times a man encumbers so,<br />
  It turns him back from honored enterprise,<br />
  As false sight doth a beast, when he is shy.<br />
  <br />
  That thou mayst free thee from this apprehension,<br />
  I&apos;ll tell thee why I came, and what I heard<br />
  At the first moment when I grieved for thee.<br />
  <br />
  Among those was I who are in suspense,<br />
  And a fair, saintly Lady called to me<br />
  In such wise, I besought her to command me.<br />
  <br />
  Her eyes were shining brighter than the Star;<br />
  And she began to say, gentle and low,<br />
  With voice angelical, in her own language:<br />
  <br />
  &apos;O spirit courteous of Mantua,<br />
  Of whom the fame still in the world endures,<br />
  And shall endure, long-lasting as the world;<br />
  <br />
  A friend of mine, and not the friend of fortune,<br />
  Upon the desert slope is so impeded<br />
  Upon his way, that he has turned through terror,<br />
  <br />
  And may, I fear, already be so lost,<br />
  That I too late have risen to his succour,<br />
  From that which I have heard of him in Heaven.<br />
  <br />
  Bestir thee now, and with thy speech ornate,<br />
  And with what needful is for his release,<br />
  Assist him so, that I may be consoled.<br />
  <br />
  Beatrice am I, who do bid thee go;<br />
  I come from there, where I would fain return;<br />
  Love moved me, which compelleth me to speak.<br />
  <br />
  When I shall be in presence of my Lord,<br />
  Full often will I praise thee unto him.&apos;<br />
  <br />
  Then paused she, and thereafter I began:<br />
  &apos;O Lady of virtue, thou alone through whom<br />
  The human race exceedeth all contained<br />
  <br />
  Within the heaven that has the lesser circles,<br />
  So grateful unto me is thy commandment,<br />
  To obey, if &apos;twere already done, were late;<br />
  <br />
  No farther need&apos;st thou ope to me thy wish.<br />
  But the cause tell me why thou dost not shun<br />
  The here descending down into this centre,<br />
  <br />
  From the vast place thou burnest to return to.&apos;<br />
  &apos;Since thou wouldst fain so inwardly discern,<br />
  Briefly will I relate,&apos; she answered me,<br />
  &apos;Why I am not afraid to enter here.<br />
  <br />
  Of those things only should one be afraid<br />
  Which have the power of doing others harm;<br />
  Of the rest, no; because they are not fearful.<br />
  <br />
  God in his mercy such created me<br />
  That misery of yours attains me not,<br />
  Nor any flame assails me of this burning.<br />
  <br />
  A gentle Lady is in Heaven, who grieves<br />
  At this impediment, to which I send thee,<br />
  So that stern judgment there above is broken.<br />
  <br />
  In her entreaty she besought Lucia,<br />
  And said, “Thy faithful one now stands in need<br />
  Of thee, and unto thee I recommend him.”<br />
  <br />
  Lucia, foe of all that cruel is,<br />
  Hastened away, and came unto the place<br />
  Where I was sitting with the ancient Rachel.<br />
  <br />
  “Beatrice,” said she, “the true praise of God;<br />
  Why succourest thou not him, who loved thee so,<br />
  For thee he issued from the vulgar herd?<br />
  <br />
  Dost thou not hear the pity of his plaint?<br />
  Dost thou not see the death that combats him<br />
  Beside that flood, where ocean has no vaunt?”<br />
  <br />
  Never were persons in the world so swift<br />
  To work their weal and to escape their woe,<br />
  As I, after such words as these were uttered,<br />
  Came hither downward from my blessed seat,<br />
  Confiding in thy dignified discourse,<br />
  Which honours thee, and those who&apos;ve listened to it.&apos;<br />
  <br />
  After she thus had spoken unto me,<br />
  Weeping, her shining eyes she turned away;<br />
  Whereby she made me swifter in my coming;<br />
  <br />
  And unto thee I came, as she desired;<br />
  I have delivered thee from that wild beast,<br />
  Which barred the beautiful mountain&apos;s short ascent.<br />
  <br />
  What is it, then? Why, why dost thou delay?<br />
  Why is such baseness bedded in thy heart?<br />
  Daring and hardihood why hast thou not,<br />
  <br />
  Seeing that three such Ladies benedight<br />
  Are caring for thee in the court of Heaven,<br />
  And so much good my speech doth promise thee?”<br />
  <br />
  Even as the flowerets, by nocturnal chill,<br />
  Bowed down and closed, when the sun whitens them,<br />
  Uplift themselves all open on their stems;<br />
  <br />
  Such I became with my exhausted strength,<br />
  And such good courage to my heart there coursed,<br />
  That I began, like an intrepid person:<br />
  <br />
  “O she compassionate, who succoured me,<br />
  And courteous thou, who hast obeyed so soon<br />
  The words of truth which she addressed to thee!<br />
  <br />
  Thou hast my heart so with desire disposed<br />
  To the adventure, with these words of thine,<br />
  That to my first intent I have returned.<br />
  <br />
  Now go, for one sole will is in us both,<br />
  Thou Leader, and thou Lord, and Master thou.”<br />
  Thus said I to him; and when he had moved,<br />
  I entered on the deep and savage way.<br />
</p>

      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('images/canto2-bg.png')` }}>
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

export default Canto2;

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