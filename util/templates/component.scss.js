module.exports = (componentName) => ({
  content: `@import "../variables.scss";
@import "../typography.scss";

.foo {
  @include font-defaults;

  color: $harvey-green;
}
`,
  extension: `.module.scss`,
})
