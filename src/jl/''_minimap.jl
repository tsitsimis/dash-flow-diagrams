# AUTO GENERATED FILE - DO NOT EDIT

export ''_minimap

"""
    ''_minimap(;kwargs...)

A MiniMap component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional)
- `maskColor` (String; optional)
- `nodeBorderRadius` (Real; optional)
- `nodeClassName` (String; optional)
- `nodeColor` (String; optional)
- `nodeStrokeWidth` (Real; optional)
- `style` (Dict; optional)
"""
function ''_minimap(; kwargs...)
        available_props = Symbol[:id, :className, :maskColor, :nodeBorderRadius, :nodeClassName, :nodeColor, :nodeStrokeWidth, :style]
        wild_props = Symbol[]
        return Component("''_minimap", "MiniMap", "dash_flow_diagrams", available_props, wild_props; kwargs...)
end

