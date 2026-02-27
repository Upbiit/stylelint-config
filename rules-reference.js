// Complete list of Stylelint core rules, stylelint-scss, stylelint-order, 
// and stylelint-no-unsupported-browser-features rules with default values
// Applicable to SCSS files

module.exports = {
  // ===== STYLELINT CORE RULES - AVOID ERRORS =====
  
  // Deprecated
  'at-rule-no-deprecated': true,
  'declaration-property-value-keyword-no-deprecated': true,
  'media-type-no-deprecated': true,
  'property-no-deprecated': true,
  
  // Descending
  'no-descending-specificity': null,
  
  // Duplicate
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-duplicate-properties': true,
  'font-family-no-duplicate-names': true,
  'keyframe-block-no-duplicate-selectors': true,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  
  // Empty
  'block-no-empty': true,
  'comment-no-empty': true,
  'no-empty-source': true,
  
  // Invalid
  'at-rule-prelude-no-invalid': true,
  'color-no-invalid-hex': true,
  'function-calc-no-unspaced-operator': true,
  'keyframe-declaration-no-important': true,
  'media-query-no-invalid': true,
  'named-grid-areas-no-invalid': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
  'no-invalid-position-declaration': true,
  'string-no-newline': true,
  'syntax-string-no-invalid': true,
  
  // Irregular
  'no-irregular-whitespace': true,
  
  // Missing
  'custom-property-no-missing-var-function': true,
  'font-family-no-missing-generic-family-keyword': true,
  'nesting-selector-no-missing-scoping-root': true,
  
  // Non-standard
  'function-linear-gradient-no-nonstandard-direction': true,
  
  // Overrides
  'declaration-block-no-shorthand-property-overrides': true,
  
  // Unmatchable
  'selector-anb-no-unmatchable': true,
  
  // Unknown
  'annotation-no-unknown': true,
  'at-rule-descriptor-no-unknown': true,
  'at-rule-descriptor-value-no-unknown': true,
  'at-rule-no-unknown': true,
  'declaration-property-value-no-unknown': true,
  'function-no-unknown': true,
  'media-feature-name-no-unknown': true,
  'media-feature-name-value-no-unknown': true,
  'no-unknown-animations': true,
  'no-unknown-custom-media': true,
  'no-unknown-custom-properties': true,
  'property-no-unknown': true,
  'selector-pseudo-class-no-unknown': true,
  'selector-pseudo-element-no-unknown': true,
  'selector-type-no-unknown': true,
  'unit-no-unknown': true,
  
  // ===== STYLELINT CORE RULES - ENFORCE CONVENTIONS =====
  
  // Allowed, disallowed & required - At-rule
  'at-rule-allowed-list': null,
  'at-rule-disallowed-list': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': null,
  
  // Allowed, disallowed & required - Color
  'color-hex-alpha': null,
  'color-named': null,
  'color-no-hex': null,
  
  // Allowed, disallowed & required - Comment
  'comment-word-disallowed-list': null,
  
  // Allowed, disallowed & required - Declaration
  'declaration-no-important': null,
  'declaration-property-unit-allowed-list': null,
  'declaration-property-unit-disallowed-list': null,
  'declaration-property-value-allowed-list': null,
  'declaration-property-value-disallowed-list': null,
  
  // Allowed, disallowed & required - Function
  'function-allowed-list': null,
  'function-disallowed-list': null,
  'function-url-no-scheme-relative': true,
  'function-url-scheme-allowed-list': null,
  'function-url-scheme-disallowed-list': null,
  
  // Allowed, disallowed & required - Length
  'length-zero-no-unit': true,
  
  // Allowed, disallowed & required - Media feature
  'media-feature-name-allowed-list': null,
  'media-feature-name-disallowed-list': null,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-unit-allowed-list': null,
  'media-feature-name-value-allowed-list': null,
  
  // Allowed, disallowed & required - Property
  'property-allowed-list': null,
  'property-disallowed-list': null,
  'property-no-vendor-prefix': true,
  
  // Allowed, disallowed & required - Rule
  'rule-nesting-at-rule-required-list': null,
  'rule-selector-property-disallowed-list': null,
  
  // Allowed, disallowed & required - Selector
  'selector-attribute-name-disallowed-list': null,
  'selector-attribute-operator-allowed-list': null,
  'selector-attribute-operator-disallowed-list': null,
  'selector-combinator-allowed-list': null,
  'selector-combinator-disallowed-list': null,
  'selector-disallowed-list': null,
  'selector-no-qualifying-type': true,
  'selector-no-vendor-prefix': true,
  'selector-pseudo-class-allowed-list': null,
  'selector-pseudo-class-disallowed-list': null,
  'selector-pseudo-element-allowed-list': null,
  'selector-pseudo-element-disallowed-list': null,
  
  // Allowed, disallowed & required - Unit
  'unit-allowed-list': null,
  'unit-disallowed-list': null,
  
  // Allowed, disallowed & required - Value
  'value-no-vendor-prefix': true,
  
  // Case
  'function-name-case': 'lower',
  'selector-type-case': 'lower',
  'value-keyword-case': 'lower',
  
  // Empty lines
  'at-rule-empty-line-before': 'always',
  'comment-empty-line-before': 'always',
  'custom-property-empty-line-before': 'always',
  'declaration-empty-line-before': 'never',
  'rule-empty-line-before': 'always',
  
  // Max & min
  'declaration-block-single-line-max-declarations': 1,
  'declaration-property-max-values': null,
  'max-nesting-depth': null,
  'number-max-precision': null,
  'selector-max-attribute': null,
  'selector-max-class': null,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': null,
  'selector-max-id': null,
  'selector-max-pseudo-class': null,
  'selector-max-specificity': null,
  'selector-max-type': null,
  'selector-max-universal': null,
  'time-min-milliseconds': null,
  
  // Notation
  'alpha-value-notation': 'percentage',
  'color-function-alias-notation': 'modern',
  'color-function-notation': 'modern',
  'color-hex-length': 'short',
  'display-notation': null,
  'font-weight-notation': null,
  'hue-degree-notation': 'number',
  'import-notation': 'string',
  'keyframe-selector-notation': 'percentage',
  'lightness-notation': 'percentage',
  'media-feature-range-notation': 'prefix',
  'selector-not-notation': 'simple',
  'selector-pseudo-element-colon-notation': 'double',
  
  // Pattern
  'comment-pattern': null,
  'container-name-pattern': null,
  'custom-media-pattern': null,
  'custom-property-pattern': null,
  'keyframes-name-pattern': null,
  'layer-name-pattern': null,
  'selector-class-pattern': null,
  'selector-id-pattern': null,
  'selector-nested-pattern': null,
  
  // Quotes
  'font-family-name-quotes': 'always-unless-keyword',
  'function-url-quotes': 'always',
  'selector-attribute-quotes': 'always',
  
  // Redundant
  'block-no-redundant-nested-style-rules': true,
  'declaration-block-no-redundant-longhand-properties': true,
  'shorthand-property-no-redundant-values': true,
  
  // Whitespace inside
  'comment-whitespace-inside': 'always',
  
  // ===== STYLELINT CORE RULES - SPACING =====
  
  'at-rule-name-newline-after': null,
  'at-rule-name-space-after': 'always',
  'at-rule-semicolon-newline-after': 'always',
  'at-rule-semicolon-space-before': 'never',
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always',
  'block-closing-brace-space-after': 'always-single-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-opening-brace-newline-after': 'always',
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-colon-newline-after': null,
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': 'never',
  'declaration-block-semicolon-space-after': 'never',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-trailing-semicolon': 'always',
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'function-comma-space-after': 'always-single-line',
  'function-comma-space-before': 'never',
  'function-max-empty-lines': 0,
  'function-parentheses-newline-inside': 'always-multi-line',
  'function-parentheses-space-inside': 'never-single-line',
  'function-whitespace-after': 'always',
  'indentation': 2,
  'linebreaks': null,
  'max-empty-lines': 1,
  'max-line-length': null,
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-case': 'lower',
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',
  'media-query-list-comma-newline-after': 'always-multi-line',
  'media-query-list-comma-newline-before': 'never-multi-line',
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never',
  'no-eol-whitespace': true,
  'no-missing-end-of-source-newline': true,
  'property-case': 'lower',
  'selector-argument-brackets-space-inside': 'never',
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-newline-before': 'never-multi-line',
  'selector-list-comma-space-after': 'always-single-line',
  'selector-list-comma-space-before': 'never',
  'selector-max-empty-lines': 0,
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'string-quotes': 'double',
  'unit-case': 'lower',
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-newline-before': 'never-multi-line',
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  
  // ===== STYLELINT-SCSS PLUGIN RULES =====
  
  // @-each
  'scss/at-each-key-value-single-line': null,
  
  // @-else
  'scss/at-else-closing-brace-newline-after': 'always',
  'scss/at-else-closing-brace-space-after': 'always',
  'scss/at-else-empty-line-before': 'never',
  'scss/at-else-if-parentheses-space-before': 'never',
  
  // @-extend
  'scss/at-extend-no-missing-placeholder': true,
  
  // @-function
  'scss/at-function-named-arguments': null,
  'scss/at-function-parentheses-space-before': 'never',
  'scss/at-function-pattern': null,
  
  // @-if
  'scss/at-if-closing-brace-newline-after': 'always',
  'scss/at-if-closing-brace-space-after': 'always',
  'scss/at-if-no-null': true,
  
  // @-import
  'scss/at-import-partial-extension-allowed-list': null,
  'scss/at-import-partial-extension-disallowed-list': null,
  
  // @-mixin
  'scss/at-mixin-argumentless-call-parentheses': 'never',
  'scss/at-mixin-named-arguments': null,
  'scss/at-mixin-no-risky-nesting-selector': null,
  'scss/at-mixin-parentheses-space-before': 'never',
  'scss/at-mixin-pattern': null,
  
  // @-rule
  'scss/at-rule-conditional-no-parentheses': true,
  'scss/at-rule-no-unknown': true,
  
  // @-use
  'scss/at-use-no-unnamespaced': true,
  'scss/at-use-no-redundant-alias': true,
  
  // $-variable
  'scss/dollar-variable-colon-newline-after': 'always',
  'scss/dollar-variable-colon-space-after': 'at-least-one-space',
  'scss/dollar-variable-colon-space-before': 'never',
  'scss/dollar-variable-default': null,
  'scss/dollar-variable-empty-line-after': null,
  'scss/dollar-variable-empty-line-before': null,
  'scss/dollar-variable-first-in-block': null,
  'scss/dollar-variable-no-missing-interpolation': true,
  'scss/dollar-variable-no-namespaced-assignment': null,
  'scss/dollar-variable-pattern': null,
  
  // %-placeholder
  'scss/percent-placeholder-pattern': null,
  
  // //-comment
  'scss/double-slash-comment-empty-line-before': 'always',
  'scss/double-slash-comment-inline': null,
  'scss/double-slash-comment-whitespace-inside': 'always',
  
  // Block
  'scss/block-no-redundant-nesting': true,
  
  // Comment
  'scss/comment-no-empty': true,
  'scss/comment-no-loud': null,
  
  // Declaration
  'scss/declaration-nested-properties': null,
  'scss/declaration-nested-properties-no-divided-groups': true,
  'scss/declaration-property-value-no-unknown': true,
  
  // Dimension
  'scss/dimension-no-non-numeric-values': true,
  
  // Function
  'scss/function-calculation-no-interpolation': true,
  'scss/function-color-channel': null,
  'scss/function-color-relative': null,
  'scss/function-disallowed-list': null,
  'scss/function-no-unknown': true,
  'scss/function-quote-no-quoted-strings-inside': true,
  'scss/function-unquote-no-unquoted-strings-inside': true,
  
  // Map
  'scss/map-keys-quotes': 'always',
  
  // Media feature
  'scss/media-feature-value-dollar-variable': null,
  
  // Operator
  'scss/operator-no-newline-after': true,
  'scss/operator-no-newline-before': true,
  'scss/operator-no-unspaced': true,
  
  // Partial
  'scss/partial-no-import': true,
  
  // Property
  'scss/property-no-unknown': true,
  
  // Selector
  'scss/selector-class-pattern': null,
  'scss/selector-nest-combinators': 'always',
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/selector-no-union-class-name': true,
  
  // Load
  'scss/load-no-partial-leading-underscore': true,
  'scss/load-partial-extension': null,
  
  // General / Sheet
  'scss/no-dollar-variables': null,
  'scss/no-duplicate-dollar-variables': true,
  'scss/no-duplicate-load-rules': true,
  'scss/no-duplicate-mixins': true,
  'scss/no-global-function-names': true,
  'scss/no-unused-private-members': true,
  
  // ===== STYLELINT-ORDER PLUGIN RULES =====
  
  'order/order': null,
  'order/properties-order': null,
  'order/properties-alphabetical-order': null,
  
  // ===== STYLELINT-NO-UNSUPPORTED-BROWSER-FEATURES PLUGIN RULES =====
  
  'plugin/no-unsupported-browser-features': null,
};
