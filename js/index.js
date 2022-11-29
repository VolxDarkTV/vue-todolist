const { createApp } = Vue

createApp({
    data(){
        return{
            tasksInput : 0,
            logo: 'img/IKEA-logo.png',
            newTask:'',
            error: false,
            // All Data
            tasks : 
            [
                { 
                    text: 'Fare i compiti', 
                    done: false 
                }, 
                { 
                    text: 'Fare la spesaaaaaaaaaaaaaaaa jdhsbvjsdvdjvcbjdsbcjdj', 
                    done: true
                }, 
                {
                    text: 'Fare il bucato', 
                    done: false 
                },
            ]

        }
    },
    methods:{
        // metodi
        addTask(){
            // Prima di tutto mi creo l'object e inserisco al suo interno il tag text perché poi verrà utilizzato per cercare la srtinga di testo. Successivamente inserisco this.newTask che è collegato all'input.
            if (this.newTask.length < 5 || this.newTask === '') {
                this.error=true;
            }else{
                this.error=false;
                const obj = {text: `${this.newTask}`};
                this.tasks.push(obj);
                // Pulisco l'input dopo l'invio, e se esce errore resta ciò che ho scritto.
                this.newTask = '';
            }
        },
        deletTask(index){
            this.tasks.splice(index, 1);
        }
    }

   


}).mount('#app')