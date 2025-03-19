import sys

input = sys.stdin.readline
output = sys.stdout.write


def book_keeping(number, stack):
    if (number == 0):
        stack.pop()
    else:
        stack.append(number)


def main():
    stack = []
    k = int(input())
    for _ in range(k):
        number = int(input())
        book_keeping(number, stack)

    result = sum(stack)
    output(str(result))


if __name__ == "__main__":
    main()
