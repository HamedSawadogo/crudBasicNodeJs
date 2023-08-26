
exports.getProducts = (req, res) => {
   try {
      const products = [
         {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
         },
         {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
         },
      ];
      res.status(200).json({ products });
   } catch (error) {
      res.status(400).json({ error });
   }

}

exports.addProduct = (req, res) => {
   res.json({ response: "produit crée avec success" });
}

exports.deleteProduct = (req, res) => {
   res.json({ reponse: "produit supprimé avec l'id  " + req.params.id });
};
exports.updateProduct = (req, res) => {
   res.json({ reponse: `produit modifié avec l'id   ${req.params.id}` });
};