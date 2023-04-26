import gradio as gr
import random
import time

with gr.Blocks() as demo:
    chatbot1 = gr.Chatbot()
    chatbot2 = gr.Chatbot()
    run = gr.Button("Run")
    go = gr.Button("Go")

    go.click(lambda: None, None, chatbot1, queue=False)

    def bot(history):
        bot_message = random.choice(["Yes", "No"])
        history = history + [[bot_message, None]]
        time.sleep(1)
        return history

    # def bot2(history):
    #     bot_message = random.choice(["Maybe", "Sure"])
    #     history = history + [[bot_message, None]]
    #     time.sleep(1)
    #     return history, history



    run.click(bot, chatbot1, chatbot1, queue=False).then(
        bot, chatbot1, chatbot1
    )

if __name__ == "__main__":
    demo.launch()
