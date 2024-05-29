# Pyeong Converter

This package provides simple functions to convert between the Korean traditional area unit 'pyeong' and square meters. It's designed to help real estate professionals, architects, and anyone else needing to convert these units in documents, applications, or while working with real estate properties in Korea.

## What is 'Pyeong'?

'Pyeong' is a traditional Korean unit of area that is still commonly used in real estate and architecture within South Korea, despite the official use of square meters. One 'pyeong' equals approximately 3.3058 square meters. The unit is widely used in South Korea to describe the size of apartments, rooms, and buildings.

## Installation

You can install `pyeong-converter` using npm:

```bash
npm install pyeong-converter
```

## Usage

Here’s how to use pyeong-converter to convert areas between 'pyeong' and square meters:

```javascript
const {
  pyeongToSquareMeters,
  squareMetersToPyeong,
} = require("pyeong-converter");

// Convert from pyeong to square meters
console.log(pyeongToSquareMeters(1)); // Outputs approximately 3.3058

// Convert from square meters to pyeong
console.log(squareMetersToPyeong(10)); // Outputs approximately 3.025
```

## Functions

- **pyeongToSquareMeters(pyeong: number): number**

  - Converts a value from pyeong to square meters.

- **squareMetersToPyeong(squareMeters: number): number**
  - Converts a value from square meters to pyeong.

## License

This project is licensed under the MIT License
