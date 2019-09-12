import { useState, useEffect } from "react"

export function useManagedState<T>(value: T, onChange?: (newValue: T) => void) {
    const [currentValue, setValue] = useState(value)

    useEffect(() => {
        setValue(value)
    }, [value])

    return [
        currentValue,
        (value: T) => {
            setValue(value)
            onChange && onChange(value)
        },
    ]
}
