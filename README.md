# JJSX

<img src="https://raw.githubusercontent.com/ufukbakan/JJSX/refs/heads/main/logo.svg" height="120">

![Bundle Size](https://deno.bundlejs.com/badge?q=jjsx)
![License](https://img.shields.io/npm/l/jjsx)
![Type Definitions](https://img.shields.io/npm/types/jjsx)
[![NPM Version](https://img.shields.io/npm/v/jjsx)](https://www.npmjs.com/package/jjsx)
[![Codecov](https://codecov.io/gh/ufukbakan/JJSX/graph/badge.svg?token=CB89J8L62M)](https://codecov.io/gh/ufukbakan/JJSX)
[![Build Status](https://github.com/ufukbakan/JJSX/actions/workflows/index.yml/badge.svg)](https://github.com/ufukbakan/JJSX/actions/workflows/index.yml)

***just jsx***

## What is JJSX
JJSX allows you to use JSX syntax in any project. Compatible with esbuild, tsup, tsconfig with bun etc...
It is framework agnostic & import cost is less than 1kb.

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