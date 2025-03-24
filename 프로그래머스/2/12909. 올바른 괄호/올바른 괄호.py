def solution(string):
    stack = []
    
    for s in string:
        if(s == '('):
            stack.append(s)
        else:
            if(len(stack) == 0):
                return False
            elif(stack[-1] == '('):
                stack.pop()
    
    if(len(stack) == 0):
        return True
    else:
        return False

    return True