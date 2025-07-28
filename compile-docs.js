#!/usr/bin/env node

/*
Documentation Compiler Tool

Usage:
  node compile-docs.js [docs-directory] [output-file]

Example for this project:
  node compile-docs.js docs compiled-docs.md

Default values:
  docs-directory: ./docs
  output-file: ./compiled-docs.md
*/

const fs = require('fs');
const path = require('path');

function getAllMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function stripFrontmatter(content) {
  if (content.startsWith('---')) {
    const endIndex = content.indexOf('---', 3);
    if (endIndex !== -1) {
      return content.substring(endIndex + 3).trim();
    }
  }
  return content;
}

function countWords(text) {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

function estimateTokens(text) {
  return Math.ceil(countWords(text) * 1.3);
}

function compileMarkdownFiles(docsDir, outputFile) {
  const markdownFiles = getAllMarkdownFiles(docsDir);
  let compiledContent = '# Compiled Documentation\n\n';
  
  console.log(`Found ${markdownFiles.length} markdown files`);
  
  for (const file of markdownFiles) {
    const relativePath = path.relative(docsDir, file);
    const content = fs.readFileSync(file, 'utf8');
    const contentWithoutFrontmatter = stripFrontmatter(content);
    
    compiledContent += `## ${relativePath}\n\n`;
    compiledContent += contentWithoutFrontmatter + '\n\n';
    compiledContent += '---\n\n';
  }
  
  fs.writeFileSync(outputFile, compiledContent);
  
  const wordCount = countWords(compiledContent);
  const tokenCount = estimateTokens(compiledContent);
  
  console.log(`✅ Compiled ${markdownFiles.length} files into ${outputFile}`);
  console.log(`📊 Statistics:`);
  console.log(`   Words: ${wordCount.toLocaleString()}`);
  console.log(`   Estimated tokens: ${tokenCount.toLocaleString()}`);
  console.log(`   File size: ${(fs.statSync(outputFile).size / 1024).toFixed(2)} KB`);
}

const docsDir = process.argv[2] || './docs';
const outputFile = process.argv[3] || './compiled-docs.md';

if (!fs.existsSync(docsDir)) {
  console.error(`❌ Directory ${docsDir} does not exist`);
  process.exit(1);
}

compileMarkdownFiles(docsDir, outputFile);