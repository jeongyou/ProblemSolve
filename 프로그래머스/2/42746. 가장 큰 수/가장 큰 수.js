function solution(numbers) {
    const strings = numbers.map(num => num.toString());
    
    strings.sort((a, b) => (b + a) - (a + b));
    
    
    if(strings[0] === '0') return '0';
    
    return strings.join('');
}