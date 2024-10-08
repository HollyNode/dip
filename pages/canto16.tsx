import React, { useState } from 'react';
import Modal from '@/components/Modal';

const Canto13 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const placeholders = [
    { text: 'Wallpapers', img: '/ds-folder.png' },
    { text: 'Text', img: '/ds-text.png', action: () => setIsModalOpen(true) }, // Add an action to open the modal
  ];

  return (
    <div className="relative h-screen w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/canto16-bg.png')` }}>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex justify-center items-center h-full">
        
        {placeholders.map((placeholder, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-4 transition duration-300 transform hover:scale-110 cursor-pointer"
            onClick={placeholder.action}
          >
            <img
              src={placeholder.img}
              alt={placeholder.text}
              className="w-full max-w-xs h-auto" 
            />
            <div className="mt-2 text-white text-center">{placeholder.text}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div>
        
          <h2>Canto 1</h2>
          <p>MIDWAY upon the journey of our life
I found myself within a forest dark,
For the straightforward pathway had been lost.

Ah me! how hard a thing it is to say
What was this forest savage, rough, and stern,
Which in the very thought renews the fear.

So bitter is it, death is little more;
But of the good to treat, which there I found,
Speak will I of the other things I saw there.

I cannot well repeat how there I entered,
So full was I of slumber at the moment
In which I had abandoned the true way.

But after I had reached a mountain&apos;s foot,
At that point where the valley terminated,
Which had with consternation pierced my heart,

Upward I looked, and I beheld its shoulders
Vested already with that planet&apos;s rays
Which leadeth others right by every road.

Then was the fear a little quieted
That in my heart&apos;s lake had endured throughout
The night, which I had passed so piteously

And even as he, who, with distressful breath,
Forth issued from the sea upon the shore,
Turns to the water perilous and gazes;

So did my soul, that still was fleeing onward,
Turn itself back to re-behold the pass
Which never yet a living person left.

After my weary body I had rested,
The way resumed I on the desert slope,
So that the firm foot ever was the lower.

And lo! almost where the ascent began,
A panther light and swift exceedingly,
Which with a spotted skin was covered o&apos;er!

And never moved she from before my face,
Nay, rather did impede so much my way,
That many times I to return had turned.

The time was the beginning of the morning,
And up the sun was mounting with those stars
That with him were, what time the Love Divine

At first in motion set those beauteous things;
So were to me occasion of good hope,
The variegated skin of that wild beast,

The hour of time, and the delicious season;
But not so much, that did not give me fear
A lion&apos;s aspect which appeared to me.

He seemed as if against me he were coming
With head uplifted, and with ravenous hunger,
So that it seemed the air was afraid of him;

And a she-wolf, that with all hungerings
Seemed to be laden in her meagreness,
And many folk has caused to live forlorn!

She brought upon me so much heaviness,
With the affright that from her aspect came,
That I the hope relinquished of the height.

And as he is who willingly acquires,
And the time comes that causes him to lose,
Who weeps in all his thoughts and is despondent,

E&apos;en such made me that beast withouten peace,
Which, coming on against me by degrees
Thrust me back thither where the sun is silent

While I was rushing downward to the lowland,
Before mine eyes did one present himself,
Who seemed from long-continued silence hoarse.

When I beheld him in the desert vast,
“Have pity on me,” unto him I cried,
“Whiche&apos;er thou art, or shade or real man!”

He answered me: “Not man; man once I was,
And both my parents were of Lombardy,
And Mantuans by country both of them.

Sub Julio was I born, though it was late,
And lived at Rome under the good Augustus,
During the time of false and Iying gods.

A poet was I, and I sang that just
Son of Anchises, who came forth from Troy,
After that Ilion the superb was burned

But thou, why goest thou back to such annoyance?
Why climb&apos;st thou not the Mount Delectable
Which is the source and cause of every joy?”

Now, art thou that Virgilius and that fountain
Which spreads abroad so wide a river of speech?”
I made response to him with bashful forehead.

“O, of the other poets honour and light,
Avail me the long study and great love
That have impelled me to explore thy volume!

Thou art my master, and my author thou,
Thou art alone the one from whom I took
The beautiful style that has done honour to me.

Behold the beast, for which I have turned back;
Do thou protect me from her, famous Sage,
For she doth make my veins and pulses tremble.”

“Thee it behoves to take another road,”
Responded he, when he beheld me weeping,
“If from this savage place thou wouldst escape;

Because this beast, at which thou criest out,
Suffers not any one to pass her way,
But so doth harass him, that she destroys him;

And has a nature so malign and ruthless,
That never doth she glut her greedy will,
And after food is hungrier than before.

Many the animals with whom she weds,
And more they shall be still, until the Greyhound
Comes, who shall make her perish in her pain.

He shall not feed on either earth or pelf,
But upon wisdom, and on love and virtue;
&apos;Twixt Feltro and Feltro shall his nation be;

Of that low Italy shall he be the saviour,
On whose account the maid Camilla died,
Euryalus, Turnus, Nisus, of their wounds;

Through every city shall he hunt her down,
Until he shall have driven her back to Hell,
There from whence envy first did let her loose.

Therefore I think and judge it for thy best
Thou follow me, and I will be thy guide,
And lead thee hence through the eternal place,

Where thou shalt hear the desperate lamentations,
Shalt see the ancient spirits disconsolate,
Who cry out each one for the second death;

And thou shalt see those who contented are
Within the fire, because they hope to come,
Whene&apos;er it may be, to the blessed people;

To whom, then, if thou wishest to ascend,
A soul shall be for that than I more worthy;
With her at my departure I will leave thee;

Because that Emperor, who reigns above,
In that I was rebellious to his law,
Wills that through me none come into his city.

He governs everywhere and there he reigns;
There is his city and his lofty throne;
O happy he whom thereto he elects!”

And I to him: “Poet, I thee entreat,
By that same God whom thou didst never know,
So that I may escape this woe and worse,

Thou wouldst conduct me there where thou hast said,
That I may see the portal of Saint Peter,
And those thou makest so disconsolate.”

Then he moved on, and I behind him followed.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Canto13;
