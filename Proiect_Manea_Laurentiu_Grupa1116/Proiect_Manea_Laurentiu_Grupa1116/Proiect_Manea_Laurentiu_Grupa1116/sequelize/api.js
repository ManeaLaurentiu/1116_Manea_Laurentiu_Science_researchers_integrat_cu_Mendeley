import "./sync.js";
import { router, server } from "../server-init.js";
import { sequelizeOperationsAPI } from "./operations-api.js";

router
  .route("/sequelize/libraries")
  .get(async function getLibraries(_, res) {
    const result = await sequelizeOperationsAPI.getLibraries();
    res.status(200).json(result);
  });

router
    .route("/sequelize/libraries")
    .post(async function createLibrary({ body }, res) {
    try {
    if(!Object.keys(body).length){
        res.status(400).json({ message: "Body is missing" });
    }
    else if(!body.hasOwnProperty('Category') || !body.hasOwnProperty('Title')){
        res.status(400).json({ message: 
        `Malformed request. Input template for creating a library: { Category: ..., Title: ... }` });
    }
    else if(typeof body.Category !== "string"){
        res.status(400).json({ message: "Category should be a string" });
    }
    else if(typeof body.Title !== "string"){
      res.status(400).json({ message: "Creation Date should be a string" });
    }
    else {
        await sequelizeOperationsAPI.createLibrary(body);
        res.status(200).json("Library successfully created!");
    } 
    } catch (err) {
        console.error(`Error while calling API: ${err}`);
    }
  });

router
  .route("/sequelize/libraries/:libraryId")
  .put(async function updateLibrary({ params: { libraryId }, body }, res) {
    try {
    if(!Object.keys(body).length){
        res.status(400).json({ message: "Body is missing" });
    }
    else if(!body.hasOwnProperty('Category') || !body.hasOwnProperty('Title')){
        res.status(400).json({ message: 
        `Malformed request. Input template for creating a library: { Category: ..., Title: ... }` });
    }
    else if(typeof body.Category !== "string"){
        res.status(400).json({ message: "Category should be a string" });
    }
    else {
      await sequelizeOperationsAPI.updateLibrary(+libraryId, body);
      res.status(200).json("Library successfully updated!");
    }
    } catch (err) {
      console.error(`Error while calling API: ${err}`);
    }
  });

router
  .route("/sequelize/libraries/:libraryId")
  .delete(async function deleteLibrary({ params: { libraryId } }, res) 
  {
    try {
      await sequelizeOperationsAPI.deleteLibrary(+libraryId);
      res.status(200).json("Library successfully deleted!");
  } catch (err) {
      console.error(`Error while calling API: ${err}`);
    }
  });

router
  .route("/sequelize/libraries/:libraryId/articles")
  .get(async function getArticlesOfLibraryId({ params: { libraryId }}, res) 
  {
    const result = await sequelizeOperationsAPI.getArticlesOfLibraryId(libraryId);
    res.status(200).json(result); 
  });

router
  .route("/sequelize/libraries/:libraryId/articles")
  .post(async function createArticleForLibraryId({ params: {libraryId }, body }, res) {
  try {
  if(!Object.keys(body).length){
      res.status(404).json({ message: "Body is missing" });
  }
  else if(!body.hasOwnProperty('Title') || !body.hasOwnProperty('Author') || !body.hasOwnProperty('Publication') || !body.hasOwnProperty('Year') || !body.hasOwnProperty('DocumentURL') ){
      res.status(404).json({ message: 
      `Malformed request. Input template for creating an article: { Title: ..., Author: ..., Publication: ..., Year: ..., DocumentURL: ... }` });
  }
  else if(typeof body.Title !== "string") {
      res.status(400).json({ message: "Title should be a string" });
  }
  else if(typeof body.Author !== "string"){
      res.status(400).json({ message: "Author should be a string" });
  }
  else if(typeof body.Publication !== "string"){
    res.status(400).json({ message: "Publication should be a string" });
  }
  else if(typeof body.Year !== "string"){
    res.status(400).json({ message: "Year should be a string" });
  }
  else if(typeof body.DocumentURL !== "string"){
    res.status(400).json({ message: "DocumentURL should be a string" });
  }
  else {
    await sequelizeOperationsAPI.createArticleForLibraryId(+libraryId, body);
    res.status(200).json("Article successfully created!");
  }
  } catch (err) {
    console.error(`Error while calling API: ${err}`);
  }
  });

router
  .route("/sequelize/libraries/:libraryId/articles/:articleId")
  .put(async function updateArticleOfLibraryId({ params: { libraryId, articleId }, body }, res) {
  try {
    if(!Object.keys(body).length){
      res.status(404).json({ message: "Body is missing" });
  }
  else if(!body.hasOwnProperty('Title') || !body.hasOwnProperty('Author') || !body.hasOwnProperty('Publication') || !body.hasOwnProperty('Year') || !body.hasOwnProperty('DocumentURL') ){
      res.status(404).json({ message: 
      `Malformed request. Input template for creating an article: { Title: ..., Author: ..., Publication: ..., Year: ..., DocumentURL: ... }` });
  }
  else if(typeof body.Title !== "string") {
    res.status(400).json({ message: "Title should be a string" });
  }
  else if(typeof body.Author !== "string"){
      res.status(400).json({ message: "Author should be a string" });
  }
  else if(typeof body.Publication !== "string"){
    res.status(400).json({ message: "Publication should be a string" });
  }
  else if(typeof body.Year !== "string"){
    res.status(400).json({ message: "Year should be a string" });
  }
  else if(typeof body.DocumentURL !== "string"){
    res.status(400).json({ message: "DocumentURL should be a string" });
  }
  else {
    await sequelizeOperationsAPI.updateArticleOfLibraryId(+libraryId, +articleId, body);
    res.status(200).json("Article successfully updated!");
  }
  } catch (err) {
    console.error(`Error while calling API: ${err}`);
  }
  });
  
router
  .route("/sequelize/libraries/:libraryId/articles/:articleId")
  .delete(async function deleteArticleOfLibraryId({ params: { libraryId, articleId } }, res) 
  {
    try {
      await sequelizeOperationsAPI.deleteArticleOfLibraryId(+libraryId, +articleId);
      res.status(200).json("Article successfully deleted!");
  } catch (err) {
      console.error(`Error while calling API: ${err}`);
    }
  });



