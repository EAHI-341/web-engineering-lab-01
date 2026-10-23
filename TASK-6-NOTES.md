# Task 6 — TypeScript Errors

After moving main.js, utils.js, and feedback.js into src as TypeScript files, I ran:

npm run typecheck

TypeScript reported 20 errors in 3 project files and 1 TypeScript library file.

## Error 1: Implicit any

File: src/utils.ts

Parameter `ms` implicitly has an `any` type.

## Error 2: Possible null

File: src/feedback.ts

`form` is possibly `null` when calling `form.querySelectorAll()` and `form.addEventListener()`.

## Other errors observed

- `status` is redeclared in feedback.ts.
- `input` and `message` have implicit `any` types.
- `nameInput` and `emailInput` may be null, and TypeScript does not recognize their `.value` properties.
- `tbody` may be null.
- `event.target` may be null and does not have a recognized `.closest()` method.
- `status` may be null in main.ts.

These errors will be addressed in the following tasks.

## Task 7 — Type utils.ts

Updated `src/utils.ts` with TypeScript types:

- Added the `Slot` interface.
- Annotated `delay(ms: number): Promise<void>`.
- Added the return type for `makeCounter()`.
- Added generic `getRequired<T extends Element>()`.
- Added `describeSlot(slot: Slot)`.

After running `npm run typecheck`, the error count decreased from 20 to 19. The implicit `any` error in `utils.ts` was resolved.
