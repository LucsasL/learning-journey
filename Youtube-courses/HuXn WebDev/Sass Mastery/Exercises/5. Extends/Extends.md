# Sass @extend Directive

The @extends directive lets you share a set of CSS properties from one selector to another.

The @extends directive is useful if you have almost identically styled elements that only differ in some small details.

```scss
.button-basic {
  border: none;
  padding: 15px 30px;
  text-align: 16px;
  cursor: pointer;
}

.button-report {
  @extends .button-basic;
  background: red;
}

.button-submit {
  @extend .button-basic;
  background: green;
  color: white;
}
```