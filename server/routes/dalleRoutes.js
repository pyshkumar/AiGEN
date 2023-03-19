import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
//So that the environment variable are getting populated.

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
//create an instance of the openai

router.route("/").get((req, res) => {
  res.send("Hello from Dalle 2");
});

router.route("./").post(async (req, res) => {
  try {
    const { prompt } = req.body; //Comes from the Client side

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json; //Getting the image

    res.status(200).json({ photo: image }); //Sending the image to the front-end
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
