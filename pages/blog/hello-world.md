---
title: "Hello, World"
slug: "hello-world"
date: "2019-08-01T03:32:22.887Z"
description: "Words and stuff."
---

Sup, world.
This is a test post for this showcasing this blog's capabilities and styling.

## Headings

h1 is not rendered since it refers to the post title.

## h2

### h3

#### h4

##### h5

###### h6

## Code

`inline` and block:

```go
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello, World")
}
```

## Lists

- unordered list item
- another unordered list item

1. first ordered list item
   - unordered sub-list item
   - because details matter.
1. another item
   1. ordered sub-list item
   1. a single item numbered list is dumb
1. and another item.

## Emphasis and Quotes

**bold**, _italics_, and **bold-_italics_**, and ~~strikethrough~~

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough

## Links

[I'm an inline-style link](https://www.google.com).

## Footnotes

Here's a test footnote.[^test]

This footnote[^inline] is inline.

[^test]: Test footnote.
[^inline]: Inline footnote.
