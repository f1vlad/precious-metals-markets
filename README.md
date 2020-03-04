
A node.js module that returns a boolean or a text string based on precious markets trading status in the past, current or in the future.

When markets are open for trading, it returns <code>true</code>. Otherwise, it returns a relative time string which indicates when markets [will be/would be/were] open for trading next.

Usage:
```
import marketsOpen from 'precious-metals-markets';
...
marketStatus = marketsOpen(); // markets status for current time
wasMarketOpen = marketsOpen(new Date("Wed, 27 March 2019 13:30:00")); // markets status for specific day/time
```
OR
```
const marketsOpen = require('precious-metals-markets');
...
marketsOpen(); // markets status for current time
marketsOpen(new Date("Wed, 27 March 2019 13:30:00")); // markets status for specific day/time
```

Live Demo:

https://stackblitz.com/edit/ionic-q79c1g?embed=1&file=pages/home/home.ts&hideNavigation=1
