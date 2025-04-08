function solution(my_string) {
    const strArr = my_string.split('');
    const reversedStr = strArr.reverse().join('');
    return reversedStr;
}