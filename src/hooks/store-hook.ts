import { useContext, createContext } from "react"
import { observer } from "mobx-react"
import store from "@/store"

function useStore() {
	return useContext(createContext(store))
}

export { observer, useStore }
