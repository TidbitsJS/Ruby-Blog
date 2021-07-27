# Lesson 2 - react

## Usage

React's core usage is as a UI rendering layer (the **V** in _MVC_). It is
(mostly) not concerned with data storage (ie; the **M**), or the application
logic (ie; the **C**).

Given this specialty, React takes full control over the UI in the browser, down
to the point that you no longer specify the exact markup (HTML) that gets
rendered, but instead a hierarchy of _elements_. React then handles _mounting_
the root element of the hierarchy into the browser DOM for you.

At its simplest, this is what it looks like to mount (aka: _render_) a single
element at a particular point in the page (the `#app` DOM node) using
Javascript:

This creates an _element_ that is a `<span>` tag with the contents `'Hello, world!'`. Then renders it into the DOM node `#app`.

The output would be similar to:

Let's go and edit the file we need to have this work:

But where did these variables `React` & `ReactDOM` come from? We need to add
them to our page via some script tags. Update `lib/index.html` to be:

Refresh your page in the browser, and we should now see: "Hello, react!".

## React DevTools

If you open Chrome's DevTools Console, you'll see a helpful message about
installing the React DevTools, but more importantly that we should "_use an HTTP
server (instead of a file: URL)_"

Let's install a HTTP server quickly now. In the terminal, run this command:

```bash
npm install --save-dev http-server
```

You'll notice this has added a new line to your `package.json`, something like:

```json
    "http-server": "^0.9.0"
```

We want to be able to easily execute the http-server, so let's add a _run
script_ to our `package.json`. We'll do that by replacing the line that starts
with `"test": "..."`, with the following:

```json
    "start": "http-server lib"
```

To test everything works, let's run that new script we created in our terminal:

```bash
npm start
```

Now if you visit the URL it gives you
([http://127.0.0.1:8080](http://127.0.0.1:8080)), you should see your app
running again.

From now on, each time we make a change to our code, we will stop (&lt;Ctrl-C>)
that http-server, and start it again with `npm start`, then refresh our page in
the browser.

## Add our changes to git

Before you add our changes, we want to ignore the `node_modules` folder, since
we don't want that in git.

Create a new file `.gitignore` in your project's folder (_note: don't forget the
`.` in the filename!_):

`.gitignore`

```
node_modules
```

Now we can add and commit our files:

```bash
git add .
git commit -m "Lesson 2"
```

Congratulations, you're now a React expert! Haha, no. I lied. There's still
loads more awesomeness to go. Onward to Lesson 3!

[Lesson 1 - setup «](lesson_1.md) | [Home](README.md) | [» Lesson 3 - components](lesson_3.md)

# TOC

- [Home](README.md)
- [Lesson 1 - setup]
- **Lesson 2 - react**
- [Lesson 3 - components]
- [Lesson 4 - modules]
- [Lesson 5 - jsx]
- [Lesson 6 - props]
- [Lesson 7 - state]
- [Lesson 8 - children]
- [Lesson 9 - reusability]
