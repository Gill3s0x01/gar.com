<p align="center">  GAR.COM APP 🚀</p>

<p align="center">
   <img src="./public/logo-git.png" alt="logo" width="180px"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/lorison-gilles/">
      <img alt="Lorison Gilles" src="https://img.shields.io/badge/-LorisonGilles-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Gilles30/gar.com?color=774DD6">

  <a href="https://github.com/Gilles30/gar.com/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Gilles30/gar.com?color=774DD6">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  <a href="https://github.com/Gilles30/gar.com/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Gilles30/gar.com?color=8257E5&logo=github">
  </a>
</p>

> <p align="center"> :rocket: Project created to practice my knowledge. </p>

<p align="center">
    <a href="README.md">English</a>
    ·
    <a href="README-pt.md">Portuguese</a>
 </p>

<div align="center">
  <sub>The GAR.COM APP. Built with ❤︎ by
    <a href="https://github.com/Gilles30">Lorison Gilles</a> and
    <a href="https://github.com/Gilles30/gar.com/">
      contributors
    </a>
  </sub>
</div>

# :pushpin: Table of Contents

- [:pushpin: Table of Contents](#pushpin-table-of-contents)
    - [Mobile Screenshot](#mobile-screenshot)
- [:computer: Technologies](#computer-technologies)
- [:rocket: Features](#rocket-features)
- [:rocket: Figma Style Guide](#rocket-figma-style-guide)
- [:construction\_worker: How to run](#construction_worker-how-to-run)
    - [📦 Run API](#-run-api)
    - [💻 Run Project](#-run-project)
- [:bug: Issues](#bug-issues)
- [:tada: Contributing](#tada-contributing)
  - [🤝 Contributing](#-contributing)
- [:closed\_book: License](#closed_book-license)

</p>

</br></br>

### Mobile Screenshot

</br>

<div align="center">
   <img src="./public/banner.png" width="950px">
   <p>
    An app to help waiters serve tables faster and with a lower rate of failures.
   </p>
   </br></br>
   <img src="./public/dashboard.png" width="550px">
   </br></br>
   <p>
    Web app with an intuitive interface and usability.
   </p>
   </br></br>
   <img src="./public/list-waiting-dashboard.png" width="350px">
   <p>
    Opened modal by listing backorders
   </p>
   </br></br>
   <img src="./public/list-inProductin-dashboard.png" width="350px">
   <p>
    Modal opened by listing orders in production.
   </p>
   </br></br>
   <img src="./public/list-completed-dashboard.png" width="350px">
   <p>
    Modal opened by the list of completed orders.
   </p>
</div>
</br>

# :computer: Technologies

This project was made using the follow technologies:

- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Prettier](https://prettier.io/)
- [React](https://reactjs.org/)
- [Styled-Components](https://www.styled-components.com/)
- [Socket-io](https://socket.io/)

# :rocket: Features

- Order listing.
- Changing order status.
- Cancel Order.
- Finish Order.
- Report Order.

# :rocket: Figma Style Guide

<div align="center">
  <img src="./assets/styleguide.png" alt="style-guide-colors" widht="450px"/>
  </br></br>
</div>
  https://www.figma.com/file/LIB0ZSzRpA9t4tBRw04NuH/GAR.COM?node-id=13%3A686&t=GiPRcVAVSa9SanPB-1

# :construction_worker: How to run

```bash
# Clone Repository
$ git clone https://github.com/Gilles30/gar.com.git
```

### 📦 Run API

- API consumed directly from the cloud!

```bash
# Run Docker
$ Run Docker with the image created for the app/

# Clone the repository from the link below
$ https://github.com/Gilles30/foodreq-api

# Run the API
$ yarn dev

# Open Insomnia or Postman

# Start by creating the category in the URL and using the JSON format below
$ http://localhost:8080/categories

$ {
	"icon": "🥤",
	"name": "Bebidas"
  }

# Create the products using the link and JSON structure below - POST - Body - Multi Platform
$ http://localhost:8080/products

$ {
    "name": "Burguer Galinha Pintadinha",
    "description": "Hamburguer de 100g de frango, com bacon e mussarela",
    "imagePath": "1668712655163-chicken.png",
    "price": 15,
    "ingredients": [
      {
        "name": "Mussarela",
        "icon": "🧀",
        "_id": "637688cfad42cbe1501f9d9c"
      },
      {
        "name": "Hamburguer 100g",
        "icon": "🍗",
        "_id": "637688cfad42cbe1501f9d9d"
      },
      {
        "name": "Bacon",
        "icon": "🥓",
        "_id": "637688cfad42cbe1501f9d9e"
      }
    ],
    "category": "637681a3e6b224a1cbd57363",
    "_id": "637688cfad42cbe1501f9d9b",
    "__v": 0
  }

# For the image item, you must choose the File item and upload it by selecting it from your computer

# Inputs that are not shown in the image below but appear in the JSON are filled in automatically

# If you followed all the steps correctly you should get both listings.

```

<img src="./assets/create-product.png" alt="example-create-product" widht="350px"/>

Access docs API at mks-frontend-challenge-api.herokuapp.com/api-docs/

### 💻 Run Project

```bash

#Attention: Before starting, in some files, you must be on the localhost port that metro uses.

$ src\components\Cart\index.tsx

$ src\components\Menu\index.tsx

$ src\components\ProductModal\index.tsx

$ src\utils\api.ts

 Replace localhost with your IP used by metro

# Install Dependencies (Only if you haven't installed the dependencies before)
$ yarn

# Run Aplication
$ yarn start

#Remembering that all emulator or cell phone settings must already be ready before starting the project


```

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Proffy](https://github.com/Gilles30/gar.com/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](./CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

## 🤝 Contributing

Follow the steps below to contribute:

1.  _fork_ the project (<https://github.com/Gilles30/gar.com>)

2.  Clone your _fork_ to your machine (`git clone https://github.com/Gilles30/gar.com.git`)

3.  Create a _branch_ to carry out your modification (`git checkout -b feature/name_new_feature`)

4.  Add your modifications and do the _commit_ (`git commit -m "Descreva sua modificação"`)

5.  _Push_ (`git push origin feature/name_new_feature`)

6.  Create a new _Pull Request_

7.  Okay, now just wait for the analysis 🚀

# :closed_book: License

Released in 2022 :closed_book: License

Made with love by [Lorison Gilles](https://github.com/Gilles30) 🚀.
This project is under the [MIT license](./LICENSE).

Give a ⭐️ if this project helped you!
