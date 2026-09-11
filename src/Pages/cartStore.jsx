import { create } from "zustand";


const cartStore = create((set) => ({
    count: 0,

    incCount: () => {
        set((state) => ({ count: state.count + 1 }));
    },

    decCount: () => {
        set((state) => ({ count: state.count - 1 }));
    },
}));

export default function Counter() {
    const { count, incCount, decCount } = cartStore()
    return (
        <div>
            <button onClick={decCount}>Decrease</button>
            <h2>{count}</h2>
            <button onClick={incCount}>Increase</button>
        </div>
    )
}
