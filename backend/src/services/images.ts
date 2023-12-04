import { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";
import { getPublicURL } from "../utils/url";
import sizeOf from "image-size";

interface Article {
  title: string;
  description: string;
  image: string;
}

class ImagesService {
  getAll = async (req: Request, res: Response) => {
    const filePath = path.join(__dirname,  '../data/articles.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
  
    const articles = this.transform(req, jsonData);
  
    res.json(articles);
  }

  upload = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const image = req.file;
  
    if (!title || !description || !image) {
      return res.status(400).json({ error: 'Missing fields' });
    }
  
    const filePath = path.join(__dirname,  '../data/articles.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
  
    const newArticle = {
      title,
      description,
      image: image.filename
    };
  
    const updatedData = [...jsonData, newArticle];
  
    await fs.writeFile(filePath, JSON.stringify(updatedData));
  
    res.json(newArticle);
  }

  private transform = (req: Request, article: Article | Article[]) => {
    const articles = Array.isArray(article) ? article : [article];
  
    const transformedArticles = articles.map((article) => {
      const { width, height } = sizeOf(path.join(__dirname, `../public/images/${article.image}`));

      return {
        ...article,
        image: {
          url: getPublicURL(req, `/images/${article.image}`),
          width,
          height
        }
      }
    });
  
    return Array.isArray(article) ? transformedArticles : transformedArticles[0];
  }
}

export default ImagesService;