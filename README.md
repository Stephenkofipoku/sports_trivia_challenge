# Sports Trivia Challenge README

## Contents
- [Sports Trivia Challenge README](#sports-trivia-challenge-readme)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Design](#design)
    - [Wireframe](#wireframe)
    - [Sketches Of The Sports Trivia Challenge](#sketches-of-the-sports-trivia-challenge)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Features](#features)
    - [Existing Features](#existing-features)
    - [Accessibility](#accessibility)
  - [Technologies Employed](#technologies-employed)
    - [Languagues Employed](#languagues-employed)
    - [Frameworks, Libraries \& Programs Employed](#frameworks-libraries--programs-employed)
  - [Deployment](#deployment)
  - [User Stories](#user-stories)
  - [Testing and Solved](#testing-and-solved)
  - [Validator and Testing](#validator-and-testing)
  - [Credits](#credits)
    - [Code Used](#code-used)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgement](#acknowledgement)


## Introduction

Welcome to Sports Trivia Challenge, the ultimate destination for all sports enthusiasts! Test your knowledge and compete against friends as you dive into the exciting world of sports trivia. With a wide range of categories and challenging questions, this interactive website will put your sports knowledge to the test.

Explore various categories such as Sports Trivia, Sports History, Sports Figures, English Premier League, Spanish League, UEFA Champions League, German Bundesliga, and the prestigious Ballon d'Or Awards. Each category offers a unique set of questions that will challenge your expertise in different aspects of the sports world.

## Purpose

The purpose of the website is to provide an engaging Sports Trivia Challenge for users to test their sports knowledge. With a variety of game types and responsive design, the website offers an interactive experience where players can select their preferred category, answer trivia questions, and earn points. The website aims to entertain and challenge sports enthusiasts while providing a seamless user experience across different screen sizes. Whether playing on a desktop or mobile device, users can enjoy the Sports Trivia Challenge and have fun while expanding their sports knowledge.

## Design

### Wireframe
The basic design and structure of the website was done using Balsamiq wireframe. 

### Sketches Of The Sports Trivia Challenge

The one page website was sketched out with Balsamiq wireframe as seen below:

![Sports Trivia Challenge](./documents/sports-trivia-wireframe.png)

### Color Scheme
The color panel of the website is shown below with a palette generated from colormind. These colors are carefully selected to make the website attractive and to give adequate accessibility and readability.

![Sports Trivia Challenge color pallete](./documents/sports-trivia-color-pallete.png)

### Typography
Google fonts and FontAwesome is used for this website. The Google fonts 

### Imagery
The logo and icons on the Sports Trivia Challenge website were taken from Font Awesome website.

![Sports Trivia Challenge logo and icons](./documents/sports-trivia-logo-icons.png)

### Features
The Sports Trivia Challenge website is a one page website with these features.
Logo and header, Game area with 5 game types represented by icons and name of the game type. The question area and score area and an instruction button.

### Existing Features
- Logo
  The logo is on top placed just before the header and centered with the header.
  
- The Header 
  The header placed just after the logo which captures the essence of the website.
  
- The Game Type Area
  The game type area has the icons with labels of the game type beneath them. The sports trivia challenge has five game types and each game type has five question and users are given three options of answers to make a selection. When a question is answered, a user is immediately alerted with a correct answer or wrong aswer message and the corresponding score awarded at the score area.
  ![The Game Type Area](./documents/sports-trivia-gametype-icons.png)
  
- The Question Area
  The game question area comes just beneath the game type icons and label which is the area that displays the question to be answered.
  ![Sports Trivia Question Area](./documents/sports-trivia-question-area.png)
- The Answer Area
  The game answer area beneath the question area and presents users with 3 options of answers to select from.
  ![The Game Answer Area](./documents/sports-trivia-answer-area.png)
- The Score Acrea
  The game score area has two socre items, correct answers and incorrect answers, which records the results of what has been answered by the user. The defaul score is zero for each of the items.
  ![The Game Score Area](./documents/sports-trivia-score-area.png)
- The Instruction button
  The instruction area gives users information on how to play the game when clikced.
  ![The Game Instructions](./documents/sports-trivia-instruction-button.png)
- The game timer area
  This provides start, stop and reset time area for users
  ![The Game timer]

### Accessibility
The website is made accessible-friendly as possible through the following measures:
- Utilizing semantic HTML to provide meaningful structure and enhance accessibility.
- Incorporating descriptive alt attributes for images on the site to provide alternative text for screen readers.
- Ensuring an adequate color contrast across the site to improve readability for users with visual impairments. I employed the contrast checker provided by colormind to validate the contrast ratio between the selected foreground color and background color.

By implementing the above measures the overall accessibiity of the website is improved.

## Technologies Employed

### Languagues Employed
This project was created using only HTML, CSS and JavaScript.

### Frameworks, Libraries & Programs Employed

- GitHub for commits/deploys
- Codeanywhere
- CSS, HTML, JavaScript
- GoogleFonts
- Balsamiq Wireframes - for wireframe design
- FontAwesome for logo and game type icons
- <https://ui.dev/amiresponsive> - to check site responsiveness
- <https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln> - to check the flow of the header, logo and icons at different screen sizes and making sure there are no overflows and distortions.
- Am I Responsive was used to check the various device breakpoints for responsive design, a snap short of the webpage at media screen sizes for responsive development.
  ![I am responsive screenshot](./documents/sports-trivia-iamresponsive.png)
- WAVE Evaluation tool was used to evaluate web accessibility within the browser.
  ![Wave Evluation screenshot](./documents/sports-trivia-wave-report.png)
- Google chrome Lighthouse was used to analyzed the website with the following results as shown in the snapshots of the reults: The results shows a lower performance score of 64 which is as a results of my internet connection as I am working from a remote site. During my review with my mentor, the lighthouse score from her end gave a good performance score above 90%.
  ![Sports Triva Lighthouse Score](./documents/sports-trivia-lighthouse-score.png)
## Deployment

  The depoymnent was done very early on in the project.
  The deployment of the project was done in the following steps:

- Forking the repo: The repository was created in GitHub by forking a copy from the original Code Institute repo template. This was done on GitHub by clicking the "Fork" button to create a copy of the original repository.
- Launching in IDE: After forking the repository, it was cloned or copied into Codeanywhere and opened by creating a new workspace.
- Git add/commit/push to GitHub: With the project open in your Codeanywhere, changes were made to the codebase and after desired changes, Git commands to stage the modified files (git add), create a commit with a descriptive message (git commit), and push the changes to your forked repository on GitHub (git push) were done.
- Settings: In the repository's settings on GitHub, the configuration of the branch from the main was done for deploymnent to setup up the branch for deployment.
- Pages: GitHub Pages which has the facility to host your website directly from my GitHub repository was utilized. This was enabled in GitHub Pages by navigating to the repository's settings and locating the "GitHub Pages" section. Here, the branch to deploy was configured of the website's domain as required.
- Choosing a branch & deploying: In the GitHub Pages settings, a selection of the branch that contains the code of the website. GitHub then built and deployed the website using the code from the selected main. The following deployment address was created from which the website can be accessed:
  
   [Sports Trivia Challenge](https://stephenkofipoku.github.io/sports_trivia_challenge/)

## User Stories
- User Story 1 (25 year old male): 
As a sports enthusiast, I want to test my knowledge and challenge myself with the Sports Trivia Challenge game. I've heard great things about its diverse range of sports questions and engaging gameplay. I'm excited to see how many correct answers I can get and improve my sports knowledge along the way.

- User Story 2 (19 year old female): 
As a competitive player, I am always looking for new games to challenge my friends. The Sports Trivia Challenge game seems like the perfect fit. With its random selection of questions and scoring system, I can compete with my friends to see who can answer the most questions correctly. I can't wait to invite my friends and have an exciting trivia showdown.

- User Story 3 (20 year old male): 
As a casual gamer, I enjoy playing games that are both fun and educational. The Sports Trivia Challenge game caught my attention with its interactive gameplay and sports-themed questions. It's a great way for me to relax and learn interesting facts about various sports. The option to select different game types adds variety, keeping the game fresh and engaging each time I play.

## Testing and Solved

| **TEST**                                        | **ACTION**                                                      | **EXPECTATION**                                                                                      | **RESULT**        |
| ----------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------- |
| Home page                                       | Using Chrom Dev Tools size to 1920px             | Elements and flow looks good @ 1920px and down                      | Works as expected |
| Home Page                                       | Using Chrom Dev Tools size at 995px              | Elements and flow looks good @ 995px and down                       | Works as expected |
| Hompage looks good @ 768px and down             | Using Chrom Dev Tools size to 768px.             | Elements and flow looks good at 768px screen   | Works as expected |
| Home page                                       | Using Chrom Dev Tools size to 672px, 585px, 530px, 480px, 450px, 320px | Elements and flow looks good at 672px, 585px, 520px, 480px, 450px and 320px screens | Works as expected |
| Question Area                                   | Display randomly question of the game type       | Random display of questions       | Works as expected |
| Answer area                                     | Displays the 3 options of answers for selection  | A click on any of the option should select an answer to the question | Works as expected |
| Score area                                      | Displays the score for correct and incorrect answers and | Tallies the score of correct and incorrect answers | Works as expected |
| Instruction button                              | Click to display instruction for the game    | A new tab opens to the social media page                                                             | Works as expected |
| Game timer                                      | Start, Stop and Reset buttons for user session   | Click to start, top or reset game session | Works as expected |

## Validator and Testing
- HTML: No errors were returned when passing through the official W3C validator.
  ![W3 HTML Validator results](./documents/sports-trivia-w3_html_validation1.png)

  ![W3 HTML Validator results 2](./documents/sports-trivia-w3_html_validation2.png)
- CSS: No erros were returned when passing through the official W3 validator.
  ![W3 CSS Validator results](./documents/sports-trivia-w3_css_validation.png)
- JavaScript: No issues were turned when passing through the official validator, JSHINT.
  ![JSHINT Validator results](./documents/sports-trivia-jshint-screenshot.png)
- Note: The timer and submit answer button have not worked well as expected hope to to develop this further after grading to get these to work better than currently is.
## Credits

### Code Used

- Inspiration was taken from the structural design of Love Maths source code from Code Institute.
- README.md template from Code Institute.
- Codes were edited using google and ChatGPT, an AI language model developedn by OpenAI.

### Content

- The content of the website was written by Stephen Opoku

### Media

- Logo and Icons from https://fontawesome.com/

### Acknowledgement

- My family for the support and encouragement through this project
- My mentor, Lauren-Nicole for her valuable input and guidance on this project. Super grateful to her.