# OpenDota API React Project - DON'T TA 2

(Yes I know I need a better name)
This is a React Project made using the OpenDota API for users to be able to quickly search up their recent match history as well as to gain a clearer understanding of their lifetime dota statistics and perforamnce.

## Project description

A frontend web application development project made using React to gain a better handle of the fundamental concepts and functions. The OpenDota API was chosen because it is well-documented and well-maintained by the OpenDota API team. Additionally, the API captures a lot of game information, allowing for flexibility in picking and choosing the relevant datapoints to be parsed and displayed. The information captured by OpenDota API consists of many layers:

- Top layer information such as match history summary, W/L summary, player rank info etc.
- Individual match information - K/D/A of each player, heroes played, abilities and items used
- Even more specific match information can be requested by parsing the matches for further analysis

Specific match information can be found on many Dota statistics websites, such as ==www.dotabuff.com== or ==www.opendota.com==.

Hence, DON'T TA 2 takes a closer look and really magnifies some of the more important player statistics that might have slipped the notice of players wishing to improve themselves.

### Frameworks and Libraries used
```
React
Bootstrap
axios 
tsParticles -- https://www.npmjs.com/package/tsparticles -- for beautiful particle effects 
big-integer -- https://www.npmjs.com/package/big-integer -- to handle integers of unlimited size 
```

### Wireframe
General flow of data is represented in the table below. 
Search Bar within Parent Container will pass data down to its Children (Recent Matches & Modal) 

|     |     App       |  |
| ----------- | ----------- |------------|
|    | Parent Container   |  NOT USED  |
| Recent Matches (Table) |  Dota Modal     | NOT USED| 
| Individual Recent Matches (row)  | Pages in the Modal |   NOT USED|

### User Story
``` 
With the Steam Community / Dota ID of the account that they wish to search for, users will be able to quickly glance through their query's summary dota stats, including recent games played, their brief account history, and estimated Matchmaking rating in the game.

Users will also be able to view more detailed stats by viewing the modal that pops up upon clicking "Find out more", taking inspiration from roundup statistics such as the ones in Spotify Wrapped. 
```

### Unsolved problems
- BETTER APP NAME. 
- Error loading Page 4 of Modal when searching for userPeers if player plays exclusively solo matchmaking, or if not enough friends. Probably to render a different screen if error 
- API still returns a success code of 200 even if there is no data returned. Empty arrays and objects are returned with success code 200, resulting in empty screen 

### Acknowledgements 
- https://alvarotrigo.com/blog/css-text-animations/ for really cool CSS effect 
