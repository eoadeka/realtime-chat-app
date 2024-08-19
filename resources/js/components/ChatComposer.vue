<template lang="html">
    <div class="chat-composer">
        <input type="text" placeholder="Start typing your message..." v-model="messageText" @keyup.enter="sendMessage" />
        <button class="btn btn-primary" @click="sendMessage">Send</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // messageText: 'default'
            messageText: ''
        }
    },
    methods: {
        sendMessage() {
            // console.log('message sent!');
            // console.log(this.messageText);
            this.$emit('messagesent', {
                message: this.messageText,
                author: "John Doe"
            });
            this.messageText = '';
        }
    }
}
</script>

<style lang="css">
.chat-composer{
    display: flex;
}

.chat-composer input{
    flex: 1 auto;
    color: black;
}

.chat-composer button{
    border-radius: 0;
}
</style>