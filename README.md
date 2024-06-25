# Books App
![image](https://github.com/mouad-sellak/api-books-js/assets/75551008/aadfc5c7-48fc-4e38-a05b-e2b4f2a17bb5)

Books App est une application web qui permet aux utilisateurs de rechercher des livres à l'aide de l'API d'OpenLibrary, de les ajouter à une liste de favoris et de gérer cette liste de lecture.

## Fonctionnalités

- **Recherche de livres** : Rechercher des livres par titre ou auteur.
- **Affichage des résultats** : Afficher les résultats de la recherche avec le titre, l'auteur, l'ISBN et l'image de couverture du livre.
- **Pagination** : Naviguer entre les pages de résultats.
- **Ajout à la liste de lecture** : Ajouter des livres à une liste de favoris.
- **Suppression de la liste de lecture** : Retirer des livres de la liste de favoris.
- **Persistance des données** : Les livres ajoutés à la liste de favoris sont sauvegardés dans le `localStorage` et sont rechargés à chaque fois que la page est rechargée.

## Prérequis

Pour exécuter cette application, vous aurez besoin de :

- Un navigateur web moderne (Chrome, Firefox, Safari, etc.)
- Une connexion Internet pour accéder à l'API d'OpenLibrary

## Installation

1. Clonez ce dépôt sur votre machine locale :
    ```sh
    git clone https://github.com/mouad-sellak/api-books-js.git
    ```

2. Naviguez dans le répertoire du projet :
    ```sh
    cd books-app
    ```

3. Ouvrez le fichier `index.html` dans votre navigateur :
    ```sh
    open index.html
    ```

## Utilisation

1. **Recherche de livres** : Entrez le titre ou l'auteur d'un livre dans la barre de recherche et cliquez sur le bouton "Rechercher".
2. **Pagination** : Utilisez les boutons de pagination pour naviguer entre les pages de résultats.
3. **Ajout à la liste de lecture** : Cliquez sur "Ajouter à la liste" pour ajouter un livre à votre liste de lecture.
4. **Voir la liste des favoris** : Cliquez sur le bouton "Favorite Liste" pour afficher tous les livres ajoutés à votre liste de lecture.

## Développement

Pour contribuer au projet, veuillez suivre ces étapes :

1. Forkez ce dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Poussez votre branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

