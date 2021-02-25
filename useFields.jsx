import { useState } from "react"

export const useFields = (initVal = []) => {
  const [fields, setFields] = useState(initVal)

  const addNewField = (newField) => {
    const data = {
      ...newField,
      id: new Date().getTime(),
    }
    setFields([...fields, data])
  }

  const removeField = (idField) => {
    setFields(fields.filter((f) => f.id !== idField))
  }

  return { fields, addNewField, removeField }
}
