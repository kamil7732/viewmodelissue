mo.configure({
    //will return current date & time if date not given to a moment helper
    returnNowIfDateNotGiven: false,
    //enable the debug mode (console logs)
    debug: false,
    //enable shortcuts to your favorite tokens
    //http://momentjs.com/docs/#/displaying/format/
    //default format should be set as 'default'
    formatTokens: {
        'default': 'LLL', // defaults to locale date format
        //Month name, day of month, year, time
    }
});
mo.setLocale('pl');