arr = list(map(int, input().split()))
res = 0
if arr[0] < 90:
    print(0)
    quit()
if arr[1] <95:
    res += 50000
else:
    res += 100000
print(res)