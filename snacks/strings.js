const strings = ['nel', 'MEZZO', 'del', 'CaMmiN', 'Di', 'nostra', 'VITa'];

formattedStrings = strings.map(string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(formattedStrings);


