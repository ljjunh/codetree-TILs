arr =list(map(int, input().split()))
if min(arr) == arr[0]:
    print(1, end=" ")
else:
    print(0, end=" ")
if arr[0] == arr[1] == arr[2]:
    print(1)
else:
    print(0)