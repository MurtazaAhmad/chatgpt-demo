const express = require("express");
const router = express.Router();
const axios = require("axios");
const { OPENAI_API_KEY } = process.env;

//requiring openai
const { Configuration, OpenAIApi } = require("openai");

//Routes
router.post("/generate", async (req, res) => {
  try {
    const { name, language, stack } = req.body;

    //OpenAI API Configuration
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // model is a trained model in OpenAI
    // prompt is the text that you want to generate from the model
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0.7,
      prompt: `Hi, my name is ${name}.
      I would like to learn ${stack} and I like/love/know ${language}. 
      Please suggest me a complete learning path/plan/stack which I can follow. 
      Try to be as specific as possible and return the response within 500 words. 
      In response, have my name with a Hi at the top. 
      `,
      max_tokens: 2048,
    });

    console.log(completion.data.choices);

    res.send({ status: "success", message: completion.data.choices[0].text });
  } catch (err) {
    if (err.response) {
      console.log("We have an Error Response");
      console.error(err.response);
      res.status(500).send({ status: "error", message: err.response });
    } else {
      console.log("We have an Error Message");
      console.error(err.message);
      res.status(500).send({ status: "error", message: err.message });
    }
  }
});

module.exports = router;
