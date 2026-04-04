console.log("Hello"); // Cold Code

function add(a, b) {
    return a + b;     // <--- THIS IS THE "HOT" CODE
}

let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1); // This loop makes 'add' hot
}

console.log("After 10000 calls:", result); // Cold Code


/*
1. The "Cold" Start
The console.log("Hello") runs exactly once. The engine interprets it and moves on. 
It’s "cold" because there is no benefit to spending time optimizing something that only happens once.

2. Warming Up
When the for loop starts, the engine begins tracking how many times add(a, b) is called.
 At first, it uses a baseline interpreter to run the function.

3. Going "Hot"
Once the loop hits a certain threshold (like your 10,000 iterations), 
the JIT compiler says: "Hey, we are spending a lot of time in the add function. Let’s optimize it!"

4. Optimization (Speculative Execution)
Because you are passing integers (i and i + 1) every single time, 
the JIT compiler makes an assumption: "I bet a and b will always be integers.
" It generates machine code that performs simple integer addition, which is incredibly fast.


Why does this matter?
Performance: Hot code is where 90% of your program's execution time usually happens.
 Optimizing just these small sections leads to massive speed gains.

De-optimization: If you suddenly called add("hello", "world") after 10,000 calls of 
integers, the engine would realize its "integer assumption" was wrong.
 It would de-optimize, throw away the fast machine code, and go back to the slow interpreter. 
 This is often called a "bailout."

Code Type	Frequency	    Execution Method
Cold Code	Rare / Once	    Interpreted (Slow but starts instantly)
Warm Code	Frequent	    Monitored by the Profiler
Hot Code	Very Frequent	Compiled to Native Machine Code (Very Fast)

*/
