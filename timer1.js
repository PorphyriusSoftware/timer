const input = process.argv.slice(2);


for (const num of input) {
    if (!isNaN(num)) {
        setTimeout(() => {
            process.stdout.write('\x07');
        }, num * 1000);
    }
    
}

