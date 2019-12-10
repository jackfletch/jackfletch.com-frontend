---
title: "Splash"
slug: "splash-intro"
date: "2019-08-22T16:15:00.000Z"
description: "An NBA data visualization for shotcharts and other statistics."
---

[Splash](https://splash.jackfletch.com) is a basketball shooting visualization SPA.

![interface](/media/splash-intro/interface.png)

A product of interests in data data analysis, visualization, and basketball, Splash development began in my fourth semester of college (Spring 2017).

## Frontend

Spring 2017 was the age of [Create React App](https://create-react-app.dev).
As such, Splash uses [React](https://reactjs.org) to manipulate the DOM.

[d3](https://d3js.org) is the de facto JavaScript data visualization library.
However, d3 is largely based on DOM manipulation of geometric shapes.
To get d3 to integrate nicely with React, Splash does not use d3 functions that manipulate the DOM.

## Backend

Since I can't watch every NBA game[^nba-time], Splash's data comes from [stats.nba.com](https://stats.nba.com).
The backend uses a local database as a copy of the few endpoints Splash needs in order to cut down on API requests.

## Inspiration

Splash takes notes from [Kirk Goldsberry](https://twitter.com/kirkgoldsberry)'s Grantland shotcharts and Austin Clemens's [Swish](http://www.austinclemens.com/shotcharts/) shotcharts.

## Future Work

- update data with 2018 and 2019 stats (currently only has 2017 data)
- add niftier player selector
- add more charts for other stats
- add player comparison feature

## Open source code

Splash is a hobby project and free to use, modify, and even sell within the bounds of the liberal MIT license.
You'll find the most recent version of the frontend at https://github.com/jackfletch/splash.

[^nba-time]:

  The NBA has 1230 regular season games which, at a low-ball 2 hours per game, is equivalent to 307.5 8-hour days.
  That's a vacationless six-day workweek year-round without including the playoffs.
