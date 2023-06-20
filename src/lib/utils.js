import dagre from '@dagrejs/dagre';


const dagreLayout = (nodes, edges, direction) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setDefaultNodeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: node.width, height: node.height });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });
    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
    
        node.position = {
          x: nodeWithPosition.x - node.width / 2,
          y: nodeWithPosition.y - node.height / 2,
        };
    
        return node;
    });
};

export default dagreLayout;
