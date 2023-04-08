#!/bin/sh

# Use Rsync to Publish Obsidian Markdown to jeffreybarron.com/blog
# r recursive = THIS SCRIPT DOES NOT USE Recursion.
# t preserve time
# a archive
# v verbose
# u update 
# h human readable output
# --delete delete files from dest that are not present on source

# Use trailing slash on SRC and no trailing slash on DST

SRC_ROOT="/Users/jeffbarron/Dropbox/Documents/ObsidianVault/Client Library/jeffreybarron.com"
DST_ROOT="/Users/jeffbarron/dev-local/clients/jeffreybarron.com/nextjs-blog"

echo "# ====================================="
echo "# Publish Blog"
SRC="$SRC_ROOT/blog/"
DST="$DST_ROOT/data/blog"
rsync -tavuh --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

SRC="$SRC_ROOT/blog/attachments/"
DST="$DST_ROOT/public/images/blog"
rsync -tavuh --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

echo "# ====================================="
echo "# Publish Release Notes"
SRC="$SRC_ROOT/release/"
DST="$DST_ROOT/data/release"
rsync -tavuh --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

SRC="$SRC_ROOT/release/attachments/"
DST="$DST_ROOT/public/images/release/"
rsync -tavuh --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

echo "# Script completed"
echo "# ====================================="
