<h1 align="center">
    <img src="https://raw.githubusercontent.com/ufukbakan/JJSX/refs/heads/main/logo.svg" height="120">
    <br/>
    <img alt="NPM License" src="https://img.shields.io/npm/l/jjsx">
    <img alt="NPM Type Definitions" src="https://img.shields.io/npm/types/jjsx">
    <a href="https://www.npmjs.com/package/jjsx"><img alt="NPM Version" src="https://img.shields.io/npm/v/jjsx"></a>
    <a href="https://codecov.io/gh/ufukbakan/JJSX" ><img src="https://codecov.io/gh/ufukbakan/JJSX/graph/badge.svg?token=CB89J8L62M"/></a>
    <a href="https://github.com/ufukbakan/JJSX/actions/workflows/index.yml"><img src="https://github.com/ufukbakan/JJSX/actions/workflows/index.yml/badge.svg" /></a>

</h1>
<center>just jsx</center>

## What is JJSX
JJSX allows you to use JSX syntax in any project. Compatible with esbuild, tsup, tsconfig with bun etc...
It is framework agnostic. 949 bytes (gzipped) import cost.

## How does it work
Thanks to tsconfig/esbuild, it overrides jsx & fragment factory methods.

## Why should I use JJSX
If you want to use JSX syntax without any other overhead, thats the most minimal library you can use.

## How to use JJSX
After installing jjsx, adding only 4 properties to tsconfig is enough:
```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "JJSX.jsxFactory",
    "jsxFragmentFactory": "JJSX.fragmentFactory",
    "lib": ["DOM"] // This is recommended but not required
    // ...rest
  }
  // ...
}
```