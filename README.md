### Projet REACT JS CRASH COURSE de Traversy

//
CD CRASH2 => NPX CREATE-REACT-APP .

### PREMIERE PARTIE APP01.JS

- On crée en Premier aprés avoir rajouté INDEX.CSS dans INDEX.JS, le HEADER dans PAGES
  Et dans le HEADER, on aura le component BUTTON.JS avec son click

- On crée ensuite la page TASKS. On lui transfére la data tasks qui se trouve à APP.JS
  Le TASKS aura le component TASK. On ppouvait lui faire le onclick sur sa page mais on a trop de fonctions, alors on va tout mettre sur APP
  Du coup, on aura :
- deleteTASK => pour vérifier log('delete', 1)
- toggleReminder => pour vérifier console + component + TASK (on rque le reminder est true puis passe false au dblclik)

- On crée la page ADDTASK avec son props
  Une fois créée, on s'oqp du SHOWADDTASK avec son const [] pour faire disparaitre le component BUTTON du HEADER.
  💕👌 Et pour cela, le showAddTask dans le ADDTASK ET LE SETSHOWADDTASK DANS LE HEADER

### DEUXIEME PARTIE APP02.JS (On va faire le BACK avec JSON-SERVER)

##On teste le BACKEND

**Primero (pas obligé de le faire)**
On teste le =>
NPM RUN BUILD
NPM I -G SERVE => 💕👌 NPX SERVE -S BUILD -P 8000

**Secondero (obligé de le faire)**

Puis on l'arrete pour aller aux choses sérieuses sur google 'JSON SERVER' (n'oublions pas d'installer l'extension GREPPER 💕👌) => On aura
=> https://github.com/typicode/json-server

c'est à dire comment l'installer (npm install -g json-server && ensuite aller dans PACKAGE JSON taper
=> 💕👌 "backend": "json-server --watch db.json --port 5000 "), créer le db.json(à coté de .gitignore) & le lancer avec =>
json-server --watch db.json

## CONCLUSION

On a lancé deux serveurs : NPM RUN BACKEND && NPM RUN START
On va les associer avec AXIOS
Puis on fait le USEEFFECT où on aura le GET-ALL, ensuite le deleteTASK (DELETE) puis le addTask (POST) && le TOGGLE(GET-SINGLE && PUT)

####

Sur la derniere partie, on fait le FOOTER (il aura 2 fichiers Footer & About)
NPM I REACT-ROUTER-DOM pour le LINK
La Route sera entre le HEADER 11 LE FOOTER

Pour terminer, on mettra dans HEADER02, le useLOCATION pour faire disparaitre le BUTTON SI ON EST SUR LE '/ABOUT'

# CSS in REACT

Si on veut le CSS directement sur la page, on peut mettre <h1 style={headingStyle} > && tout en bas aprés les accolades du "const Header = () {} " mettre const headingStyle = {color: red, backgroundColor: black}

# IMPLEMENTER ICONS

NPM I REACT-ICONS
