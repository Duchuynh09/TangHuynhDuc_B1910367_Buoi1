exports.create = (ref,res) => {
    res.send({ message: "create handler"});
};
exports.findAll = (ref,res) => {
    res.send({ message: "findAll handler"});
   };
exports.findOne = (ref,res) => {
    res.send({ message: "findOne handler"});
};
exports.update = (ref,res) => {
    res.send({ message: "update handler"}); 
};
exports.delete = (ref,res) => {
    res.send({ message: "delete handler"});
};
exports.deleteAll = (ref,res) => {
    res.send({ message: "deleteAll handler"});
};
exports.findAllFavorite = (ref,res) => {
    res.send({ message: "findAllFavorite handler"});
    
};
 