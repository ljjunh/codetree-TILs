#include <bits/stdc++.h>

using namespace std;

int n, m, k, mx = -1e9;
int nums[12], a[4];

void go(int cnt){
    if(cnt == n){
        int temp = 0;
        for(int i : a){
            if(i >= m - 1) temp++;
        }
        mx = max(mx, temp);
        return;
    }
    for(int i = 0; i < k; i++){
        a[i] += nums[cnt];
        go(cnt + 1);
        a[i] -= nums[cnt];
    }
}

int main() {
    cin >> n >> m >> k;

    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    // Please write your code here.

    go(0);
    cout << mx << "\n";

    return 0;
}
