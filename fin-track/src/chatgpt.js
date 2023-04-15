import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.main.css';
import {  MainContainer,ChatContainer, MessageList,Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"
const { Configuration, OpenAIApi } = require('openai');




function Chat() {
    const [messages, setMessages] = useState([

        {
            message: "Hello I am FinTrack Chat bot",
            sender: "FinTrack"
        }

    ])
   const handleSend = async (message) => {
    const newMessage = {

        message: message,
        sender: "user",
        direction:"outgoing"
    
    }

    const newMessages = [...message, newMessages]; //all old messages plus new messages

    setMessages(newmessages)

   }

    return(
        <div className = "App">
            <div style= {{psoition: "relative", height: "800px", width:"700px"}}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        {Message.map((message, i) => {
                            return <Message key={i} model={message} />
                        })}
                    </MessageList>
                    <MessageInput
                        placeholder='Type Message here' onSend={handleSend}
                    />
                </ChatContainer>
            </MainContainer>

            </div>
        </div>
    )
}



export default Chat;




// const config = new Configuration({
//   apiKey: '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'
// })


// const openai = new OpenAIApi(config);

// const runPrompt = async () => {
//   const prompt = `
//   write me a joke about cat and pasta. Return in possible json format:
//   {
//     "Q": "question",
//     "A": "answer"
//   }
//   `;
//   const response = await openai.createCompletion({
//     model:'text-davinci-003',
//     prompt: prompt,
//     max_tokens: 2048,
//     temperature: 1,
//   });
//   const parsableJSONresponse = response.data.choices[0].text;
//   const parsedResponse = JSON.parse(parsableJSONresponse)

//   console.log("Question: ", parsedResponse.Q )
//   console.log("Question: ", parsedResponse.A)
// };

// runPrompt();