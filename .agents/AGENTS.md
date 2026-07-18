# Custom Rules for PuzzlePuzzl_Website

## Git Automation Rules
- **Automatic Staging, Committing, and Pushing**: Whenever you (the AI agent) make any file additions, deletions, or modifications, or complete any task or execution, you MUST automatically commit and push the changes to GitHub.
- **Workflow**:
  1. Stage all changes: `git add .`
  2. Commit the changes with a clear, descriptive commit message: `git commit -m "<descriptive message>"`
  3. Push to the remote repository: `git push origin main`
- **Condition**: Do NOT wait for the user to explicitly ask you to commit or push. Run these commands automatically at the end of each turn/phase when changes have been made.
- **Handling Remote Changes**: If a push fails because the remote contains work that you do not have locally, fetch and rebase first: `git pull --rebase origin main`.
