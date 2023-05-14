#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}


int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main()
{
  int n;
  cin>>n;
  int arr[n];
  set<int> s;
  for(int i=0;i<n;i++)
  {
    cin>>arr[i];
  }
  
  for(int i=0;i<n-1;i++){
      int temp = lcm(arr[i],arr[i+1]);
      s.insert(temp);
  }
  int maxVal = *(s.rbegin());
  cout<<"Max Value  "<<maxVal;
return 0;
}