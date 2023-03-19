import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
//So that the environment variable are getting populated.

const router = express.Router();
