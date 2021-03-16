# comunicare-corona
## Usage
Ce challenge est hébergé sur un serveur firebase et accessible à l'adresse suivante : 
https://comunicare-challenge.web.app/
L'application ayant été pensée prioritairement pour un smartphone, je vous invite donc à visiter ce lien depuis un téléphone bien que celle-ci soit également consultable sur pc. 

NB. Il est également possible de générer une app android mais héberger une version mobile en ligne me semblait plus facile dans ce contexte.

Le code source est accessible sur mon github (sur la branche develop) : https://github.com/Qlfvr/comunicare-corona/tree/develop 




## Choix d'architecture 
J'ai choisi de réaliser cette application sous la forme d'une "Single Page Application". 
L'application ne comprend donc qu'une page appelée "home" qui va charger les différents composants.
Ils sont au nombre de 3 :
1. form : 
Il s'agit du formulaire permettant la saisie des paramètres de l'utilisateur. Une attention particulière a été portée à la validation du formulaire.
Angular propose deux types de formulaire : "reactive forms" et "template-driven form". j'ai opté pour l'approche "Reactive form" réputée plus scalable dans une optique d'évolution de l'app.
2. prediction :
Ce composant présente les différentes probabilités issues de la route post.
3. ecg :
 Il s'agit d'une petite animation svg en accord avec la thématique de l'app pour remplacer le traditionnel spinner.

En plus de ces trois composants, j'ai créé un service nommé "crud". C'est là qu'est codée la fonction postRequest. J'ai également choisi d'y placer la logique de composition du body envoyé avec la requête. Ce service pourrait également contenir d'autres routes vers l'api si l'application était amenée à évoluer.

## Choix de Design.
Pour le choix du design, j'avais initialement utilisé les couleurs de l'app Comunicare téléchargée depuis le play store. 
J'ai finalement redéfini mon thème sur base des couleurs du logo Comunicare pour donner une identité plus forte à l'application. 
De manière générale il était tentant d'utiliser un maximum de composants Ionic mais j'ai préféré garder l'interface utilisateur au service de l'expérience utilisateur. 

C'est pourquoi j'ai utilisé un formulaire traditionnel par exemple. 
## Difficultés rencontrées 
Le plus gros challenge était de m'adapter rapidement à Angular mais j'ai été agréablement surpris de constater que l'adaptation n'était pas si difficile ayant eu l'occasion de comprendre les concepts clés du framework en utilisant React et Vue précédemment. 
J'ai néanmoins pris le temps de bien maîtriser les Inputs et Outputs plutôt que de contourner le problème en groupant les composants.



