const marketsOpen = require("./index");

test("Market status for 1/10/25 15:59 PST, markets to open in 2 days", () => {
    expect(marketsOpen(new Date("10 January 2025 15:59:00 GMT-0800"))).toBe("in 2 days");
});

test("Market status for 8/7/11 14:14 PST, markets open", () => {
    expect(marketsOpen(new Date("7 August 2011 14:14:00 GMT-0800"))).toBe(true);
});

test("Market status for 1/20/18 11:00:00 PST, markets to open in 1 day", () => {
    expect(marketsOpen(new Date("20 January 2018 11:00:00 GMT-0800"))).toBe('in a day');
});

test("Market status for 1/6/20 14:30:00 PST, to open in 30 minutes", () => {
    expect(marketsOpen(new Date("6 January 2020 14:30:00 GMT-0800"))).toBe('in 30 minutes');
});

test("Market status for 1/6/20 14:59:00 PST, to open in 30 minutes", () => {
    expect(marketsOpen(new Date("6 January 2020 14:59:00 GMT-0800"))).toBe('in a minute');
});
