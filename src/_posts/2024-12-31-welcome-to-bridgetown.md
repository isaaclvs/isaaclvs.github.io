---
layout: post
title: "Getting Started with Ruby: Hello World"
date: 2024-12-31 08:06:20 -0300
categories: [ruby, programming, beginners]
description: "Learn how to write your first Ruby program with a simple Hello World example"
---

Ruby is known for its simplicity and readability. Let's start with the most basic program: printing "Hello, World!" to the screen.

## The Simple Way
The most straightforward way to write Hello World in Ruby is:

```ruby
puts "Hello, World!"
```

That's it! Just one line of code.

## A More Interactive Version
Here's a slightly more interactive version that asks for your name:

```ruby
print "What's your name? "
name = gets.chomp
puts "Hello, #{name}!"
```

### How it works:
1. `print` displays text without a new line
2. `gets` reads user input
3. `chomp` removes the trailing newline
4. `#{name}` interpolates the variable in the string

## Running the Code
1. Save either version in a file (e.g., `hello.rb`)
2. Open your terminal
3. Run: `ruby hello.rb`

That's your first step into Ruby programming! Simple, clean, and elegant - that's the Ruby way.

Happy coding! 🚀
