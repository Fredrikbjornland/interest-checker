import { atom } from "recoil"
import { FormValues } from "../../interfaces"

const completedFormsAtom = atom<FormValues[]>({
    key: "completedForms",
    default: [] as FormValues[]
})

export default completedFormsAtom
