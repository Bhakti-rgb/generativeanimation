# O'Rangtan
One fine evening, while attending a lecture of Purvi Vyas about the geo-politics of food, I came across a video about deforestation. The video featured a palm tree being cut down with a crane. An orangutan was running haywire on the tree, hitting the crane to stop it from destroying its home but...no avail. The tree was atrociously cut down and the orangutan fell to its death. Just the video of one such incident had disturbed me a lot, whereas thousands of such incidents occur literally everyday around us. Upon searching a bit more I came to know that palm forest are cut down to fulfill our need for palm oil, but do we even use this much of palm oil? Yes, we do, in our shampoos, our soaps, ketchups and 50% of household products. Surprised? I was too. About 1000-3000 orangutans die each year for our needs and we are completely unaware about it. Since that day I had decided to do something about it, but what really? I can't really go and stop those cruel cranes, but i can go for better alternatives, and if not that even, I can atleast attempt to raise awareness about this and bring people closer to the reality. And the final project of the Generative Animation course is where I found the opportunity to do so.


### Brief
To design any kind of interactive piece using the tool of code(P5js). 

### The Concept
O'Rangtan is an illusion of a game. It is a vertical canvas where an orangutan is falling down down down. The player has to help the orangutan land safely by clicking on the leaves that appear at the sides of the canvas. Gradually the number of leaves will decrease, the background will transition from a jungle to a city and the orangutan will fall to its death.

### The Process
To begin with, we did a rough sketch and listing down of the elements and their respective functions.
<img src="https://github.com/user-attachments/assets/d448373d-af61-4f51-a264-33577ceaa09f" width="300" />
<img src="https://github.com/user-attachments/assets/d8b1bf91-1df9-4609-980b-d16a3cd61a01" width="290" />

Once the basic movement and functions were figured out, we went ahead with the coding of this with the basic elements. In my case, an ellipse for the orangutan, rectangles for branches and so on. Here, I wanted the monkey to stay in the Y axis and move along the X axis with the mouseX. Whenever it clicks on a rectangle which is moving up it should extend an arm(now - draw a line). To get this we used a number of functions, like forloops for a huge number of braches, 'if-else' statements for drawing the line from the circle etc.

Then was the step of creating the assets for the game. I used Adobe Photoshop for making these and created a basic spritesheet for the orangutan.
<img width="1920" height="526" alt="rangusprite" src="https://github.com/user-attachments/assets/2ceef96f-acd0-4792-abfd-7116c015b28c" />
<img width="300" height="120" alt="branchleft" src="https://github.com/user-attachments/assets/fbe2ae96-abb4-4d52-8a37-1af567f29f79" />
<img width="300" height="120" alt="branchright" src="https://github.com/user-attachments/assets/6b6133d9-d021-483b-921f-d2d7d04b0fae" />
<img width="150" height="1080" alt="bg" src="https://github.com/user-attachments/assets/4feee980-692f-4dd2-88f6-76c13f1094ea" />
<img width="150" height="1080" alt="bga" src="https://github.com/user-attachments/assets/4772c02d-48bc-4c29-8982-ec8eb337d7c6" />


After adding the assets rose some real challenges. Figuring out how the hand of the monkey will extend out of its body once clicked, mapping the exact clickable area(which I still am refining by the way) and scrolling down a really really long background with certain amount of paralax effect to it.  It took up 2 days of our time and a lot of our faculty's patience to get the game working with a ton of flags, if-else statements and some brains. Finally some pieces of information were added, designed within the visual language of the game.

<img width="300" height="500" alt="startscreen" src="https://github.com/user-attachments/assets/9aa1b5f7-d92b-46f3-9635-93e3e70a7c10" />
<img width="300" height="500" alt="endscreen1" src="https://github.com/user-attachments/assets/934e7fed-f702-4729-b147-66cc285cee09" />
<img width="300" height="500" alt="endscreen2" src="https://github.com/user-attachments/assets/f4ead6c2-a0b0-4268-9d36-900a5956a8a8" />
