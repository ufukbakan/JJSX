<h1 align="center">
    <img src="https://raw.githubusercontent.com/ufukbakan/JJSX/refs/heads/main/logo.svg" height="120">
</h1>
<center>just jsx</center>

## What is JJSX
JJSX allows you to use JSX syntax in any typescript project.

## How does it work
Thanks to tsconfig, it overrides jsx & fragment factory methods.

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
    "types": ["jjsx"],
    // ...rest
  }
  // ...
}
```