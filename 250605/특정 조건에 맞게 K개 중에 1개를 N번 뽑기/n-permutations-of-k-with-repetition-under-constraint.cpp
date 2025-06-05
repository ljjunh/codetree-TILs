#include <bits/stdc++.h>

using namespace std;

int k, n;

vector<int> temp;

vector<vector<int>> v;

void go(int cnt) {
    if(cnt == n){
        v.push_back(temp);
        return;
    }

    for(int i = 1; i <= k; i++){
        if(temp.size() >= 2 && temp[temp.size() - 2] == temp[temp.size() - 1] && temp[temp.size() - 1] == i) continue;
        temp.push_back(i);
        go(cnt + 1);
        temp.pop_back();
    }
}

int main() {
    cin >> k >> n;

    // Please write your code here.

    go(0);

    for(auto it : v){
        for(auto i : it){
            cout << i << " ";
        }
        cout << "\n";
    }

    return 0;
}
