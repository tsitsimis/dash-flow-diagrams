# Dash Flow Diagrams
Dash Flow is a wrapper around [React-Flow](https://reactflow.dev/), a React component for building node-based editors and interactive diagrams


## Installation
```bash
pip install dash-flow-diagrams
```

## Example usage

```python
from dash_flow_diagrams import DashFlow, MiniMap, Background, Controls

app = Dash(__name__)

# Define nodes as a list of dictionaries. Each node should have an ID
nodes = [
    {
        "id": '2',
        "data": {
            "label": "Default Node",
        },
        "position": { "x": 100, "y": 100 },
        "sourcePosition": 'right',
        "targetPosition": 'left',
        "width": 150,
        "height": 35,
    },
    {
        "id": '3',
        "data": {
            "label": 'Heyyy',
        },
        "position": { "x": 300, "y": 100 },
        "sourcePosition": 'right',
        "targetPosition": 'left',
        "width": 150,
        "height": 35,
    },
]

# edges is a list of dictionaries. Each dictionary specifies source node ID and target node ID
edges = [
    {"id": 'e1-2', "source": '1', "target": '2', "label": 'process', "type": "step"},
    {"id": 'e1-3', "source": '1', "target": '3', "animated": True, "label": 'process 1-3'},
]

app.layout = html.Div([
    DashFlow(
        id='flow',
        children=[
            MiniMap(),
            Controls(),
            Background(),
        ],
        nodes=nodes,
        edges=edges,
        dagre_direction="LR",
    ),
    html.Div(id='output')
], style={"width": "800px", "height": "600px"})

```

See [usage.py](./usage.py) for a complete example.
