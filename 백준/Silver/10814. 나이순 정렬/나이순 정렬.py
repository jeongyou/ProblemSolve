import sys
input = sys.stdin.readline
output = sys.stdout.write

def main():
    n = int(input())
    members = []
    for i in range(n):
        age, name = input().split()
        members.append((int(age), name))

    members.sort(key=lambda x: (x[0]))

    for age, name in members:
        print(age, name)

    
    return

if __name__ == "__main__":
    main()
