# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


{
  "status": "ok",
  "totalResults": 5,
  "articles": [      // <-- This is an array!
    {
      "source": { "id": "source-id", "name": "source name" },
      "author": "Author Name",
      "title": "Article Title",
      "description": "Short description",
      "url": "https://example.com",
      "urlToImage": "https://example.com/image.jpg",
      "publishedAt": "2025-09-12T06:30:00Z",
      "content": "Full or partial content here..."
    },


     try {
      const response = await fetch(URL);
      const data = await response.json();
      SetNews(data.articles || []);
    } catch (err) {
      console.error("Fetch error:", err);
      SetNews([]);
    } finally {
      setLoading(false); // stop loading
    }
  }
