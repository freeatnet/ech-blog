#!/usr/bin/env bun

import fs from "fs";
import path from "path";
import chalk from "chalk";

import {
  readPostFromFile,
  PostNotFoundError,
  FrontmatterValidationError,
} from "../src/lib/blog";

/**
 * Validates all blog posts
 */
async function validateAllPosts() {
  console.log(chalk.blue("🔍 Validating all blog posts..."));

  const postsDirectory = path.join(process.cwd(), "blogs");

  // Check if blogs directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.error(
      chalk.red(`❌ Error: Blog posts directory not found at ${postsDirectory}`)
    );
    process.exit(1);
  }

  const files = await fs.promises.readdir(postsDirectory);

  // Filter only .md files
  const mdFiles = files.filter((filename) => filename.endsWith(".md"));

  if (mdFiles.length === 0) {
    console.warn(
      chalk.yellow("⚠️ Warning: No markdown files found in the blogs directory")
    );
    process.exit(0);
  }

  console.log(chalk.blue(`Found ${mdFiles.length} blog post(s) to validate`));

  let hasErrors = false;
  let validCount = 0;

  // Validate each post individually
  for (const filename of mdFiles) {
    try {
      readPostFromFile(filename, postsDirectory);
      validCount++;
    } catch (error) {
      hasErrors = true;
      if (error instanceof FrontmatterValidationError) {
        console.error(
          chalk.red(`❌ ${filename} - Invalid frontmatter:`),
          error.cause.issues
            .map((err) => `\n   - ${err.path.join(".")}: ${err.message}`)
            .join("")
        );
      } else if (error instanceof PostNotFoundError) {
        console.error(chalk.red(`❌ ${filename} - Post not found`));
      } else {
        throw error;
      }
    }
  }

  console.log(
    chalk.blue(
      `\n📊 Validation summary: ${validCount}/${mdFiles.length} posts valid`
    )
  );

  if (hasErrors) {
    console.error(
      chalk.red("\n❌ Validation failed. Please fix the errors above.")
    );
    process.exit(1);
  } else {
    console.log(chalk.green("\n✅ All blog posts are valid!"));
    process.exit(0);
  }
}

// Run the validation
validateAllPosts().catch((error) => {
  console.error(chalk.red(`\n❌ Unexpected error: ${error.message}`));
  process.exit(1);
});
