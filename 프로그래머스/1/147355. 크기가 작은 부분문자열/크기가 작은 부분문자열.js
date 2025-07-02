/*
part: t를 p의 길이만큼 앞에서 부터 자른 부분 문자열
count: 부분문자열이 나타내는 수가 p가 나타내는 수보다 작은지 count하는 변수

1. 일단 t를 p의 길이 만큼 앞에서 부터 자른다(한 칸 씩 뒤로) => 그것을 part라고 하자
2. 각 part를 p와 비교해서 작거나 같으면 count를 + 1 한다.
3. count를 return 한다.
*/

function solution(t, p) {
    let count = 0;
    let start = 0;
    const pLen = p.length
    for (let i = pLen; i <= t.length; i += 1) {
        const part = t.slice(start, start + pLen);
        if(Number(part) <= Number(p)) {
            count += 1;
        }
        start += 1;
    }
    return count;
}