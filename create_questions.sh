#!/bin/bash

# Sample data as an array of JSON objects
questionsList='[
    {
        "title": "Counter",
        "description": "Build a simple counter that increments whenever a button is clicked",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "16383 completed"
        ],
        "usersCompleted": 16383,
        "link": "/questions/user-interface/counter"
    },
    {
        "title": "Make Counter",
        "description": "Implement a function that accepts an integer value and returns a function that can be repeatedly called to return increasing values",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "5074 completed"
        ],
        "usersCompleted": 5074,
        "link": "/questions/javascript/make-counter"
    },
    {
        "title": "Mean",
        "description": "Implement a function that finds the mean of the values inside an array",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3302 completed"
        ],
        "usersCompleted": 3302,
        "link": "/questions/javascript/mean"
    },
    {
        "title": "Min By",
        "description": "Implement a function that finds the minimum element based on the specified criteria",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1192 completed"
        ],
        "usersCompleted": 1192,
        "link": "/questions/javascript/min-by"
    },
    {
        "title": "Stack",
        "description": "Implement a stack data structure containing the common stack methods",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "5689 completed"
        ],
        "usersCompleted": 5689,
        "link": "/questions/javascript/stack"
    },
    {
        "title": "Type Utilities",
        "description": "Implement utilities to determine primitive variable types in JavaScript",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "4862 completed"
        ],
        "usersCompleted": 4862,
        "link": "/questions/javascript/type-utilities"
    },
    {
        "title": "Contact Form",
        "description": "Build a contact form which submits user feedback and contact details to a back end API",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "8924 completed"
        ],
        "usersCompleted": 8924,
        "link": "/questions/user-interface/contact-form"
    },
    {
        "title": "Cycle",
        "description": "Implement a function that takes one or more values and returns a function that cycles through those values each time it is called",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2290 completed"
        ],
        "usersCompleted": 2290,
        "link": "/questions/javascript/cycle"
    },
    {
        "title": "Holy Grail",
        "description": "Build the famous holy grail layout consisting of a header, 3 columns, and a footer",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "7012 completed"
        ],
        "usersCompleted": 7012,
        "link": "/questions/user-interface/holy-grail"
    },
    {
        "title": "Insertion Sort",
        "description": "Implement a function that performs an insertion sort",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2558 completed"
        ],
        "usersCompleted": 2558,
        "link": "/questions/javascript/insertion-sort"
    },
    {
        "title": "Type Utilities II",
        "description": "Implement utilities to determine non-primitive variable types in JavaScript",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2163 completed"
        ],
        "usersCompleted": 2163,
        "link": "/questions/javascript/type-utilities-ii"
    },
    {
        "title": "Mortgage Calculator",
        "description": "Build a calculator that computes the monthly mortgage for a loan",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "1795 completed"
        ],
        "usersCompleted": 1795,
        "link": "/questions/user-interface/mortgage-calculator"
    },
    {
        "title": "Binary Search",
        "description": "Implement a function that performs binary search on an array of numbers",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "2811 completed"
        ],
        "usersCompleted": 2811,
        "link": "/questions/javascript/binary-search"
    },
    {
        "title": "Breadth-first Search",
        "description": "Implement a breadth-first search algorithm that traverses a directed graph in a breadth-first manner",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1255 completed"
        ],
        "usersCompleted": 1255,
        "link": "/questions/javascript/breadth-first-search"
    },
    {
        "title": "Count By",
        "description": "Implement a function that counts the number of times a value appears in an array based on a function or property name",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1470 completed"
        ],
        "usersCompleted": 1470,
        "link": "/questions/javascript/count-by"
    },
    {
        "title": "Debounce",
        "description": "Implement a function to limit how many times a function can be executed by delaying the execution of the function until after a specified time after its last execution attempt",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "4689 completed"
        ],
        "usersCompleted": 4689,
        "link": "/questions/javascript/debounce"
    },
    {
        "title": "Depth-first Search",
        "description": "Implement a depth-first search algorithm that traverses a directed graph in a depth-first manner",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1166 completed"
        ],
        "usersCompleted": 1166,
        "link": "/questions/javascript/depth-first-search"
    },
    {
        "title": "Heap Sort",
        "description": "Implement a function that performs a heap sort",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "417 completed"
        ],
        "usersCompleted": 417,
        "link": "/questions/javascript/heap-sort"
    },
    {
        "title": "Queue",
        "description": "Implement a queue data structure containing the common queue methods",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1230 completed"
        ],
        "usersCompleted": 1230,
        "link": "/questions/javascript/queue"
    },
    {
        "title": "Tabs",
        "description": "Build a tabs component that displays a list of tab elements and one associated panel of content at a time",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "2869 completed"
        ],
        "usersCompleted": 2869,
        "link": "/questions/user-interface/tabs"
    },
    {
        "title": "Classnames",
        "description": "Implement a function that conditionally joins CSS class names together",
        "difficulty": "Medium",
        "languages": [
            "CSS",
            "JS",
            "TS",
            "1899 completed"
        ],
        "usersCompleted": 1899,
        "link": "/questions/javascript/classnames"
    },
    {
        "title": "Event Emitter",
        "description": "Implement a class that can subscribe to and emit events that trigger attached callback functions",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "976 completed"
        ],
        "usersCompleted": 976,
        "link": "/questions/javascript/event-emitter"
    },
    {
        "title": "Flatten",
        "description": "Implement a function that recursively flattens an array into a single level deep",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "4481 completed"
        ],
        "usersCompleted": 4481,
        "link": "/questions/javascript/flatten"
    },
    {
        "title": "Merge Sort",
        "description": "Implement a function that performs a recursive merge sort",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "635 completed"
        ],
        "usersCompleted": 635,
        "link": "/questions/javascript/merge-sort"
    },
    {
        "title": "Promise.all",
        "description": "Implement the Promise.all() function that resolves to an array of results if all the input elements are resolved or rejects otherwise",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "2945 completed"
        ],
        "usersCompleted": 2945,
        "link": "/questions/javascript/promise-all"
    },
    {
        "title": "Quick Sort",
        "description": "Implement a function that performs a recursive quick sort",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "519 completed"
        ],
        "usersCompleted": 519,
        "link": "/questions/javascript/quick-sort"
    },
    {
        "title": "Todo List",
        "description": "Build a Todo list that lets users add new tasks and delete existing tasks",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "3877 completed"
        ],
        "usersCompleted": 3877,
        "link": "/questions/user-interface/todo-list"
    },
    {
        "title": "Topological Sort",
        "description": "Implement a function that performs a topological sort",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "201 completed"
        ],
        "usersCompleted": 201,
        "link": "/questions/javascript/topological-sort"
    },
    {
        "title": "Traffic Light",
        "description": "Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "1619 completed"
        ],
        "usersCompleted": 1619,
        "link": "/questions/user-interface/traffic-light"
    },
    {
        "title": "Deep Clone",
        "description": "Implement a function that performs a deep copy of a value",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1841 completed"
        ],
        "usersCompleted": 1841,
        "link": "/questions/javascript/deep-clone"
    },
    {
        "title": "Digital Clock",
        "description": "Build a 7-segment digital clock that shows the current time",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "982 completed"
        ],
        "usersCompleted": 982,
        "link": "/questions/user-interface/digital-clock"
    },
    {
        "title": "Job Board",
        "description": "Build a job board that displays the latest job postings from Hacker News",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "1188 completed"
        ],
        "usersCompleted": 1188,
        "link": "/questions/user-interface/job-board"
    },
    {
        "title": "Clamp",
        "description": "Implement a function to clamp a number within the inclusive lower and upper bounds",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "4048 completed"
        ],
        "usersCompleted": 4048,
        "link": "/questions/javascript/clamp"
    },
    {
        "title": "Function Length",
        "description": "Implement a function that returns the number of parameters expected by a function",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3824 completed"
        ],
        "usersCompleted": 3824,
        "link": "/questions/javascript/function-length"
    },
    {
        "title": "Number of Arguments",
        "description": "Implement a function that returns the number of arguments it was called with",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3273 completed"
        ],
        "usersCompleted": 3273,
        "link": "/questions/javascript/number-of-arguments"
    },
    {
        "title": "Sleep",
        "description": "Implement a function that pauses for a specified duration before resuming execution",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3249 completed"
        ],
        "usersCompleted": 3249,
        "link": "/questions/javascript/sleep"
    },
    {
        "title": "Array.prototype.square",
        "description": "Implement a custom Array.prototype.square() method that squares the values in an array",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3930 completed"
        ],
        "usersCompleted": 3930,
        "link": "/questions/javascript/array-square"
    },
    {
        "title": "Cancellable Interval",
        "description": "Implement a function that acts like setInterval but returns a function to cancel the interval",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2662 completed"
        ],
        "usersCompleted": 2662,
        "link": "/questions/javascript/cancellable-interval"
    },
    {
        "title": "Cancellable Timeout",
        "description": "Implement a function that acts like setTimeout but returns a function to cancel the pending callback",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2489 completed"
        ],
        "usersCompleted": 2489,
        "link": "/questions/javascript/cancellable-timeout"
    },
    {
        "title": "Chunk",
        "description": "Implement a function that creates an array of elements split into smaller groups of a specified size",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2631 completed"
        ],
        "usersCompleted": 2631,
        "link": "/questions/javascript/chunk"
    },
    {
        "title": "Compact",
        "description": "Implement a function that creates an array with all falsey values removed",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2606 completed"
        ],
        "usersCompleted": 2606,
        "link": "/questions/javascript/compact"
    },
    {
        "title": "Difference",
        "description": "Implement a function that finds the difference in values between arrays",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2280 completed"
        ],
        "usersCompleted": 2280,
        "link": "/questions/javascript/difference"
    },
    {
        "title": "Drop Right While",
        "description": "Implement a function that excludes elements from the end of an array until the predicate returns false",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1792 completed"
        ],
        "usersCompleted": 1792,
        "link": "/questions/javascript/drop-right-while"
    },
    {
        "title": "Drop While",
        "description": "Implement a function that excludes elements from the beginning of an array until the predicate returns false",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1633 completed"
        ],
        "usersCompleted": 1633,
        "link": "/questions/javascript/drop-while"
    },
    {
        "title": "Fill",
        "description": "Implement a function that fills an array with values within specified indices",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1467 completed"
        ],
        "usersCompleted": 1467,
        "link": "/questions/javascript/fill"
    },
    {
        "title": "Find Index",
        "description": "Implement a function that returns the index of the first element in the array that satisfies the provided testing function",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1512 completed"
        ],
        "usersCompleted": 1512,
        "link": "/questions/javascript/find-index"
    },
    {
        "title": "Find Last Index",
        "description": "Implement a function that returns the index of the last element in the array that satisfies the provided testing function",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1189 completed"
        ],
        "usersCompleted": 1189,
        "link": "/questions/javascript/find-last-index"
    },
    {
        "title": "From Pairs",
        "description": "Implement a function that returns an object composed from key-value pairs",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1620 completed"
        ],
        "usersCompleted": 1620,
        "link": "/questions/javascript/from-pairs"
    },
    {
        "title": "Function.prototype.apply",
        "description": "Implement the Function.prototype.apply() function that calls the function with a given `this` value and arguments as an array",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1188 completed"
        ],
        "usersCompleted": 1188,
        "link": "/questions/javascript/function-apply"
    },
    {
        "title": "Function.prototype.call",
        "description": "Implement the Function.prototype.call() function that calls the function with a given `this` value and provided arguments",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1134 completed"
        ],
        "usersCompleted": 1134,
        "link": "/questions/javascript/function-call"
    },
    {
        "title": "Get",
        "description": "Implement a function to safely access deeply-nested properties in JavaScript objects",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3003 completed"
        ],
        "usersCompleted": 3003,
        "link": "/questions/javascript/get"
    },
    {
        "title": "In Range",
        "description": "Implement a function to check if a number falls between two numbers",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1339 completed"
        ],
        "usersCompleted": 1339,
        "link": "/questions/javascript/in-range"
    },
    {
        "title": "Intersection",
        "description": "Implement a function that computes the intersection of arrays, returning a new array containing unique values present in all given arrays",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "970 completed"
        ],
        "usersCompleted": 970,
        "link": "/questions/javascript/intersection"
    },
    {
        "title": "Max By",
        "description": "Implement a function that finds the maximum element based on the specified criteria",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "328 completed"
        ],
        "usersCompleted": 328,
        "link": "/questions/javascript/max-by"
    },
    {
        "title": "Object Map",
        "description": "Implement a function to transform values within an object",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "921 completed"
        ],
        "usersCompleted": 921,
        "link": "/questions/javascript/object-map"
    },
    {
        "title": "Once",
        "description": "Implement a function that accepts a callback and restricts its invocation to at most once",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1521 completed"
        ],
        "usersCompleted": 1521,
        "link": "/questions/javascript/once"
    },
    {
        "title": "Promise.reject",
        "description": "Implement a function to return a Promise object rejected with a reason",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1407 completed"
        ],
        "usersCompleted": 1407,
        "link": "/questions/javascript/promise-reject"
    },
    {
        "title": "Range",
        "description": "Implement a function that returns a sequence of numbers in ascending order",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "248 completed"
        ],
        "usersCompleted": 248,
        "link": "/questions/javascript/range"
    },
    {
        "title": "Range Right",
        "description": "Implement a function that returns a sequence of numbers in descending order",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "184 completed"
        ],
        "usersCompleted": 184,
        "link": "/questions/javascript/range-right"
    },
    {
        "title": "Selection Sort",
        "description": "Implement a function that performs a selection sort",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1363 completed"
        ],
        "usersCompleted": 1363,
        "link": "/questions/javascript/selection-sort"
    },
    {
        "title": "Singleton",
        "description": "Implement a Singleton class that ensures a class has only one instance while providing a global point of access to that instance",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "567 completed"
        ],
        "usersCompleted": 567,
        "link": "/questions/javascript/singleton"
    },
    {
        "title": "Unique Array",
        "description": "Implement a function to remove all duplicate values from an array",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2691 completed"
        ],
        "usersCompleted": 2691,
        "link": "/questions/javascript/unique-array"
    },
    {
        "title": "Accordion",
        "description": "Build an accordion component that a displays a list of vertically stacked sections with each containing a title and content snippet",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "2276 completed"
        ],
        "usersCompleted": 2276,
        "link": "/questions/user-interface/accordion"
    },
    {
        "title": "Array.prototype.at",
        "description": "Implement the Array.prototype.at() method",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "864 completed"
        ],
        "usersCompleted": 864,
        "link": "/questions/javascript/array-at"
    },
    {
        "title": "Array.prototype.filter",
        "description": "Implement the Array.prototype.filter() method",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "3487 completed"
        ],
        "usersCompleted": 3487,
        "link": "/questions/javascript/array-filter"
    },
    {
        "title": "Array.prototype.map",
        "description": "Implement the Array.prototype.map() method",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2504 completed"
        ],
        "usersCompleted": 2504,
        "link": "/questions/javascript/array-map"
    },
    {
        "title": "Array.prototype.reduce",
        "description": "Implement the Array.prototype.reduce() method",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "2143 completed"
        ],
        "usersCompleted": 2143,
        "link": "/questions/javascript/array-reduce"
    },
    {
        "title": "Compose",
        "description": "Implement a function that takes multiple functions as arguments and returns a new function that applies those functions in reverse",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "713 completed"
        ],
        "usersCompleted": 713,
        "link": "/questions/javascript/compose"
    },
    {
        "title": "Flight Booker",
        "description": "Build a component that books a flight for specified dates",
        "difficulty": "Easy",
        "languages": [
            "React",
            "1316 completed"
        ],
        "usersCompleted": 1316,
        "link": "/questions/user-interface/flight-booker"
    },
    {
        "title": "Function.prototype.bind",
        "description": "Implement the Function.prototype.bind() function that creates a new function with the `this` keyword set to a provided value",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1919 completed"
        ],
        "usersCompleted": 1919,
        "link": "/questions/javascript/function-bind"
    },
    {
        "title": "Generate Table",
        "description": "Generate a table of numbers given the rows and columns",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "1201 completed"
        ],
        "usersCompleted": 1201,
        "link": "/questions/user-interface/generate-table"
    },
    {
        "title": "jQuery.css",
        "description": "Implement a jQuery-like function that sets the style of a DOM element",
        "difficulty": "Easy",
        "languages": [
            "HTML",
            "CSS",
            "JS",
            "TS",
            "2021 completed"
        ],
        "usersCompleted": 2021,
        "link": "/questions/javascript/jquery-css"
    },
    {
        "title": "Progress Bar",
        "description": "Build a progress bar component that shows the percentage completion of an operation",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "1989 completed"
        ],
        "usersCompleted": 1989,
        "link": "/questions/user-interface/progress-bar"
    },
    {
        "title": "Progress Bars",
        "description": "Build a list of progress bars that fill up gradually when they are added to the page",
        "difficulty": "Easy",
        "languages": [
            "React",
            "1127 completed"
        ],
        "usersCompleted": 1127,
        "link": "/questions/user-interface/progress-bars"
    },
    {
        "title": "Promise.race",
        "description": "Implement the Promise.race() function that resolves or rejects when any of the input elements are resolved or rejected",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1388 completed"
        ],
        "usersCompleted": 1388,
        "link": "/questions/javascript/promise-race"
    },
    {
        "title": "Size",
        "description": "Implement a function that returns the size of collection",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "598 completed"
        ],
        "usersCompleted": 598,
        "link": "/questions/javascript/size"
    },
    {
        "title": "Sum",
        "description": "Implement a function that sums numbers by accepting a number and allows for repeated calling with more numbers until it is not called with any number",
        "difficulty": "Easy",
        "languages": [
            "JS",
            "TS",
            "1513 completed"
        ],
        "usersCompleted": 1513,
        "link": "/questions/javascript/sum"
    },
    {
        "title": "Temperature Converter",
        "description": "Build a temperature converter widget that converts temperature values between Celsius and Fahrenheit",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "1675 completed"
        ],
        "usersCompleted": 1675,
        "link": "/questions/user-interface/temperature-converter"
    },
    {
        "title": "Tweet",
        "description": "Build a component that resembles a Tweet from Twitter",
        "difficulty": "Easy",
        "languages": [
            "React",
            "Vanilla JS",
            "971 completed"
        ],
        "usersCompleted": 971,
        "link": "/questions/user-interface/tweet"
    },
    {
        "title": "Make Counter II",
        "description": "Implement a function that returns a counter object with methods to retrieve and manipulate the value",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1127 completed"
        ],
        "usersCompleted": 1127,
        "link": "/questions/javascript/make-counter-ii"
    },
    {
        "title": "Array.prototype.concat",
        "description": "Implement the Array.prototype.concat() method",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "909 completed"
        ],
        "usersCompleted": 909,
        "link": "/questions/javascript/array-concat"
    },
    {
        "title": "Curry",
        "description": "Implement a function that transforms a function that takes multiple arguments into a function that can be repeatedly called with only one argument at a time",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "2527 completed"
        ],
        "usersCompleted": 2527,
        "link": "/questions/javascript/curry"
    },
    {
        "title": "Group By",
        "description": "Implement a function that groups values in an array based on a function or property name",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "647 completed"
        ],
        "usersCompleted": 647,
        "link": "/questions/javascript/group-by"
    },
    {
        "title": "Intersection By",
        "description": "Implement a function that returns an array of unique values that are included in all given arrays based on a provided iteratee function",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "434 completed"
        ],
        "usersCompleted": 434,
        "link": "/questions/javascript/intersection-by"
    },
    {
        "title": "Intersection With",
        "description": "Computes the intersection of arrays using a custom comparator function to determine equality between elements",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "354 completed"
        ],
        "usersCompleted": 354,
        "link": "/questions/javascript/intersection-with"
    },
    {
        "title": "Is Empty",
        "description": "Implement a function to check if a value is an empty object, collection, map, or set",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "589 completed"
        ],
        "usersCompleted": 589,
        "link": "/questions/javascript/is-empty"
    },
    {
        "title": "Limit",
        "description": "Implement a function that accepts a callback and restricts its invocation to at most N times",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "857 completed"
        ],
        "usersCompleted": 857,
        "link": "/questions/javascript/limit"
    },
    {
        "title": "Promise Merge",
        "description": "Implement a function to merge the results of two promises into a single value",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "715 completed"
        ],
        "usersCompleted": 715,
        "link": "/questions/javascript/promise-merge"
    },
    {
        "title": "Promise Timeout",
        "description": "Implement a function that resolves a promise if it is fulfilled within a timeout period and rejects otherwise",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "740 completed"
        ],
        "usersCompleted": 740,
        "link": "/questions/javascript/promise-timeout"
    },
    {
        "title": "Promise.resolve",
        "description": "Implement a function to resolve a given value to a Promise",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "672 completed"
        ],
        "usersCompleted": 672,
        "link": "/questions/javascript/promise-resolve"
    },
    {
        "title": "Promisify",
        "description": "Implement a function that takes a function following the common error-first callback style and returns a version that returns promises",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "740 completed"
        ],
        "usersCompleted": 740,
        "link": "/questions/javascript/promisify"
    },
    {
        "title": "Promisify II",
        "description": "Implement a promisify function that allows the original function to override the return value",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "292 completed"
        ],
        "usersCompleted": 292,
        "link": "/questions/javascript/promisify-ii"
    },
    {
        "title": "Throttle",
        "description": "Implement a function to control the execution of a function by limiting how many times it can execute over time",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "2048 completed"
        ],
        "usersCompleted": 2048,
        "link": "/questions/javascript/throttle"
    },
    {
        "title": "Turtle",
        "description": "Implement a Turtle class that moves a turtle on a 2D plane",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "307 completed"
        ],
        "usersCompleted": 307,
        "link": "/questions/javascript/turtle"
    },
    {
        "title": "Union By",
        "description": "Implement a function that creates an array of unique values, in order, from all given arrays.",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "135 completed"
        ],
        "usersCompleted": 135,
        "link": "/questions/javascript/union-by"
    },
    {
        "title": "Accordion II",
        "description": "Build an accessible accordion component that has the right ARIA roles, states, and properties",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "484 completed"
        ],
        "usersCompleted": 484,
        "link": "/questions/user-interface/accordion-ii"
    },
    {
        "title": "Accordion III",
        "description": "Build a fully accessible accordion component that has keyboard support according to ARIA specifications",
        "difficulty": "Medium",
        "languages": [
            "React",
            "248 completed"
        ],
        "usersCompleted": 248,
        "link": "/questions/user-interface/accordion-iii"
    },
    {
        "title": "Analog Clock",
        "description": "Build an analog clock where the hands update and move like a real clock",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "424 completed"
        ],
        "usersCompleted": 424,
        "link": "/questions/user-interface/analog-clock"
    },
    {
        "title": "Camel Case Keys",
        "description": "Implement a function to convert all the keys in an object to camel case",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "704 completed"
        ],
        "usersCompleted": 704,
        "link": "/questions/javascript/camel-case-keys"
    },
    {
        "title": "Compact II",
        "description": "Implement a function that returns an object with all falsey values removed",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "250 completed"
        ],
        "usersCompleted": 250,
        "link": "/questions/javascript/compact-ii"
    },
    {
        "title": "Conforms To",
        "description": "Implement a function that checks if object conforms to source",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "67 completed"
        ],
        "usersCompleted": 67,
        "link": "/questions/javascript/conforms-to"
    },
    {
        "title": "Curry II",
        "description": "Implement a function that transforms a function that takes multiple arguments into a function that can be repeatedly called with any number of arguments",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "874 completed"
        ],
        "usersCompleted": 874,
        "link": "/questions/javascript/curry-ii"
    },
    {
        "title": "Data Merging",
        "description": "Implement a function to merge rows of data from the same user",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "302 completed"
        ],
        "usersCompleted": 302,
        "link": "/questions/javascript/data-merging"
    },
    {
        "title": "Debounce II",
        "description": "Implement a debounce function that comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke them",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "723 completed"
        ],
        "usersCompleted": 723,
        "link": "/questions/javascript/debounce-ii"
    },
    {
        "title": "Event Emitter II",
        "description": "Implement a class that can subscribe to and emit events that trigger attached callback functions. Subscription objects are returned and can unsubscribe itself",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "473 completed"
        ],
        "usersCompleted": 473,
        "link": "/questions/javascript/event-emitter-ii"
    },
    {
        "title": "getElementsByTagName",
        "description": "Implement a function to get all DOM elements that match a tag",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "JS",
            "TS",
            "1322 completed"
        ],
        "usersCompleted": 1322,
        "link": "/questions/javascript/get-elements-by-tag-name"
    },
    {
        "title": "Grid Lights",
        "description": "Build a grid of lights where the lights deactivate in the reverse order they were activated",
        "difficulty": "Medium",
        "languages": [
            "React",
            "635 completed"
        ],
        "usersCompleted": 635,
        "link": "/questions/user-interface/grid-lights"
    },
    {
        "title": "HTML Serializer",
        "description": "Implement a function to serialize an object into an HTML string with indentation",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "JS",
            "TS",
            "333 completed"
        ],
        "usersCompleted": 333,
        "link": "/questions/javascript/html-serializer"
    },
    {
        "title": "Identical DOM Trees",
        "description": "Implement a function to determine if two DOM trees are the same",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "JS",
            "TS",
            "716 completed"
        ],
        "usersCompleted": 716,
        "link": "/questions/javascript/identical-dom-trees"
    },
    {
        "title": "jQuery Class Manipulation",
        "description": "Implement a set of jQuery-like functions that manipulates classes on a DOM element",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "CSS",
            "JS",
            "TS",
            "504 completed"
        ],
        "usersCompleted": 504,
        "link": "/questions/javascript/jquery-class-manipulation"
    },
    {
        "title": "JSON.stringify",
        "description": "Implement a function that converts a JavaScript value into a JSON string",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "501 completed"
        ],
        "usersCompleted": 501,
        "link": "/questions/javascript/json-stringify"
    },
    {
        "title": "Like Button",
        "description": "Build a Like button that changes appearance based on the states",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "752 completed"
        ],
        "usersCompleted": 752,
        "link": "/questions/user-interface/like-button"
    },
    {
        "title": "List Format",
        "description": "Implement a function that formats a list of items into a single readable string",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1186 completed"
        ],
        "usersCompleted": 1186,
        "link": "/questions/javascript/list-format"
    },
    {
        "title": "Map Async",
        "description": "Implement a function that maps an array of items with an asynchronous mapping function",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "354 completed"
        ],
        "usersCompleted": 354,
        "link": "/questions/javascript/map-async"
    },
    {
        "title": "Memoize",
        "description": "Implement a function that returns a memoized version of a function which accepts a single argument",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "392 completed"
        ],
        "usersCompleted": 392,
        "link": "/questions/javascript/memoize"
    },
    {
        "title": "Progress Bars II",
        "description": "Build a list of progress bars that fill up gradually in sequence, one at a time",
        "difficulty": "Medium",
        "languages": [
            "React",
            "429 completed"
        ],
        "usersCompleted": 429,
        "link": "/questions/user-interface/progress-bars-ii"
    },
    {
        "title": "Promise.allSettled",
        "description": "Implement the Promise.allSettled() function that resolves to an array of outcomes when all the input elements are either resolved or rejected",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "877 completed"
        ],
        "usersCompleted": 877,
        "link": "/questions/javascript/promise-all-settled"
    },
    {
        "title": "Promise.any",
        "description": "Implement the Promise.any() function that resolves when any of the input elements are resolved",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1054 completed"
        ],
        "usersCompleted": 1054,
        "link": "/questions/javascript/promise-any"
    },
    {
        "title": "Resumable Interval",
        "description": "Implement a function that creates a resumable interval object",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "209 completed"
        ],
        "usersCompleted": 209,
        "link": "/questions/javascript/resumable-interval"
    },
    {
        "title": "Squash Object",
        "description": "Implement a function that returns a new object after squashing the input object into a single level of depth",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "533 completed"
        ],
        "usersCompleted": 533,
        "link": "/questions/javascript/squash-object"
    },
    {
        "title": "Star Rating",
        "description": "Build a star rating component that shows a row of star icons for users to select the number of filled stars corresponding to the rating",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "1467 completed"
        ],
        "usersCompleted": 1467,
        "link": "/questions/user-interface/star-rating"
    },
    {
        "title": "Tabs II",
        "description": "Build a semi-accessible tabs component that has the right ARIA roles, states, and properties",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "284 completed"
        ],
        "usersCompleted": 284,
        "link": "/questions/user-interface/tabs-ii"
    },
    {
        "title": "Tabs III",
        "description": "Build a fully accessible tabs component that has keyboard support according to ARIA specifications",
        "difficulty": "Medium",
        "languages": [
            "React",
            "175 completed"
        ],
        "usersCompleted": 175,
        "link": "/questions/user-interface/tabs-iii"
    },
    {
        "title": "Text Search",
        "description": "Implement a function to highlight text if a searched term appears within it",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "JS",
            "TS",
            "641 completed"
        ],
        "usersCompleted": 641,
        "link": "/questions/javascript/text-search"
    },
    {
        "title": "Deep Equal",
        "description": "Implement a function that determines if two values are equal",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "1116 completed"
        ],
        "usersCompleted": 1116,
        "link": "/questions/javascript/deep-equal"
    },
    {
        "title": "Deep Map",
        "description": "Implement a function to recursively transform values",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "189 completed"
        ],
        "usersCompleted": 189,
        "link": "/questions/javascript/deep-map"
    },
    {
        "title": "getElementsByClassName",
        "description": "Implement a function to get all DOM elements that contain the specified classes",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "CSS",
            "JS",
            "TS",
            "661 completed"
        ],
        "usersCompleted": 661,
        "link": "/questions/javascript/get-elements-by-class-name"
    },
    {
        "title": "Map Async Limit",
        "description": "Implement a function that maps an array of items with an asynchronous mapping function while not exceeding the concurrency limit",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "191 completed"
        ],
        "usersCompleted": 191,
        "link": "/questions/javascript/map-async-limit"
    },
    {
        "title": "Progress Bars III",
        "description": "Build a list of progress bars that fill up gradually concurrently, up to a limit of 3",
        "difficulty": "Medium",
        "languages": [
            "React",
            "283 completed"
        ],
        "usersCompleted": 283,
        "link": "/questions/user-interface/progress-bars-iii"
    },
    {
        "title": "Text Search II",
        "description": "Implement a function to highlight text if searched terms appear within it",
        "difficulty": "Medium",
        "languages": [
            "HTML",
            "JS",
            "TS",
            "221 completed"
        ],
        "usersCompleted": 221,
        "link": "/questions/javascript/text-search-ii"
    },
    {
        "title": "Tic-tac-toe",
        "description": "Build a tic-tac-toe game that is playable by two players",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "502 completed"
        ],
        "usersCompleted": 502,
        "link": "/questions/user-interface/tic-tac-toe"
    },
    {
        "title": "Deep Merge",
        "description": "Implement a function that merges two objects together",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "155 completed"
        ],
        "usersCompleted": 155,
        "link": "/questions/javascript/deep-merge"
    },
    {
        "title": "Deep Omit",
        "description": "Implement a function that removes specified keys and their corresponding values from an object, including nested objects or arrays",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "147 completed"
        ],
        "usersCompleted": 147,
        "link": "/questions/javascript/deep-omit"
    },
    {
        "title": "Memoize II",
        "description": "Implement a function that returns a memoized version of a function which accepts any number of arguments",
        "difficulty": "Medium",
        "languages": [
            "JS",
            "TS",
            "267 completed"
        ],
        "usersCompleted": 267,
        "link": "/questions/javascript/memoize-ii"
    },
    {
        "title": "Signup Form",
        "description": "Build a signup form that does validation on user details and submits to a back end API",
        "difficulty": "Medium",
        "languages": [
            "Vanilla JS",
            "522 completed"
        ],
        "usersCompleted": 522,
        "link": "/questions/user-interface/signup-form"
    },
    {
        "title": "Stopwatch",
        "description": "Build a stopwatch widget that can measure how much time has passed",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Vanilla JS",
            "Angular",
            "Svelte",
            "369 completed"
        ],
        "usersCompleted": 369,
        "link": "/questions/user-interface/stopwatch"
    },
    {
        "title": "Transfer List",
        "description": "Build a component that allows transferring of items between two lists",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "387 completed"
        ],
        "usersCompleted": 387,
        "link": "/questions/user-interface/transfer-list"
    },
    {
        "title": "Undoable Counter",
        "description": "Build a counter with a history of the values and ability to undo/redo actions",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "300 completed"
        ],
        "usersCompleted": 300,
        "link": "/questions/user-interface/undoable-counter"
    },
    {
        "title": "Whack-A-Mole",
        "description": "Build a popular arcade game where players attempt to hit moles as they pop up from holes in a board",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "154 completed"
        ],
        "usersCompleted": 154,
        "link": "/questions/user-interface/whack-a-mole"
    },
    {
        "title": "Memory Game",
        "description": "Build a memory game where the player needs to match pairs of cards",
        "difficulty": "Medium",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "170 completed"
        ],
        "usersCompleted": 170,
        "link": "/questions/user-interface/memory-game"
    },
    {
        "title": "Curry III",
        "description": "Implement a function which transforms a function which takes variadic arguments into a function that can be repeatedly called with any number of arguments",
        "difficulty": "Hard",
        "languages": [
            "JS",
            "TS",
            "184 completed"
        ],
        "usersCompleted": 184,
        "link": "/questions/javascript/curry-iii"
    },
    {
        "title": "Classnames II",
        "description": "Implement a function that conditionally joins CSS class names together and also handles de-duplication and function values",
        "difficulty": "Hard",
        "languages": [
            "CSS",
            "JS",
            "TS",
            "98 completed"
        ],
        "usersCompleted": 98,
        "link": "/questions/javascript/classnames-ii"
    },
    {
        "title": "Progress Bars IV",
        "description": "Build a list of progress bars that fill up gradually concurrently, up to a limit of 3 and allows for pausing and resuming",
        "difficulty": "Hard",
        "languages": [
            "React",
            "135 completed"
        ],
        "usersCompleted": 135,
        "link": "/questions/user-interface/progress-bars-iv"
    },
    {
        "title": "Backbone Model",
        "description": "Implement a class resembling Backbone.Model which allows storing of attributes/values and responding to changes in specific attribute values",
        "difficulty": "Hard",
        "languages": [
            "JS",
            "TS",
            "85 completed"
        ],
        "usersCompleted": 85,
        "link": "/questions/javascript/backbone-model"
    },
    {
        "title": "Data Selection",
        "description": "Implement a function to filter rows of data matching a specified requirement",
        "difficulty": "Hard",
        "languages": [
            "JS",
            "TS",
            "366 completed"
        ],
        "usersCompleted": 366,
        "link": "/questions/javascript/data-selection"
    },
    {
        "title": "Table of Contents",
        "description": "Implement a function to construct a table of contents from an HTML document",
        "difficulty": "Hard",
        "languages": [
            "HTML",
            "JS",
            "TS",
            "213 completed"
        ],
        "usersCompleted": 213,
        "link": "/questions/javascript/table-of-contents"
    },
    {
        "title": "Tic-tac-toe II",
        "description": "Build an N x N tic-tac-toe game that requires M consecutive marks to win",
        "difficulty": "Hard",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "106 completed"
        ],
        "usersCompleted": 106,
        "link": "/questions/user-interface/tic-tac-toe-ii"
    },
    {
        "title": "Transfer List II",
        "description": "Build a component that allows transferring of items between two lists, bulk selection/unselection of items, and adding of new items",
        "difficulty": "Hard",
        "languages": [
            "React",
            "114 completed"
        ],
        "usersCompleted": 114,
        "link": "/questions/user-interface/transfer-list-ii"
    },
    {
        "title": "Deep Clone II",
        "description": "Implement a function that performs a deep copy of a value, but also handles circular references",
        "difficulty": "Hard",
        "languages": [
            "JS",
            "TS",
            "113 completed"
        ],
        "usersCompleted": 113,
        "link": "/questions/javascript/deep-clone-ii"
    },
    {
        "title": "JSON.stringify II",
        "description": "Implement a function that converts a JavaScript value into a JSON string",
        "difficulty": "Hard",
        "languages": [
            "JS",
            "TS",
            "65 completed"
        ],
        "usersCompleted": 65,
        "link": "/questions/javascript/json-stringify-ii"
    },
    {
        "title": "Wordle",
        "description": "Build Wordle, the word-guessing game that took the world by storm",
        "difficulty": "Hard",
        "languages": [
            "React",
            "Angular",
            "Svelte",
            "77 completed"
        ],
        "usersCompleted": 77,
        "link": "/questions/user-interface/wordle"
    }
]'

# Create directory structure and files
for row in $(echo "${questionsList}" | jq -r '.[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    title=$(_jq '.title')
    description=$(_jq '.description')
    difficulty=$(_jq '.difficulty')
    link=$(_jq '.link')

    # Extract the path from the link
    path=$(echo ${link} | sed 's#/questions/##')

    # Create the main directory based on difficulty
    mkdir -p "questions/${difficulty}/${path}"

    # Create solution.js and question.js files
    touch "questions/${difficulty}/${path}/solution.js"
    touch "questions/${difficulty}/${path}/question.md"
done
