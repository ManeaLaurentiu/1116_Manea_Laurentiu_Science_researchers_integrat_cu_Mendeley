import { Libraries, Articles } from "./sync.js";

async function sequelizeAuth(sequelizeConnection){
    try {
        await sequelizeConnection.authenticate();
        console.log("Sequelize has successfully connected to the database!");
    } catch (err) {
        console.error(
            `There was an error connecting to the databse using sequelize : ${err}`
        );
    }
}

async function sequelizeSync(sequelizeConnection){
    try {
        await sequelizeConnection.sync({force: false, alter: true});
        console.log("Sync completed!");
    } catch (err) {
        console.error(`Sync failed : ${err}`);
    }
}


async function sequelizeInit(sequelizeConnection){
    await sequelizeAuth(sequelizeConnection);
    await sequelizeSync(sequelizeConnection);
}


async function getLibraries() {
    try {
        return await Libraries.findAll(); 
    } catch (err) {
        console.log(err); 
    }
}

async function createLibrary(library) {
    try{
      await Libraries.create({
        Category: library.Category,
        Title: library.Title,
      });
    } catch(err) {
        console.log(err);
    }
}

async function updateLibrary(libraryId, library) {
    try{
        const record = await Libraries.findByPk(libraryId);
        if(record) await record.update ({
            Category: library.Category,
            Title: library.Title,
        });
    } catch(err){
        console.log(err);
    }
}

async function deleteLibrary(libraryId) {
    try{
        const record = await Libraries.findByPk(libraryId);
        if(record) await record.destroy();
    } catch(err){
        console.log(err);
    }
}

async function getArticlesOfLibraryId(libraryId){
    try {
        const library = await Libraries.findByPk(libraryId, {
            include: [Articles]
        });
        if(library) {
            var { Articles: articles } = library;
            return articles;
        }
        else{
            console.log(`LibraryId ${libraryId} not found!`); 
        }
    } catch(err){
        console.log(err);
    }
}

async function createArticleForLibraryId(libraryId, article) {
    try {
        const record = await Libraries.findByPk(libraryId);
        if(record){
            let newArticle = await Articles.create({
                Title: article.Title,
                Author: article.Author,
                Publication: article.Publication,
                Year: article.Year,
                DocumentURL: article.DocumentURL,
              });
              newArticle.LibraryId = record.LibraryId; 
            await newArticle.save();
        }
        else{
            console.log(`LibraryId ${libraryId} not found!`);
        }   
    } catch (err) {
        console.log(err);
    }
}

async function updateArticleOfLibraryId(libraryId, articleId, article){
    try {
        const library = await Libraries.findByPk(libraryId, {
            include: [Articles],
            where: { ArticleId: articleId }
        });
        if(library) {
            const updatedArticle = await Articles.findByPk(articleId);
            if(updatedArticle) {
                await updatedArticle.update({
                    Title: article.Title,
                    Author: article.Author,
                    Publication: article.Publication,
                    Year: article.Year,
                    DocumentURL: article.DocumentURL,
                });
                await updatedArticle.save();
            }   
            else{
                console.log(`ArticleId ${articleId} not found!`); 
            }
        }
        else{
            console.log(`LibraryId ${libraryId} not found!`); 
        }
    } catch(err){
        console.log(err);
    }
}

async function deleteArticleOfLibraryId(libraryId, articleId){
    try {
        const library = await Libraries.findByPk(libraryId, {
            include: [Articles],
            where: { ArticleId: articleId }
        });
        if(library) {
            const article = await Articles.findByPk(articleId);
            if(article) {
                await article.destroy();
            }   
            else{
                console.log(`ArticleId ${articleId} not found!`); 
            }
        }
        else{
            console.log(`LibraryId ${libraryId} not found!`); 
        }
    } catch(err){
        console.log(err);
    }
}


export const sequelizeOperationsAPI = {
    init: sequelizeInit,

    getLibraries: getLibraries,
    createLibrary: createLibrary,
    updateLibrary: updateLibrary,
    deleteLibrary: deleteLibrary,

    createArticleForLibraryId: createArticleForLibraryId,
    getArticlesOfLibraryId:getArticlesOfLibraryId,
    updateArticleOfLibraryId: updateArticleOfLibraryId,
    deleteArticleOfLibraryId: deleteArticleOfLibraryId,
    
};