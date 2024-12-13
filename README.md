# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function doesn't seem to be called when the component unmounts.  The example involves a simple counter component where a `console.log` in the cleanup function should print 'Cleanup' when the component is unmounted.  However, this might not happen consistently depending on the circumstances.

## Problem
The provided `bug.js` file contains a component with a `useEffect` hook. The effect includes a cleanup function intended to execute when the component is unmounted. The issue lies in scenarios where the cleanup function is unexpectedly not called, leading to potential memory leaks or unexpected behavior.

## Solution
The `bugSolution.js` file offers a refined approach to ensure the cleanup function always executes properly. This is often done by making sure that the `useEffect` dependency array is correctly set up to trigger on relevant events.

## How to reproduce
1. Clone this repo.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs. The cleanup function may not be called in every case or could be called prematurely.

## How to solve
Refer to `bugSolution.js` for a corrected implementation.