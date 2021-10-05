---
title: "Using forms effectively in React"
description: "This blog post is about using forms in React, how we can effectively submit forms to the backend"
category: frontend
image: /assets/images/categories/react.png
keywords: 
    - Mentro
    - forms
    - frontend
    - react
    - hooks
author: sayanta
permalink: /frontend/:title/
tags:
    - forms
    - frontend
    - react
    - hooks
    - jsx
---

Forms are a critical part of any frontend application, as it is an important way of collecting data from users. The way of collecting forms decides the user experience of that section of the application. After the introduction of React framework, controlled input fields have become quite popular. But this is where the problem arises. Let me continue in the next sections, what are the problems and how to resolve them.

## The Root
Modern react application uses the `useState()` hook for state changing. Now you have 2 options to update the form,
- Write a single state and update it using input field names as keys, i.e,
```
const [state,setState]=useState()
```
- Write multiple states for each input fields, i.e,
```
const [email,setEmail]=useState()
const [password,setPassword]=useState()
```
Now as we are using controlled forms, we are supposed to update the state, with each input from the user and update the value of the form. For e.g.,

```
    const [state,setState]=useState({
        email:"test@example.com",
        password:`*********`
    })

    return(
        <form>
            <input name="email" value={state.email}>
            <input name="password" value={state.password}>
        </form>
    )


```
So this is where the issue starts to rise. As you keep increasing the number of states, the value of the form input starts lagging, and at some point it takes seconds to update a single value. This happens because the whole state keeps on updating every single time an user enters a value. At this stage it is not possible to maintain multiple states because it will be just hard work and time consuming, So what to do?

## The Solution
There are multiple ways to handle this issue, for instance, brekaing the form into smaller subparts or steps, or using cool react tools like **React Form Hook**. But here I will discuss the vanilla Javascript solution.
The key here is to avoid controlled components, and rather do everything on the click of a button. I mean the submit button.
Here is an example for the same

```
    return(
        <form>
            <input name="email" value={state.email}>
            <input name="password" value={state.password}>
        </form>
    )
```

## Conclusion
Thus we learnt how we can handle large or small forms without controlling it on user input, and with a slight touch of vanilla JS to make life easier. 
