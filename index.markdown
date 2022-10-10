---
layout: default
---

# About Me

I'm a Software Engineer helping provide **Infrastructure Security** for **Coinbase**. This spring, I graduated from **Williams College** with a degree in **Computer Science**. I also enjoyed working on my thesis, exploring the benefits that an alternate scratchpad memory system can provide for software developers on RISC machines. 

Beyond research, I spent my time in the Purple Valley learning about topics like the history of coffeehouses, how to design code to run many tasks in parallel, and the many conflicting theories on how to best run a society. The defining theme? A Liberal Arts education. Truthfully I loved exploring other fields while diving deep into Computer Science (but after my thorough survey of these disciplines, I can say with confidence that CS is the coolest). Outside of campus I enjoyed finding ever more ways to get lost in the woods with the Williams Outing Club, and feeling less panicked when it happened due to my practice with the Williams Ski Patrol.

Want to chat? My email is maddie [dot] grace32 [at] yahoo [dot] com

[CV (2022)](/assets/Madeline_Burbage_2022_CV.pdf)  ~  [Github](https://github.com/MaddieBurbage)  ~  [LinkedIn](https://www.linkedin.com/in/maddieburbage/)

# Research

## Interests:
Issues in security, systems, and privacy fascinate me. How can we secure our computers at their lowest levels to support and shape the security expectations of software developers? When developers need stronger security guarantees than our general-purpose computers provide, how can we shift our systems? How can a user's machine and its programs protect privacy by design, so that even something as perilous as browsing the internet can become safe through privacy-enhancing technologies?

## Past Work:
With Professor Duane Bailey, I explored heterogeneous computing, hardware acceleration, and reconfigurable systems from 2019-2022. Here are some of my projects and publications from that time:

**2022:**

---

### [Thesis: A Private, Associative Memory Alternative for RISC Systems](https://unbound.williams.edu/islandora/object/studenttheses%3A1994)

*Highest Honors in Computer Science, Sam Goldberg Prize for Best Thesis Presentation*

Some software would benefit greatly from increased control over the generalized hardware resources that run its code. My Scratchpad Accelerator demonstrates this by providing an additional, specialized memory resource that aids developers through its fine-grained controls over the data within it. I produced this as a memory accelerator for the open-source RISC-V Rocket Chip, designing the whole system in Chisel, a high-level hardware description language.


**2021:**

---

### Debugging Hardware On-the-Fly

After making changes to Chisel circuit designs, a lengthy build process begins: a hefty elaboration time, the manual work of re-flashing a reconfigurable device, and finally rebooting and running tests. For a complex design like the Rocket Chip, all this effort might be a waste if the latest addition has broken the computer. This motivates the design of a hardware debugger targeted at Rocket Chip accelerator development. It makes data collection from the circuit simple, with the desperate developer choosing which signals they want to debug before elaboration, and their values are conveniently shown on the device's (Nexys A7's) display. With several display methods and several more ways of capturing important information, this device was an invaluable aid to debugging accelerators in the moment.

**2020:**

---

### [Combinatorial Sequence Generation Accelerator](/assets/Sequence%20Generation%20Poster.pdf)

*Ward Prize for Best Student Project in Computer Science, ACM SRC First Place Undergraduate Winner at Grace Hopper Celebration*

When we write efficient algorithms to exhaustively consider sets of items, we try to find clever sequences of numbers to help us track and consider each set exactly once. How can we accelerate this sequence generation in hardware, and what sorts of sequences can we provide within one accelerator? Following **Professor Aaron Williams** and **Brett Stevens**' algorithms for generating Cool-order sequences, as well as **Donald Knuth**'s approach to generating them in assembly, I designed an accelerator to do just that. Again, my accelerator targeted the RISC-V Rocket Chip, and was designed in Chisel (Scala).

# Projects

**LeapSolve:** when you need tech support, who do you call? I designed the backend for an MVP for a startup that helps tech workers and tech users connect to solve problems.

**Williams Students Online:** in a world full of choices, students are faced with one huge one: what class should I take next? I updated the backend for our campus website's course--review system.

**B-Cubed Complexity:** lacking the coordination to play Fancy Pants in elementary school, I stuck to puzzle games like this instead. How hard, really, are they? **Jared Berger** and I [showed](https://github.com/jberger28/Research/blob/main/Pushing%20B-Cubed%20towards%20PSPACE-Completeness.pdf) how a modified version of the game can be used to generate very hard levels, only solvable in exponential time with respect to level size. Proving that the game isn't in NP is a good signal that it may be PSPACE-COMPLETE.

**Ants Away:** as always, engineering copies nature, and with this project, I solved the classic Travelling Salesman problem using a colony of virtual ants and some pretty interesting communication methods. No insects were harmed during the production of this code.

**Craft It:** wikihow for the personal project. Want to share your scrumptious scone recipe, your terrifying teddy design, your beautiful birdhouse? If this site were still around, you'd definitely want to share your process here. You can trust me, I'm an incurable crafter. 

**Learn Latin:** useful languages like Spanish and French get their Duolingo courses, but the favorite of every Ancient Roman is neglected! I made a website to fix this travesty, helping fellow students brush up their knowledge with grammar tips and practice tools.

# Beyond the Screen 

I'm from Seattle, so it can't be too much of a surprise that I love skiing, climbing, and hiking, in that order. Waterways are lovely too, but with chill weather, mountains are much more appealing!

Ever since the first time I "beat" my dad at chess, I've loved board games. Not chess--it turns out it's much harder to truly win. But the drama of CodeNames, the utter confusion caused by Avalon, and the inevitable backstabbing and fighting that Catan provokes (or is that just my friend group...) keep me coming back for more.

As a proud eater of food, I've also enjoyed learning how to make it. I'm an okay cook but a better baker, and I absolutely love making bagels and bundt cakes when I've got enough people around to shove leftovers at. I'm an avid food appreciator as well--catch me at the OG teriyaki joint, Toshi's, or grabbing delicious seafood at Ivar's or yummy dumplings at Dough Zone.

![Alt text](/assets/img/mountains.png "truly beautiful mountains")
{: style="color:gray; font-size: 80%; text-align: center;"}