const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {

    // \u0003 maps to ctrl+c input
    //I'm using q because ctrl+C kicks me out of my Vagrant session
    if (key === 'q') {
        process.exit();
    }else

    if (key === 'b') {
        process.stdout.write('beeping...');
        process.stdout.write('\x07');
        console.log('');
       
    }else

    if (!isNaN(key)) {
        if (!isNaN(key)) {
            setTimeout(() => {
                process.stdout.write(`beeping (${key}) ...`);
                process.stdout.write('\x07');
                console.log('');
                
            }, key * 1000);
        }
    } else {
        console.log('press "b" or a number from 1-9 or "q" to quit.');
        
    }


    
});

