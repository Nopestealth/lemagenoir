// Ce dont le bot a besoins.
const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');

const bot = new Discord.Client ();
 
// Fonction de réponse aléatoire
function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

// JSON Files
let userData = JSON.parse(fs.readFileSync('JSON/userData.json', 'utf8'));

bot.on('ready', () => {
    bot.user.setActivity('vous aider');
    console.log('Je suis bien connecté')
});

bot.on('message', message => {
    const guildMember = message.member;
    // Attribue le mot Sender à la variable.
    let sender = message.author;
    
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 0.
    if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected";

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].protego) userData[sender.id + message.guild.id].protego = "Non"

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].protegod) userData[sender.id + message.guild.id].protegod = "Non"

    // Créer les points de Serpentards.
    if (!userData['Serpentard']) userData['Serpentard'] = {}
    if (!userData['Serpentard'].points) userData['Serpentard'].points = 0.

    // Créer les points de Gryffondor.
    if (!userData['Gryffondor']) userData['Gryffondor'] = {}
    if (!userData['Gryffondor'].points) userData['Gryffondor'].points = 0.

    // Créer les points de Poufsouffle.
    if (!userData['Poufsouffle']) userData['Poufsouffle'] = {}
    if (!userData['Poufsouffle'].points) userData['Poufsouffle'].points = 0.

    // Créer les points de Serdaigle.
    if (!userData['Serdaigle']) userData['Serdaigle'] = {}
    if (!userData['Serdaigle'].points) userData['Serdaigle'].points = 0.

    // Créer la baguette d'une personne
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].baguette) userData[sender.id + message.guild.id].baguette = "NONE"

    // Métier d'une personne
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].metier) userData[sender.id + message.guild.id].metier = "NONE"

    // Informations sur les fournitures d'une personne
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].chaudron) userData[sender.id + message.guild.id].chaudron = "Non"

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].ollivander) userData[sender.id + message.guild.id].ollivander = "Non"

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].apothicaire) userData[sender.id + message.guild.id].apothicaire = "Non"

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].guipure) userData[sender.id + message.guild.id].guipure = "Non"

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].fleuryetbott) userData[sender.id + message.guild.id].fleuryetbott = "Non"

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].animal) userData[sender.id + message.guild.id].animal = "Non"

    // Informations sur le compte Gringotts
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].gringotts) userData[sender.id + message.guild.id].gringotts = "Non"

    // Créer les balais
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].balaisvolant) userData[sender.id + message.guild.id].balaisvolant = "Non"

    // Informations concernant les balais
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].balais) userData[sender.id + message.guild.id].balais = "Non"

    // Attribue un PREFIX à notre bot.
    let prefix = "!"

    fs.writeFile('JSON/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error (err);
    })
    
    if (message.content === prefix + "aprotego") {
        userData[sender.id + message.guild.id].protegod = "Oui"
        userData[sender.id + message.guild.id].protego = "Protego"
        message.channel.send(`ADMIS`);    
    }

    if (message.content === prefix + "protego") {
        if (message.member.roles.get(process.env.ROLEPLAY)) {
            if (userData[sender.id + message.guild.id].protegod = "Oui") {
                message.channel.send(`Tu peux.`);
            }
            else
            {
                if (userData[sender.id + message.guild.id].protego = "Non") {
                    message.channel.send(`Tu ne peux pas.`);
                }
            }
        }
    }
    
    if (message.content === prefix + "oakshaft79") {
        if (message.channel.id === process.env.QUIDDITCHSUPLY) {
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 95.) {
                    if (userData[sender.id + message.guild.id].balais = "Non") {
                        message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                        message.channel.send(`**[Felis]** Vous souhaitez un Oakshaft 79, c'est cela?`);
                        message.channel.send(`**[Felis]** Je vois, vous achez choisit l'endurance, c'est un très bon choix.`);
                        message.channel.send(`**[95 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 95;
                        userData[sender.id + message.guild.id].balaisvolant = "Oakshaft 79";
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].balais = "Oui") {
                            message.channel.send(`Mais tu as déjà un balais, pourquoi en voudrai-tu un deuxième. (Demandez aux administrateurs pour un changement)`);
                            console.log(`Quelqu'un avait déjà un balais, mais a décidé d'en racheter un. ECHEC`);
                        }
                    }
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 95.) {
                        message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                        console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`)
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas dans le bon channel.`);
            }
        }
    }

    if (message.content === prefix + "brossdur2") {
        if (message.channel.id === process.env.QUIDDITCHSUPLY) {
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 115.) {
                    if (userData[sender.id + message.guild.id].balais = "Non") {
                        message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                        message.channel.send(`**[Felis]** Vous souhaitez un Brossdur 2, c'est cela?`);
                        message.channel.send(`**[Felis]** Je vois, c'est un très bon choix.`);
                        message.channel.send(`**[95 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 115;
                        userData[sender.id + message.guild.id].balaisvolant = "Brossdur 2";
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].balais = "Oui") {
                            message.channel.send(`Mais tu as déjà un balais, pourquoi en voudrai-tu un deuxième. (Demandez aux administrateurs pour un changement)`);
                            console.log(`Quelqu'un avait déjà un balais, mais a décidé d'en racheter un. ECHEC`);
                        }
                    }
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 115.) {
                        message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                        console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`)
                    }
                }
            }
        }
    }

    if (message.content === prefix + "brossdur3") {
        if (message.channel.id === process.env.QUIDDITCHSUPLY) {
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 135.) {
                    if (userData[sender.id + message.guild.id].balais = "Non") {
                        message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                        message.channel.send(`**[Felis]** Vous souhaitez un Brossdur 3, c'est cela?`);
                        message.channel.send(`**[Felis]** Je vois, c'est un très bon choix.`);
                        message.channel.send(`**[135 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 135;
                        userData[sender.id + message.guild.id].balaisvolant = "Brossdur 3";
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].balais = "Oui") {
                            message.channel.send(`Mais tu as déjà un balais, pourquoi en voudrai-tu un deuxième. (Demandez aux administrateurs pour un changement)`);
                            console.log(`Quelqu'un avait déjà un balais, mais a décidé d'en racheter un. ECHEC`);
                        }
                    }
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 135.) {
                        message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                        console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`)
                    }
                }
            }
        }
    }

    if (message.content === prefix + "comete180") {
        if (message.channel.id === process.env.QUIDDITCHSUPLY) {
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 165.) {
                    if (userData[sender.id + message.guild.id].balais = "Non") {
                        message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                        message.channel.send(`**[Felis]** Vous souhaitez un Comète 180, c'est cela?`);
                        message.channel.send(`**[Felis]** Je vois, c'est un très bon choix.`);
                        message.channel.send(`**[135 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 165;
                        userData[sender.id + message.guild.id].balaisvolant = "Comète 180";
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].balais = "Oui") {
                            message.channel.send(`Mais tu as déjà un balais, pourquoi en voudrai-tu un deuxième. (Demandez aux administrateurs pour un changement)`);
                            console.log(`Quelqu'un avait déjà un balais, mais a décidé d'en racheter un. ECHEC`);
                        }
                    }
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 165.) {
                        message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                        console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`)
                    }
                }
            }
        }
    }

    if (message.content === prefix + "nimbus1000") {
        if (message.channel.id === process.env.QUIDDITCHSUPLY) {
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 255.) {
                    if (userData[sender.id + message.guild.id].balais = "Non") {
                        message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                        message.channel.send(`**[Felis]** Vous souhaitez un Nimbus 1000, c'est cela?`);
                        message.channel.send(`**[Felis]** Je vois, sa vitesse est révolutionnaire. C'est un très bon choix.`);
                        message.channel.send(`**[135 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 255;
                        userData[sender.id + message.guild.id].balaisvolant = "Nimbus 1000";
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].balais = "Oui") {
                            message.channel.send(`Mais tu as déjà un balais, pourquoi en voudrai-tu un deuxième. (Demandez aux administrateurs pour un changement)`);
                            console.log(`Quelqu'un avait déjà un balais, mais a décidé d'en racheter un. ECHEC`);
                        }
                    }
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 255.) {
                        message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                        console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`)
                    }
                }
            }
        }
    }
    
    if (message.content === prefix + "choixpeaux") {
        if (message.channel.id === process.env.LCHOIXPEAUX) {
            if (message.member.roles.get(process.env.ELEVE)) {
                message.reply("**[Choixpeaux]** Tu as déjà été attribué(e) à une maison.");
                console.log("Quelqu'un a essayé de s'attribuer une deuxième maison.")
            }
            else
            {
                random()
                if (randnum ==1) {
                    message.channel.send("**[Choixpeaux]** Sage es-tu... Je ne vois qu'une option... SERDAIGLE !");
                    guildMember.addRoles([process.env.SERDAIGLE, process.env.ELEVE])
                    console.log(`${message.author.username} est devenu Serdaigle.`);
            }
                if (randnum ==2) {
                    message.channel.send("**[Choixpeaux]** Ambitieux est-tu... Seul... SERPENTARD pourras t'aider à grandir sur le chemin de la Puissance Ultime !");
                    guildMember.addRoles([process.env.SERPENTARD, process.env.ELEVE])
                    console.log(`${message.author.username} est devenu Serpentard.`);
            }

                if (randnum ==3) {
                    message.channel.send("**[Choixpeaux]** Courageux es-tu... Je vois la seule maison qui t'acceptera... GRYFFONDOR !");
                    guildMember.addRoles([process.env.GRYFFONDOR, process.env.ELEVE])
                    console.log(`${message.author.username} est devenu Gryffondor.`);
            }

                if (randnum ==4) {
                    message.channel.send("**[Choixpeaux]** Modeste es-tu... Je crois, que seul POUFSOUFFLE aura le charme de te faire aimer Poudlard !");
                    guildMember.addRoles([process.env.POUFSOUFFLE, process.env.ELEVE])
                    console.log(`${message.author.username} est devenu Poufsouffle.`);
                }
            }
        }
    }   
    
    if (message.content === prefix + "informations") {
        if (message.channel.id === process.env.COMMANDS) {
            message.channel.send({embed: {
                title: "Informations",
                color: 0x00A1D7,
                fields: [{
                    name: "Personnage",
                    value: `**Prénom Nom :** ${message.member}`,

                    inline: false
                },
                {
                    name: "Fournitures",
                    value: `**Aphoticaire :** ${userData[sender.id + message.guild.id].apothicaire}
**Animal :** ${userData[sender.id + message.guild.id].animal}
**Baguette :** ${userData[sender.id + message.guild.id].ollivander}
**Manuels :** ${userData[sender.id + message.guild.id].fleuryetbott}                
**Robes :** ${userData[sender.id + message.guild.id].guipure}
**Chaudron :** ${userData[sender.id + message.guild.id].chaudron}
**Balais :** ${userData[sender.id + message.guild.id].balaisvolant}
**Protego :** ${userData[sender.id + message.guild.id].protego}
**Protegod :** ${userData[sender.id + message.guild.id].protegod}`,
                    inline: false
                }]
            }})
        }
    }
    
    if (message.content === prefix + "chaudron" ) {       
        if (message.channel.id === process.env.MCHAUDRON) {
            if (message.member.roles.get(process.env.PRANNEE)) {
                if (userData[sender.id + message.guild.id].money > 25.) {
                    message.channel.send(`**[Potage]** Bonjour. Je vous souhaite le bienvenue Au Bon Chaudron. Je suppose que rentres en Première Année ? J'ai pile ce qu'il te faut.`);
                    message.channel.send(`*Potage pointe deux chaudrons avec sa baguette, qui viennent se rapetissir dans un petit sac.*`);
                    message.channel.send(`**[Potage]** Ce sera plus facile pour le transport. Ils reprendront leurs tailles dès que tu les sortira du sac.`)
                    message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 25;
                    userData[sender.id + message.guild.id].chaudron = "Oui"
                }
                if (userData[sender.id + message.guild.id].money < 25.) {
                    message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                    console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Chaudron.`)
                }
            }
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 25.) {
                    message.channel.send(`**[Potage]** Bonjour ${message.member}, tu rentres en deuxième année à Poudlard, j'ai tout ce qu'il te faut en réserve. Attend moi-là.`);
                    message.channel.send(`*Potage se dirige vers sa réserve, et elle revient avec deux chaudron, qu'elle fait léviter. Elle les fait se rapetissir dans un sac.*`);
                    message.channel.send(`**[Potage]** Voilà, ce sera plus simple pour les transporter. Cela fera 25 Gallions, s'il te plait.`);
                    message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 25;
                    userData[sender.id + message.guild.id].chaudron = "Oui"
                }
                if (userData[sender.id + message.guild.id].money < 25.) {
                    message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                    console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Chaudron.`)
                }
            }
        }
    }
    
    if (message.content === prefix + "hiboux") {        
        if (message.channel.id === process.env.MHIBOUX) {
            if (userData[sender.id + message.guild.id].animal = "Non") {
                if (message.member.roles.get(process.env.PRANNEE)) {
                    if (userData[sender.id + message.guild.id].money > 40.) {
                        message.channel.send(`**[Eeylops]** Bonjour ! Bienvenue au Royaume du Hiboux. Vous venez achetez un hiboux ? Suivez moi.`);
                        message.channel.send(`*Eeylops vous emmène dans une pièce intermédiaire, dans laquelle des hiboux sont entreposés dans de grandes cages, dont certaines ouvertes.`);
                        message.channel.send(`**[Eeylops]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le hiboux sur son épaule, et le met dans une cage, qu'elle vous tend.*`);
                        message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 40;
                        userData[sender.id + message.guild.id].animal = "Oui"
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].money < 40.) {
                            message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Hiboux.`);
                            }
                        }
                    }   
                }
                if (message.member.roles.get(process.env.DEANNEE)) {
                    if (userData[sender.id + message.guild.id].money > 40.) {
                        message.channel.send(`**[Eeylops]** Bonjour ${message.member}. Tu viens acheté un hiboux ? Suit moi.`);
                        message.channel.send(`*Eeylops vous emmène dans une pièce intermédiaire, dans laquelle des hiboux sont entreposés dans de grandes cages, dont certaines ouvertes.`);
                        message.channel.send(`**[Eeylops]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le hiboux sur son épaule, et le met dans une cage, qu'elle vous tend.*`);
                        message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 40;
                        userData[sender.id + message.guild.id].animal = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 40.) {
                        message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Hiboux.`);
                    }
                }
            }
            else
            {
                if (userData[sender.id + message.guild.id].animal = "Oui") {
                    message.channel.send(`**[Potage]** Mais, tu as déjà un animal, pourquoi en veux-tu un autre?`);
                    console.log(`Quelqu'un a essayé de s'acheter un deuxième animal.`)
                }
            }
        }
    }
    
    if (message.content === prefix + "menagerie") {
        if (message.channel.id === process.env.MMENAGERIE) {
            if (message.member.roles.get(process.env.PRANNEE)) {
                message.channel.send(`**[Helias]** Bonjour, et bienvenue à la Ménagerie Magique. Ici, vous pouvez acheter des chats ou des rats.`);
                message.channel.send(`**[Helias]** Que souhaitez-vous ? [!chat pour acheter un chat | !rat pour acheter un rat]`);
            }
            if (message.member.roles.get(process.env.DEANNEE)) {
                message.channel.send(`**[Helias]** Oh, bonjour ${message.member}, tu viens acheter ton animal ?`);
                message.channel.send(`**[Helias]** Que souhaites-tu ? [!chat pour acheter un chat | !rat pour acheter un rat]`);
            }
        }
    }
        
    if (message.content === prefix + "chat") { 
        if (message.channel.id === process.env.MMENAGERIE) {
            if (userData[sender.id + message.guild.id].animal = "Non") {
                if (message.member.roles.get(process.env.PRANNEE)) {
                    if (userData[sender.id + message.guild.id].money > 40.) {
                        message.channel.send(`**[Helias]** Très bien, suivez moi. *Helias vous emmène auprès d'un parc du magasin, dans lequel des chats gambadent.*`);
                        message.channel.send(`**[Helias]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le chat dans ses mains, et le met dans une cage, qu'elle vous tend.*`);
                        message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 40;
                        userData[sender.id + message.guild.id].animal = "Oui"
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].money < 40.) {
                            message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);
                        }
                    }
                }
            else
                if (message.member.roles.get(process.env.DEANNEE)) {
                    if (userData[sender.id + message.guild.id].money > 40.) {
                        message.channel.send(`**[Helias]** Très bien, suis moi. *Helias vous emmène auprès d'un parc du magasin, dans lequel des chats gambadent.*`);
                        message.channel.send(`**[Helias]** Celui-ci, tu es sûr? Oui ? Très bien. *Helias sort et prend le chat dans ses mains, et le met dans une cage, qu'elle vous tend.*`);
                        message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 40;
                        userData[sender.id + message.guild.id].animal = "Oui"
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].money < 40) {
                            message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id + message.guild.id].animal = "Oui") {
                    message.channel.send(`**[Helias]** Mais, tu as déjà un animal, pourquoi en veux-tu un autre?`);
                    console.log(`Quelqu'un a essayé de s'acheter un deuxième animal.`)
                }
            }
        }
    }

    if (message.content === prefix + "rat") {
        if (message.channel.id === process.env.MMENAGERIE) {
            if (userData[sender.id + message.guild.id].animal = "Oui") { 
                if (message.member.roles.get(process.env.PRANNEE)) {
                    if (userData[sender.id + message.guild.id].money > 30.) {
                        message.channel.send(`**[Helias]** Très bien, suivez moi. *Helias vous emmène auprès de plusieurs cages, contenant différents rats.*`);
                        message.channel.send(`**[Helias]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le rat dans ses mains, et le met dans une cage, qu'elle vous tend.*`)
                        message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 30;
                        userData[sender.id + message.guild.id].animal = "Oui"
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].money < 30) {
                            message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);
                        }
                    }
                }
                if (message.member.roles.get(process.env.DEANNEE)) {
                    if (userData[sender.id + message.guild.id].money > 30.) {
                        message.channel.send(`**[Helias]** Très bien, suis moi. *Helias vous emmène auprès de plusieurs cages, contenant différents rats.*`);
                        message.channel.send(`**[Helias]** Celui-ci, tu es sûr? Oui ? Très bien. *Helias sort et prend le rat dans ses mains, et le met dans une cage, qu'elle vous tend.*`)
                        message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id + message.guild.id].money -= 30;
                        userData[sender.id + message.guild.id].animal = "Oui"
                    }
                    else
                    {
                        if (userData[sender.id + message.guild.id].money < 30) {
                            message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id + message.guild.id].animal = "Oui") {
                    message.channel.send(`**[Helias]** Mais, tu as déjà un animal, pourquoi en veux-tu un autre?`);
                    console.log(`Quelqu'un a essayé de s'acheter un deuxième animal.`)
                }
            }
        }
    }

    if (message.content === prefix + "robes") {
        if (message.channel.id === process.env.MROBES) {
            if (message.member.roles.get(process.env.PRANNEE)) {
                if (userData[sender.id + message.guild.id].money > 35.) {
                    message.channel.send(`**[Madame Guipure]** Bonjour mon enfant. Toi, tu vas à Poudlard cette année ? Je ne me trompe jamais.`);
                    message.channel.send(`**[Madame Guipure]** Ne bouge pas, je vais te chercher ce qu'il te faut.`);
                    message.channel.send(`*Madame Guipure se dirige vers son arrière-boutique. Elle revient plusieurs minutes après, avec tout le matériel qu'il vous faut.*`);
                    message.channel.send(`**[Madame Guipure]** Tiens mon garçon, voici ce qu'il te faut pour ta rentrée à Poudlard.`);
                    message.channel.send(`*Madame Guipure vous a donnée une pile d'objet, dont vos deux robes pour Poudlard.*`);
                    message.channel.send(`**[35 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 35;
                    userData[sender.id + message.guild.id].guipure = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 35.) {
                        message.channel.send(`**[Madame Guipure]** Reviens lorsque tu aura l'argent pour te procurer ceci.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Robes.`);
                    }
                }
            }
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 35.) {
                    message.channel.send(`**[Madame Guipure]** Bonjour ${message.member}, tu viens acheter tes nouvelles robes ?`);
                    message.channel.send(`**[Madame Guipure]** Je vais te chercher ce qu'il te faut, ne bouge pas.`);
                    message.channel.send(`*Madame Guipure se dirige vers son arrière-boutique. Elle revient plusieurs minutes après, avec tout le matériel qu'il vous faut.*`);
                    message.channel.send(`**[Madame Guipure]** Tiens mon garçon, voici ce qu'il te faut pour ta rentrée à Poudlard.`);
                    userData[sender.id + message.guild.id].money -= 35;
                    userData[sender.id + message.guild.id].guipure = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 35.) {
                        message.channel.send(`**[Madame Guipure]** Reviens lorsque tu aura l'argent pour te procurer ceci.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Robes.`);
                    }
                }
            }
        }
    }
    
    if (message.content === prefix + "manuels") {
        if (message.channel.id === process.env.MMANUELS) {
            if (message.member.roles.get(process.env.PRANNEE)) {
                if (userData[sender.id + message.guild.id].money > 30.) {
                    message.channel.send(`**[Fleury]** Oh, nous avons de la visite. Bonjour, et bienvenue chez Fleury et Bott. Vous venez pour vos fournitures c'est cela? En première année je suppose.`);
                    message.channel.send(`**[Fleury]** Je vais vous apporter ça. *Fleury fait un geste avec sa baguette, et une pile de livres, attachés les uns aux autres se déplacèrent jusqu'au comptoir.*`);
                    message.channel.send(`**[Fleury]** Voici, pour vous, jeune-homme. Cela fera 30 Gallions.`);
                    message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 30;
                    userData[sender.id + message.guild.id].fleuryetbott = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 30.) {
                        message.channel.send(`**[Fleury]** Reviens lorsque tu aura l'argent pour te procurer ces manuels.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Manuels.`);
                    } 
                }
            }
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 35.) {
                    message.channel.send(`**[Fleury]** Bott, nous avons de la visite ! Bonjour ${message.member}, et bienvenue chez Fleury et Bott.`);
                    message.channel.send(`**[Fleury]** Tu viens acheter tes fournitures pour ta deuxième année, c'est ça? Il n'y a pas de soucis, je t'ammène ceci.`);
                    message.channel.send(`*Fleury fait un geste avec sa baguette, et une pile de livres, attachés les uns aux autres se déplacèrent jusqu'au comptoir.*`);
                    message.channel.send(`**[Fleury]** Voici, pour toi, jeune-homme. Cela fera 30 Gallions.`);
                    message.channel.send(`**[35 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 35;
                    userData[sender.id + message.guild.id].fleuryetbott = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 35.) {
                        message.channel.send(`**[Fleury]** Reviens lorsque tu aura l'argent pour te procurer ces manuels.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Manuels.`);
                    }
                }
            }
        }
    }

    if (message.content === prefix + "apothicaire") {
        if (message.channel.id === process.env.MAPOTHICAIRE) {
            if (message.member.roles.get(process.env.PRANNEE)) {
                if (userData[sender.id + message.guild.id].money > 15.) {
                    message.channel.send(`**[Jiggers]** Bonjour mon enfant. Tu fais ta rentrée dans l'école de Poudlard, c'est ça?`);
                    message.channel.send(`**[Slugg]** Ah, un futur élève de Poudlard ? *Dit un deuxième homme, proche du premier*`);
                    message.channel.send(`**[Slug]** Je vais lui chercher ses fournitures.`);
                    message.channel.send(`*La deuxième personne s'enfonce dans une cave, grâce à des escaliers, qu'ils remontent quelques temps après.*`);
                    message.channel.send(`*Une pile d'objets volent derrière lui, et se pose finalement sur le comptoir.*`);
                    message.channel.send(`**[Jiggers]** Voici pour toi, tu as tout ce qu'il te faut.`);
                    message.channel.send(`**[15 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 15;
                    userData[sender.id + message.guild.id].apothicaire = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 15.) {
                        message.channel.send(`**[Jiggers]** Mais, on dirait bien que tu n'as pas l'argent pour acheter ceci.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Apotichaire.`);
                    }
                }
            }
            if (message.member.roles.get(process.env.DEANNEE)) {
                if (userData[sender.id + message.guild.id].money > 15.) {
                    message.channel.send(`**[Jigger]** Bonjour ${message.member}. Tu viens chercher ton matériel pour ta deuxième année ?`);
                    message.channel.send(`**[Jiggers]** Je vois, *Jigers s'enfonce dans dans une cave, grâce à des escaliers, qu'ils remontent quelques secondes après.*`);
                    message.channel.send(`*Une pile d'objets volent derrière lui, et se pose finalement sur le comptoir.*`);
                    message.channel.send(`**[Jiggers]** Voici pour toi, tu as tout ce qu'il te faut.`);
                    message.channel.send(`**[15 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id + message.guild.id].money -= 15;
                    userData[sender.id + message.guild.id].apothicaire = "Oui"
                }
                else
                {
                    if (userData[sender.id + message.guild.id].money < 15.) {
                        message.channel.send(`**[Jiggers]** Mais, on dirait bien que tu n'as pas l'argent pour acheter ceci.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Apotichaire.`);
                    }
                } 
            }
        }
    }

    if (message.content === prefix + "baguette" ) {
        if (message.channel.id === process.env.MOLLIVANDER) {
            if (userData[sender.id + message.guild.id].money > 7.) {
                message.channel.send(`**[Ollivander]** Bonjour ${message.member}, tu viens cherchez ta baguette c'est cela ? Je vais te chercher celle-ci.` );
                message.channel.send('*Le vendeur se dirige vers les rangées de baguettes, entreposées derrière lui. Il revient quelques secondes après, une boite à la main.*');
                message.channel.send('**[Ollivander]**Je crois que celle-ci sera parfaite...');
                message.channel.send(`*Le vendeur vous a donné une boite, contenant votre baguette.`);
                message.channel.send(`**[7 Gallions vous ont étés retirés de votre compte.]**`);
                userData[sender.id + message.guild.id].money -= 7;
                userData[sender.id + message.guild.id].ollivander = "Oui"
            }
            else
            {
                if (userData[sender.id + message.guild.id].money < 7.) {
                    message.channel.send(`**[Ollivander]** Mais, on dirait bien que tu n'as pas les moyens de t'acheter une baguette.`);
                    console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Baguette.`);
                }
            }
        }
    }
    if (message.content === prefix + "aide") {
        if (message.channel.id === process.env.COMMANDS) {
            message.channel.send({embed: {
                title: "Aide Philosophale",
                color: 0x00A1D7,
                fields: [{
                    name: "Général",
                    value: `!balance | Permet de voir son compte bancaire.
!paye | Permet de reçevoir sa paye (Tout les 24h)
!points | Permet de voir le nombre de points de chaques maisons.`,
                    inline: false
                },
                {
                    name: "Professeur",
                    value: `!agryffondor | Ajoute 10 points à Gryffondor.
!rgryffondor | Retire 10 points à Gryffondor.
!apoufsouffle | Ajoute 10 points à Poufsouffle.
!rpousouffle | Retire 10 points à Poufsouffle.
!aserdaigle | Ajoute 10 points à Serdaigle.
!rserdaigle | Retire 10 points à Serdaigle.
!aserpentard | Ajoute 10 points à Serpentard.
!rserpentard | Retire 10 points à Serpentard.`,
                    inline: false
                }]
            }})
        }
    }
    if (message.content === prefix + "rserdaigle") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Retrait de 10 points pour Serdaigle !')
                userData['Serdaigle'].points -= 10;
            }
        }
    }
    
    if (message.content === prefix + "aserdaigle") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Ajout de 10 points pour Serdaigle !')
                userData['Serdaigle'].points += 10;
            }
        }    
    }

    if (message.content === prefix + "rpoufsouffle") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Retrait de 10 points pour Poufsouffle !')
                userData['Poufsouffle'].points -= 10;
            }
        }
    }
    
    if (message.content === prefix + "apoufsouffle") {        
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Ajout de 10 points pour Poufsouffle !')
                userData['Poufsouffle'].points += 10;
            }
        }
    }

    if (message.content === prefix + "rserpentard") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Retrait de 10 points pour Serpentard !')
                userData['Serpentard'].points -= 10;
            }
        }
    }

    if (message.content === prefix + "aserpentard") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Ajout de 10 points pour Serpentard !')
                userData['Serpentard'].points += 10;
            }
        }
    }

    if (message.content === prefix + "rgryffondor") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Retrait de 10 points pour Gryffondor !')
                userData['Gryffondor'].points -= 10;
            }
        }
    }
    
    
    if (message.content === prefix + "agryffondor") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.PROFESSEUR)) {
                message.reply('**[Compteur]** Ajout de 10 points pour Gryffondor !')
                userData['Gryffondor'].points += 10;
            }        
        }
    }

    if (message.content === prefix + "points") {
        if (message.channel.id === process.env.COMMANDS) {
            message.channel.send({embed: {
                title: "Points",
                color: 0x00A1D7,
                fields: [{
                    name: "Serpentard",
                    value: userData['Serpentard'].points,
                    inline: true
                },
                {
                    name: "Gryffondor",
                    value: userData['Gryffondor'].points,
                    inline: true
                },
                {
                    name: "Poufsouffle",
                    value: userData['Poufsouffle'].points,
                    inline: true
                },
                {
                    name: "Serdaigle",
                    value: userData['Serdaigle'].points,
                    inline: true
                }]
            }})
        }
    }

    if (message.content === prefix + "gringotts" || message.content === prefix + "balance") {
        if (message.channel.id === process.env.GRINGOTTS) {
            message.channel.send({embed:{
                title: "Gringotts",
                color: 0x0079FF,
                fields: [{
                    name: "Compte Crée ?",
                    value: userData[sender.id + message.guild.id].gringotts,
                    inline: true
                },
                {
                    name: "Propriétaire du Compte",
                    value: message.author.username,
                    inline: true
                },
                {
                    name: "Balance du Compte",
                    value: userData[sender.id + message.guild.id].money,
                    inline: true
                }]
            }})
        }
    }

    if (message.content === prefix + "compte") {
        if (message.channel.id === process.env.GRINGOTTS) {
            userData[sender.id + message.guild.id].gringotts = "Oui"
            message.channel.send({embed:{
                title: "Gringotts",
                color: 0x0079FF,
                fields: [{
                    name: "Création du compte",
                    value: userData[sender.id + message.guild.id].gringotts,
                    inline: true
                },
                {
                    name: "Propriétaire",
                    value: message.author.username,
                    inline: true
                },
                {
                    name: "Balance du Compte",
                    value: userData[sender.id + message.guild.id].money,
                    inline: true
                }]
            }})
            message.channel.send(`**[150 Gallions ont été ajoutés à votre compte, suite à sa création.]**`);
            userData[sender.id + message.guild.id].money += 150.
        }
    }
    
    if (message.content === prefix + "paye" || message.content === prefix + "daily") {
        if (message.channel.id === process.env.COMMANDS) {
            if (message.member.roles.get(process.env.ADULTE)) {
                if (userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
                    userData[sender.id + message.guild.id].lastDaily = moment().format('L')
                    userData[sender.id + message.guild.id].money += 75;
                        message.channel.send({embed: {
                        title:'Jour de Paye',
                        color: 0x0079FF,
                        description:'Vous récoltez 75 Gallions, ajouté à votre account!'
                
                    }})
                } else {
                message.channel.send({embed: {
                    title:'Jour de Paye',
                    color: 0x0079FF,
                    description:'Vous avez déjà récolté votre paye. Vous pourrez récolter votre prochaine paye dans 24h '
                }})
                }
            }
            else
            {
                if (message.member.roles.get(process.env.ROLEPLAY)) {
                    if (userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
                        userData[sender.id + message.guild.id].lastDaily = moment().format('L')
                        userData[sender.id + message.guild.id].money += 5;
                            message.channel.send({embed: {
                            title:'Jour de Paye',
                            color: 0x0079FF,
                            description:'Vous récoltez 5 Gallions, ajouté à votre account!'
                    
                        }})
                    } else {
                    message.channel.send({embed: {
                        title:'Jour de Paye',
                        color: 0x0079FF,
                        description:'Vous avez déjà récolté votre paye. Vous pourrez récolter votre prochaine paye dans 24h '
                    }})
                    }

            }
        }
    }

    fs.writeFile('JSON/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    })

}});
bot.login(process.env.TOKEN);
