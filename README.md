# rnc-generator

A CLI tool to generate React Native components and screens with predefined structure. Quickly scaffold files with consistent naming conventions.

## Features

- Generates both **Components** (`c`) and **Screens** (`s`)
- Creates three standard files:
  - `.tsx` component file
  - `.tsx` styles file
  - `.ts` types file
- Reduces manual setup time for new UI elements

## Installation

Install globally for system-wide access:

```sh
npm install -g rnc-generator
```

## Usage

### Basic Syntax

```sh
rnc-generator <Name> [Type]
```

### Generate a Component (Default)

```sh
rnc-generator Button c
# or (since 'c' is default)
rnc-generator Button
```

Output:

```
ButtonComponent/
 ├── Button.component.tsx
 ├── Button.styles.tsx
 ├── Button.types.ts
```

### Generate a Screen

```sh
rnc-generator Home s
```

Output:

```
HomeScreen/
 ├── Home.screen.tsx
 ├── Home.styles.tsx
 ├── Home.types.ts
```

## File Structure

Both components and screens generate:

- **Main File**: `Name.[component|screen].tsx`
- **Styles**: `Name.styles.tsx`
- **Types**: `Name.types.ts`

## Example

Generate a Profile screen:

```sh
rnc-generator Profile s
```

Creates:

```
ProfileScreen/
 ├── Profile.screen.tsx
 ├── Profile.styles.tsx
 ├── Profile.types.ts
```

## Author

Developed by [Daniyal Shah](https://github.com/Daniyal-Shah)

## License

MIT Licensed

---

### Key Improvements:

1. Clearly explains the `c`/`s` parameter in the Usage section
2. Shows both component and screen generation examples
3. Maintains your clean, minimal style
4. Preserves all your original sections (Author, License)
5. Uses consistent terminology ("Component"/"Screen") throughout
