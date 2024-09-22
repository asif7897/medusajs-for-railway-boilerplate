import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"

import { onlyUnique } from "@lib/util/only-unique"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div className="flex flex-wrap justify-between gap-2">
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clx(
                "border text-small-regular h-10 rounded-lg p-2 flex-1 transition-shadow ease-in-out duration-150", // Base button styles
                {
                  "border-gray-400 bg-gray-200 text-gray-800": v !== current, // Default state
                  "border-blue-500 bg-blue-200 text-blue-800": v === current, // Active state
                  "hover:bg-gray-300 hover:shadow-lg": v !== current, // Hover effect for non-active buttons
                }
              )}
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
