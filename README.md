# chatgpt-AI-App
A ChatGPT API Implementation demo project using React (Vite), Typescript & Express.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)
2. Clone this repository
3. Navigate into the 'client' directory
   ```bash
      $ cd client
      ```
4. Install the requirements

   ```bash
   $ npm install
   ```
5. In a different terminal navigate to the 'server' directory.
```bash
   $ cd server
   ```
6. Install the requirements in the server directory

   ```bash
   $ npm install
   ```
7. Make a copy of the example environment variables file in server directory

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
8. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

9. Run both client and server apps by running the command in their respective directories

   ```bash
   $ npm run dev
   ```
   
You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!
