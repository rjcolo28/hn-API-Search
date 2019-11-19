# HN API Search

## Overview
This is a React app that accesses the Hacker News API through a specific search term and stores that search term in a Redux state.

---

## Technologies
- HackerNews API
- ReactJS
- ReduxJS

---

## Demo 
### Start
Here at the homepage you see a search bar at the top and some already rendered results. That is because the HN API takes in no search term as "undefined" and searches for articles with the term "undefined."

![alt text](READMEpics/homePage.png)

### DevTools
Using the Redux DevTools Chrome Extension, we can see the current search results are stored in a redux state as an array of objects called "articles".

![alt text](READMEpics/reduxDevTools.png)

### Searching New Results
As the video below shows, putting in new search terms updates the Redux state with the new search results based on the search term.

![alt text](READMEpics/reduxSearchStore.gif)
