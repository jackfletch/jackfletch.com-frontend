# Colophon

What's a colophon, you may ask?

No, not using your colon for music making—I'd expect that to be _colon-phony_.
With respect to printed books, a colophon is a brief description of the printing and publication of the book.
On the web though, a colophon serves as a technical description of a site's architecture.

So, before I forget, here's what's going on behind the scenes and why.

## Motives

My motives behind creating this site include:

- Learn and gain experience. This is twofold:
  1. Use modern web technologies in the making of this website.
  1. Create a digital playground for trying/testing new web technology.
     Successful experiments can then be hosted here with minimal deployment pain.
- Blog
- Portfolio
- Scummy self-promotion

## Approach

As my own toughest critic, I have tinkered with the design and structure of this site since my junior year of college.
It has been an educational experience but also truly frustrating at times.
In a constant strive for perfection, I struggle to be satisfied with the result even when it's exactly what I initially set out to produce.

Rather than work against or around my innate desire for perfection, I chose to embrace it.
Knowing my future self would want to make changes, I spent a considerable amount of effort up-front learning about website architectures and, eventually, architecting.

With the aforementioned motives in mind, I held myself to **three vague requirements**:

1. **Simple aesthetic**⁠—no crazy animations, color schemes, or typography.
   Just clean design.
1. **Painless iteration**—Declarative infrastructure and configurations with kubernetes, CI/CD, and other quality-of-life tools for managing a stack and its deployment.
   If I need to make changes, I want them to require as little re-on-boarding and overhead as possible.
   Additionally, having this infrastructure set up as early as possible (on substantial projects like this one) accelerates development.
1. **Personal playground**—an environment of boundless possibilities.
   I don't want to tie the entire site to a certain technology.
   For instance, a basic static site generator doesn't allow me to showoff a visualization project that needs a database on the backend.

**Tl;dr**: avoid trends, consider potential (r)evolutions.
Trends are just that: trends.
They change.
However, black text on a white background never goes out of style.
Without sounding like a schizophrenic, I'm confident my future self will agree and opt to not change it.

Sometimes trends are truly revolutionary (git, kubernetes, etc.).

## Design Decisions

### Layout

#### Navigation

TODO

#### Responsiveness

TODO

### Typography

With the site's simple style, typography has to do a lot of the aesthetic heavy lifting.
The main font is [Inter](https://rsms.me/inter/).

### Images and Icons

TODO

### Navigation

TODO

### Color Palette

Given the requirements, my color palatte options are quite _black and white_. And gray. I chose a few saturated colors for some pop.

### CMS

Currently, I simply write blog posts in markdown and commit it to the same repository as the website frontend. The frontend generates routes and loads a specific markdown file based on the unique URL slug. I plan to eventually investigate other methods of managing my blog content.

## Open source code

This website frontend is a personal project and free to use, modify, and even sell within the bounds of the liberal MIT license. You'll find the most recent version of the frontend at https://github.com/jackfletch/docker-nextjs.

The kubernetes cluster configuration is not published at this time.
