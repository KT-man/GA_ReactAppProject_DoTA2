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

### Wireframes 
|  ----     | App| -------|
| -----   | Parent Container    |   ----      |
|  ----  |   Search Bar      |    ----      |
| Recent Matches (Table) |  Dota Modal     | ----  |
| Individual Recent Matches (row)  | Pages in the Modal      |    ----  |

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

