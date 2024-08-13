# React State Exercise

A React project demonstrating state management through a temperature component with dynamic styling and a counter component, both using class components and local state.


![logo](https://github.com/imlilac/Daneshkar-js-hw-4-ToDoList/blob/main/assets/img/banner.jpg)

## Table of Contents

- [The Challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Author](#author)

## The Challenge

1. **Temperature Component**: This component displays the current temperature and allows you to increase or decrease it using buttons. The temperature value updates dynamically, and the background color changes based on the temperature range.

    - **State**: 
      - `temp`: Stores the current temperature (initialized to 10℃).
      - `tempClass`: Determines the CSS class based on the temperature to apply the appropriate background color (either "cold" or "hot").

    - **Methods**:
      - `addHandler()`: Increases the temperature by 1 degree up to a maximum of 30℃. Changes the temperature class if it reaches or exceeds 15℃.
      - `minHandler()`: Decreases the temperature by 1 degree down to a minimum of 0℃. Changes the temperature class if it falls below 15℃.

2. **Counter Component**: This component displays a counter value and provides buttons to increment or decrement the count.

    - **State**:
      - `count`: Tracks the current counter value (initialized to 0).

    - **Methods**:
      - `addHandler()`: Increases the counter value by 1.
      - `minHandler()`: Decreases the counter value by 1.

Both components use React class components and local state management to handle their respective functionalities. Tailwind CSS is used for styling, providing a responsive and modern UI.


## Screenshot

![Screenshot](https://github.com/imlilac/counter-react/blob/main/public/screenshots/Screenshot%202024-08-11%20183107.png)

![Screenshot](https://github.com/imlilac/counter-react/blob/main/public/screenshots/Screenshot%202024-08-11%20194120.png)

## Built With

- Semantic HTML5 markup
- CSS (Tailwind)
- JavaScript
- React

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

 Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skin-beauty-react.git
   npm install
   npm start
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Author

-  Github - [imlilac](https://github.com/imlilac)
