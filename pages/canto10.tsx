import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto10 = () => {
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
      <h2 className="text-xl">Canto 10</h2>
<br />
<p>
  NOW onward goes, along a narrow path<br />
  Between the torments and the city wall,<br />
  My Master, and I follow at his back.<br />
  <br />
  “O power supreme, that through these impious circles<br />
  Turnest me,” I began, “as pleases thee,<br />
  Speak to me, and my longings satisfy;<br />
  <br />
  The people who are lying in these tombs,<br />
  Might they be seen? already are uplifted<br />
  The covers all, and no one keepeth guard.”<br />
  <br />
  And he to me: “They all will be closed up<br />
  When from Jehoshaphat they shall return<br />
  Here with the bodies they have left above.<br />
  <br />
  Their cemetery have upon this side<br />
  With Epicurus all his followers,<br />
  Who with the body mortal make the soul;<br />
  <br />
  But in the question thou dost put to me,<br />
  Within here shalt thou soon be satisfied,<br />
  And likewise in the wish thou keepest silent.”<br />
  <br />
  And I: “Good Leader, I but keep concealed<br />
  From thee my heart, that I may speak the less,<br />
  Nor only now hast thou thereto disposed me.”<br />
  <br />
  “O Tuscan, thou who through the city of fire<br />
  Goest alive, thus speaking modestly,<br />
  Be pleased to stay thy footsteps in this place.<br />
  <br />
  Thy mode of speaking makes thee manifest<br />
  A native of that noble fatherland,<br />
  To which perhaps I too molestful was.”<br />
  <br />
  Upon a sudden issued forth this sound<br />
  From out one of the tombs; wherefore I pressed,<br />
  Fearing, a little nearer to my Leader.<br />
  <br />
  And unto me he said: “Turn thee; what dost thou?<br />
  Behold there Farinata who has risen;<br />
  From the waist upwards wholly shalt thou see him.”<br />
  <br />
  I had already fixed mine eyes on his,<br />
  And he uprose erect with breast and front<br />
  E&apos;en as if Hell he had in great despite.<br />
  <br />
  And with courageous hands and prompt my Leader<br />
  Thrust me between the sepulchres towards him,<br />
  Exclaiming, “Let thy words explicit be.”<br />
  <br />
  As soon as I was at the foot of his tomb<br />
  Somewhat he eyed me, and, as if disdainful,<br />
  Then asked of me, “Who were thine ancestors?”<br />
  <br />
  I, who desirous of obeying was,<br />
  Concealed it not, but all revealed to him;<br />
  Whereat he raised his brows a little upward.<br />
  <br />
  Then said he: “Fiercely adverse have they been<br />
  To me, and to my fathers, and my party;<br />
  So that two several times I scattered them.”<br />
  <br />
  “If they were banished, they returned on all sides,”<br />
  I answered him, “the first time and the second;<br />
  But yours have not acquired that art aright.”<br />
  <br />
  Then there uprose upon the sight, uncovered<br />
  Down to the chin, a shadow at his side;<br />
  I think that he had risen on his knees.<br />
  <br />
  Round me he gazed, as if solicitude<br />
  He had to see if some one else were with me,<br />
  But after his suspicion was all spent,<br />
  <br />
  Weeping, he said to me: “If through this blind<br />
  Prison thou goest by loftiness of genius,<br />
  Where is my son? and why is he not with thee?”<br />
  <br />
  And I to him: “I come not of myself;<br />
  He who is waiting yonder leads me here,<br />
  Whom in disdain perhaps your Guido had.”<br />
  <br />
  His language and the mode of punishment<br />
  Already unto me had read his name;<br />
  On that account my answer was so full.<br />
  <br />
  Up starting suddenly, he cried out: “How<br />
  Saidst thou,— he had? Is he not still alive?<br />
  Does not the sweet light strike upon his eyes?”<br />
  <br />
  When he became aware of some delay,<br />
  Which I before my answer made, supine<br />
  He fell again, and forth appeared no more.<br />
  <br />
  But the other, magnanimous, at whose desire<br />
  I had remained, did not his aspect change,<br />
  Neither his neck he moved, nor bent his side.<br />
  <br />
  “And if,” continuing his first discourse,<br />
  “They have that art,” he said, “not learned aright,<br />
  That more tormenteth me, than doth this bed.<br />
  <br />
  But fifty times shall not rekindled be<br />
  The countenance of the Lady who reigns here<br />
  Ere thou shalt know how heavy is that art;<br />
  <br />
  And as thou wouldst to the sweet world return,<br />
  Say why that people is so pitiless<br />
  Against my race in each one of its laws?”<br />
  <br />
  Whence I to him: “The slaughter and great carnage<br />
  Which have with crimson stained the Arbia, cause<br />
  Such orisons in our temple to be made.”<br />
  <br />
  After his head he with a sigh had shaken,<br />
  “There I was not alone,” he said, “nor surely<br />
  Without a cause had with the others moved.<br />
  <br />
  But there I was alone, where every one<br />
  Consented to the laying waste of Florence,<br />
  He who defended her with open face.”<br />
  <br />
  “Ah! so hereafter may your seed repose,”<br />
  I him entreated, “solve for me that knot,<br />
  Which has entangled my conceptions here.<br />
  <br />
  It seems that you can see, if I hear rightly,<br />
  Beforehand whatsoe&apos;er time brings with it,<br />
  And in the present have another mode.”<br />
  <br />
  “We see, like those who have imperfect sight,<br />
  The things,” he said, “that distant are from us;<br />
  So much still shines on us the Sovereign Ruler.<br />
  <br />
  When they draw near, or are, is wholly vain<br />
  Our intellect, and if none brings it to us,<br />
  Not anything know we of your human state.<br />
  <br />
  Hence thou canst understand, that wholly dead<br />
  Will be our knowledge from the moment when<br />
  The portal of the future shall be closed.”<br />
  <br />
  Then I, as if compunctious for my fault,<br />
  Said: “Now, then, you will tell that fallen one,<br />
  That still his son is with the living joined.<br />
  <br />
  And if just now, in answering, I was dumb,<br />
  Tell him I did it because I was thinking<br />
  Already of the error you have solved me.”<br />
  <br />
  And now my Master was recalling me,<br />
  Wherefore more eagerly I prayed the spirit<br />
  That he would tell me who was with him there.<br />
  <br />
  He said: “With more than a thousand here I lie;<br />
  Within here is the second Frederick,<br />
  And the Cardinal, and of the rest I speak not.”<br />
  <br />
  Thereon he hid himself; and I towards<br />
  The ancient poet turned my steps, reflecting<br />
  Upon that saying, which seemed hostile to me.<br />
  <br />
  He moved along; and afterward thus going,<br />
  He said to me, “Why art thou so bewildered?”<br />
  And I in his inquiry satisfied him.<br />
  <br />
  “Let memory preserve what thou hast heard<br />
  Against thyself, “that Sage commanded me,<br />
  “And now attend here;” and he raised his finger.<br />
  <br />
  “When thou shalt be before the radiance sweet<br />
  Of her whose beauteous eyes all things behold,<br />
  From her thou&apos;lt know the journey of thy life.”<br />
  <br />
  Unto the left hand then he turned his feet;<br />
  We left the wall, and went towards the middle,<br />
  Along a path that strikes into a valley,<br />
  <br />
  Which even up there unpleasant made its stench.<br />
</p>



      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto10-bg.png')` }}>
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

export default Canto10;

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