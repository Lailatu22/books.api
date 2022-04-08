const {Router} = require("express")

const {getBooks, deleteBook} = require("../controllers/booksController")


const router =Router();

router.route("/books").get(getBooks)
router.get("/book:title",deleteBook)


module.exports =router