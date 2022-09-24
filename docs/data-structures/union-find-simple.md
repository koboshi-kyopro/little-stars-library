# Union Find (Simple)

グループ分けを管理するデータ構造です。経路圧縮のみを行うシンプルなバージョンです。

## コンストラクタ

- `val uf = UnionFind(n)`

$n$ 頂点 $0$ 辺のグラフを作ります。

計算量: $O(n)$

## 関数

- `find(x: Int): Int`

$x$ の属する集合 (根付き木) の親を求めます。

計算量: ならし $O(\log(n))$

- `unite(x: Int, y: Int)`

$x$ の属する集合と $y$ の属する集合を合併します。

計算量: ならし $O(\log(n))$

- `same(x: Int, y: Int): Boolean`

$x,y$ が同じ集合に属するか判定します。

計算量: ならし $O(\log(n))$

- `size(x: Int): Int`

$x$ の属する集合の大きさを求めます。

計算量: ならし $O(\log(n))$

## コード

```kotlin
class UnionFind(n: Int) {
    private val parent = IntArray(n) { -1 }
 
    fun find(x: Int): Int {
        if (parent[x] < 0) {
            return x
        }
        parent[x] = find(parent[x])
        return parent[x]
    }
 
    fun unite(x: Int, y: Int) {
        val x1 = find(x)
        val y1 = find(y)
        if (x1 == y1) {
            return
        }
        parent[y1] += parent[x1]
        parent[x1] = y1
    }
 
    fun same(x: Int, y: Int) = find(x) == find(y)
 
    fun size(x: Int) = -parent[find(x)]
}
```

## 使用例

- AtCoder Library Practice Contest A - Disjoint Set Union ([問題](https://atcoder.jp/contests/practice2/tasks/practice2_a), [提出](https://atcoder.jp/contests/practice2/submissions/35023362))

## 仕組み

[Union Find](union-find) の解説をご覧ください。
