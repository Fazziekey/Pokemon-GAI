import os

from langchain import ConversationChain, LLMChain, OpenAI, PromptTemplate
from langchain.memory import ConversationBufferWindowMemory

os.environ["OPENAI_API_KEY"] = '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'

template = """You are having a conversation with a magical Pokémon character who can understand human language and engage in a dialogue.
    This Pokémon has a unique personality and knowledge, and is willing to answer your questions about the Pokémon world.
    Please note that its responses may not be entirely accurate, but it will do its best to provide interesting perspectives and suggestions.,
    please call me master.
{history}
Human: {human_input}
Pokenmon:"""

prompt = PromptTemplate(input_variables=["history", "human_input"], template=template)

chatgpt_chain = LLMChain(
    llm=OpenAI(temperature=0),
    prompt=prompt,
    verbose=True,
    memory=ConversationBufferWindowMemory(k=2),
)


def generate_response(input_text: str) -> str:

    human_input = "Human: " + input_text

    output = chatgpt_chain.predict(human_input=human_input)

    return output


def get_memory():
    messages = chatgpt_chain.memory.buffer

    formatted_messages = convert_messages_format(messages)

    return formatted_messages


def convert_messages_format(messages):
    formatted_messages = []

    for message in messages:
        formatted_message = {
            'agent': 'Human' if message.__class__.__name__ == 'HumanMessage' else 'AI',
            'content': message.content
        }
        formatted_messages.append(formatted_message)

    return formatted_messages
