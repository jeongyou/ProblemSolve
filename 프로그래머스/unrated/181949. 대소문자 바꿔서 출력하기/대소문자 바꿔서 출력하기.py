str = input()
res = ""
for i in str:
    if i.islower():
        res += i.upper()
    else:
        res += i.lower()
print(res)