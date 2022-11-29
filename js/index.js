const { createApp } = Vue

createApp({
    data(){
        return{
            tasksInput : 0,
            logo: 'img/IKEA-logo.png',
            newTask:'',
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
                }
            ]

        }
    },
    methods:{
        // metodi
        addTask(){
            this.tasks.push(this.newTask);
        }
    }

   


}).mount('#app')