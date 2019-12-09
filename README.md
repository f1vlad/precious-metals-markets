NPM package that returns a boolean depending whether or not precious markets are open or closed for a given time. The time provided could be current or in the future/past.

Usage:
- npm install precious-metals-markets --save
- `import * as markets from 'precious-metals-markets';`
- `markets.marketsOpen(Date.now());`
- `markets.marketsOpen(new Date("Wed, 27 March 2019 13:30:00"));`