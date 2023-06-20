# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MiniMap(Component):
    """A MiniMap component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional)

- maskColor (string; optional)

- nodeBorderRadius (number; optional)

- nodeClassName (string; optional)

- nodeColor (string; optional)

- nodeStrokeWidth (number; optional)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_flow_diagrams'
    _type = 'MiniMap'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, nodeColor=Component.UNDEFINED, nodeBorderRadius=Component.UNDEFINED, nodeStrokeWidth=Component.UNDEFINED, nodeClassName=Component.UNDEFINED, maskColor=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'maskColor', 'nodeBorderRadius', 'nodeClassName', 'nodeColor', 'nodeStrokeWidth', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'maskColor', 'nodeBorderRadius', 'nodeClassName', 'nodeColor', 'nodeStrokeWidth', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(MiniMap, self).__init__(**args)
