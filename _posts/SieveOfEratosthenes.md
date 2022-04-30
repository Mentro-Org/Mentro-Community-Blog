
title: "Sieve of Eratosthenes - An ancient algorithm for prime numbers upto any limit"
description: "This blog post is about Sieve of Eratosthenes which is an algorithm for finding all the prime numbers in a segment [1;n] using O(nloglogn) operations."
category: dsa

keywords: 
    - Mentro
   
author: aastha 
permalink: /dsa/:title/
tags:
    - prime number algorithm
    - dsa
    - sieve of eratosthenes
---


## Introduction
t is easy to find if some number (say N) is prime or not — you simply need to check if at least one number from numbers lower or equal sqrt(n) is divisor of N. This can be achieved by simple code:

boolean isPrime( int n ) {
    if ( n == 1 ) return false; // by definition, 1 is not prime number
    if ( n == 2 ) return true; // the only one even prime
    for ( int i = 2; i * i <= n; ++i )
        if ( n%i == 0 ) return false;
    return true;
}
So it takes sqrt(n) steps to check this. Of course you do not need to check all even numbers, so it can be "optimized" a bit:

boolean isPrime( int n ) {
    if ( n == 1 ) return false; // by definition, 1 is not prime number
    if ( n == 2 ) return true; // the only one even prime
    if ( n%2 == 0 ) return false; // check if is even
    for ( int i = 3; i * i <= n; i += 2 ) // for each odd number
        if ( n%i == 0 ) return false;
    return true;
}
So let say that it takes 0,5*sqrt(n) steps. That means it takes 500.000.000 steps to check that 1.000.000.007 is a prime.

But there is great idea — why to "do not check even numbers". This idea can be extended to: "do not divide N by candidate numbers, but mark the prime multiples as 'not prime'".

In other words: if we know about some number p, taht it is prime, we mark all multiples (2*p, 3*p, 4*p, ...) as not a prime. To implement this we need limit (max number we care about), let say it is 120 (because there is nice animation of algorithm on wikipedia).

In Java I'm using this code:

    private static final boolean[] isPrime = new boolean[121];
    static {
        Arrays.fill( isPrime, true ); // first we assume all numbers are primes if not shown otherwise
        isPrime[ 0 ] = false; // zero is not prime - it'is not greater than 1
        isPrime[ 1 ] = false; // one is not prime - it'is not greater than 1
        for ( int p = 2; p < isPrime.length; ++p ) {
            if ( isPrime[ p ] ) {
                for ( int m = 2; m * p < 121; ++m ) {
                    isPrime[ m * p ] = false;
                }
            }
        }
    }
Now, you can answer the question "is n prime" in constant time. Of course problems like this one are so simple, that you won't see it as problems, but it is subproblem of some more diffucult problem often.

You can memorize the primes too. And while it holds that even number multiply by whatever is even (and there is just one even prime number), you can skip all even m:

    private static final int LIMIT = 121;
    private static final boolean[] isPrime = new boolean[LIMIT + 1];
    private static ArrayList<Integer> primes = new ArrayList<Integer>();
    static {
        Arrays.fill( isPrime, true ); // first we assume all numbers are primes if not shown otherwise
        isPrime[ 0 ] = false; // zero is not prime - it'is not greater than 1
        isPrime[ 1 ] = false; // one is not prime - it'is not greater than 1
        isPrime[ 2 ] = true; // only one even prime
        primes.add( 2 );
        for ( int i = 4; i <= LIMIT; i += 2 ) {
            isPrime[ i ] = false;
        }
        for ( int p = 3; p <= LIMIT; p += 2 ) {
            if ( isPrime[ p ] ) {
                primes.add( p );
                for ( int m = 3; m * p < LIMIT; m += 2 ) {
                    isPrime[ m * p ] = false;
                }
            }
        }
    }


## Pseudo-Code for Selection Sort
private static final boolean[] isPrime = new boolean[121];
    static {
        Arrays.fill( isPrime, true ); // first we assume all numbers are primes if not shown otherwise
        isPrime[ 0 ] = false; // zero is not prime - it'is not greater than 1
        isPrime[ 1 ] = false; // one is not prime - it'is not greater than 1
        for ( int p = 2; p < isPrime.length; ++p ) {
            if ( isPrime[ p ] ) {
                for ( int m = 2; m * p < 121; ++m ) {
                    isPrime[ m * p ] = false;
                }
            }
        }
    }
Now, you can answer the question "is n prime" in constant time. Of course problems like this one are so simple, that you won't see it as problems, but it is subproblem of some more diffucult problem often.

You can memorize the primes too. And while it holds that even number multiply by whatever is even (and there is just one even prime number), you can skip all even m:

## Implementation of Sieve of Eratosthenes in Java
 private static final int LIMIT = 121;
    private static final boolean[] isPrime = new boolean[LIMIT + 1];
    private static ArrayList<Integer> primes = new ArrayList<Integer>();
    static {
        Arrays.fill( isPrime, true ); // first we assume all numbers are primes if not shown otherwise
        isPrime[ 0 ] = false; // zero is not prime - it'is not greater than 1
        isPrime[ 1 ] = false; // one is not prime - it'is not greater than 1
        isPrime[ 2 ] = true; // only one even prime
        primes.add( 2 );
        for ( int i = 4; i <= LIMIT; i += 2 ) {
            isPrime[ i ] = false;
        }
        for ( int p = 3; p <= LIMIT; p += 2 ) {
            if ( isPrime[ p ] ) {
                primes.add( p );
                for ( int m = 3; m * p < LIMIT; m += 2 ) {
                    isPrime[ m * p ] = false;
                }
            }
        }
    }


Maybe you would like to have primes in array instead of List — you can use toArray(int []) method or you find out how many prime numbers (lower than limit) there are. 


## Conclusion
The running time of block sieving is the same as for regular sieve of Eratosthenes (unless the size of the blocks is very small), but the needed memory will shorten to O(n‾√+S) and we have better caching results. On the other hand, there will be a division for each pair of a block and prime number from [1;n‾√], and that will be far worse for smaller block sizes. Hence, it is necessary to keep balance when selecting the constant S. We achieved the best results for block sizes between 104 and 105.