import {
    slotMachine
} from "./slotMachine.js";

function init() {
    console.log("Init");
    document.querySelector("#button").addEventListener("click", function() {
    console.log("click OK");
    pullLever();

    });
}

function pullLever() {
    // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
    // TODO: show slots and win status
    console.log('PullLever');
    slotMachine.spin();
    showSlots();
    showGameResult();
}

function showSlots() {
    // TODO: show the slot symbols in HTML
    let result = "";
    for (let i = 0; i < slotMachine.slots.length; i++) {
        console.log(slotMachine.slots[i]);
        result += '<span class="♥">♥</span>' ;
        console.log(result);
        document.querySelector("#result").innerHTML = result;

    }

}

function showGameResult() {
    // TODO: show a win or lose message in HTML
}

init();