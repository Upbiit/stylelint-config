# @upbiit/stylelint-config

Shareable Stylelint configuration optimized for SCSS projects.

Installation

1. Install this package (from local path or npm when published) and peer dependencies:

```bash
npm install --save-dev @upbiit/stylelint-config stylelint stylelint-scss stylelint-config-recommended-scss stylelint-config-prettier stylelint-order postcss-scss prettier
```

2. In your project root add a `.stylelintrc.js` that extends this config:

```js
module.exports = {
  extends: ['@upbiit/stylelint-config'],
};
```

Usage

Run the linter across your SCSS files:

```bash
npm run lint:style
```

Notes

- Indentation: 2 spaces
- Strings: single quotes
- Trailing semicolons are enforced
- Vendor-prefixed properties/values/selectors are disallowed
- Property order: alphabetical (can be customized)

Allowed units

- This config restricts units to: `rem`, `em`, `vw`, `vh`, and `%`.
- `0` must not include a unit (e.g., use `0` not `0px`).


Color rules

- Allows long hex (`#rrggbb`) and long hex with alpha (`#rrggbbaa`), but prefers functional notation (`rgb()`/`rgba()`/`hsl()`/`hsla()`).
- Hex values are enforced to be lowercase.
- Named colors (e.g., `red`) are disallowed.
- Function spacing is enforced to encourage modern syntax (spaces inside functions).

Note: preferring functional colors is documented here; if you want to make hex colors a hard error (completely disallow them), I can add stricter rules or a plugin to convert or forbid hex values.

Deprecated / unsupported features

- This config includes `stylelint-no-unsupported-browser-features` to flag deprecated or unsupported CSS features based on a browserslist target.
- Default target: `last 2 versions, >0.5%, not dead` (can be changed in the config or via your project's `browserslist`).
- Deprecated/unsupported usages are reported as errors by default.

Want changes?
Reply with any preference tweaks (property order, nesting depth, additional rules) and I'll update the config.