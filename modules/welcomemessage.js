Hooks.once("init", function() {
    console.log("Incializando módulo El Rey del Invierno")

    game.settings.register("el-rey-del-invierno-csb", "firstTimeStart", {
        name: "Mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: true,
        type: Boolean
    })
})

Hooks.once("ready", function() {
    if (game.settings.get("el-rey-del-invierno-csb", "firstTimeStart")) {
		let buttonId=Date.now();
        let msg = '<h1>Bienvenido al módulo del Rey del Invierno</h1><button id='+buttonId+' >Ve al Tutorial</button><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p>'
        ChatMessage.create({
        		speaker: {alias:"Mordred"},
        		content: msg,
           whisper : ChatMessage.getWhisperRecipients(game.user.name)
        }).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/el-rey-del-invierno-csb')
				});
			}
			}, 100);
		});
        game.settings.set("custom-system-builder", "initFormula", "iniciativa");
        }
        game.settings.set("el-rey-del-invierno-csb", "firstTimeStart", false);
    
})