```js
{
  "show": true | false, // true de padrão
  "player": {
    "health": 0, // vida do player, sendo min: 0, max: 100.
    "armor": 0, // colete do player, sendo min: 0, max: 100.
    "location": "", // localização do player.
    "time": "" //  horario do servidor e data.
  },
  "car": {
    "speed": 0, // velocidade do carro, sendo min: 0, max: 400.
    "engine": 0, // vida do motor, sendo min: 0, max: 100.
    "fuel": 0 // gasolina do carro, sendo min: 0, max: 100.
  }
}
```
```yml


```
----
```yml


```

```yml
- Outras propriedades:
fps/ping vêm de padrão do script, não precisa ser enviado.

- Como trocar entre player e carro:
caso não envie o objeto "car", será mostrado a hud do player apenas.
```