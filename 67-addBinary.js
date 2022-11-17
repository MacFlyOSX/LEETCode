

var addBinary = function(a, b) {
    let sum = 0;
    Array.from(a).forEach((ele, i)=> ele === '1' ? sum += 2**(a.length - 1 - i) : null);
    console.log('sum after array a', sum);
    Array.from(b).forEach((ele, i)=> ele === '1' ? sum += 2**(b.length - 1 - i) : null);
    console.log('sum after array b', sum);
    let str = '';
    let len = a.length > b.length ? a.length : b.length;
    console.log('this is the len', len);
    while (sum >= 0 && len >= 0) {
        if (sum >= 2**len) {
            console.log('in the sum > 2**len');
            sum -= 2**len;
            console.log('new sum', sum);
            str += '1';
            console.log('new str', str);
        } else {
            console.log('in else');
            if (str.length) {
                str += '0';
                console.log('added the str 0', str);
            }
        }
        len--;
    }
    return str;
};

console.log(addBinary('11', '1'))
