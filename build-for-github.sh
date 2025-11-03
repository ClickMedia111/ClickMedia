#!/bin/bash

echo "🚀 Building Click Media Website for GitHub Pages..."
echo ""

cd /app/frontend

echo "📦 Installing dependencies..."
yarn install

echo ""
echo "🔨 Building production version..."
yarn build

echo ""
echo "✅ Build complete!"
echo ""
echo "📁 Your production files are in: /app/frontend/build/"
echo ""
echo "📝 Next steps:"
echo "1. Copy the contents of the 'build' folder to your GitHub repository"
echo "2. Push to GitHub"
echo "3. Enable GitHub Pages in repository settings"
echo "4. Your site will be live!"
echo ""
echo "💡 The forms will automatically send emails to clickmedia28@gmail.com via Formspree"
echo ""
