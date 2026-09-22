#!/usr/bin/env bash
# Fails if any image in public/ (served to every visitor) or assets-src/ (source photos
# committed to this public repo) carries location or camera-identifying metadata.
# Phone photos embed GPS coordinates by default, so strip it before committing:
#   exiftool -all= --icc_profile:all -overwrite_original <file>
# (npm run photos strips metadata from everything it writes to public/photos.)
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v exiftool >/dev/null 2>&1; then
  echo "exiftool is required (macOS: brew install exiftool, Ubuntu: apt-get install libimage-exiftool-perl)" >&2
  exit 2
fi

images=()
while IFS= read -r -d '' file; do
  images+=("$file")
done < <(find public assets-src -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \
  -o -iname '*.webp' -o -iname '*.avif' -o -iname '*.heic' -o -iname '*.tif' -o -iname '*.tiff' \) -print0 2>/dev/null)

if [ ${#images[@]} -eq 0 ]; then
  echo "No images found in public/ or assets-src/."
  exit 0
fi

flagged=$(exiftool -q -q -if '$gps:all or $SerialNumber or $Make or $Model' -p '$Directory/$FileName' "${images[@]}" || true)

if [ -n "$flagged" ]; then
  echo "These images contain GPS or camera metadata:" >&2
  echo "$flagged" | sed 's/^/  /' >&2
  echo >&2
  echo "Strip it with: exiftool -all= --icc_profile:all -overwrite_original <file>" >&2
  exit 1
fi

echo "OK: ${#images[@]} images checked, no GPS or camera metadata found."
