# TravelSquad
Streamline Group Travel

[Deployed Frontend Link](https://travel-squad.club)

[Deployed Backend Link](https://travel-squad.club/api)

<div>
  <img width="476" alt="screen shot" src="./client/public/LandingScreenshot.png">
</div>

## App Description
A group travel web application that allows you to organize trips with multiple people, and streamline decision making related to lodging, group members, dates, and activities.

## Problem Statement
Have you ever tried to plan a trip with a group of your favorite people? You want to choose dates, the place to stay, the transportation and activities but the amount of brain damage you get from sending around all these emails starts to make the whole thing more of a chore than the trip of your dreams. Pretty soon you've got 400 emails flying around and it's hard to keep track of who's agreed to what and when, it feels like you should just give up.

## The Solution
TravelSquad streamlines this process by allowing you to poll your friends on travel choices easily, in one place. Simply add users to the group and drop in options, and they can come reply. TravelSquad makes it so everyone's voice is heard and when you head out on your dream trip everyone is on the same page.


## User Experience
A user will open up the app, and touch 'create group'. They enter in the name of the group, and their own name and email. On submit, a group page is made. They can add people to the group, and use nodemailer to generate an email to the members of the group, inviting them to the page. Then they can manage options for their vacation, like dates, lodging, and activities. In the lodging option they can paste in an airbnb link and hit submit. On submit, a web scraper goes to the airbnb listing and pulls in the main picture and title for the listing.

Trip collaborators who receive the invitation email can click on the link, and will be brought to the page where they can make their selection on the poll. They will be greeted by instructions to make selections and there will be a line with their name, where they will choose from options such as "Favorite, Like it, Hate it, or Don't Care."

Any user can view this same page which will have the poll results, and use this information to book accommodations which is something that is external from TripTroop.

## Installation Instructions
Using the app only requires visiting the website, https://travel-squad.club.

However, if you wish to download the app and make changes to better suit your personal needs, you will find the source code for the back end in this repository, and the code for the front end in the client folder. After forking over your desired repo and cloning it down to your computer, please ```npm install``` then happy hacking!

## Technologies
React, Express, Knex, Postgresql, Node, Socket.io, Nodemailer, Cheerio.

## Author
Emily Pancake - Full Stack Web Developer - Denver, Colorado

[GitHub](https://github.com/epancake)

[LinkedIn](www.linkedin.com/in/emilypancake/)

## License
MIT
