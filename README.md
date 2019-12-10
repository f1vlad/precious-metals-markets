Returns a boolean depending on whether or not precious markets trading is open or closed for a given time. The time provided could be current or in the future/past.

Usage:
```
import { marketsOpen } from 'precious-metals-markets';
...
marketStatus = marketsOpen(); // markets status for current time
wasMarketOpen = marketsOpen(new Date("Wed, 27 March 2019 13:30:00")); // markets status for specific day/time
```
OR
```
import * as markets from 'precious-metals-markets';
...
markets.marketsOpen(); // markets status for current time
markets.marketsOpen(new Date("Wed, 27 March 2019 13:30:00")); // markets status for specific day/time
```