import eventbus from "../../eventbus.js";

window.example = function example() {
    const setText = (data) => {
        eventbus.$emit('example:setText', data)
    }

    return {
        setText
    }
}