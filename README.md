# Recursion

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white)

Two classic problems solved with recursion in plain JavaScript and run with Node.js. This project is part of [The Odin Project's](https://www.theodinproject.com/) JavaScript curriculum, focused on thinking recursively: solving a problem by trusting the same function to solve a smaller version of it.

## Features

- **`fibs`:** Returns the first `n` numbers of the Fibonacci sequence, built iteratively with a `for` loop (`fibs(8)` → `[0, 1, 1, 2, 3, 5, 8, 13]`).
- **`fibsRec`:** The same result built recursively. It asks for the sequence of length `n - 1` and appends one number, the sum of its last two.
- **`mergeSort`:** Sorts an array of numbers by splitting it in half, recursively sorting each half, and merging the results (`mergeSort([3, 2, 1, 13, 8, 5, 0, 1])` → `[0, 1, 1, 2, 3, 5, 8, 13]`).
- **`merge`:** Combines two already sorted arrays into one by repeatedly taking the smaller of their first elements, then appending whatever is left over.
- **Edge Cases Covered:** Empty arrays, single-element arrays, `n` of `0`, `1` and `2`, and duplicate values.

## Key Learnings

- **Base Case + Recursive Step:** Handling the smallest inputs directly, then assuming the function already works for a smaller input and adding one step on top of that result.
- **Missing Base Cases:** Tracing a chain of `NaN`s back to `fibsRec(2)`, where the recursive step read two numbers from an array that only had one, and fixing it with an extra base case.
- **Reading From the End of an Array:** Learning that `arr[-1]` is `undefined` in JavaScript and using `arr.at(-1)` instead.
- **Nested Arrays:** Seeing that `push` adds an array as a single nested element, which explained an output of arrays inside arrays.
- **Divide and Conquer:** Splitting an array with `Math.floor` and `slice`, and why a one-element array is already sorted.
- **`while` Loops:** Looping until a condition fails when the number of iterations isn't known in advance, plus `shift()` to remove an array's first element.
- **Edge Cases in Comparisons:** Equal values made neither `>` nor `<` true, which would leave the merge loop running forever, and a single `=` silently assigns instead of comparing.
- **Node Tooling:** Installing `nodemon` as a dev dependency, running it through npm scripts, and keeping `node_modules` out of git with `.gitignore`.

## How to Run Locally

```bash
git clone https://github.com/LucasAzevedoTheDev/recursion.git
cd recursion
npm install
npm run fib    # runs fibonacci.js with nodemon
npm run merge  # runs merge-sort.js with nodemon
```

---
Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)
