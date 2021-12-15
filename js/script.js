// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


Vue.config.devtools = true

const email_list = new Vue({
    el: '#app-container',
    data: {
        emailsArray: [],
    },
    methods: {
        
    },
    created: function() {
        const emailsNumber = 10;
        for (let i = 0; i < emailsNumber; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((axiosResponse) => {
                // console.log(axiosResponse.data.response);
                this.emailsArray.push(axiosResponse.data.response)
            })
        }
    },
});