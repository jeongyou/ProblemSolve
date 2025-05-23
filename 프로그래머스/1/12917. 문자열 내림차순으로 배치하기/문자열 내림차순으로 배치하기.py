def solution(s):
    sorted_s = sorted(s)
    sorted_s.reverse()
    answer = ''.join(sorted_s)
    return answer