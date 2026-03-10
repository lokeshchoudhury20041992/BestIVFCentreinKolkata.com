#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# Static HTML/CSS Export Script for Maatritva IVF
# Downloads all pages from the running dev server and rewrites links
# so every interlink works when opened directly from the filesystem.
# ═══════════════════════════════════════════════════════════════════════════

set -e

BASE_URL="http://localhost:3001"
EXPORT_DIR="/Users/lokeshchoudhury/Desktop/BestIVFCentrein Kolkata.com/public/static-export"

echo "🗂  Export directory: $EXPORT_DIR"
rm -rf "$EXPORT_DIR"
mkdir -p "$EXPORT_DIR"

# ─── All routes to download ──────────────────────────────────────────────

PAGES=(
  "/"
  "/doctors"
  "/calculator"
  "/ivf-cost-kolkata"
  "/privacy-policy"
  "/services/ivf-treatment"
  "/services/iui-treatment"
  "/services/icsi-treatment"
  "/services/laparoscopic-surgery"
  "/services/high-risk-pregnancy"
  "/locations/salt-lake"
  "/locations/new-town"
  "/locations/south-kolkata"
  "/conditions/pcos-treatment"
  "/conditions/low-amh-treatment"
  "/conditions/blocked-fallopian-tubes"
)

# ─── Step 1: Download every page as HTML ─────────────────────────────────

echo ""
echo "📄 Downloading HTML pages..."

for page in "${PAGES[@]}"; do
  if [ "$page" = "/" ]; then
    filepath="index.html"
  else
    filepath="${page#/}.html"
  fi

  dir=$(dirname "$filepath")
  mkdir -p "$EXPORT_DIR/$dir"

  echo "   ↳ $page → $filepath"
  curl -s "${BASE_URL}${page}" -o "$EXPORT_DIR/$filepath"
done

# ─── Step 2: Download CSS and JS assets ──────────────────────────────────

echo ""
echo "🎨 Downloading CSS/JS assets..."

# Extract all asset URLs from downloaded HTML files
ASSET_URLS=$(grep -roh 'src="/_next/[^"]*"\|href="/_next/[^"]*"' "$EXPORT_DIR" 2>/dev/null | \
  sed 's/^src="//; s/^href="//; s/"$//' | \
  sort -u || true)

SCRIPT_ASSETS=$(grep -roh '"/_next/static/[^"]*"' "$EXPORT_DIR" 2>/dev/null | \
  sed 's/"//g' | \
  sort -u || true)

ALL_ASSETS=$(echo -e "${ASSET_URLS}\n${SCRIPT_ASSETS}" | sort -u | grep -v '^$' || true)

for asset in $ALL_ASSETS; do
  asset_path="${asset#/}"
  dir=$(dirname "$asset_path")
  mkdir -p "$EXPORT_DIR/$dir"

  if [ ! -f "$EXPORT_DIR/$asset_path" ]; then
    echo "   ↳ $asset"
    curl -s "${BASE_URL}${asset}" -o "$EXPORT_DIR/$asset_path" 2>/dev/null || true
  fi
done

# Second pass for additional JS chunks
echo "   ↳ Scanning for additional chunks..."
EXTRA_ASSETS=$(grep -roh '"/_next/static/[^"]*"' "$EXPORT_DIR/_next" 2>/dev/null | \
  sed 's/"//g' | \
  sort -u || true)

for asset in $EXTRA_ASSETS; do
  asset_path="${asset#/}"
  dir=$(dirname "$asset_path")
  mkdir -p "$EXPORT_DIR/$dir"

  if [ ! -f "$EXPORT_DIR/$asset_path" ]; then
    echo "   ↳ $asset (chunk)"
    curl -s "${BASE_URL}${asset}" -o "$EXPORT_DIR/$asset_path" 2>/dev/null || true
  fi
done

# ─── Step 3: Rewrite internal links for local navigation ─────────────────

echo ""
echo "🔗 Rewriting interlinks for local navigation..."

# Process each HTML file
find "$EXPORT_DIR" -name "*.html" -type f | while IFS= read -r htmlfile; do
  # Get depth of this file relative to EXPORT_DIR for relative path calculation
  rel_path="${htmlfile#${EXPORT_DIR}/}"
  depth=$(echo "$rel_path" | tr '/' '\n' | wc -l)
  depth=$((depth - 1))

  # Build prefix (../ for each level of depth)
  prefix=""
  for ((i=0; i<depth; i++)); do
    prefix="../${prefix}"
  done

  # Rewrite Next.js route links to .html files
  sed -i '' \
    -e "s|href=\"/doctors\"|href=\"${prefix}doctors.html\"|g" \
    -e "s|href=\"/calculator\"|href=\"${prefix}calculator.html\"|g" \
    -e "s|href=\"/ivf-cost-kolkata\"|href=\"${prefix}ivf-cost-kolkata.html\"|g" \
    -e "s|href=\"/privacy-policy\"|href=\"${prefix}privacy-policy.html\"|g" \
    -e "s|href=\"/services/ivf-treatment\"|href=\"${prefix}services/ivf-treatment.html\"|g" \
    -e "s|href=\"/services/iui-treatment\"|href=\"${prefix}services/iui-treatment.html\"|g" \
    -e "s|href=\"/services/icsi-treatment\"|href=\"${prefix}services/icsi-treatment.html\"|g" \
    -e "s|href=\"/services/laparoscopic-surgery\"|href=\"${prefix}services/laparoscopic-surgery.html\"|g" \
    -e "s|href=\"/services/high-risk-pregnancy\"|href=\"${prefix}services/high-risk-pregnancy.html\"|g" \
    -e "s|href=\"/locations/salt-lake\"|href=\"${prefix}locations/salt-lake.html\"|g" \
    -e "s|href=\"/locations/new-town\"|href=\"${prefix}locations/new-town.html\"|g" \
    -e "s|href=\"/locations/south-kolkata\"|href=\"${prefix}locations/south-kolkata.html\"|g" \
    -e "s|href=\"/conditions/pcos-treatment\"|href=\"${prefix}conditions/pcos-treatment.html\"|g" \
    -e "s|href=\"/conditions/low-amh-treatment\"|href=\"${prefix}conditions/low-amh-treatment.html\"|g" \
    -e "s|href=\"/conditions/blocked-fallopian-tubes\"|href=\"${prefix}conditions/blocked-fallopian-tubes.html\"|g" \
    "$htmlfile"

  # Rewrite href="/" to index.html (only exact matches, not /_next paths)
  # Use a more specific pattern to avoid breaking asset paths
  perl -i -pe "s|href=\"/\"|href=\"${prefix}index.html\"|g" "$htmlfile"

  echo "   ↳ Rewrote links in $rel_path"
done

# ─── Step 4: Summary ─────────────────────────────────────────────────────

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅ Export complete!"
echo ""

HTML_COUNT=$(find "$EXPORT_DIR" -name "*.html" | wc -l | tr -d ' ')
CSS_COUNT=$(find "$EXPORT_DIR" -name "*.css" 2>/dev/null | wc -l | tr -d ' ')
JS_COUNT=$(find "$EXPORT_DIR" -name "*.js" 2>/dev/null | wc -l | tr -d ' ')
TOTAL_SIZE=$(du -sh "$EXPORT_DIR" | cut -f1)

echo "   📄 HTML files:  $HTML_COUNT"
echo "   🎨 CSS files:   $CSS_COUNT"
echo "   ⚡ JS files:    $JS_COUNT"
echo "   📦 Total size:  $TOTAL_SIZE"
echo ""
echo "   📁 Location: $EXPORT_DIR"
echo "   🌐 Open: file://$EXPORT_DIR/index.html"
echo "═══════════════════════════════════════════════════════════"
