Making an iPad ereader
==========
Using RubyMotion and UIWebView

1. Uses CSS to execute new pages
2. Allows complete spec'ing of type by tag
3. Additional tags are free — only requirement is a stylesheet that identifies how to deal with the non-HTML5 tag: block, inline, table, etc.
4. Complete use of all fonts on your iPad
5. Can include several good fonts; maybe access Google Web Fonts?
6. Should be able to read ePub's
7. What is a W3C widget? Does it pertain here?
8. First goal is to be able to freely modify the book's appearance/formatting
9. Way to keep track of reader's position in text (recoverable each time book is opened)
10. Read zip archives
11. Like all ereaders, a "library" or book manager function necessary
12. Bookmarks
13. Highlighting
14. Notes
15. Can use webkit extensions
16. Being webkit, should be able to handle multiple graphic formats and SVG (and animation)
17. Scriptable using Javascript? There is certainly a module that can be included that would do this
18. Why not accept MD markup too?

The above are simply what we wanted and were capable of 5 to 12 years ago.

More useful would be the kinds of extensions to a book notion proposed to Stein's book site — variables that change the content as you read, mechanisms to substitute user's illustrations for author's, track the reader's progress, alter the order of text sequencing, etc. Ability to alter the text to read the way you want / require it to; ways to identify when this happens. (Should this be doable from within the e-reader? Keyboard plus cut/paste necessary. Or is _altering_ a text a different mode from _reading_?)

Also useful would be method for sending book updates and being able to revert to the original version.

Definition of graphic languages using SVG?

Tables of Content are useful. Links are useful (both within text and without); but shouldn't a Topic Map/Neo4J navigation be implementable? (OK, forget the fact that Java and iOS are alien to each other.) Should be able to indicate "Give me what's related to this [sentence/paragraph/section/chapter/reference/person] in a popup or separate window"

OK, fiction could be kind of interesting this way.

A travel book is a natural — draw in all kinds of source material, constantly alter the pictures shown. It's a book, but the updating is consistent with how we think of the internet.

FBReader
-------
Pagination and line-splitting is great. Modifying text appearance is most flexible/thorough of any e-reader. (That hasn't changed in 5 years, afaik.)

Splendid integration of OPDS. Copy or borrow?


Library
=========
Could look like Pocket (or Zite)

Maybe construct on "card" basis

Use face-detection technology to zoom in on author photos grabbed from web




