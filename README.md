Returns a boolean if precious markets trading is open or string time until market opens. The time provided could be current or in the future/past.

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

Live Demo:

https://stackblitz.com/edit/ionic-q79c1g
