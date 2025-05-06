def solution(num):
    count = 0;
    
    if(num == 1): return 0

    while(num != 1):
        if (count >= 500): return -1
        
        if ((num % 2) == 0):
            count += 1
            num = num / 2
        elif ((num % 2) == 1):
            count += 1
            num = (num * 3) + 1
    
    return count