module.exports = {
  // Use postcss-scss to parse SCSS files
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
    'stylelint-stylistic',
  ],
  plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
  rules: {

    // - avoid errors
    // -- Deprecated
    'at-rules-no-deprecated': true,
    'declaration-properties-no-deprecated': true,
    'media-type-no-deprecated': true,
    'property-no-deprecated': true,

    // -- duplicate
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-duplicate-names': true,
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    
    
    // -- empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,
    
    // -- invalid
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-position-at-import-rule': true,
    'no-invalid-position-declaration': true,
    'string-no-newline': true,
    'syntax-string-no-invalid': true,
    
    // -- irregular
    'no-irregular-whitespace': true,

    // -- missing
    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,
    'nesting-selector-no-missing-scoping-root': true,

    // -- non-standard
    'function-linear-gradient-no-nonstandard-direction': true,

    // -- overrides
    'declaration-block-no-shorthand-property-overrides': true,

    // -- unmatchable
    'selector-anb-no-unmatchable': true,

    // -- unknown
    'annotation-no-unknown': true,
    // 'at-rule-no-unknown': null, -- handled by stylelint-scss plugin
    // 'function-no-unknown': true, -- handled by stylelint-scss plugin
    'media-feature-name-no-unknown': true,
    'no-unknown-animations': true,
    'no-unknown-custom-media': true,
    'no-unknown-custom-properties': true,
    // 'property-no-unknown': true, -- handled by stylelint-scss plugin
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': false,
    'unit-no-unknown': true,
    

    // - enforce conventions
    // -- allowed, disallowed & required
    // --- at-rule
    'at-rule-no-vendor-prefix': true,
    // --- color
    //'color-hex-alpha': 'always|never',
    'color-named': 'never',
    //'color-no-hex': true,

    // --- declaration
    'declaration-no-important': true,

    // --- length
    'length-zero-no-unit': true,
    
    // --- property 
    'property-no-vendor-prefix': true,
    
    // --- selector
    'selector-no-vendor-prefix': true,
    
    // --- unit
    'unit-allowed-list': ['rem', 'em', 'vw', 'vh', '%'],
    
    // --- value
    'value-no-vendor-prefix': true,

    // -- case
    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',

    // -- empty lines
    'at-rule-empty-line-before': 'always',

    // -- max & min
    'declaration-block-single-line-max-declarations': 1,
    'max-nesting-depth': 3,

    // -- notation
    'alpha-value-notation': 'number',
    'color-function-alias-notation': 'with-alpha',
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'font-weight-notation': 'named-where-possible',
    'hue-degree-notation': 'angle',   
    'import-notation': 'url',
    'lightness-notation': 'number',
    'selector-pseudo-element-colon-notation': 'double',

    // -- pattern
    // 'container-name-pattern': null,
    // 'custom-media-pattern': null,
    // 'custom-property-pattern': null,
    // 'keyframes-name-pattern': null,
    // 'layer-name-pattern': null,
    // 'selector-class-pattern': ['^[a-z0-9\-]+$', { -- handled by stylelint-scss plugin
    //   message: 'Use lowercase kebab-case for class names.'
    // }],
    'selector-id-pattern': ['^[a-z0-9\-]+$', {
      message: 'Use lowercase kebab-case for id names.'
    }],
    // 'selector-nested-pattern': null,

    // -- quotes
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    
    // -- redundant
    'block-no-redundant-nested-style-rules': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand- property-no-redundant-values': true,

    // - Stylistic
    // -- color
    'stylistic/color-hex-case': 'lower',
    // -- function
    'stylistic/function-comma-newline-before': 'never',
    'stylistic/function-comma-space-after': 'always-single-line',
    'stylistic/function-comma-space-before': 'never',
    'stylistic/function-max-empty-lines': 0,
    'stylistic/function-parentheses-newline-inside': 'always-multi-line',
    'stylistic/function-parentheses-space-inside': 'always-single-line',
    'stylistic/function-whitespace-after': 'always',

    // -- number
    'stylistic/number-leading-zero': 'always',
    'stylistic/number-no-trailing-zeros': true,

    // -- string
    'stylistic/string-quotes': 'single',
    
    // -- unit
    'stylistic/unit-case': 'lower',

    // -- value list
    // 'stylistic/value-list-comma-newline-after': 'always-multi-line',
    'stylistic/value-list-comma-newline-before': 'never',
    'stylistic/value-list-comma-space-after': 'always-single-line',
    'stylistic/value-list-comma-space-before': 'never',
    'stylistic/value-list-max-empty-lines': 0,

    // -- property
    'stylistic/property-case': 'lower',

    // -- declaration
    'stylistic/declaration-bang-space-after': 'never',
    'stylistic/declaration-bang-space-before': 'always',
    // 'stylistic/declaration-colon-newline-after': 'always-multi-line',
    'stylistic/declaration-colon-space-after': 'always',
    'stylistic/declaration-colon-space-before': 'never',
    
    // -- declaration block
    'stylistic/declaration-block-semicolon-newline-after': 'always',
    'stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    'stylistic/declaration-block-semicolon-space-after': 'always-single-line',
    'stylistic/declaration-block-semicolon-space-before': 'never',
    'stylistic/declaration-block-trailing-semicolon': 'always',

    // -- block
    'stylistic/block-closing-brace-empty-line-before': 'never',
    'stylistic/block-closing-brace-newline-after': 'always',
    'stylistic/block-closing-brace-newline-before': 'always',
    // 'stylistic/block-closing-brace-space-after': 'always-single-line',
    'stylistic/block-closing-brace-space-before': 'always-single-line',
    'stylistic/block-opening-brace-newline-after': 'always',
    'stylistic/block-opening-brace-newline-before': 'never',
    // 'stylistic/block-opening-brace-space-after': 'always-single-line',
    'stylistic/block-opening-brace-space-before': 'always',

    // -- selector
    'stylistic/selector-attribute-brackets-space-inside': 'never',
    'stylistic/selector-attribute-operator-space-after': 'always',
    'stylistic/selector-attribute-operator-space-before': 'always',
    'stylistic/selector-combinator-space-after': 'always',
    'stylistic/selector-combinator-space-before': 'always',
    'stylistic/selector-descendant-combinator-no-non-space': true,
    'stylistic/selector-max-empty-lines': 0,
    'stylistic/selector-pseudo-class-case': 'lower',
    'stylistic/selector-pseudo-class-parentheses-space-inside': 'always',
    'stylistic/selector-pseudo-element-case': 'lower',

    // -- selector list
    'stylistic/selector-list-comma-newline-after': 'always-multi-line',
    'stylistic/selector-list-comma-newline-before': 'never',
    'stylistic/selector-list-comma-space-after': 'always-single-line',
    'stylistic/selector-list-comma-space-before': 'never',

    // -- media feature
    'stylistic/media-feature-colon-space-after': 'always',
    'stylistic/media-feature-colon-space-before': 'never',
    'stylistic/media-feature-name-case': 'lower',
    'stylistic/media-feature-parentheses-space-inside': 'always',
    'stylistic/media-feature-range-operator-space-after': 'always',
    'stylistic/media-feature-range-operator-space-before': 'always',

    // -- media query list
    'stylistic/media-query-list-comma-newline-after': 'always-multi-line',
    'stylistic/media-query-list-comma-newline-before': 'never',
    'stylistic/media-query-list-comma-space-after': 'always-single-line',
    'stylistic/media-query-list-comma-space-before': 'never',

    // -- at-rule
    'stylistic/at-rule-name-case': 'lower',
    'stylistic/at-rule-name-newline-after': 'never',
    'stylistic/at-rule-name-space-after': 'always',
    'stylistic/at-rule-semicolon-newline-after': 'always',
    'stylistic/at-rule-semicolon-space-before': 'never',

    // -- named grid area
    'stylistic/named-grid-area-no-irregular-whitespace': true,

    // -- general
    'stylistic/indentation': 2,
    'stylistic/linebreaks': 'unix',
    'stylistic/max-empty-lines': 2,
    'stylistic/max-line-length': 125,
    'stylistic/no-empty-first-line': true,
    'stylistic/no-eol-whitespace': true,
    'stylistic/no-extra-semicolons': true,
    'stylistic/no-missing-end-of-source-newline': true,
    'stylistic/unicode-bom': 'never',

    // - stylelint-order plugin rules (defaults) ---
    // 'order/order': null,  ???? TODO
    // 'order/properties-order': null,
    'order/properties-alphabetical-order': true,


    // - stylelint-scss plugin rules (defaults) ---
    // -- @-each
    'scss/at-each-key-value-single-line': null,
    // -- @-else
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'never',
    // -- @-extend  
    'scss/at-extend-no-missing-placeholder': true,
    // -- @-function
    'scss/at-function-named-arguments': 'always',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern':  ['^[a-z0-9\-]+$', {
      message: 'Use lowercase kebab-case for function names.'
    }],
    // -- @-if
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    // 'scss/at-if-no-null': false,
    // -- @-import
    'scss/at-import-partial-extension-allowed-list': ['scss'],
    // -- @-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-no-risky-nesting-selector': true,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': ['^[a-z0-9\-]+$', {
      message: 'Use lowercase kebab-case for mixin names.'
    }],
    // -- @-rule
    'scss/at-rule-conditional-no-parentheses': false,
    'scss/at-rule-no-unknown': true,
    // -- @-use
    'scss/at-use-no-unnamed-namespace': true,
    // 'scss/at-use-no-redundant-alias': false,

    // -- %-variable
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',

    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    // 'scss/dollar-variable-default': null,
    'scss/dollar-variable-empty-line-after': ['always', {
      except: ['last-nested', 'before-dollar-variable']
    }],
    'scss/dollar-variable-empty-line-before': ['always', {
      except: ['first-nested', 'after-comment', 'after-dollar-variable']
    }],
    'scss/dollar-variable-first-in-block': [true, {
      ignore: ['comments', 'imports']
    }],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/dollar-variable-pattern': ['^[a-z0-9\-]+$', {
      message: 'Use lowercase kebab-case for dollar variable names.'
    }],
    // -- %-placeholder
    'scss/percent-placeholder-pattern': ['^[a-z0-9\-]+$', {
      message: 'Use lowercase kebab-case for percent placeholder names.'
    }],
    // -- // comment
    'scss/double-slash-comment-empty-line-before': ['always', {
      except: ['first-nested', 'after-comment']
    }],
    'scss/double-slash-comment-whitespace-inside': ['always', {
      except: ['first-nested']
    }],
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    // -- block
    'scss/block-no-redundant-nesting': true,
    // -- comment
    'scss/comment-no-empty': true,
    // 'scss/comment-no-loud': true,
    // -- declaration
    'scss/declaration-nested-properties': ['always', {
      except: ['only-of-namespace']
    }],
    'scss/declaration-nested-properties-no-divided-groups': true,
    // -- dimension
    // 'scss/dimension-no-non-numeric-values': true,
    // -- function
    'scss/function-calculation-no-interpolation': true,
    'scss/function-color-channel': true,
    'scss/function-color-relative': true,
    'scss/function-disallowed-list': ['random'],
    'scss/function-no-unknown': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    // -- map
    // 'scss/map-keys-quotes': 'always',
    // -- media feature
    // 'scss/media-feature-value-dollar-variable': 'always',
    // -- operator
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    // -- partial
    // 'scss/partial-no-import': true,
    // -- property
    'scss/property-no-unknown': true,
    // -- selector
    'scss/selector-class-pattern': ['^[a-z0-9\-]+$', {
      message: 'Use lowercase kebab-case for class names.'
    }],
    // 'scss/selector-nest-combinators': null,
    'scss/selector-no-redundant-nesting-selector': true,
    // 'scss/selector-no-union-class-name': true,
    // -- load
    'scss/load-no-partial-leading-underscore': true,
    'scss/load-partial-extension': 'never',
    // -- general/sheet
    // 'scss/no-dollar-variables': null,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-load-rules': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,
    'scss/no-unused-private-members': true,
    
    
    // --- stylelint-no-unsupported-browser-features plugin rule ---
    'plugin/no-unsupported-browser-features': [true, {
      browsers: ['last 2 versions', '>0.5%', 'not dead'],
      severity: 'error'
    }]
  }
};
