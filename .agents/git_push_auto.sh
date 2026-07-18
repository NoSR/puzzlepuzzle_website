#!/bin/bash
# Automatically stage, commit, and push changes.

# Exit on error
set -e

# Navigate to the repository root directory
cd "$(dirname "$0")/.."

# Add all changes
git add .

# Check if there are any staged changes to commit
if git diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

# Use the provided commit message or construct a default one
COMMIT_MSG="auto: execution results $(date '+%Y-%m-%d %H:%M:%S')"
if [ -n "$1" ]; then
  COMMIT_MSG="$1"
fi

# Commit the changes
git commit -m "$COMMIT_MSG"

# Push to the main branch. If it fails, pull with rebase and try again.
if ! git push origin main; then
  echo "Push failed. Attempting pull with rebase..."
  git pull --rebase origin main
  git push origin main
fi

echo "Successfully committed and pushed changes."
