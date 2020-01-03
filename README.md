
A node.js module to find out whether precious markets live trading is open or not for a provided time period.

When markets are open for trading, it returns <code>true</code>. Otherwise, it returns a relative (human readable) string that tells when markets [will be/would be/were] open for trading next.

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
