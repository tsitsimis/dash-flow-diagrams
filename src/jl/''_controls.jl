# AUTO GENERATED FILE - DO NOT EDIT

export ''_controls

"""
    ''_controls(;kwargs...)

A Controls component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional)
- `onZoomIn` (Bool; optional)
- `showFitView` (Bool; optional)
- `showInteractive` (Bool; optional)
- `showZoom` (Bool; optional)
- `style` (Dict; optional)
"""
function ''_controls(; kwargs...)
        available_props = Symbol[:id, :className, :onZoomIn, :showFitView, :showInteractive, :showZoom, :style]
        wild_props = Symbol[]
        return Component("''_controls", "Controls", "dash_flow_diagrams", available_props, wild_props; kwargs...)
end

