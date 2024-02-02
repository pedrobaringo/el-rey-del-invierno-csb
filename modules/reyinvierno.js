import {RIWhite} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["i"] = RIWhite;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"RIDice",name:"Dados Rey del Invierno"},"preferred");
    dice3d.addDicePreset({
      type:"di",
      labels:[
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice1.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice2.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice3.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice4.webp',
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice5.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice6.webp'
      ],
      bumpMaps:[
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice1_Bump.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice2_Bump.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice3_Bump.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice4_Bump.webp',
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice5_Bump.webp', 
        'modules/el-rey-del-invierno-csb/assets/Dice/Dice6_Bump.webp'
      ],
	  colorset:"whiteRI",
      system: "RIDice"
    });
dice3d.addColorset({
    name: 'whiteRI',
    description: 'White',
    category: 'Dados Rey del Invierno',
    foreground: '#FFFFFF',
    background: '#FFFFFF',
    outline: 'white',
    texture: 'none',
    material: 'plastic'
});
});
