var locations = require('./locations');
var teams = require('./teams');

function Matchup(options) {
  this.awayTeam = options.awayTeam;
  this.homeTeam = options.homeTeam;
  this.dateTime = options.dateTime;
  this.location = options.location;
  this.awayScore = options.awayScore;
  this.homeScore = options.homeScore;
  this.result = (this.awayScore || "__") + " - " + (this.homeScore || "__");
}

Matchup.prototype.homeOrAway = function () {
  return this.homeTeam.teamName === "Minnesota Rangers" ? "home" : "away"
}

Matchup.prototype.rangersWon = function () {
  if(!this.homeScore && !this.awayScore) {
    return null;
  }

  return this.homeOrAway() === "home" ? this.homeScore > this.awayScore : this.awayScore > this.homeScore;
}

module.exports = [
  new Matchup({
    awayTeam: teams.broncos,
    homeTeam: teams.rangers,
    dateTime: "Sat. April 23rd 1:00 PM",
    location: locations.rangers,
    awayScore: 82,
    homeScore: 115
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. April 30th 3:00 PM",
    location: locations.storm,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sun. May 15th 2:30 PM",
    location: locations.fury,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.clovers,
    dateTime: "Sun. May 22nd 6:00 PM",
    location: locations.clovers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. May 28th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.broncos,
    dateTime: "Sat. June 4th 7:00 PM",
    location: locations.broncos,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.storm,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 11th 1:00 PM",
    location: locations.rangersAlternate,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.fury,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 18th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.clovers,
    dateTime: "Sat. June 25th 6:00 PM",
    location: locations.clovers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. July 9th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.broncos,
    homeTeam: teams.rangers,
    dateTime: "Sat. July 16th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. July 23rd 3:00 PM",
    location: locations.storm,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sat. July 30th 2:30 PM",
    location: locations.fury,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    awayTeam: teams.clovers,
    homeTeam: teams.rangers,
    dateTime: "Sat. August 6th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  })
];