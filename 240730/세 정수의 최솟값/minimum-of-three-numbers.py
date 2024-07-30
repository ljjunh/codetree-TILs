arr = list(map(int, input().split()))
res = 2147000000

for i in arr:
    if res > i:
        res = i
print(res)