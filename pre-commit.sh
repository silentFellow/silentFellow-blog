#!/bin/bash

echo "Cleaning up generated files..."
rm -rf assets/styles/tailwind.css
rm -rf public

echo "Running build process..."
npx @tailwindcss/cli -i ./assets/styles/index.css -o ./assets/styles/tailwind.css
hugo --minify
