/*
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
Consigli utili:
● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
● Per gestire le date, può essere utile la libreria day.js
● La struttura dell’array dei contatti potrebbe avere questa forma:
*/
var app = new Vue (
    {
        el: '#root',
        data: {
            //creo una variabile che mi indica l'id nella chat aperta in quel momento
            currentIndex:'0',
            //creo variabile che, in maniera dinamica, cambia a seconda dell'input.value a cui ho messo il v-modal
            newMsg:'',
            searchWord:'',
            msgIndex:'',
            showIndex: 'x',
            messaggio:'',
            profilo: {
                name: 'Sofia',
                avatar: '_io'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        },
        //sezione computed metto funzioni un po più complesse
        // computed:{
            //creo funzione per filtrare l'array dei contatti
            // filteredList(){
                //restituisci la lista dei contatti nei data ma filtrata da una funzione
                // return this.contacts.filter(contact => {
                    /*la funzione che filtra è : prendi ogni nome dell'array contatti, trasfomra tutto in lower case, 
                    controlla se la lettera o parola messa in input sia contenuta nell'array nome*/
                    // return contact.name.toLowerCase().includes(this.searchWord.toLowerCase())
        //         })
        //     }
        // },
        created(){
        },
        methods: {
            //funzione per selezionare l'id dell'oggetto contacts per poter selezionare i suoi dati, quali array messaggi nome e img 
            takeIndex: function(index){
                this.currentIndex = index;
                console.log(`l'indice dell'user oggetto è: ${this.currentIndex} `)
            },
            //funzione per creare e pushare un nuovo oggetto nell'array messaggi prendendo la variabile dinamica del v-modal input
            sendMsg: function(){
                if (this.newMsg != '') {
                    let currentDate = dayjs().format('DD/MM/YYYY');
                    let hour = dayjs().format('HH');
                    let minute = dayjs().format('mm');
                    let msg = {
                        date:`${currentDate} ${hour}:${minute}`,
                        message: this.newMsg,
                        status: 'sent'
                    }
                    //pusho nell'array messaggi dell'user giusto
                    this.contacts[this.currentIndex].messages.push(msg);
                    //svuoto input value
                    this.newMsg = ''; 
                    //lancio la funzione asincrona che, dopo tot secondi fa partire la funzione precedentemente creata
                    setTimeout(this.returnMsg,3000)
                }
            },
            //funzione generica che crea un oggetto 'risposta' da pushare nell'array messaggi corrente(dipende da currentIndex)
            returnMsg: function(){
                //creo la data nel momento in cui scrivo per poterla inserire nell'oggetto Msg
                let currentDate = dayjs().format('DD/MM/YYYY');
                let hour = dayjs().format('HH');
                let minute = dayjs().format('mm');

                let reply = {
                    date: `${currentDate} ${hour}:${minute}`,
                    message: 'ok',
                    status: 'received'
                }
                console.log(reply.date)
                this.contacts[this.currentIndex].messages.push(reply);
            },
            //creo funzione per trasformare tutto date solo nell'orario, per essere più facilmente leggibile nel baloon del text
            changeDate: function(prova){
                //creo una variabile che è l'array risultato dallo split del parametro. con split separo in elementi di array ogni volta che c'è uno spazio
                let x = prova.split(' ');
                //per come è fatto il nostro array Date, mi serve il secondo elemento splitato, quello delle ore
                return x[1];
            },
            //funzione per rimuovere un determinato messaggio
            removeMsg: function(index){
                this.msgIndex = index;
                console.log(`l'indice del mex è: ${this.msgIndex}`)
                this.contacts[this.currentIndex].messages.splice(index,1);
            },
            //funzione per filtrare
            filteredWord: function(element) {
                let x = element.name.toLowerCase()
                let y = this.searchWord.toLowerCase()
                if (x.includes(y) == true) {
                    return 'true'
                } else {
                    return 'false'
                }
            },
            openClose: function(element, index){
                if (this.showIndex == index) {
                    return this.showIndex = 'off';
                } else {
                    this.showIndex = index;
                }
                console.log(this.showIndex = index);
            },
            arrayLength: function(element){
                return element.length - 1;
            }
        }
    }
)