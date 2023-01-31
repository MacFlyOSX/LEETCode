
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

// 2. Password Validation

function getPasswordStrength(passwords, common_words) {
    const result = [];

    for (let word of passwords) {
        console.log(word);
        if (word.length < 6 || word === word.toLowerCase() || word === word.toUpperCase() || !isNaN(word))
            result.push('weak');
        else {
            let bool = true;
            for (let com of common_words) {
                if (word.includes(com)) {
                    result.push('weak');
                    bool = false;
                    break;
                    }
            }
            if (bool) result.push('strong');
        }
    }

    return result;
}
