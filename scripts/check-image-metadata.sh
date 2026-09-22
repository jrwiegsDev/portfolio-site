#!/usr/bin/env bash
# Fails if any image in public/ carries location or camera-identifying metadata.
# Phone photos embed GPS coordinates by default; anything in public/ is served to
# every visitor, so strip it before committing:
#   exiftool -all= --icc_profile:all -overwrite_original public/<file>
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v exiftool >/dev/null 2>&1; then
  echo "exiftool is required (macOS: brew install exiftool, Ubuntu: apt-get install libimage-exiftool-perl)" >&2
  exit 2
fi

shopt -s nullglob nocaseglob
images=(public/*.png public/*.jpg public/*.jpeg public/*.webp public/*.heic public/*.tif public/*.tiff)
shopt -u nocaseglob

if [ ${#images[@]} -eq 0 ]; then
  echo "No images found in public/."
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
