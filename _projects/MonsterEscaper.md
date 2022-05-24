---
title:  "Monster Escaper"
---

## Oorzaak

ik heb een spel gemaakt omdat we een spel moesten maken voor informatica. een random spel wel niet te moeilijk maar ik had toch een beetje een moeilijker spel gekozen dan de rest. 

## proces of hoe het verliep

ik wou een spel maken zoals pacman maar ik vond de sprites niet van pacman dus heb ik dan maar gezegd dat ik pacman ging maken maar dan met andere sprites. de andere sprites waren een maneke en bijen van verschillende formaten. toen ik ontdekte dat het pacman concept te moeilijk was, heb ik maar een gelijkaardig spel gemaakt waarbij de bijen (spookjes) niet in het midden stonden en naar de speler (pacman) toe gingen maar verspreid over de hele canvas en dan naar de speler toe gingen. ik had dan simpeler gemaakt en het werkte. ik ging daarna de sprites toe voegen dat heel lang duurde want die hadden geen json bestand erbij. ik had het dan gedaan maar ontdekte dan dat de sprites bijna onzichtbaar omdat het zo klein was. dus moest ik wel andere sprites kiezen en kwam ik uiteindelijk met zombies en robots voor de bijen en een andere maneke voor de speler en zo werd mijn spel Monster Escaper.

<!--externe lib bestanden-->
<script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.js"></script>
<script src="/javascript/lib/p5.play.js"></script>

<!--lib bestanden-->
<script src="/javascript/lib/Game.js"></script>
<script src="/javascript/lib/GameCanvas.js"></script>
<script src="/javascript/lib/GameObject.js"></script>

<!--game objecten-->
<script src="/javascript/classes/GameObject/Monster.js"></script>
<script src="/javascript/classes/GameObject/Robot.js"></script>
<script src="/javascript/classes/GameObject/Zombie.js"></script>
<script src="/javascript/classes/GameObject/Tile.js"></script>
<script src="/javascript/classes/GameObject/Gold.js"></script>
<script src="/javascript/classes/GameObject/Player.js"></script>



<!--game class-->
<script src="/javascript/classes/MonsterEscaper.js"></script>

<!--p5 sketch-->
<script src="/javascript/sketch.js"></script>