# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashflow

"""
    ''_dashflow(;kwargs...)
    ''_dashflow(children::Any;kwargs...)
    ''_dashflow(children_maker::Function;kwargs...)


A DashFlow component.

Keyword arguments:
- `children` (Bool | Real | String | Dict | Array; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `clickedEdge` (Dict; optional)
- `clickedNode` (Dict; optional)
- `connectedEdge` (Dict; optional)
- `dagre_direction` (String; optional)
- `edges` (Array; optional)
- `nodes` (Array; optional)
"""
function ''_dashflow(; kwargs...)
        available_props = Symbol[:children, :id, :clickedEdge, :clickedNode, :connectedEdge, :dagre_direction, :edges, :nodes]
        wild_props = Symbol[]
        return Component("''_dashflow", "DashFlow", "dash_flow_diagrams", available_props, wild_props; kwargs...)
end

''_dashflow(children::Any; kwargs...) = ''_dashflow(;kwargs..., children = children)
''_dashflow(children_maker::Function; kwargs...) = ''_dashflow(children_maker(); kwargs...)

