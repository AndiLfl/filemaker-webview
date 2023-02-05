import {ref} from "vue";
export default function useExample() {
    const text = ref('Hello');
    const setText = (data) => {
        text.value = data;
    }

    return {
        text,
        setText
    }
}