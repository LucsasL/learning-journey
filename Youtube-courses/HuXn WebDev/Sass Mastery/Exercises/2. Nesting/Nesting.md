# Nest

### 👇 Sass let you nest CSS selectors in the same way as HTML.

```scss
nav {
  ul {
   margin: 0;
   padding: 0;
   list-style: none;

   li {
    display: inline-block;

      a {
        display: blocks;
        padding: 6px 12px;
        text-decoration: none;
      }
    }
  }
}
```

### 👆 Notice that in Sass, the ul is nested in the **nav selector**, while the li and a tags are nested in the **ul selector** as well.