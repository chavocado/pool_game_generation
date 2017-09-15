# Pool Game Generation
## Tournament Builder

+ [Pool Game Generation](https://pool-game-generation.herokuapp.com/)

##Objective
* Implement an **API endpoint** in any sufficient tech stack that will generate games for a **“pool play”** round of a tournament.

## Basic Requirements
* Nothing needs to be persisted.
* The endpoint needs to accept the following parameters:
* Number of pools.
* Number of teams.
* Number of rounds.
* Use snake seeding to assign teams to pools.
* The response should be the list of pools along with their generated games.

##Additional Information
-The pools should be objects, and should have a name property in the pattern of “Pool A”, “Pool B”, etc. The generated games should be attached as an array property on each pool.
-Each game should have a unique id, and two teams. These teams can be simple strings, with the pattern of “Team #1”, “Team #2”, etc., but each team should have one game per round against every other team in the pool.
-The back-and-forth pattern should work for any number of pools and any number of teams. If the number of pools does not evenly divide the number of teams, the extra teams should be assigned to the pools corresponding to their snake order, like in the example above.

##Bonus Requirements
Set up a basic form UI that will take in the parameters and display a rendered form of the generated games.
Add a parameter that will populate the pools using a sequential seeding method


## GET [/tournamentBuilder/{?pools=(number)&teams=(number)&rounds(number)&seed(string)}]
+ Parameters
    + pools (number)
    + teams (number)
    + rounds (number)
    + seed (string "snake" or "sequential")
+ Response 200
