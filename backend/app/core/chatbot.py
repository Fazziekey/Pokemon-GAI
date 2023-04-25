from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate
from langchain.memory import ConversationBufferWindowMemory

import os

os.environ["OPENAI_API_KEY"] = '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'


template = """You are having a conversation with a magical Pokémon character who can understand human language and engage in a dialogue.
    This Pokémon has a unique personality and knowledge, and is willing to answer your questions about the Pokémon world. 
    Please note that its responses may not be entirely accurate, but it will do its best to provide interesting perspectives and suggestions.,
    please call me master.
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


def generate_response(input_text: str) -> str:
    # 在这里添加你的聊天机器人逻辑
    # 示例: 使用简单的回音机器人

    human_input = "Human: " + input_text
    
    output = chatgpt_chain.predict(human_input=human_input)

    return output