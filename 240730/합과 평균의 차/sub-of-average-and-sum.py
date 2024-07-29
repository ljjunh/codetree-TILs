arr = list(map(int, input().split()))
print(sum(arr))
print(sum(arr)//len(arr))
print(sum(arr)-(sum(arr)//len(arr)))