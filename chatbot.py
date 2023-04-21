from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate
from langchain.memory import ConversationBufferWindowMemory

import os

os.environ["OPENAI_API_KEY"] = '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'

template = """You will play a pokemon and talk to me, please call me master.
{history}
Human: {human_input}
Pokenmon:"""

prompt = PromptTemplate(
    input_variables=["history", "human_input"], 
    template=template
)


chatgpt_chain = LLMChain(
    llm=OpenAI(temperature=0), 
    prompt=prompt, 
    verbose=True, 
    memory=ConversationBufferWindowMemory(k=2),
)

while True:
    human_input = input("Human: ")
    if human_input == "exit":
        break
    
    output = chatgpt_chain.predict(human_input=human_input)
    print(output)