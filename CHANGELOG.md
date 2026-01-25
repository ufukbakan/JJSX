# v3.1.0
(2026-01-25)

## Changes merged from RC version:
- Better boolean attribute handling

## Documentation:
- README.md updated
- CHANGELOG.md updated

# v3.0.7-rc
(2026-01-25)

## Features:
- Better boolean attribute handling

# v3.0.6
(2026-01-22)

## Hotfix:
- Allow only string, number & boolean attributes

# v3.0.5
(2026-01-22)

## Changes:
- Completely omit falsy attributes

# v3.0.3 & v3.0.4
(2026-01-22)

## Changes:
- Fix handling falsy attributes

# v3.0.2 
(2026-01-13)

## Changes:
- Updated README.md

# v3.0.1 
(2026-01-13)

## Bug Fixes:
- Fixed type definitions

# v3.0.0 
(2026-01-12)

## Breaking Changes:
- Switched build format from CJS to ESM
- Renamed `JSX.Element<T>` to `JSX.Component<T>` for better compability
- Renamed `JSX.Renderable` to `JSX.Element` for better compability
- That means you can now use `JSX.Element` as a return type for components without generic parameter
- Renamed 'ElementProps' to 'ComponentProps' for better convention
- Updated type definitions to use `JSX.Element` as the primary renderable type
- Added attribute escaping for HTML special characters (&, ", ', <, >)

## Features:
- Added JSX.FunctionComponent<T> interface
- Added support for array children in components
- Added support for optional children in components
- Improved type safety for component props and children
- Added new test cases for array and optional children

## Bug Fixes:
- Fixed type definitions for better TypeScript support
- Reordered type checks in `transpile` for better type safety
- Improved handling of empty values in the transpiler
- Modified `transpile` function to handle number `0` as a valid renderable value