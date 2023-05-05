#!/bin/sh

# Use Rsync to Publish Obsidian Markdown to jeffreybarron.com/blog
# r recursive = THIS SCRIPT DOES NOT USE Recursion.
# t preserve time
# a archive  -a, --archive same as -rlptgoD (no -H)
# v verbose
# u update 
# h human readable output
# --delete delete files from dest that are not present on source

# Use trailing slash on SRC and no trailing slash on DST

echo "# ====================================="
SRC_ROOT="/Users/jeffbarron/dev-local/clients/jeffreybarron/jeffreybarron-com"
DST_ROOT="/Users/jeffbarron/dev-local/clients/jeffreybarron/jeffreybarron-com"

echo "# -------------------------------------"
echo "# Publish Articles"
echo "# -------------------------------------"
SRC="$SRC_ROOT/data/articles/attachments/"
DST="$DST_ROOT/public/articles/attachments/"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

echo "# -------------------------------------"
echo "# Publish Blog"
echo "# -------------------------------------"
SRC="$SRC_ROOT/data/blog/attachments/"
DST="$DST_ROOT/public/blog/attachments/"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

echo "# -------------------------------------"
echo "# Publish Release Notes"
echo "# -------------------------------------"
SRC="$SRC_ROOT/data/release/attachments/"
DST="$DST_ROOT/public/release/attachments/"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

echo "# -------------------------------------"
echo "# Publish Public Images"
echo "# -------------------------------------"
SRC_ROOT="/Users/jeffbarron/dev-local/clients/jeffreybarron/digital-media/published"
DST_ROOT="/Users/jeffbarron/dev-local/clients/jeffreybarron/jeffreybarron-com"

SRC="$SRC_ROOT/public/articles/images/"
DST="$DST_ROOT/public/articles/images"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

SRC="$SRC_ROOT/public/blog/images/"
DST="$DST_ROOT/public/blog/images"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

SRC="$SRC_ROOT/public/release/images/"
DST="$DST_ROOT/public/release/images"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

SRC="$SRC_ROOT/public/pages/images/"
DST="$DST_ROOT/public/pages/images"
echo from: $SRC
echo to: $DST
echo "# -------------------------------------"
rsync -tlptgoDvuhd --delete "$SRC" "$DST" --exclude=".DS_Store" --exclude="node_modules"

echo "# Script completed"
echo "# ====================================="
