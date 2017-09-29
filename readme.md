<h1 align="center">
	<img width="250" src="images/heart3.png" alt="Donations"><p>
</h1>

<br>
<p align="center">
	<a href="https://yourdonation.rocks"><img width="185" src="images/badge.svg" alt="Badge"></a>
	<br><br>
	<b>🙌 Use <a href="https://yourdonation.rocks">donations</a> to help support <b>your</b> projects! 🙌</b>
</p>
<br>

---

<p align="center">
	<sub>Visit <a href="https://yourdonation.rocks"><code>yourdonation.rocks</code></a> for a live demo. Check out my <a href="https://nikolaskama.me">blog</a> and follow me on <a href="https://twitter.com/nikolaskama">Twitter</a>.</sub>
</p>

<br>


# Installation & Configuration

To create your own **donations template** - with your own information - run the following on your server:

```
~ ❯❯❯ git clone https://github.com/k4m4/donations
~ ❯❯❯ cd donations/
~/donations ❯❯❯ npm install
~/donations ❯❯❯ node index.js
```

- This will generate an `index.html` file with your information.
- You can then edit your server's config to serve `donations` as a static page (e.g. `nikolaskama.me/donate`).

<br>

# `Donations` badge

### Image URL

```
https://yourdonation.rocks/images/badge.svg
```

### Markdown

```
[![Donations Badge](https://yourdonation.rocks/images/badge.svg)]({YOUR-DONATIONS-PAGE-URL})
```

### ReStructuredText

```
.. image:: https://yourdonation.rocks/images/badge.svg
    :target: {YOUR-DONATIONS-PAGE-URL}
```

### HTML

```
<a href="{YOUR-DONATIONS-PAGE-URL}"><img width="185" src="https://yourdonation.rocks/images/badge.svg" alt="Donations Badge"></a>
```

<br>

# License

Copyright (c) 2017 by Nikolaos Kamarinakis. Some rights reserved.

`Donations` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).

For more information on this project you can go ahead and email me anytime at **nikolaskam{at}gmail{dot}com**.