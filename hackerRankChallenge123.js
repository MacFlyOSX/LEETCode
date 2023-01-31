
// 1. Two Strings

function commonSubstring(a, b) {

    for (let i = 0; i < b.length; i++) {
        const set = new Set(a[i].split(''));
        const char = b[i];
        let bool = true;
        for (let m of char) {
            if (set.has(m)) {
                console.log('YES');
                bool = false;
                break;
            }
        }
        if (bool) console.log('NO');
    }
}


