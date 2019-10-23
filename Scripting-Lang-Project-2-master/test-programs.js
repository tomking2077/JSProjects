let testOne = () => {
    clearAll();
    for (let i = 1; i <= 10; i++)
        for (let j = 1; j <= 20; j++) {
            print(i + ' ' + j);
            setColor(i, j, 'blue');
            clear(i, j - 1);
            wait(500);
        }

};