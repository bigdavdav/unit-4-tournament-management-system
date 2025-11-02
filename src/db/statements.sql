-- Statements to create tables

CREATE TABLE Competitors (
  competitorID INTEGER PRIMARY KEY AUTOINCREMENT,
  name STRING NOT NULL,
  teamOrIndividual STRING CHECK(teamOrIndividual IN('Team', 'Individual')) NOT NULL ,
  memberAmount INTEGER NOT NULL
);

CREATE TABLE Scores (
  competitorID INTEGER NOT NULL,
  event1Score INTEGER CHECK(event1Score BETWEEN 0 AND 3),
  event2Score INTEGER CHECK(event2Score BETWEEN 0 AND 3),
  event3Score INTEGER CHECK(event3Score BETWEEN 0 AND 3),
  event4Score INTEGER CHECK(event4Score BETWEEN 0 AND 3),
  event5Score INTEGER CHECK(event5Score BETWEEN 0 AND 3)
);

CREATE TABLE SingleEventCompetitors (
  singleEventCompetitorID INTEGER PRIMARY KEY AUTOINCREMENT,
  singleEventCompetitorName STRING NOT NULL,
  eventSignedUp INTEGER CHECK(eventSignedUp BETWEEN 1 AND 5),
  scoreAchieved INTEGER
);

-- Statements used for testing scripts in statements.ts

DROP TABLE Competitors;
DROP TABLE Scores;

INSERT INTO Competitors (name, teamOrIndividual, memberAmount)
VALUES('Bob', 'Individual', 1);

INSERT INTO Scores (competitorID, event1Score, event2Score, event3Score, event4Score, event5Score)
VALUES(1, 0, 0, 0, 0, 0);