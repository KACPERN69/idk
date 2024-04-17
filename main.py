lista: List[number] = []
list2: List[number] = []
def square2():
    global lista
    agent.teleport_to_player()
    agent.move(FORWARD, 5)
    agent.set_item(ORANGE_CONCRETE, 1, 1)
    agent.set_item(YELLOW_CONCRETE, 1, 2)
    agent.set_item(RED_CONCRETE, 1, 3)
    agent.set_item(LIME_CONCRETE, 1, 4)
    lista = [1, 2, 3, 4]
    agent.move(UP, 1)
    for indeks in range(4):
        agent.set_slot(lista[indeks % 2])
        for index in range(8):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
def wall():
    global lista
    agent.teleport_to_player()
    agent.move(FORWARD, 5)
    agent.set_item(POLISHED_ANDESITE, 1, 1)
    agent.set_item(DARK_OAK_FENCE, 1, 2)
    lista = [1, 2, 2, 2, 1]
    for wartość in list2:
        agent.set_slot(wartość)
def square():
    global lista
    agent.teleport_to_player()
    agent.move(FORWARD, 5)
    agent.set_item(ORANGE_CONCRETE, 1, 1)
    agent.set_item(YELLOW_CONCRETE, 1, 2)
    agent.set_item(RED_CONCRETE, 1, 3)
    agent.set_item(LIME_CONCRETE, 1, 4)
    lista = [1, 2, 3, 4]
    agent.move(UP, 1)
    for wartość2 in lista:
        agent.set_slot(wartość2)
        for index2 in range(8):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)

def on_on_chat():
    square2()
player.on_chat("go", on_on_chat)
