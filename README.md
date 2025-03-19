# rnc-generator

A simple CLI tool to generate React Native components with predefined structure. This tool helps you quickly scaffold component files with consistent naming conventions.

## Features

- Generates a React Native component with predefined structure.
- Creates a `.tsx` component file, `.tsx` styles file, and a `.ts` types file.
- Reduces manual work in setting up new components.

## Installation

To install globally, run:

```sh
npm install -g rnc-generator
```

## Usage

To generate a new component, run the following command in your project directory:

```sh
rnc-generator ComponentName
```

This will create the following files:

```
ComponentName/
 ├── ComponentName.component.tsx
 ├── ComponentName.styles.tsx
 ├── ComponentName.types.ts
```

## Example

Run:

```sh
rnc-generator Button
```

Output:

```
Button/
 ├── Button.component.tsx
 ├── Button.styles.tsx
 ├── Button.types.ts
```

## Author

Developed by [Daniyal Shah](https://github.com/Daniyal-Shah).

## License

This project is licensed under the MIT License.
