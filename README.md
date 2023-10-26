# TravelGuide
	+ Introduction:
The project is a website that can be used as a travel guide book for tourists when they travel to Vietnam. The main theme of the website is white and grey with a cover photo of Vietnam’s signature landscape, terraced fields, the photo has main color is green, which will be outstanding in the website because the background theme is white and grey as I mentioned.
The inspirations for me to create this website:
	- First, I really love my country and I want to show to international friends how beautiful and attractive my country is, so that they can come visit Vietnam in the near future.
	- Second, this is the first time I live far from my family, so I am very home-sick right now. I miss my family, miss the foods, miss the places that I used to be there. All of that I want to make this website like a note me so when I come back Vietnam, I can enjoy all of them.

------------------------------------
	+ Website layout:
Through the website, I divided my website into 4 parts by using div tags, in each part I used CSS to apply the flexbox alignment for the div tags inside big div, that design make me feel more control about the structure of my website, and I can do step by step easily:
	1. Header: contains logo, menu of contents and login section
	2. Cover: contains a cover photo, a welcome note and some pictures that represent for my country – Vietnam
	3. Content of each page: my web site has 4 pages: Home page, Destination page, Food page and Register page.
	4. Footer: contain my contact information and a subscription section.

------------------------------------
	+ Website organization:
My website has 4 pages:
	1. Home page: is used for introduction about Vietnam and a travel map of Vietnam. Then I have created a photo gallery where I combine CSS and Javascript to create 2 buttons to scroll the photos. I gained more experience about CSS (sizing, alignment) and Javascript  statements. My satisfaction about this page is that I made a photo gallery that can scroll continuously.
	2. Destination page: is used to introduce some places which are must visit when you come to Vietnam, this page I include the embedded videos from Youtube via iframe tag. Then I used unstructured list (UL) to display each place (I also put each place into div tag).
	3. Food page: is used to introduce and main purpose is memorize all the things that I really miss right now, I will keep them there for later when I come back to Vietnam I will enjoy. This page I display each meals by flex, in side each meals I include a link which will introduce you to about that dishes or the place that is the best for that dish.
	4. Register page: is used for register new member, this page I design not so complicated in the front end, but I focused on the back-end of the register process which I used Javascript to check data in a filebase user data to validate the inputs. I will explain clearly in the other part of this report.

------------------------------------
	+ Content declaration
For my website you can try using each functions below:
	1. Index page: the photo gallery which has 2 button to scroll the photos.
	2. The login section where I put much effort into, there are nearly cover for a normal website log-in section which have log-in log-out forgot password, and create new account. This log-in section I also use user database based on .txt file to check for validation of user login. I used Javascrip code (in the script_login_Nam.js file) to read records which stored as objects in a txt file, then compare with user input via 2 inputs to check if that account whether in the list or not, the accounts you can use to try are stored in user_data.txt (The account has 3 information: username, password and secret key which used for reset password).
	3. The registration process: I designed simple form for user and focus on the validation check for the inputs the validate the data input customer write to database, when you focus on each input it will show the requirements.
 


