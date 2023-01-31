
// 1. Simple Max Difference

function maxDifference(px) {
    let curr = px.length - 1;
    let pointer = curr - 1;
    let diff = -1;

    while (pointer >= 0) {
        if (px[pointer] > px[curr]) {
            curr = pointer;
        } else {
            let temp = px[curr] - px[pointer];
            if (temp > 0) {
                if (temp > diff) diff = temp;
            }
        }
        pointer--;
    }

    return diff;
}


// 2. plus one

function plus_one(digits) {
    if (!digits.length) return [1];
    let end = digits.length - 1;
    let carry = true;

    while (carry) {
        carry = false;
        if (end < 0) {
            return [1, ...digits];
        }
        if (digits[end] === 9) {
            digits[end] = 0;
            carry = true;
            end--;
        } else digits[end]++;
    }

    return digits;
}

function reverse_parentheses(s) {
    let right = 0;
    let final = '';

    while (s[right] !== ')') {
        right++;
    }
    let left = right;

    while (s[left] !== '(') {
        left--;
    }

    let str = s.slice(left + 1, right);
    for (let i = str.length - 1; i >= 0; i--) {
        final += str[i];
    }

    while (left >= 0 && right < s.length) {
        if (s[left] === '(' && s[right] === ')') {
            left--;
            right++;
        }
        else {
            if (right < s.length && s[right] !== ')') {
                final = s[right] + final;
                right++;
            }
            if (left >= 0 && s[left] !== '(') {
                final += s[left];
                left--;
            }
        }
    }

    return final;
}

console.log(reverse_parentheses('(n(a(mt)a)b)'));
