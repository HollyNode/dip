import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Button } from "@/components/ui/button";

interface IconProps extends React.SVGProps<SVGSVGElement> {}


const Canto7 = () => {
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
      <h2 className="text-xl">Canto 7</h2>
<br />
<p>
  “PAPE Satan, Pape Satan, Aleppe!”<br />
  Thus Plutus with his clucking voice began;<br />
  And that benignant Sage, who all things knew,<br />
  <br />
  Said, to encourage me: “Let not thy fear<br />
  Harm thee; for any power that he may have<br />
  Shall not prevent thy going down this crag.”<br />
  <br />
  Then he turned round unto that bloated lip,<br />
  And said: “Be silent, thou accursed wolf;<br />
  Consume within thyself with thine own rage.<br />
  <br />
  Not causeless is this journey to the abyss;<br />
  Thus is it willed on high, where Michael wrought<br />
  Vengeance upon the proud adultery.”<br />
  <br />
  Even as the sails inflated by the wind<br />
  Involved together fall when snaps the mast,<br />
  So fell the cruel monster to the earth.<br />
  <br />
  Thus we descended into the fourth chasm,<br />
  Gaining still farther on the dolesome shore<br />
  Which all the woe of the universe insacks.<br />
  <br />
  Justice of God, ah! who heaps up so many<br />
  New toils and sufferings as I beheld?<br />
  And why doth our transgression waste us so?<br />
  <br />
  As doth the billow there upon Charybdis,<br />
  That breaks itself on that which it encounters,<br />
  So here the folk must dance their roundelay.<br />
  <br />
  Here saw I people, more than elsewhere, many,<br />
  On one side and the other, with great howls,<br />
  Rolling weights forward by main force of chest.<br />
  <br />
  They clashed together, and then at that point<br />
  Each one turned backward, rolling retrograde,<br />
  Crying, “Why keepest?” and, “Why squanderest thou?”<br />
  <br />
  Thus they returned along the lurid circle<br />
  On either hand unto the opposite point,<br />
  Shouting their shameful metre evermore.<br />
  <br />
  Then each, when he arrived there, wheeled about<br />
  Through his half-circle to another joust;<br />
  And I, who had my heart pierced as it were,<br />
  <br />
  Exclaimed: “My Master, now declare to me<br />
  What people these are, and if all were clerks,<br />
  These shaven crowns upon the left of us.”<br />
  <br />
  And he to me: “All of them were asquint<br />
  In intellect in the first life, so much<br />
  That there with measure they no spending made.<br />
  <br />
  Clearly enough their voices bark it forth,<br />
  Whene’er they reach the two points of the circle,<br />
  Where sunders them the opposite defect.<br />
  <br />
  Clerks those were who no hairy covering<br />
  Have on the head, and Popes and Cardinals,<br />
  In whom doth Avarice practise its excess.”<br />
  <br />
  And I: “My Master, among such as these<br />
  I ought forsooth to recognize some few,<br />
  Who were infected with these maladies.”<br />
  <br />
  And he to me: “Vain thought thou entertainest;<br />
  The undiscerning life which made them sordid<br />
  Now makes them unto all discernment dim.<br />
  <br />
  Forever shall they come to these two buttings;<br />
  These from the sepulchre shall rise again<br />
  With the fist closed, and these with tresses shorn.<br />
  <br />
  Ill giving and ill keeping the fair world<br />
  Have ta’en from them, and placed them in this scuffle;<br />
  Whate’er it be, no words adorn I for it.<br />
  <br />
  Now canst thou, Son, behold the transient farce<br />
  Of goods that are committed unto Fortune,<br />
  For which the human race each other buffet;<br />
  <br />
  For all the gold that is beneath the moon,<br />
  Or ever has been, of these weary souls<br />
  Could never make a single one repose.”<br />
  <br />
  “Master,” I said to him, “now tell me also<br />
  What is this Fortune which thou speakest of,<br />
  That has the world’s goods so within its clutches?”<br />
  <br />
  And he to me: “O creatures imbecile,<br />
  What ignorance is this which doth beset you?<br />
  Now will I have thee learn my judgment of her.<br />
  <br />
  He whose omniscience everything transcends<br />
  The heavens created, and gave who should guide them,<br />
  That every part to every part may shine,<br />
  <br />
  Distributing the light in equal measure;<br />
  He in like manner to the mundane splendours<br />
  Ordained a general ministress and guide,<br />
  <br />
  That she might change at times the empty treasures<br />
  From race to race, from one blood to another,<br />
  Beyond resistance of all human wisdom.<br />
  <br />
  Therefore one people triumphs, and another<br />
  Languishes, in pursuance of her judgment,<br />
  Which hidden is, as in the grass a serpent.<br />
  <br />
  Your knowledge has no counterstand against her;<br />
  She makes provision, judges, and pursues<br />
  Her governance, as theirs the other gods.<br />
  <br />
  Her permutations have not any truce;<br />
  Necessity makes her precipitate,<br />
  So often cometh who his turn obtains.<br />
  <br />
  And this is she who is so crucified<br />
  Even by those who ought to give her praise,<br />
  Giving her blame amiss, and bad repute.<br />
  <br />
  But she is blissful, and she hears it not;<br />
  Among the other primal creatures gladsome<br />
  She turns her sphere, and blissful she rejoices.<br />
  <br />
  Let us descend now unto greater woe;<br />
  Already sinks each star that was ascending<br />
  When I set out, and loitering is forbidden.”<br />
  <br />
  We crossed the circle to the other bank,<br />
  Near to a fount that boils, and pours itself<br />
  Along a gully that runs out of it.<br />
  <br />
  The water was more sombre far than perse;<br />
  And we, in company with the dusky waves,<br />
  Made entrance downward by a path uncouth.<br />
  <br />
  A marsh it makes, which has the name of Styx,<br />
  This tristful brooklet, when it has descended<br />
  Down to the foot of the malign gray shores.<br />
  <br />
  And I, who stood intent upon beholding,<br />
  Saw people mudbesprent in that lagoon,<br />
  All of them naked and with angry look.<br />
  <br />
  They smote each other not alone with hands,<br />
  But with the head and with the breast and feet,<br />
  Tearing each other piecemeal with their teeth.<br />
  <br />
  Said the good Master: “Son, thou now beholdest<br />
  The souls of those whom anger overcame;<br />
  And likewise I would have thee know for certain<br />
  <br />
  Beneath the water people are who sigh<br />
  And make this water bubble at the surface,<br />
  As the eye tells thee wheresoe’er it turns.<br />
  <br />
  Fixed in the mire they say, ‘We sullen were<br />
  In the sweet air, which by the sun is gladdened,<br />
  Bearing within ourselves the sluggish reek;<br />
  <br />
  Now we are sullen in this sable mire.’<br />
  This hymn do they keep gurgling in their throats,<br />
  For with unbroken words they cannot say it.”<br />
  <br />
  Thus we went circling round the filthy fen<br />
  A great arc ‘twixt the dry bank and the swamp,<br />
  With eyes turned unto those who gorge the mire;<br />
  <br />
  Unto the foot of a tower we came at last.<br />
</p>



      </div>
    </div>
  );

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('/images/canto7-bg.png')` }}>
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

export default Canto7;

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