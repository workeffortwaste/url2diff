
# url2diff (url-to-diff)

Return a unified diff of a website's rendered and raw HTML data.

**Like this project? Help support my projects and buy me a coffee via [ko-fi](https://ko-fi.com/defaced)**.

## Example

### Usage

```
const url2diff = require('url2diff')
url2diff('https://defaced.dev/').then(console.log)     
```

### Output

```
===================================================================
--- diff.html
+++ diff.html
@@ -1,12 +1,12 @@
 <html>
 
 <head>
   <title>defaced.dev</title>
-  <meta name="google-site-verification" content="7TJq0SicIp7-fakCm9Ym5mBt8GhoGGWQUS7pUM1z4yI" />
+  <meta name="google-site-verification" content="7TJq0SicIp7-fakCm9Ym5mBt8GhoGGWQUS7pUM1z4yI">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
-  <link href="https://fonts.googleapis.com/css2?family=Martel:wght@900&family=Open+Sans&display=swap" rel="stylesheet">
+  <link href="https://fonts.googleapis.com/css2?family=Martel:wght@900&amp;family=Open+Sans&amp;display=swap" rel="stylesheet">
 
   <meta name="title" content="defaced.dev">
   <meta name="description" content="Perpetually under construction.">
   <link rel="shortcut icon" href="https://defaced.dev/favicon.ico" type="image/x-icon">
@@ -102,8 +102,9 @@
...
```

## Author
Chris Johnson - [defaced.dev](https://defaced.dev) - [@defaced](http://twitter.co.uk/defaced/)

