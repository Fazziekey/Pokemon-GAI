import gradio as gr
import random
import time
import os
from chatbot import chatgpt_chain

SEVER_PORT = int(os.environ.get("CHAT_PORT", 7680))

with gr.Blocks() as demo:
    chatbot = gr.Chatbot()
    msg = gr.Textbox()
    clear = gr.Button("Clear")

    def user(user_message, history):
        print(history + [[user_message, None]])
        return "", history + [[user_message, None]]

    def bot(history):
        # bot_message = random.choice(["Yes", "No"])
        bot_message = chatgpt_chain.predict(human_input=history[-1][0])
        history[-1][1] = bot_message
        time.sleep(1)
        print(history)
        return history

    msg.submit(user, [msg, chatbot], [msg, chatbot], queue=False).then(
        bot, chatbot, chatbot
    )
    clear.click(lambda: None, None, chatbot, queue=False)

if __name__ == "__main__":
    demo.launch(share=True, server_port=SEVER_PORT)
