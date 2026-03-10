

# Fix PEO Buyer Guide Download

## What's happening
The current PDF may be corrupted or outdated. The user uploaded a new version (`Employers_Guide_to_Choosing_the_Right_PEO-2.pdf`) and wants the download to be automatic (trigger a file save rather than opening in a new tab).

## Changes

1. **Replace the PDF** — Copy the newly uploaded file to `public/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf`, overwriting the old one.

2. **File: `src/pages/Resources.tsx`** — Change the link back to use the `download` attribute (for automatic download) and keep `target="_blank"` as fallback. Use a click handler that programmatically creates a download link to force the save dialog reliably across browsers:

```tsx
<a
  href="/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf"
  download="Employers_Guide_to_Choosing_the_Right_PEO.pdf"
  onClick={(e) => {
    e.preventDefault();
    fetch("/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Employers_Guide_to_Choosing_the_Right_PEO.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }}
>
```

This fetch-and-blob approach forces a download dialog in all browsers, even in SPA preview environments where the `download` attribute alone can fail.

