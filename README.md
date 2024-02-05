# Penchant for Pension

## Technologies

- Next 14 with server- and client components
- TypeScript
- Zod
- React Hook Form
- Tailwind
- React aria
- Eslint
- Playwright

## What does it do

When loading the calculator, the page server component parses the query parameters via Zod. If the parameters are valid the data from the parsed query params is used as initial data for the local state of the calculator. If not, fallback value are used. The calculations for the pension data on the right hand side are performed when the form is submitted and the submitted form values can be successfully parsed by Zod. Additionally, the query params are updated on submit as well. When the updated url is used in a different tab or the browser is refreshed the last state is restored from the query parameters.

## Issues

- React aria has a bug with the default enter submit, when using the number field: https://github.com/adobe/react-spectrum/issues/2802

## Improvements

- Enter submit
- Combine both schemas into one
- More elegant way to reset child components when server component is refreshed
