# Auto-Newspaper
Google Now is great, I can swipe left on my phone's home screen and see the latest posts from blogs and news sites I follow. Sadly I need to be online to enjoy this which doesn't bode well with my offline Subway commute to class. So I decided to build an app to solve this problem for me. It will sync news on the topics I love offline in my phone to solve this problem. 
<hr>
# User Stories

* As a user I would like to define the topics to be scraped.
* As a user I would like the articles to be downloaded to my phone automatically. 
* As a user I would liek to delete articles.
* As a user I would like to edit my desired topics.

---

##### Backend Endpoints

* GET /news - returns a list of objects with the latest news for that topic from the Huffinton Post. *Clears the DB of stale news*
* POST /news/topics - to save a new topic to scrape for. Then responds with *OK*
* PUT /news/topics/:id - to update a topic record. Responds with *OK*
* DELETE /news/topics/:id - Deletes a topic record.
* DELETE /news/:id  - Deletes a news record. 

##### Frontend

The FrontEnd will be built in react native, however a fallback web-interface would be made as well that relies on the localstorage API, for a seamless offline experience. 

<br>
## Installation

<br>
## Approach Taken

<br>
## Resources

<br>
