# Human Transformation MVP Website

Static single-page website for The Awakening, designed for GitHub Pages.

## Update before publishing

1. Open `script.js`
2. Replace `https://form.typeform.com/to/your-form-id` with the real survey URL
3. Optionally set `analyticsDomain` if you want Plausible analytics enabled

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository
2. Push these files to the default branch
3. In GitHub, open `Settings` -> `Pages`
4. Under `Build and deployment`, choose `Deploy from a branch`
5. Select the default branch and `/ (root)`
6. Save and wait for the GitHub Pages URL to appear
