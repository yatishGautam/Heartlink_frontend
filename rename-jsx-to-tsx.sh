#!/bin/bash

# Find all .jsx files and rename them to .tsx
find . -type f -name "*.jsx" | while read FILE; do
    # Get the base filename without extension
    BASENAME=$(basename "$FILE" .jsx)
    # Get the directory path of the file
    DIRNAME=$(dirname "$FILE")
    # Construct the new filename with .tsx extension
    NEWFILE="$DIRNAME/$BASENAME.tsx"
    # Rename the file
    mv "$FILE" "$NEWFILE"
    echo "Renamed: $FILE to $NEWFILE"
done

echo "All .jsx files have been renamed to .tsx."
