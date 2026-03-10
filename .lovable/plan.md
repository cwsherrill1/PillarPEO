

# Fix: PDF Download Not Working

## Change

**File: `src/pages/Resources.tsx`** — Replace the `download` attribute with `target="_blank" rel="noopener noreferrer"` on the Buyer Guide download link so the PDF opens reliably in a new tab.

```tsx
// Before
<a href="/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf" download>

// After
<a href="/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf" target="_blank" rel="noopener noreferrer">
```

One line, one file.

