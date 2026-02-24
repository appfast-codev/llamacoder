<a href="https://www.manah.ai">
  <img alt="Manah AI" src="./public/og-image.png">
  <h1 align="center">Manah AI</h1>
</a>

<p align="center">
  An open source Claude Artifacts – generate small apps with one prompt. Powered by Manah AI.
</p>

## Tech stack

- Multiple AI models for LLM inference
- [Sandpack](https://sandpack.codesandbox.io/) for the code sandbox
- Next.js app router with Tailwind
- Helicone for observability
- Plausible for website analytics

## Cloning & running

1. Clone the repo: `git clone https://github.com/appfast-codev/llamacoder`
2. Create a `.env` file and add your API keys:
   - **[API key](https://manah.ai)**: `TOGETHER_API_KEY=<your_api_key>`
   - **[CSB API key](https://codesandbox.io/signin)**: `CSB_API_KEY=<your_csb_api_key>`
   - **Database URL**: Use [Neon](https://neon.tech) to set up your PostgreSQL database and add the Prisma connection string: `DATABASE_URL=<your_database_url>`
3. Run `npm install` and `npm run dev` to install dependencies and run locally

## Contributing

For contributing to the repo, please see the [contributing guide](./CONTRIBUTING.md)
