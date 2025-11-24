#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  exit 1
fi

@echo "Cleaning up generated files..."
rm -rf assets/styles/tailwind.css
rm -rf public

@echo "Running build process..."
npx @tailwindcss/cli -i ./assets/styles/index.css -o ./assets/styles/tailwind.css
hugo --minify

@echo "Git operations..."
git add .
git commit -m "$1"
git push origin main
