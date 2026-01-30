#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Updating repository in: $ROOT_DIR"

git pull --rebase

if [ -f package.json ]; then
  npm install
fi

echo "Update complete."
