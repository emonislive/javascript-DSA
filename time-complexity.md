### Code Example

#### O(1) - Constant Time (Fastest)
```js
function constantExample() {
    const a = 1 + 2;
    console.log(a);
}
```

#### O(log n) - Logarithmic Time (2nd Fastest, e.g. keep dividing by 2)
```js
function logarithmicExample(n) {
    while (n > 1) {
        console.log(n);
        n = Math.floor(n / 2);
    }
}
```
#### O(n) - Linear Time
```js
function linearExample(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
```

#### O(n log n) - Linearithmic Time (e.g. loop with division inside)
```js
function linearithmicExample(n) {
    for (let i = 0; i < n; i++) {
        let m = n;
        while (m > 1) {
            console.log(i, m);
            m = Math.floor(m / 2);
        }
    }
}
```
#### O(n^2) - Quadratic Time
```js
function quadraticExample(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

#### O(n^3) - Cubic Time
```js
function cubicExample(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k);
            }
        }
    }
}
```

#### O(2^n) - Exponential Time
```js
function exponentialExample(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    return exponentialExample(n - 1) + exponentialExample(n - 2); // Fibonacci
}
```
#### O(n!) - Factorial Time
```js
function factorialExample(n) {
    if (n === 0) return [[]];
    const prev = factorialExample(n - 1);
    const result = [];
    for (const arr of prev) {
        for (let i = 0; i <= arr.length; i++) {
            const copy = arr.slice();
            copy.splice(i, 0, n);
            result.push(copy);
        }
    }
    return result; // generates all permutations
}
```

### Theory

#### Time Complexity Theory

##### 🔹 What is Time Complexity?
Time complexity describes **how the runtime of an algorithm grows** 
as the input size `n` increases.  
It’s expressed using **Big O notation**, which focuses on the **dominant term** 
(ignoring constants and lower-order terms).  

---

##### 🔹 Why Use Big O?
- To measure **scalability** (not just raw speed).  
- Helps compare algorithms regardless of hardware.  
- Example: An `O(n)` algorithm may be faster than `O(n²)` when `n` is large,
  even if it’s slower for small inputs.

---

##### 🔹 Common Complexities (with intuition & examples)

##### 1. O(1) – Constant Time
- Runtime does **not depend on input size**.  
- Example: Accessing an array element by index.  
- Even if `n` grows to millions, it’s still one step.  

---

##### 2. O(log n) – Logarithmic Time
- Runtime grows slowly as input increases.  
- Example: Binary Search (`n → n/2 → n/4 → …`).  
- Doubling `n` adds only **one extra step**.  
- Super efficient for large data.  

---

##### 3. O(n) – Linear Time
- Runtime grows **proportionally** with input size.  
- Example: Looping once through an array.  
- If `n` doubles, the steps also double.  

---

##### 4. O(n log n) – Linearithmic Time
- Typical for efficient **sorting algorithms** (Merge Sort, QuickSort).  
- Outer loop ~ `n`, inner work ~ `log n`.  
- Much faster than quadratic (`O(n²)`) for large inputs.  

---

##### 5. O(n²) – Quadratic Time
- Nested loops over the same input.  
- Example: Checking all pairs in a list.  
- If `n = 1000`, steps ≈ 1,000,000.  
- Gets slow very quickly.

---

##### 6. O(n³) – Cubic Time
- Triple nested loops.  
- Example: Checking all triples in a list.  
- Even worse scaling than quadratic.  

---

##### 7. O(2^n) – Exponential Time
- Runtime doubles with each additional input element.  
- Example: Recursive Fibonacci (without memoization).  
- Feasible only for small `n` (like `n < 40`).  

---

##### 8. O(n!) – Factorial Time
- Checks all **permutations** of input.  
- Example: Traveling Salesman brute force solution.  
- Completely impractical for even moderate `n` (e.g. `n=20`).  

---

#### 🔹 Rule of Thumb
- **Best**: O(1), O(log n), O(n) → scalable.  
- **Acceptable sometimes**: O(n log n).  
- **Bad**: O(n²), O(n³).  
- **Terrible**: O(2^n), O(n!).  

---
