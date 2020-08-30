---
name: Latina Lingua
tools: [Java, XML]
image: /assets/cropped.png
description: The Latina Lingua program is a helpful language-practice tool for Latin students.
---

# The Latina Lingua Program, *2017*
The inspiration for this project comes from a prior [Latin Excursion](/projects/LearnLatin) (I know – How many developers devote multiple projects to a dead language?!?). After multiple years of working on my Latin-learning website, I still wanted to improve the sorry state of Latin practice software. So after a year of learning Java and object-oriented design skills, I decided to put them to good use.

{% include elements/button.html link="https://github.com/MaddieBurbage/LatinaLingua" text="Check out the code" %}


## The Motivation
Latina Lingua is a smart word-practice tool for Latin learners of all levels. The way Latin is set up, sentences take on meaning based on the endings of different words. English has this to some extent: adding 's' to many nouns changes them from singular to plural. However, in Latin, most nouns can have 12 different forms, not 2, because endings also tell you the noun's role in the sentence. The other tricky part is that different nouns follow different patterns of endings, so there are 5-6 main patterns that nouns can follow, and they vary even more depending on the gender of the noun. Not to mention that verbs, adjectives, pronouns, etc. all have their own endings. All these variations add up to...a lot of memorization! And not much technological help.

As with Learn Latin, one of my inspirations (indeed, one of the only Latin resources available) was Warmenhoven's useful list of basic [Latin resources](https://www.warmenhoven.org/latin/vocab/). He has some Latin practice drills but they aren't sophisticated enough to teach students, or let them effectively review. The two biggest gaps were they don't include the macron, a commonly taught Latin symbol, and you don't have much choice on which endings to practice. I wanted to build a practice tool designed for good memorization and review, so the design needed to be much more carefully targeted. However, the author very kindly posted a bank of his words in XML for others' use, which proved to be a great way to store and easily edit large amounts of words. I wanted the program to fit individual students' needs, so it was important that data could be easily read and changed by humans.

## The Design
I divided the program into two parts: what students may want to configure, and the program's internals. The first section would all be stored as XML data, defining the words to include, the parts of speech tested, and the rules for different groups of words. Technically, these rules and words are so configurable that you could change the language altogether, from Latin to Spanish, aqua to aqua. But the program design is really tailored to Latin, and my data structure design fits most efficiently with its immense but highly structured ending groups.
![XML Rules](/assets/AdjectiveXML.png)
The second important design feature was the user interface. What do students want in a practice tool? For Latin, and many other fields, it's nice to be able to narrow down problem areas, but it's also helpful to attempt a variety of tasks until you're surprised by a mistake. I included both options as filters so students could target their practice to the types of words they wanted. To practice, students will receive a word and try to type all the forms they know.
![Word Entry](/assets/nouns.png)
The most important part of Latina Lingua is its teaching methods. Students using the program get to see their mistakes, but what extends this tool beyond any others is the way it allows students to learn from their mistakes. There are many stages until a fact is truly memorized: when you don't know it at all, when you need a reminder of the fact, when you need a reminder that what you think is true isn't actually the fact, and when you know the fact solidly. The same pattern goes for these words, and the correction system in Latina Lingua seeks to help students at each stage of memorization without over- or under- sharing information.

There are three stages of corrections. Once a student submits a guess, if they have mistakes the program will let them know how many words are wrong. This gentle nudge may be enough for the student to fix their mistakes but if they're still stuck, the program will highlight every incorrect word:
![Reminders](/assets/Highlights.png)
Sometimes the student has no clue about the correct answer: it's completely slipped their mind. That's when the final correction stage comes in, and every missed solution is shown:
![Solutions](/assets/Corrections.png)

# The Post-Mortem
I found this program extremely useful when it was finished, because as an upper-level Latin student I had learned all the words and endings that it could quiz, but had grown pretty rusty on some of them and needed a good way to practice. Returning to the project, I'd add more features to ease newcomer's use of the program. Often, beginner Latin students learn words in groups, adding genders, cases, and declensions until they've amassed them all. The program is useful for those students because they can narrow down which genders and declensions they know. However it still has the options available for every word type, which may be overwhelming for beginner students. To welcome them with open arms I'd add a new intro screen, asking students what they even know before they get to the practice screens. These presets could then be changed in the settings, and as beginners move up in knowledge they can start looking at more complex words.
