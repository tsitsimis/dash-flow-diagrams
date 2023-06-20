# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Controls(Component):
    """A Controls component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional)

- onZoomIn (boolean; optional)

- showFitView (boolean; default True)

- showInteractive (boolean; default True)

- showZoom (boolean; default True)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_flow_diagrams'
    _type = 'Controls'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, showZoom=Component.UNDEFINED, showFitView=Component.UNDEFINED, showInteractive=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, onZoomIn=Component.UNDEFINED, onZoomOut=Component.UNDEFINED, onFitView=Component.UNDEFINED, onInteractiveChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'onZoomIn', 'showFitView', 'showInteractive', 'showZoom', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'onZoomIn', 'showFitView', 'showInteractive', 'showZoom', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Controls, self).__init__(**args)
