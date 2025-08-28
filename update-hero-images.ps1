# PowerShell script to update image references in hero.tsx
# Run this after downloading images with download-images.ps1

$heroFile = "src/components/hero.tsx"
$content = Get-Content $heroFile -Raw

# Replace HTTPS URLs with local image paths
$replacements = @{
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/h25x8ao5Xg\.png" = "/images/logo.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/LHpfuMNuVt\.png" = "/images/scroll-icon.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/wjOTP96pEM\.png" = "/images/background-pattern.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/F10rQZpWms\.png" = "/images/overlay-image.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/MyUV6ZDi8K\.png" = "/images/profile-photo.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/OAK7XBN56j\.png" = "/images/floating-icon.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/uJJfXuBUdQ\.png" = "/images/social-1.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/WH0tBLkf49\.png" = "/images/social-2.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/bQJLZvPtV3\.png" = "/images/social-3.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/Reej97HfMD\.png" = "/images/social-4.png"
    "https://codia-f2c\.s3\.us-west-1\.amazonaws\.com/image/2025-08-18/BQKhbXxQqc\.png" = "/images/frontend-icon.png"
}

Write-Host "Updating image references in hero.tsx..." -ForegroundColor Yellow

foreach ($pattern in $replacements.Keys) {
    $replacement = $replacements[$pattern]
    $oldContent = $content
    $content = $content -replace $pattern, $replacement
    
    if ($oldContent -ne $content) {
        Write-Host "✓ Updated: $replacement" -ForegroundColor Green
    }
}

# Save updated content
Set-Content -Path $heroFile -Value $content -Encoding UTF8

Write-Host "`nImage references updated successfully!" -ForegroundColor Green
Write-Host "All HTTPS URLs replaced with local /images/ paths" -ForegroundColor Cyan
