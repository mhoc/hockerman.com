NTL-01 is an imperative, domain specific programming language for usage in programming phase array microcontrollers. NTL-01 has one primitive type, Number, which is represented in code as the letter `n` followed by any number of digits, e.g.

```
n42
```

Negative numbers may be represented through the use of two `n` characters before the literal number, e.g.

```
nn12 
```

Floating point numbers can be created through the use of the `f_div` function, but cannot otherwise be literally represented in the syntax:

```
f_div % n1 % n2 -->> v1
```

Variables in NTL-01 must be named of the form `v\d`, where `v` is the literal value `v` and `\d` is an incrementing identifier. Variables must be defined in the order of their incrementing identifier; for example, `v2` cannot be defined before `v1` is defined. No other variable names are allowed.

Variables may be assigned to by writing a number literal, variable reference, or function call, the `-->>` arrow assignment operator, then the name of the variable. E.g.:

```
nn54 -->> v1
v1 -->> v2
```

Numeric values and variables may be conditionally compared with the equals `=` and not equals `n=` operators. The result of this comparison is the numeric value `n1` for equivalence and `n0` for non-equivalence. E.g.

```
n5 -->> v1
n6 -->> v2
n5 = n6 -->> v3
v3 n= n5 -->> v4
```

You may conditionally evaluate statements by using the `when` keyword followed by either a numeric literal or a variable reference. If the conditional evaluates to any positive integer, the conditional will pass; otherwise it will fail. 

```
when v1 n5 -->> v1
```

Functions in NTL-01 may be called by specifying the function name, followed by the `%` symbol, then the list of arguments where each argument is either an number literal or a variable reference. Each function parameter should be separated from the next with an additional `%` symbol. E.g.:

```
f_plus % n1 % n2 
f_minus % n3 % n4 -->> v1
```

NTL-01 offers no ability for programs to define their own functions. Instead, they must use the available functions in the standard library. These functions include:
- `f_plus`: add two integer literals or variable references
- `f_minus`: subtract two integer literals or variable references
- `f_times`: multiply two integer literals or variable references
- `f_div`: divide two integer literals or variable references
- `f_say`: print the content of a number literal or variable reference
- `f_size`: returns the length of an array

Arrays may be created only via simply creating a parameter list of variables or integer literals, without a preceding function call, then assigning that to a variable. For example:

```
n1 % n2 % n3 -->> v1
```

The value stored at the index `n0` in the array may be retrieved and used anywhere a variable may be used through the array indexing operator `{` like so:

```
n5 % n6 % n7 -->> v1
f_say % v1{n1
```

The preceding code would print the integer literal `n5`, because arrays in NTL-01 are 1-indexed. Attempting to fetch the value of an index which is larger than the length of the array results in a runtime error.

To append new items to an existing array, you may use the append array operator `+`. Append operations are done in-place; this statement does not emit a value that can be assigned to further variables.

```
n6 % n7 % n8 -->> v1
v1+n8 
f_say % v1{n4
```

Indexes cannot be deleted from arrays.

Arrays may be iterated over using the `scan` keyword, followed by a reference to the variable which contains the array, and one variable declaration which will be given the index being iterated on during every loop. The variable declaration may not be previously declared. The body of a scan must be one statement which is executed for each item in the array. For example:

```
n1 % n2 % n3 -->> v1
scan v1 v2 f_say v2
```
