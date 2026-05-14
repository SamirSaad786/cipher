// ═══════════════════════════════════════════════════════════════
//  CIPHER://HTML — Curriculum Data
//  20 Lessons · 4 Tiers · Ghost → Runner → Hacker → Netrunner
// ═══════════════════════════════════════════════════════════════

export const CURRICULUM = {
  tiers: [
    // ═══════════════ TIER 1: GHOST ════════════════════════════
    {
      id: 'ghost',
      name: 'GHOST',
      subtitle: 'Protocol Initiate',
      description: 'First contact with the web. Learn what HTML is, how browsers think, and write your first lines of code.',
      color: '#8880b8',
      xpTotal: 500,
      nftStyle: 'foil',
      lessons: [
        {
          id: 'L01',
          number: '01',
          title: 'The Signal',
          subtitle: 'What is HTML?',
          xp: 80,
          timerXpBonus: 40,
          timerMinutes: 8,
          nftName: 'Ghost Protocol I',
          theory: `
<h3>What is HTML?</h3>
<p>HTML stands for <strong>HyperText Markup Language</strong>. It is the skeleton of every webpage you have ever seen. HTML tells the browser: "this is a heading, this is a paragraph, this is a link." It doesn't make things pretty — that's CSS — or make things move — that's JavaScript. HTML is pure <em>structure</em>.</p>

<h3>How Browsers Read HTML</h3>
<p>When you type a URL, your browser downloads an HTML file and reads it top-to-bottom. It builds a mental map called the <strong>DOM</strong> (Document Object Model) — basically a tree of everything on the page — then renders it visually.</p>

<h3>Tags: The Basic Unit</h3>
<p>HTML is written as <strong>tags</strong>. A tag looks like this:</p>
<pre><code>&lt;tagname&gt;content goes here&lt;/tagname&gt;</code></pre>
<p>Most tags come in pairs: an <strong>opening tag</strong> <code>&lt;p&gt;</code> and a <strong>closing tag</strong> <code>&lt;/p&gt;</code>. The <code>/</code> in the closing tag is the signal that you're ending that element.</p>

<h3>Your First HTML Elements</h3>
<p><code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are headings — h1 is the biggest, h6 is the smallest.</p>
<p><code>&lt;p&gt;</code> is a paragraph. Use it for blocks of text.</p>
<pre><code>&lt;h1&gt;Hello, World&lt;/h1&gt;
&lt;p&gt;This is my first webpage.&lt;/p&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Create a page with a heading that says exactly <strong>"Hello, World"</strong> and a paragraph below it with any text you like.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <!-- Write your code below this line -->

  </body>
</html>`,
          tests: [
            { type: 'element',  selector: 'h1',                message: 'You need an <h1> heading element.' },
            { type: 'content',  selector: 'h1', contains: 'Hello, World', exact: true, message: 'Your <h1> must say exactly "Hello, World".' },
            { type: 'element',  selector: 'p',                 message: 'You need a <p> paragraph element.' }
          ],
          hints: [
            'Start with <h1> and close it with </h1>',
            'The heading text goes between the tags: <h1>Hello, World</h1>',
            'Add a <p> tag below for your paragraph'
          ]
        },

        {
          id: 'L02',
          number: '02',
          title: 'The Skeleton',
          subtitle: 'HTML Document Structure',
          xp: 90,
          timerXpBonus: 45,
          timerMinutes: 10,
          nftName: 'Ghost Protocol II',
          theory: `
<h3>The Required Skeleton</h3>
<p>Every proper HTML document has a standard skeleton. Without it, browsers may guess what you meant — and they won't always guess right.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Everything visible goes here --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3>Breaking It Down</h3>
<p><code>&lt;!DOCTYPE html&gt;</code> — tells the browser "this is modern HTML5." Always the first line.</p>
<p><code>&lt;html lang="en"&gt;</code> — the root element wrapping everything. <code>lang="en"</code> tells screen readers the page is in English.</p>
<p><code>&lt;head&gt;</code> — <em>invisible</em> configuration: page title, character set, meta info.</p>
<p><code>&lt;meta charset="UTF-8"&gt;</code> — makes special characters (emojis, accents) work.</p>
<p><code>&lt;title&gt;</code> — the text that shows in the browser tab.</p>
<p><code>&lt;body&gt;</code> — everything the user <em>sees</em> lives here.</p>

<h3>Comments</h3>
<p>Comments are ignored by browsers. They're notes for humans: <code>&lt;!-- this is a comment --&gt;</code></p>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a proper HTML document skeleton with: a <code>&lt;title&gt;</code> that says <strong>"My Cipher Page"</strong>, a charset meta tag, and a <code>&lt;body&gt;</code> containing an <code>&lt;h1&gt;</code> with any text.</p>
</div>
          `,
          startCode: `<!-- Build the complete skeleton here -->`,
          tests: [
            { type: 'doctype',  message: '<!DOCTYPE html> must be on the first line.' },
            { type: 'element',  selector: 'html',              message: 'You need an <html> root element.' },
            { type: 'element',  selector: 'head',              message: 'You need a <head> element.' },
            { type: 'element',  selector: 'title',             message: 'You need a <title> element in <head>.' },
            { type: 'content',  selector: 'title', contains: 'My Cipher Page', exact: true, message: 'Your <title> must say "My Cipher Page".' },
            { type: 'element',  selector: 'body',              message: 'You need a <body> element.' },
            { type: 'element',  selector: 'body h1',           message: 'Add an <h1> inside the <body>.' }
          ],
          hints: [
            '<!DOCTYPE html> goes first, before anything else',
            'The structure is: html > head + body',
            '<title> lives inside <head>',
            'Your h1 heading goes inside <body>'
          ]
        },

        {
          id: 'L03',
          number: '03',
          title: 'Text Protocol',
          subtitle: 'Headings, Paragraphs & Text',
          xp: 90,
          timerXpBonus: 45,
          timerMinutes: 10,
          nftName: 'Ghost Protocol III',
          theory: `
<h3>Headings: h1 Through h6</h3>
<p>HTML has six heading levels. <code>h1</code> is the most important — there should only be one per page. <code>h2</code>–<code>h6</code> are sub-headings, used to create hierarchy.</p>
<pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Sub-section&lt;/h3&gt;</code></pre>

<h3>Paragraphs & Line Breaks</h3>
<p>Paragraphs use <code>&lt;p&gt;</code>. Extra spaces and newlines in your code are <em>ignored</em> by browsers — only tags create layout.</p>
<p><code>&lt;br&gt;</code> is a line break. It's a <strong>self-closing</strong> tag (no closing tag needed).</p>
<p><code>&lt;hr&gt;</code> draws a horizontal rule (divider line). Also self-closing.</p>

<h3>Text Formatting</h3>
<p><code>&lt;strong&gt;</code> — bold, and semantically "important"</p>
<p><code>&lt;em&gt;</code> — italic, and semantically "emphasized"</p>
<p><code>&lt;span&gt;</code> — inline container with no default style</p>
<p><code>&lt;small&gt;</code> — smaller text</p>
<pre><code>&lt;p&gt;This is &lt;strong&gt;important&lt;/strong&gt; and &lt;em&gt;emphasized&lt;/em&gt;.&lt;/p&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Create a page with: one <code>&lt;h1&gt;</code>, two <code>&lt;h2&gt;</code> headings, two <code>&lt;p&gt;</code> paragraphs, and use both <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> at least once each.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Text Mastery</title>
</head>
<body>

</body>
</html>`,
          tests: [
            { type: 'element', selector: 'h1',      message: 'You need one <h1> element.' },
            { type: 'count',   selector: 'h2', min: 2, message: 'You need at least 2 <h2> elements.' },
            { type: 'count',   selector: 'p',  min: 2, message: 'You need at least 2 <p> elements.' },
            { type: 'element', selector: 'strong',  message: 'Use <strong> for bold/important text.' },
            { type: 'element', selector: 'em',       message: 'Use <em> for emphasized/italic text.' }
          ],
          hints: [
            '<h2> subheadings go below your h1',
            'Wrap text in <strong>like this</strong> to bold it',
            '<em>like this</em> makes text italic'
          ]
        },

        {
          id: 'L04',
          number: '04',
          title: 'Hyperlink Protocol',
          subtitle: 'Links & Navigation',
          xp: 100,
          timerXpBonus: 50,
          timerMinutes: 10,
          nftName: 'Ghost Protocol IV',
          theory: `
<h3>The Anchor Tag</h3>
<p>Links use the <code>&lt;a&gt;</code> tag — short for "anchor." The destination goes in the <code>href</code> attribute:</p>
<pre><code>&lt;a href="https://example.com"&gt;Click here&lt;/a&gt;</code></pre>
<p><strong>Attributes</strong> are extra information you put inside the opening tag: <code>name="value"</code>.</p>

<h3>Link Types</h3>
<p><strong>External link</strong> — full URL including <code>https://</code></p>
<pre><code>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</code></pre>
<p><strong>Internal link</strong> — relative path to another file in your project</p>
<pre><code>&lt;a href="about.html"&gt;About Page&lt;/a&gt;</code></pre>
<p><strong>Email link</strong> — opens the user's email app</p>
<pre><code>&lt;a href="mailto:hello@example.com"&gt;Email Me&lt;/a&gt;</code></pre>
<p><strong>Jump link</strong> — scrolls to an element with a matching id</p>
<pre><code>&lt;a href="#section2"&gt;Jump to Section 2&lt;/a&gt;
&lt;h2 id="section2"&gt;Section 2&lt;/h2&gt;</code></pre>

<h3>Opening in a New Tab</h3>
<p>Add <code>target="_blank"</code> to open in a new tab. Always pair with <code>rel="noopener noreferrer"</code> for security:</p>
<pre><code>&lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;Open in new tab&lt;/a&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a navigation section with: an external link to <strong>https://developer.mozilla.org</strong>, an email link, and a jump link pointing to an element with <code>id="content"</code>. Also create a heading with <code>id="content"</code>.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Links Lab</title>
</head>
<body>
  <nav>
    <!-- Add your links here -->
  </nav>

  <!-- Add your target section here -->
</body>
</html>`,
          tests: [
            { type: 'element',   selector: 'a[href]',                              message: 'You need at least one <a> link with an href.' },
            { type: 'element',   selector: 'a[href^="https://developer.mozilla.org"]', message: 'Create a link to https://developer.mozilla.org' },
            { type: 'element',   selector: 'a[href^="mailto:"]',                   message: 'Add an email link using href="mailto:..."' },
            { type: 'element',   selector: 'a[href="#content"]',                   message: 'Add a jump link with href="#content"' },
            { type: 'element',   selector: '[id="content"]',                       message: 'Add an element with id="content" as the jump target.' }
          ],
          hints: [
            'An external link: <a href="https://...">text</a>',
            'Email link: <a href="mailto:you@example.com">Email</a>',
            'Jump link: <a href="#content">Go to Content</a>',
            'Target element: <h2 id="content">Content Section</h2>'
          ]
        },

        {
          id: 'L05',
          number: '05',
          title: 'Visual Feed',
          subtitle: 'Images & Alt Text',
          xp: 100,
          timerXpBonus: 50,
          timerMinutes: 10,
          nftName: 'Ghost Protocol V',
          theory: `
<h3>The Image Tag</h3>
<p><code>&lt;img&gt;</code> is self-closing — no closing tag. It needs two key attributes:</p>
<pre><code>&lt;img src="photo.jpg" alt="A description of the photo"&gt;</code></pre>
<p><code>src</code> — the image source. Can be a URL or a local file path.</p>
<p><code>alt</code> — <strong>alternative text</strong>. Shown if the image fails. Read by screen readers. Required for accessibility.</p>

<h3>Image Sources</h3>
<p><strong>External:</strong> <code>src="https://example.com/image.jpg"</code></p>
<p><strong>Local:</strong>    <code>src="images/photo.jpg"</code></p>
<p><strong>Free image services you can use:</strong></p>
<pre><code>&lt;!-- Picsum - random photo by size --&gt;
&lt;img src="https://picsum.photos/400/300" alt="Random photo"&gt;

&lt;!-- Placehold - colored placeholder --&gt;
&lt;img src="https://placehold.co/400x300" alt="Placeholder"&gt;</code></pre>

<h3>Sizing Images</h3>
<p>Use <code>width</code> and <code>height</code> attributes (in pixels) to control size:</p>
<pre><code>&lt;img src="photo.jpg" alt="My photo" width="300" height="200"&gt;</code></pre>
<p>Always specify both to prevent layout shift while the image loads.</p>

<h3>Images as Links</h3>
<p>Wrap an image in an <code>&lt;a&gt;</code> tag to make it clickable:</p>
<pre><code>&lt;a href="https://example.com"&gt;
  &lt;img src="photo.jpg" alt="Go to example.com"&gt;
&lt;/a&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Add 2 images to your page. Both must have <code>alt</code> text. One image must have explicit <code>width</code> and <code>height</code> attributes. One image must also be wrapped in a link.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Gallery</title>
</head>
<body>
  <h1>My Gallery</h1>
  <!-- Add images here -->
</body>
</html>`,
          tests: [
            { type: 'count',   selector: 'img', min: 2,              message: 'You need at least 2 <img> elements.' },
            { type: 'attr-all',selector: 'img', attr: 'alt',          message: 'Every <img> needs an alt attribute.' },
            { type: 'element', selector: 'img[width]',               message: 'At least one image needs a width attribute.' },
            { type: 'element', selector: 'img[height]',              message: 'At least one image needs a height attribute.' },
            { type: 'element', selector: 'a img',                    message: 'Wrap one image in an <a> tag to make it a link.' }
          ],
          hints: [
            'Use https://picsum.photos/300/200 for a free image',
            'alt text describes what\'s in the image',
            'width="300" height="200" go inside the img tag',
            'To link an image: <a href="..."><img src="..." alt="..."></a>'
          ]
        }
      ]
    },

    // ═══════════════ TIER 2: RUNNER ═══════════════════════════
    {
      id: 'runner',
      name: 'RUNNER',
      subtitle: 'Protocol Operative',
      description: 'Lists, tables, forms, and semantic structure. You\'re building real interfaces now.',
      color: '#00f0ff',
      xpTotal: 600,
      lessons: [
        {
          id: 'L06',
          number: '06',
          title: 'Data Arrays',
          subtitle: 'Lists: ul, ol, dl',
          xp: 100,
          timerXpBonus: 50,
          timerMinutes: 10,
          nftName: 'Runner Protocol I',
          theory: `
<h3>Unordered Lists</h3>
<p><code>&lt;ul&gt;</code> creates a bulleted list. Each item is wrapped in <code>&lt;li&gt;</code> (list item):</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<h3>Ordered Lists</h3>
<p><code>&lt;ol&gt;</code> creates a numbered list. Same structure, different tag:</p>
<pre><code>&lt;ol&gt;
  &lt;li&gt;Step one&lt;/li&gt;
  &lt;li&gt;Step two&lt;/li&gt;
  &lt;li&gt;Step three&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<h3>Nested Lists</h3>
<p>Put a new <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> inside any <code>&lt;li&gt;</code> to nest:</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Frontend
    &lt;ul&gt;
      &lt;li&gt;HTML&lt;/li&gt;
      &lt;li&gt;CSS&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Backend&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<h3>Description Lists</h3>
<p><code>&lt;dl&gt;</code> defines a list of terms and definitions — great for glossaries:</p>
<pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
&lt;/dl&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Create a page with: one <code>&lt;ul&gt;</code> with 3+ items, one <code>&lt;ol&gt;</code> with 3+ items, and one nested list (a list inside a list item).</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lists</title>
</head>
<body>
  <h1>My Lists</h1>
  <!-- Unordered list -->

  <!-- Ordered list -->

  <!-- Nested list -->

</body>
</html>`,
          tests: [
            { type: 'count', selector: 'ul li', min: 3, message: 'Your <ul> needs at least 3 <li> items.' },
            { type: 'count', selector: 'ol li', min: 3, message: 'Your <ol> needs at least 3 <li> items.' },
            { type: 'element', selector: 'ul ul, ul ol, ol ul, ol ol', message: 'Create a nested list (a list inside a list item).' }
          ],
          hints: [
            'ul = unordered (bullets), ol = ordered (numbers)',
            'Each item: <li>your text</li>',
            'For nested: put a <ul> inside an <li>'
          ]
        },

        {
          id: 'L07',
          number: '07',
          title: 'The Grid',
          subtitle: 'Tables: tr, td, th',
          xp: 110,
          timerXpBonus: 55,
          timerMinutes: 12,
          nftName: 'Runner Protocol II',
          theory: `
<h3>HTML Tables</h3>
<p>Tables are for <strong>tabular data</strong> — information that makes sense in rows and columns (like a spreadsheet). Never use tables for layout.</p>
<pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Score&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Alice&lt;/td&gt;
      &lt;td&gt;98&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

<h3>Tag Breakdown</h3>
<p><code>&lt;table&gt;</code> — the wrapper</p>
<p><code>&lt;thead&gt;</code> — table header section (optional but good practice)</p>
<p><code>&lt;tbody&gt;</code> — table body section</p>
<p><code>&lt;tr&gt;</code> — table row</p>
<p><code>&lt;th&gt;</code> — table header cell (bold, centered by default)</p>
<p><code>&lt;td&gt;</code> — table data cell</p>

<h3>Spanning Columns and Rows</h3>
<p>Use <code>colspan</code> to span multiple columns, <code>rowspan</code> to span rows:</p>
<pre><code>&lt;td colspan="2"&gt;I span two columns&lt;/td&gt;
&lt;td rowspan="2"&gt;I span two rows&lt;/td&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a table with: a <code>&lt;thead&gt;</code> row with at least 3 <code>&lt;th&gt;</code> headers, and a <code>&lt;tbody&gt;</code> with at least 3 data rows.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Data Table</title>
</head>
<body>
  <h1>Leaderboard</h1>
  <!-- Build your table here -->
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'table',         message: 'You need a <table> element.' },
            { type: 'element', selector: 'thead',         message: 'Add a <thead> section.' },
            { type: 'element', selector: 'tbody',         message: 'Add a <tbody> section.' },
            { type: 'count',   selector: 'th', min: 3,    message: 'You need at least 3 <th> header cells.' },
            { type: 'count',   selector: 'tbody tr', min: 3, message: 'Your <tbody> needs at least 3 rows.' }
          ],
          hints: [
            'Structure: table > thead + tbody',
            'Each row: <tr><td>data</td></tr>',
            'Header cells use <th>, data cells use <td>'
          ]
        },

        {
          id: 'L08',
          number: '08',
          title: 'Input Ports',
          subtitle: 'Forms & Input Elements',
          xp: 130,
          timerXpBonus: 65,
          timerMinutes: 14,
          nftName: 'Runner Protocol III',
          theory: `
<h3>The Form Element</h3>
<p>Forms collect user input. <code>&lt;form&gt;</code> wraps all input elements:</p>
<pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;!-- inputs go here --&gt;
&lt;/form&gt;</code></pre>
<p><code>action</code> — where to send the data (a URL or server endpoint).</p>
<p><code>method</code> — <code>GET</code> (data in URL) or <code>POST</code> (data in request body).</p>

<h3>Input Types</h3>
<pre><code>&lt;input type="text"     placeholder="Your name"&gt;
&lt;input type="email"    placeholder="your@email.com"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="number"   min="0" max="100"&gt;
&lt;input type="checkbox" id="check1"&gt;
&lt;input type="radio"    name="choice" value="a"&gt;
&lt;input type="submit"   value="Send It"&gt;</code></pre>

<h3>Labels</h3>
<p>Always link a <code>&lt;label&gt;</code> to its input using <code>for</code> and <code>id</code>. This improves accessibility and clicking the label focuses the input:</p>
<pre><code>&lt;label for="email"&gt;Email Address&lt;/label&gt;
&lt;input type="email" id="email" name="email"&gt;</code></pre>

<h3>Textarea & Select</h3>
<pre><code>&lt;textarea name="message" rows="4" cols="40"&gt;&lt;/textarea&gt;

&lt;select name="tier"&gt;
  &lt;option value="ghost"&gt;Ghost&lt;/option&gt;
  &lt;option value="runner"&gt;Runner&lt;/option&gt;
&lt;/select&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a contact form with: a text input for name, an email input, a textarea for a message, a submit button. All inputs must have associated <code>&lt;label&gt;</code> elements linked via <code>for</code>/<code>id</code>.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Form</title>
</head>
<body>
  <h1>Contact Us</h1>
  <form>
    <!-- Build your form here -->
  </form>
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'form',                        message: 'You need a <form> element.' },
            { type: 'element', selector: 'input[type="text"], input:not([type])', message: 'Add a text input for the name.' },
            { type: 'element', selector: 'input[type="email"]',         message: 'Add an email input.' },
            { type: 'element', selector: 'textarea',                    message: 'Add a <textarea> for the message.' },
            { type: 'element', selector: 'input[type="submit"], button[type="submit"]', message: 'Add a submit button.' },
            { type: 'element', selector: 'label[for]',                  message: 'Add labels linked to inputs using for="..."' }
          ],
          hints: [
            'Text input: <input type="text" id="name" name="name">',
            'Link label: <label for="name">Name</label>',
            'The for attribute must match the input\'s id',
            'Submit: <input type="submit" value="Send"> or <button type="submit">Send</button>'
          ]
        },

        {
          id: 'L09',
          number: '09',
          title: 'Semantic Layer',
          subtitle: 'HTML5 Semantic Elements',
          xp: 120,
          timerXpBonus: 60,
          timerMinutes: 12,
          nftName: 'Runner Protocol IV',
          theory: `
<h3>Why Semantic HTML?</h3>
<p>Semantic HTML means using elements that <em>describe their purpose</em>. Compare:</p>
<pre><code>&lt;!-- Non-semantic (what does it mean?) --&gt;
&lt;div id="header"&gt;...&lt;/div&gt;

&lt;!-- Semantic (obvious meaning) --&gt;
&lt;header&gt;...&lt;/header&gt;</code></pre>
<p>Semantic elements help: <strong>search engines</strong> understand your content, <strong>screen readers</strong> navigate it, and <strong>other developers</strong> read your code.</p>

<h3>The Key Semantic Elements</h3>
<p><code>&lt;header&gt;</code> — page or section header (logo, nav)</p>
<p><code>&lt;nav&gt;</code> — navigation links</p>
<p><code>&lt;main&gt;</code> — the primary content (only one per page)</p>
<p><code>&lt;article&gt;</code> — self-contained content (blog post, card)</p>
<p><code>&lt;section&gt;</code> — thematic grouping with a heading</p>
<p><code>&lt;aside&gt;</code> — related but secondary content (sidebar)</p>
<p><code>&lt;footer&gt;</code> — page or section footer</p>
<p><code>&lt;figure&gt;</code> / <code>&lt;figcaption&gt;</code> — image with caption</p>

<h3>A Full Page Layout</h3>
<pre><code>&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;...&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;article&gt;
      &lt;section&gt;...&lt;/section&gt;
    &lt;/article&gt;
    &lt;aside&gt;...&lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a semantic page structure using: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> (with links), <code>&lt;main&gt;</code>, at least one <code>&lt;article&gt;</code>, and a <code>&lt;footer&gt;</code>.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML</title>
</head>
<body>
  <!-- Build semantic layout here -->
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'header',     message: 'Add a <header> element.' },
            { type: 'element', selector: 'nav',        message: 'Add a <nav> element.' },
            { type: 'element', selector: 'nav a',      message: 'Put navigation links inside <nav>.' },
            { type: 'element', selector: 'main',       message: 'Add a <main> element.' },
            { type: 'element', selector: 'article',    message: 'Add at least one <article> element.' },
            { type: 'element', selector: 'footer',     message: 'Add a <footer> element.' }
          ],
          hints: [
            'header goes at the top, footer at the bottom',
            'nav belongs inside or near header',
            'main holds your primary page content',
            'article is for self-contained content blocks'
          ]
        },

        {
          id: 'L10',
          number: '10',
          title: 'Container Logic',
          subtitle: 'div, span & the Box Model',
          xp: 120,
          timerXpBonus: 60,
          timerMinutes: 12,
          nftName: 'Runner Protocol V',
          theory: `
<h3>The Generic Containers</h3>
<p><code>&lt;div&gt;</code> — a <strong>block</strong> container. Takes up the full width of its parent. Used to group elements, create layout sections.</p>
<p><code>&lt;span&gt;</code> — an <strong>inline</strong> container. Only as wide as its content. Used to style part of a text string.</p>
<pre><code>&lt;div class="card"&gt;
  &lt;h2&gt;Title&lt;/h2&gt;
  &lt;p&gt;This is &lt;span class="highlight"&gt;important text&lt;/span&gt;.&lt;/p&gt;
&lt;/div&gt;</code></pre>

<h3>Classes and IDs</h3>
<p><code>class</code> — a label you can reuse on many elements: <code>&lt;div class="card"&gt;</code></p>
<p><code>id</code> — a unique identifier for one element: <code>&lt;div id="hero"&gt;</code></p>
<p>You can add multiple classes: <code>&lt;div class="card card-dark large"&gt;</code></p>

<h3>The Box Model (Intro)</h3>
<p>Every HTML element is a rectangular box made of four layers:</p>
<pre><code>Content → Padding → Border → Margin</code></pre>
<p>These are controlled with CSS, but understanding them helps you think about layout. Every element you place is a box sitting next to or inside other boxes.</p>

<h3>Block vs Inline Elements</h3>
<p><strong>Block:</strong> h1–h6, p, div, ul, ol, table, form — start on a new line, take full width</p>
<p><strong>Inline:</strong> a, span, strong, em, img — flow within text, only as wide as content</p>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Create 3 <code>&lt;div&gt;</code> elements each with a unique <code>class</code> name. Inside each div, add a heading and paragraph. Use at least one <code>&lt;span&gt;</code> inside a paragraph with a class attribute.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Containers</title>
</head>
<body>
  <!-- Create your 3 div cards here -->
</body>
</html>`,
          tests: [
            { type: 'count',   selector: 'div[class]', min: 3, message: 'Create at least 3 <div> elements with class attributes.' },
            { type: 'element', selector: 'div h2, div h3',    message: 'Each div should contain a heading.' },
            { type: 'element', selector: 'div p',             message: 'Each div should contain a paragraph.' },
            { type: 'element', selector: 'span[class]',       message: 'Add a <span> with a class attribute.' }
          ],
          hints: [
            '<div class="card"> ... </div>',
            'Three different class names like "card-one", "card-two", "card-three"',
            '<span class="highlight">highlighted text</span> inside a <p>'
          ]
        }
      ]
    },

    // ═══════════════ TIER 3: HACKER ═══════════════════════════
    {
      id: 'hacker',
      name: 'HACKER',
      subtitle: 'System Infiltrator',
      description: 'Style injection, responsive design, and media. You\'re controlling the visual layer now.',
      color: '#7b00ff',
      xpTotal: 700,
      lessons: [
        {
          id: 'L11',
          number: '11',
          title: 'Style Injection',
          subtitle: 'Intro to CSS in HTML',
          xp: 120,
          timerXpBonus: 60,
          timerMinutes: 12,
          nftName: 'Hacker Protocol I',
          theory: `
<h3>Three Ways to Add CSS</h3>
<p><strong>Inline styles</strong> — directly on the element using the <code>style</code> attribute:</p>
<pre><code>&lt;h1 style="color: red; font-size: 2rem;"&gt;Hello&lt;/h1&gt;</code></pre>
<p><strong>Internal stylesheet</strong> — inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code>:</p>
<pre><code>&lt;style&gt;
  h1 { color: red; font-size: 2rem; }
  p  { color: gray; }
&lt;/style&gt;</code></pre>
<p><strong>External stylesheet</strong> — a separate .css file linked via <code>&lt;link&gt;</code>:</p>
<pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>

<h3>CSS Syntax</h3>
<pre><code>selector { property: value; property: value; }</code></pre>
<p><strong>Selector</strong> — what to target: <code>h1</code>, <code>.classname</code>, <code>#idname</code></p>
<p><strong>Property</strong> — what to change: <code>color</code>, <code>font-size</code>, <code>background-color</code></p>
<p><strong>Value</strong> — the setting: <code>red</code>, <code>24px</code>, <code>#ff0000</code></p>

<h3>Common Properties</h3>
<pre><code>color: #333;
background-color: #f0f0f0;
font-size: 18px;
font-weight: bold;
text-align: center;
padding: 16px;
margin: 10px;
border: 2px solid black;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Add a <code>&lt;style&gt;</code> block to your page. Style the body background, an h1 color, and at least 2 other elements. Use class selectors for at least 2 rules.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Styled Page</title>
  <!-- Add your style block here -->
</head>
<body>
  <h1>Styled Heading</h1>
  <p class="intro">A styled paragraph.</p>
  <div class="card">
    <h2>Card Title</h2>
    <p>Card content goes here.</p>
  </div>
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'style',      message: 'Add a <style> element in the <head>.' },
            { type: 'css-rule', property: 'background-color', selector: 'body', message: 'Set a background-color on body in your <style> block.' },
            { type: 'css-rule', property: 'color', selector: 'h1', message: 'Set a color on h1 in your <style> block.' },
            { type: 'css-class', message: 'Use at least 2 class selectors in your CSS.' }
          ],
          hints: [
            '<style> goes inside <head>, before </head>',
            'body { background-color: #1a1a2e; color: white; }',
            '.intro { font-size: 1.2rem; color: cyan; }',
            '.card { padding: 20px; border: 1px solid gray; }'
          ]
        },

        {
          id: 'L12',
          number: '12',
          title: 'Color Matrix',
          subtitle: 'CSS Colors & Backgrounds',
          xp: 120,
          timerXpBonus: 60,
          timerMinutes: 12,
          nftName: 'Hacker Protocol II',
          theory: `
<h3>Color Formats</h3>
<p><strong>Named colors:</strong> <code>red</code>, <code>cyan</code>, <code>tomato</code>, <code>steelblue</code> (~140 options)</p>
<p><strong>Hex:</strong> <code>#rrggbb</code> or shortened <code>#rgb</code>. Each pair is 00–FF (0–255).</p>
<pre><code>color: #ff0000;   /* red */
color: #00f;       /* shorthand for #0000ff */</code></pre>
<p><strong>RGB:</strong> <code>rgb(255, 0, 0)</code> — red, green, blue values 0–255</p>
<p><strong>RGBA:</strong> <code>rgba(255, 0, 0, 0.5)</code> — same + alpha (transparency 0–1)</p>
<p><strong>HSL:</strong> <code>hsl(0, 100%, 50%)</code> — hue (0–360°), saturation, lightness</p>

<h3>Backgrounds</h3>
<pre><code>background-color: #0a0a0f;
background-image: url('pattern.png');
background-size: cover;       /* fill, cover, contain, 200px */
background-position: center;
background-repeat: no-repeat;</code></pre>

<h3>CSS Gradients</h3>
<pre><code>/* Linear gradient */
background: linear-gradient(to right, #7b00ff, #00f0ff);

/* Radial gradient */
background: radial-gradient(circle, #7b00ff, #03020a);</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Create a page that uses: at least 3 different color formats (hex, rgb, rgba or hsl), a CSS gradient on at least one element, and sets a background-color on the body.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Color Lab</title>
  <style>
    /* Write your color styles here */
  </style>
</head>
<body>
  <header>
    <h1>Color Lab</h1>
  </header>
  <main>
    <div class="gradient-box">Gradient Box</div>
    <p class="colored-text">Some colored text</p>
    <div class="overlay-box">Semi-transparent overlay</div>
  </main>
</body>
</html>`,
          tests: [
            { type: 'css-colors', min: 3, message: 'Use at least 3 different color format types (hex, rgb, rgba, hsl).' },
            { type: 'css-gradient', message: 'Apply a CSS gradient to at least one element.' },
            { type: 'css-rule', property: 'background-color', selector: 'body', message: 'Set a background-color on body.' }
          ],
          hints: [
            'Hex: #7b00ff | RGB: rgb(123,0,255) | RGBA: rgba(0,240,255,0.5)',
            'linear-gradient: background: linear-gradient(135deg, #7b00ff, #00f0ff);',
            'body { background-color: #03020a; color: #e8e5ff; }'
          ]
        },

        {
          id: 'L13',
          number: '13',
          title: 'Box Architecture',
          subtitle: 'CSS Box Model & Spacing',
          xp: 130,
          timerXpBonus: 65,
          timerMinutes: 14,
          nftName: 'Hacker Protocol III',
          theory: `
<h3>The Box Model</h3>
<p>Every element is a box with four areas, from inside out:</p>
<pre><code>+-----------------------------------------+
|                 MARGIN                   |
|  +-----------------------------------+  |
|  |             BORDER                |  |
|  |  +-----------------------------+  |  |
|  |  |           PADDING           |  |  |
|  |  |  +-----------------------+  |  |  |
|  |  |  |       CONTENT         |  |  |  |
|  |  |  +-----------------------+  |  |  |
|  |  +-----------------------------+  |  |
|  +-----------------------------------+  |
+-----------------------------------------+</code></pre>

<h3>Margin, Padding, Border</h3>
<pre><code>/* All sides equal */
margin: 20px;
padding: 16px;

/* Top/Bottom Left/Right */
margin: 10px 20px;
padding: 8px 16px;

/* Top Right Bottom Left (clockwise) */
margin: 10px 20px 10px 20px;

/* Individual sides */
margin-top: 10px;
padding-left: 20px;

/* Border */
border: 2px solid #00f0ff;
border-radius: 8px;          /* rounds corners */</code></pre>

<h3>Box Sizing</h3>
<pre><code>/* Default: padding adds to width */
box-sizing: content-box;   /* width = content only */

/* Better: padding is included in width */
box-sizing: border-box;    /* width = content + padding + border */

/* Apply to everything — common best practice */
*, *::before, *::after { box-sizing: border-box; }</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build 3 styled boxes using <code>&lt;div&gt;</code> elements. Each must have: visible padding, margin, border, and border-radius. Add <code>box-sizing: border-box</code> globally.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0916; color: #e8e5ff; font-family: sans-serif; padding: 40px; }
    /* Add box styles below */
  </style>
</head>
<body>
  <div class="box-1">Box One</div>
  <div class="box-2">Box Two</div>
  <div class="box-3">Box Three</div>
</body>
</html>`,
          tests: [
            { type: 'count', selector: 'div', min: 3, message: 'You need at least 3 <div> elements.' },
            { type: 'css-rule', property: 'padding', message: 'Apply padding to your boxes.' },
            { type: 'css-rule', property: 'margin',  message: 'Apply margin to your boxes.' },
            { type: 'css-rule', property: 'border',  message: 'Apply a border to your boxes.' },
            { type: 'css-rule', property: 'border-radius', message: 'Apply border-radius to round the corners.' }
          ],
          hints: [
            '.box-1 { padding: 24px; margin: 16px; border: 2px solid #00f0ff; border-radius: 8px; }',
            'Try different border colors for each box',
            'border-radius: 50% makes a circle if width === height'
          ]
        },

        {
          id: 'L14',
          number: '14',
          title: 'Flex Protocol',
          subtitle: 'CSS Flexbox',
          xp: 150,
          timerXpBonus: 75,
          timerMinutes: 16,
          nftName: 'Hacker Protocol IV',
          theory: `
<h3>What is Flexbox?</h3>
<p>Flexbox is a CSS layout system that makes it easy to arrange elements in a row or column and control how they size and align.</p>
<pre><code>.container {
  display: flex;
}</code></pre>

<h3>Direction</h3>
<pre><code>flex-direction: row;            /* default: left to right */
flex-direction: column;         /* top to bottom */
flex-direction: row-reverse;    /* right to left */</code></pre>

<h3>Alignment</h3>
<pre><code>/* Main axis (default: horizontal) */
justify-content: flex-start;   /* pack to start */
justify-content: center;       /* center */
justify-content: flex-end;     /* pack to end */
justify-content: space-between;/* even gaps, no outer */
justify-content: space-around; /* even gaps including outer */

/* Cross axis (default: vertical) */
align-items: stretch;          /* default: fill height */
align-items: center;           /* center vertically */
align-items: flex-start;       /* align to top */
align-items: flex-end;         /* align to bottom */</code></pre>

<h3>Gap & Flex-Wrap</h3>
<pre><code>gap: 16px;                     /* space between items */
flex-wrap: wrap;               /* items wrap to next line */</code></pre>

<h3>Growing & Shrinking</h3>
<pre><code>flex: 1;    /* grow to fill available space */
flex: 0 0 200px;  /* fixed width, don't grow/shrink */</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a flexbox navigation bar (horizontal, space-between). Then build a flexbox card row with 3 cards that wrap on small screens. Use <code>gap</code>, <code>justify-content</code>, and <code>align-items</code>.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0916; color: #e8e5ff; font-family: sans-serif; }
    /* Add your flex styles here */
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">CIPHER</div>
    <ul class="nav-links">
      <li>Home</li><li>Learn</li><li>About</li>
    </ul>
  </nav>
  <main class="card-row">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </main>
</body>
</html>`,
          tests: [
            { type: 'css-rule', property: 'display', value: 'flex', message: 'Use display: flex on at least one element.' },
            { type: 'css-rule', property: 'justify-content', message: 'Use justify-content to control horizontal alignment.' },
            { type: 'css-rule', property: 'align-items', message: 'Use align-items to control vertical alignment.' },
            { type: 'css-rule', property: 'gap', message: 'Add gap between flex items.' }
          ],
          hints: [
            '.navbar { display: flex; justify-content: space-between; align-items: center; padding: 16px; }',
            '.card-row { display: flex; flex-wrap: wrap; gap: 16px; padding: 24px; }',
            '.card { flex: 1; min-width: 200px; padding: 20px; border: 1px solid #2d2855; }'
          ]
        },

        {
          id: 'L15',
          number: '15',
          title: 'Media Stream',
          subtitle: 'Audio, Video & Embed',
          xp: 150,
          timerXpBonus: 75,
          timerMinutes: 14,
          nftName: 'Hacker Protocol V',
          theory: `
<h3>HTML5 Video</h3>
<pre><code>&lt;video width="640" height="360" controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Your browser does not support video.
&lt;/video&gt;</code></pre>
<p>Key attributes: <code>controls</code> (show play/pause), <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>poster="thumbnail.jpg"</code></p>

<h3>HTML5 Audio</h3>
<pre><code>&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support audio.
&lt;/audio&gt;</code></pre>

<h3>Embedding Content</h3>
<p>Use <code>&lt;iframe&gt;</code> to embed YouTube, Google Maps, or any external page:</p>
<pre><code>&lt;!-- YouTube embed --&gt;
&lt;iframe 
  width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
  allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
<p><code>&lt;iframe&gt;</code> attributes: <code>src</code>, <code>width</code>, <code>height</code>, <code>title</code> (required for accessibility), <code>frameborder="0"</code></p>

<h3>The figure Element</h3>
<pre><code>&lt;figure&gt;
  &lt;video controls&gt;...&lt;/video&gt;
  &lt;figcaption&gt;My video caption&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Create a media page with: a <code>&lt;video&gt;</code> element with <code>controls</code> and a <code>poster</code> attribute, an <code>&lt;audio&gt;</code> element with <code>controls</code>, and an <code>&lt;iframe&gt;</code> with a <code>title</code> attribute. Wrap the video in a <code>&lt;figure&gt;</code> with a <code>&lt;figcaption&gt;</code>.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Media Page</title>
</head>
<body>
  <h1>Media Gallery</h1>
  <!-- Add video, audio, and iframe here -->
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'video[controls]',    message: 'Add a <video> with the controls attribute.' },
            { type: 'element', selector: 'video[poster]',      message: 'Give your video a poster attribute.' },
            { type: 'element', selector: 'audio[controls]',    message: 'Add an <audio> with the controls attribute.' },
            { type: 'element', selector: 'iframe[title]',      message: 'Add an <iframe> with a title attribute.' },
            { type: 'element', selector: 'figure figcaption',  message: 'Wrap video in <figure> and add a <figcaption>.' }
          ],
          hints: [
            'Use a placeholder video: src="https://www.w3schools.com/html/mov_bbb.mp4"',
            'poster attribute: poster="https://picsum.photos/640/360"',
            'YouTube iframe: src="https://www.youtube.com/embed/dQw4w9WgXcQ"',
            '<figure><video controls poster="..."><source src="..."></video><figcaption>Caption</figcaption></figure>'
          ]
        }
      ]
    },

    // ═══════════════ TIER 4: NETRUNNER ════════════════════════
    {
      id: 'netrunner',
      name: 'NETRUNNER',
      subtitle: 'Elite Protocol',
      description: 'Canvas, data storage, JavaScript hooks, form validation, and a full capstone project. You are the net.',
      color: '#ff003c',
      xpTotal: 800,
      lessons: [
        {
          id: 'L16',
          number: '16',
          title: 'Canvas Breach',
          subtitle: 'HTML5 Canvas Basics',
          xp: 150,
          timerXpBonus: 75,
          timerMinutes: 16,
          nftName: 'Netrunner Protocol I',
          theory: `
<h3>The Canvas Element</h3>
<p><code>&lt;canvas&gt;</code> gives you a drawable surface in HTML. You draw on it with JavaScript:</p>
<pre><code>&lt;canvas id="myCanvas" width="400" height="300"&gt;&lt;/canvas&gt;</code></pre>
<pre><code>const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');  // 2D drawing context</code></pre>

<h3>Drawing Shapes</h3>
<pre><code>// Rectangle
ctx.fillStyle = '#00f0ff';
ctx.fillRect(x, y, width, height);

// Outlined rectangle
ctx.strokeStyle = '#7b00ff';
ctx.lineWidth = 3;
ctx.strokeRect(x, y, width, height);

// Clear area
ctx.clearRect(x, y, width, height);</code></pre>

<h3>Drawing Paths (Lines & Circles)</h3>
<pre><code>// Line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.strokeStyle = '#00f0ff';
ctx.stroke();

// Circle
ctx.beginPath();
ctx.arc(cx, cy, radius, 0, Math.PI * 2);
ctx.fillStyle = '#7b00ff';
ctx.fill();</code></pre>

<h3>Text on Canvas</h3>
<pre><code>ctx.font = '24px monospace';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.fillText('Hello Canvas', 200, 150);</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Add a <code>&lt;canvas&gt;</code> and use JavaScript to draw: a filled rectangle, an outlined rectangle, a circle, and text on the canvas.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Canvas</title>
  <style>
    body { background: #0a0916; display: flex; justify-content: center; padding: 40px; }
    canvas { border: 1px solid #2d2855; }
  </style>
</head>
<body>
  <canvas id="myCanvas" width="400" height="300"></canvas>
  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // Draw here
  </script>
</body>
</html>`,
          tests: [
            { type: 'element',    selector: 'canvas',     message: 'Add a <canvas> element.' },
            { type: 'canvas-api', method: 'fillRect',     message: 'Use ctx.fillRect() to draw a filled rectangle.' },
            { type: 'canvas-api', method: 'strokeRect',   message: 'Use ctx.strokeRect() for an outlined rectangle.' },
            { type: 'canvas-api', method: 'arc',          message: 'Use ctx.arc() to draw a circle.' },
            { type: 'canvas-api', method: 'fillText',     message: 'Use ctx.fillText() to draw text on the canvas.' }
          ],
          hints: [
            'ctx.fillStyle = "#00f0ff"; ctx.fillRect(50, 50, 100, 60);',
            'ctx.strokeStyle = "#7b00ff"; ctx.lineWidth = 2; ctx.strokeRect(200, 50, 100, 60);',
            'ctx.beginPath(); ctx.arc(200, 180, 40, 0, Math.PI*2); ctx.fillStyle="#ff003c"; ctx.fill();',
            'ctx.font = "16px monospace"; ctx.fillStyle = "white"; ctx.fillText("Hello!", 200, 150);'
          ]
        },

        {
          id: 'L17',
          number: '17',
          title: 'Data Vault',
          subtitle: 'localStorage & sessionStorage',
          xp: 150,
          timerXpBonus: 75,
          timerMinutes: 14,
          nftName: 'Netrunner Protocol II',
          theory: `
<h3>Browser Storage</h3>
<p>Browsers can store data locally — no server needed.</p>
<p><strong>localStorage</strong> — persists until cleared. Survives browser restarts.</p>
<p><strong>sessionStorage</strong> — lives only for the current tab session.</p>
<p>Both store <strong>strings only</strong>. Use <code>JSON.stringify()</code> / <code>JSON.parse()</code> for objects.</p>

<h3>localStorage API</h3>
<pre><code>// Store
localStorage.setItem('username', 'cipher_sam');

// Retrieve
const name = localStorage.getItem('username');

// Remove one
localStorage.removeItem('username');

// Clear everything
localStorage.clear();</code></pre>

<h3>Storing Objects</h3>
<pre><code>// Save
const user = { name: 'Sam', level: 3, xp: 450 };
localStorage.setItem('user', JSON.stringify(user));

// Load
const raw = localStorage.getItem('user');
const user = raw ? JSON.parse(raw) : null;</code></pre>

<h3>Practical Pattern: Persistent Counter</h3>
<pre><code>let count = parseInt(localStorage.getItem('count') || 0);
function increment() {
  count++;
  localStorage.setItem('count', count);
  document.getElementById('display').textContent = count;
}</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a notes app: an input field and "Save" button that stores text in localStorage. Display saved notes on the page. Add a "Clear All" button. Notes should survive a page refresh.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Local Notes</title>
  <style>
    body { background: #0a0916; color: #e8e5ff; font-family: sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
    input { width: 100%; padding: 10px; background: #06050f; border: 1px solid #2d2855; color: #e8e5ff; margin-bottom: 10px; }
    button { padding: 10px 20px; cursor: pointer; margin-right: 10px; }
    #notesList { margin-top: 20px; }
    .note { padding: 10px; border: 1px solid #1e1b3a; margin-bottom: 8px; }
  </style>
</head>
<body>
  <h1>Cipher Notes</h1>
  <input type="text" id="noteInput" placeholder="Type a note...">
  <button id="saveBtn">Save Note</button>
  <button id="clearBtn">Clear All</button>
  <div id="notesList"></div>
  <script>
    // Your localStorage code here
  </script>
</body>
</html>`,
          tests: [
            { type: 'element',    selector: 'input',          message: 'Add an input field.' },
            { type: 'js-api',     method: 'localStorage.setItem', message: 'Use localStorage.setItem() to save notes.' },
            { type: 'js-api',     method: 'localStorage.getItem', message: 'Use localStorage.getItem() to load saved notes.' },
            { type: 'element',    selector: 'button',         message: 'Add Save and Clear buttons.' }
          ],
          hints: [
            'Load notes on page start: const notes = JSON.parse(localStorage.getItem("notes") || "[]");',
            'Save: notes.push(newNote); localStorage.setItem("notes", JSON.stringify(notes));',
            'Display notes by looping: notes.forEach(n => { ... div.textContent = n ... })',
            'Clear: localStorage.removeItem("notes"); then re-render'
          ]
        },

        {
          id: 'L18',
          number: '18',
          title: 'Script Link',
          subtitle: 'JavaScript in HTML',
          xp: 160,
          timerXpBonus: 80,
          timerMinutes: 16,
          nftName: 'Netrunner Protocol III',
          theory: `
<h3>Adding JavaScript to HTML</h3>
<p>Inline (inside HTML):</p>
<pre><code>&lt;script&gt;
  console.log('Hello from inline script');
&lt;/script&gt;</code></pre>
<p>External file (recommended for larger scripts):</p>
<pre><code>&lt;script src="app.js"&gt;&lt;/script&gt;</code></pre>
<p>Script placement: put <code>&lt;script&gt;</code> just before <code>&lt;/body&gt;</code> so the HTML loads first, or use <code>defer</code>:</p>
<pre><code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code></pre>

<h3>Selecting & Modifying Elements</h3>
<pre><code>// Select elements
const el = document.getElementById('myId');
const els = document.querySelectorAll('.myClass');

// Read/write content
el.textContent = 'New text';
el.innerHTML = '&lt;strong&gt;Bold&lt;/strong&gt; text';

// Change style
el.style.color = 'cyan';
el.style.display = 'none';

// Classes
el.classList.add('active');
el.classList.remove('active');
el.classList.toggle('active');</code></pre>

<h3>Events</h3>
<pre><code>const btn = document.getElementById('myBtn');
btn.addEventListener('click', function() {
  alert('Button clicked!');
});

// Arrow function syntax
btn.addEventListener('click', () => {
  el.textContent = 'Clicked!';
});</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build an interactive page: a button that toggles dark/light mode by adding/removing a class, a counter that increments on click, and an input that shows live character count below it.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Interactivity</title>
  <style>
    body { background: #0a0916; color: #e8e5ff; font-family: sans-serif; padding: 40px; transition: background 0.3s; }
    body.light-mode { background: #f0f0f0; color: #1a1a1a; }
    button { padding: 10px 20px; margin: 8px; cursor: pointer; border: 1px solid #2d2855; background: transparent; color: inherit; }
    input { padding: 10px; background: #06050f; border: 1px solid #2d2855; color: #e8e5ff; width: 300px; }
    #charCount { font-size: 0.8rem; color: gray; margin-top: 4px; }
    #counter { font-size: 2rem; font-weight: bold; margin: 16px 0; }
  </style>
</head>
<body>
  <button id="themeBtn">Toggle Theme</button>
  <hr style="border-color: #2d2855; margin: 20px 0;">
  <p id="counter">0</p>
  <button id="countBtn">Count Up</button>
  <hr style="border-color: #2d2855; margin: 20px 0;">
  <input type="text" id="textInput" placeholder="Type here...">
  <div id="charCount">0 characters</div>
  <script>
    // Your JavaScript here
  </script>
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'script',          message: 'Add a <script> block.' },
            { type: 'js-api',  method: 'addEventListener',  message: 'Use addEventListener() to handle clicks.' },
            { type: 'js-api',  method: 'classList.toggle', message: 'Use classList.toggle() for the theme switch.' },
            { type: 'js-api',  method: 'textContent',      message: 'Update textContent to show the counter value.' }
          ],
          hints: [
            'Theme: document.getElementById("themeBtn").addEventListener("click", () => { document.body.classList.toggle("light-mode"); })',
            'Counter: let count = 0; btn.addEventListener("click", () => { count++; el.textContent = count; })',
            'Char count: input.addEventListener("input", () => { charCount.textContent = input.value.length + " characters"; })'
          ]
        },

        {
          id: 'L19',
          number: '19',
          title: 'Form Validation',
          subtitle: 'HTML5 Constraints & JS Validation',
          xp: 160,
          timerXpBonus: 80,
          timerMinutes: 16,
          nftName: 'Netrunner Protocol IV',
          theory: `
<h3>HTML5 Built-in Validation</h3>
<p>HTML5 inputs can validate themselves before any JavaScript runs:</p>
<pre><code>&lt;input type="email" required&gt;
&lt;input type="text" minlength="3" maxlength="50"&gt;
&lt;input type="number" min="0" max="100" step="5"&gt;
&lt;input type="url" required&gt;
&lt;input type="text" pattern="[A-Za-z]+" title="Letters only"&gt;</code></pre>
<p>Key attributes: <code>required</code>, <code>minlength</code>, <code>maxlength</code>, <code>min</code>, <code>max</code>, <code>pattern</code></p>

<h3>The :valid and :invalid CSS Pseudo-classes</h3>
<pre><code>input:valid   { border-color: green; }
input:invalid { border-color: red; }
input:focus   { outline: 2px solid cyan; }</code></pre>

<h3>JavaScript Validation</h3>
<pre><code>const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();  // stop form from refreshing page
  const email = document.getElementById('email').value;

  if (!email.includes('@')) {
    showError('Invalid email address');
    return;
  }

  // All good — process form
  console.log('Form submitted:', email);
});

// Check validity programmatically
const input = document.getElementById('email');
if (!input.checkValidity()) {
  console.log(input.validationMessage);
}</code></pre>

<div class="challenge-box">
  <div class="challenge-title">⚡ MISSION BRIEF</div>
  <p>Build a validated registration form with: username (required, minlength 3), email (type="email", required), password (minlength 8), confirm password. JS must verify passwords match on submit and show an error if not. Style valid/invalid states with CSS.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Validated Form</title>
  <style>
    body { background: #0a0916; color: #e8e5ff; font-family: sans-serif; padding: 40px; max-width: 500px; margin: 0 auto; }
    .form-group { margin-bottom: 16px; }
    label { display: block; margin-bottom: 4px; font-size: 0.85rem; color: #8880b8; }
    input { width: 100%; padding: 10px 14px; background: #06050f; border: 1px solid #2d2855; color: #e8e5ff; border-radius: 4px; font-size: 0.9rem; }
    button[type="submit"] { padding: 12px 28px; background: rgba(0,240,255,0.1); border: 1px solid #00f0ff; color: #00f0ff; cursor: pointer; font-size: 0.85rem; }
    #errorMsg { color: #ff003c; font-size: 0.8rem; margin-top: 8px; display: none; }
  </style>
</head>
<body>
  <h1>Register</h1>
  <form id="regForm">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" required minlength="3">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
    </div>
    <div class="form-group">
      <label for="confirm">Confirm Password</label>
      <input type="password" id="confirm" name="confirm">
    </div>
    <button type="submit">Create Account</button>
    <div id="errorMsg"></div>
  </form>
  <script>
    // Add validation logic here
  </script>
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'input[required]',                   message: 'At least one input needs the required attribute.' },
            { type: 'element', selector: 'input[minlength]',                  message: 'Add minlength validation to the username field.' },
            { type: 'element', selector: 'input[type="email"]',               message: 'Use type="email" for the email input.' },
            { type: 'css-rule', property: 'border-color', selector: ':valid, input:valid', message: 'Style input:valid with a visible border color.' },
            { type: 'js-api',  method: 'preventDefault',                      message: 'Use e.preventDefault() to stop default form submission.' }
          ],
          hints: [
            'input:valid { border-color: #00ff9f; } input:invalid:not(:placeholder-shown) { border-color: #ff003c; }',
            'form.addEventListener("submit", (e) => { e.preventDefault(); ... })',
            'const pw = document.getElementById("password").value; const cf = document.getElementById("confirm").value; if (pw !== cf) { show error }',
            'errorMsg.style.display = "block"; errorMsg.textContent = "Passwords do not match";'
          ]
        },

        {
          id: 'L20',
          number: '20',
          title: 'The Final Run',
          subtitle: 'Full Capstone Project',
          xp: 200,
          timerXpBonus: 100,
          timerMinutes: 30,
          nftName: '[ NETRUNNER LEGEND ]',
          isBoss: true,
          theory: `
<h3>You Have Reached the Final Run</h3>
<p>Every skill you've learned converges here. This is your capstone: a complete, multi-section webpage built from scratch.</p>

<h3>Requirements</h3>
<p>Build a personal portfolio page that includes all of the following:</p>

<p><strong>Structure:</strong></p>
<p>✦ Full HTML5 skeleton with proper <code>&lt;!DOCTYPE&gt;</code>, charset, viewport</p>
<p>✦ Semantic layout: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code></p>
<p>✦ At least 2 <code>&lt;section&gt;</code> elements with id attributes</p>

<p><strong>Content:</strong></p>
<p>✦ Navigation with jump links to page sections</p>
<p>✦ A hero section with an image</p>
<p>✦ A skills section using an unordered list</p>
<p>✦ A projects table with 3+ rows</p>
<p>✦ A contact form with email input and validation</p>

<p><strong>Styling:</strong></p>
<p>✦ Internal <code>&lt;style&gt;</code> block with CSS variables</p>
<p>✦ Flexbox used for at least one layout</p>
<p>✦ CSS gradient on at least one element</p>
<p>✦ Hover effects on buttons/links</p>

<p><strong>Behavior:</strong></p>
<p>✦ JavaScript that saves something to localStorage</p>
<p>✦ At least one interactive element (toggle, counter, etc.)</p>

<div class="challenge-box">
  <div class="challenge-title">⚡ FINAL MISSION BRIEF</div>
  <p>Build your complete portfolio page. Hit all requirements above. This is your proof-of-work. Welcome to the net, Operator.</p>
</div>
          `,
          startCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio — Operator</title>
  <style>
    /* CSS Variables */
    :root {
      --bg: #0a0916;
      --text: #e8e5ff;
      /* Add more variables */
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: sans-serif; }
    /* Add all your styles here */
  </style>
</head>
<body>
  <!-- Build your complete portfolio here -->

  <script>
    // Add interactivity here
  </script>
</body>
</html>`,
          tests: [
            { type: 'element', selector: 'header',              message: 'Include a <header> element.' },
            { type: 'element', selector: 'nav a[href^="#"]',    message: 'Navigation must have jump links (href="#...").' },
            { type: 'element', selector: 'main',                message: 'Include a <main> element.' },
            { type: 'count',   selector: 'section', min: 2,     message: 'Include at least 2 <section> elements.' },
            { type: 'element', selector: 'img[alt]',            message: 'Include an image with alt text.' },
            { type: 'element', selector: 'ul li',               message: 'Include a list for skills.' },
            { type: 'element', selector: 'table tbody tr',      message: 'Include a projects table.' },
            { type: 'element', selector: 'form input[type="email"]', message: 'Include a contact form with email input.' },
            { type: 'css-rule', property: 'display', value: 'flex', message: 'Use flexbox for layout.' },
            { type: 'css-gradient', message: 'Include a CSS gradient.' },
            { type: 'js-api', method: 'localStorage',           message: 'Save something to localStorage.' },
            { type: 'element', selector: 'footer',              message: 'Include a <footer>.' }
          ],
          hints: [
            'Plan first: sketch your sections on paper',
            'Start with the skeleton, then add content section by section',
            'Use flexbox for the navbar and the project cards',
            'localStorage: save something small like a theme preference',
            'You\'ve learned everything you need. This is your run.'
          ]
        }
      ]
    }
  ]
};

// Flat lesson lookup map
export const LESSONS_BY_ID = {};
export const ALL_LESSONS = [];
for (const tier of CURRICULUM.tiers) {
  for (const lesson of tier.lessons) {
    lesson.tier = tier.id;
    lesson.tierName = tier.name;
    lesson.tierColor = tier.color;
    LESSONS_BY_ID[lesson.id] = lesson;
    ALL_LESSONS.push(lesson);
  }
}

// Get next lesson
export function getNextLesson(currentId) {
  const idx = ALL_LESSONS.findIndex(l => l.id === currentId);
  return idx >= 0 && idx < ALL_LESSONS.length - 1 ? ALL_LESSONS[idx + 1] : null;
}

// Get tier for lesson
export function getTierForLesson(lessonId) {
  return CURRICULUM.tiers.find(t => t.lessons.some(l => l.id === lessonId));
}

// Check if lesson is unlocked given completed set
export function isLessonUnlocked(lessonId, completedIds) {
  const idx = ALL_LESSONS.findIndex(l => l.id === lessonId);
  if (idx === 0) return true;
  const prev = ALL_LESSONS[idx - 1];
  return completedIds.includes(prev.id);
}

export const LEVEL_THRESHOLDS = [
  { min: 0,    max: 199,  name: 'GHOST INIT',   color: '#8880b8' },
  { min: 200,  max: 499,  name: 'RUNNER',        color: '#00f0ff' },
  { min: 500,  max: 899,  name: 'HACKER',        color: '#7b00ff' },
  { min: 900,  max: 1399, name: 'NETRUNNER',     color: '#ff003c' },
  { min: 1400, max: 1999, name: 'ARCHITECT',     color: '#ffd700' },
  { min: 2000, max: Infinity, name: 'LEGEND',    color: '#ffffff' }
];

export function getLevelFromXP(xp) {
  for (const level of LEVEL_THRESHOLDS) {
    if (xp >= level.min && xp <= level.max) return level;
  }
  return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
}

export function getXPProgress(xp) {
  const level = getLevelFromXP(xp);
  if (!isFinite(level.max)) return 100;
  const range = level.max - level.min;
  return Math.round(((xp - level.min) / range) * 100);
}
