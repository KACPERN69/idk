let lista: number[] = []
function square2 () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setItem(ORANGE_CONCRETE, 1, 1)
    agent.setItem(YELLOW_CONCRETE, 1, 2)
    agent.setItem(RED_CONCRETE, 1, 3)
    agent.setItem(LIME_CONCRETE, 1, 4)
    lista = [
    1,
    2,
    3,
    4
    ]
    agent.move(UP, 1)
    for (let indeks = 0; indeks <= 3; indeks++) {
        agent.setSlot(lista[indeks % 2])
        for (let index = 0; index < 8; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
}
player.onChat("go", function () {
    wall()
})
function wall () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setItem(POLISHED_ANDESITE, 1, 1)
    agent.setItem(DARK_OAK_FENCE, 1, 2)
    lista = [
    1,
    2,
    2,
    2,
    1
    ]
    for (let wartość of lista) {
        agent.setSlot(wartość)
        for (let index = 0; index < 3; index++) {
            agent.place(FORWARD)
            agent.move(UP, 1)
        }
        agent.move(RIGHT, 1)
        agent.move(DOWN, 3)
    }
}
function square () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setItem(ORANGE_CONCRETE, 1, 1)
    agent.setItem(YELLOW_CONCRETE, 1, 2)
    agent.setItem(RED_CONCRETE, 1, 3)
    agent.setItem(LIME_CONCRETE, 1, 4)
    lista = [
    1,
    2,
    3,
    4
    ]
    agent.move(UP, 1)
    for (let wartość of lista) {
        agent.setSlot(wartość)
        for (let index = 0; index < 8; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
}
function wall2 () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setItem(PLANKS_DARK_OAK, 1, 1)
    agent.setItem(JUNGLE_FENCE, 1, 2)
    lista = [
    1,
    2,
    2,
    2,
    1
    ]
    for (let wartość of lista) {
        agent.setSlot(wartość)
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(UP, 1)
        }
        agent.move(RIGHT, 1)
        agent.move(DOWN, 3)
    }
}
