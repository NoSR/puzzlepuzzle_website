# Custom Rules for PuzzlePuzzl_Website

## Git Automation Rules
- **Automatic Staging, Committing, and Pushing**: Whenever you (the AI agent) make any file additions, deletions, or modifications, or complete any task or execution, you MUST automatically commit and push the changes to GitHub.
- **Workflow**:
  - Run the automation script: `.agents/git_push_auto.sh "<descriptive commit message>"`
  - Alternatively, stage, commit, and push manually:
    1. Stage all changes: `git add .`
    2. Commit the changes: `git commit -m "<descriptive message>"`
    3. Push to the remote repository: `git push origin main`
- **Condition**: Do NOT wait for the user to explicitly ask you to commit or push. Run this automation automatically at the end of each turn/phase when changes have been made.
