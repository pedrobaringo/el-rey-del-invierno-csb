Hooks.once("init", function() {
    console.log("Incializando módulo El Rey del Invierno")

    game.settings.register("el-rey-del-invierno-csb", "firstTimeStart", {
        name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let forzarbienvenida=game.settings.get("el-rey-del-invierno-csb", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("el-rey-del-invierno-csb").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("el-rey-del-invierno-csb", "welcomeMessage") || forzarmensaje==true) {
			console.log('lalala');
			let buttonId=Date.now();
			let buttonId2=Date.now()+2;
			let msg='<h1>Bienvenido al módulo del Rey del Invierno</h1><p>Importa los compendios para poder empezar a usar el módulo</p><button id='+buttonId2+' >Importa los compendios</button><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p><button id='+buttonId+' >Ve al Tutorial</button>';
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
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("el-rey-del-invierno-csb.templates-objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("el-rey-del-invierno-csb.templates-actores");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-del-invierno-csb", "welcomeMessage", true);
						game.user.setFlag("el-rey-del-invierno-csb", "lastVersion", game.modules.get("el-rey-del-invierno-csb").version);
					});
				}
				}, 100);
			});
			game.settings.set("custom-system-builder", "initFormula", "iniciativa");
			game.settings.set("el-rey-del-invierno-csb", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("el-rey-del-invierno-csb", "lastVersion")) {
			let buttonId=Date.now();
			let buttonId2=Date.now()+2;
			let msg='<h1>Bienvenido al módulo del Rey del Invierno</h1><p>Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' >Importa los compendios</button><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p><button id='+buttonId+' >Ve al Tutorial</button>';
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
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("el-rey-del-invierno-csb.templates-objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("el-rey-del-invierno-csb.templates-actores");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-del-invierno-csb", "lastVersion", game.modules.get("el-rey-del-invierno-csb").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("el-rey-del-invierno-csb", "welcomeMessage") || forzarmensaje==true) {
		let buttonId=Date.now();
		let msg = '<h1>Bienvenido al módulo del Rey del Invierno</h1><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p><button id='+buttonId+' >Ve al Tutorial</button>'
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
					openInNewTab('https://github.com/pedrobaringo/el-rey-del-invierno-csb');
				});
			}
			}, 100);
		});
		game.user.setFlag("el-rey-del-invierno-csb", "welcomeMessage", true);
		game.settings.set("el-rey-del-invierno-csb", "firstTimeStart", false);
	}
})