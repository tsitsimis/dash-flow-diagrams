import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import ReactFlow, {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges
  } from 'reactflow';
import dompurify from 'dompurify';

import 'reactflow/dist/style.css';
import dagreLayout from "../utils";


function CustomNode({ data }) {
    return (
        <div dangerouslySetInnerHTML={{__html: dompurify.sanitize(data.html)}}/>
    );
};


const DashFlow = (props) => {
    const {
        id,
        setProps,
        nodes,
        edges,
        children,
        dagre_direction,
        clickedNode,
        clickedEdge,
        connectedEdge,
        ...otherProps
    } = props;

    const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

    if (dagre_direction) {
        dagreLayout(nodes, edges, dagre_direction);
    }

    const [stateNodes, setNodes] = useState(nodes);
    const [stateEdges, setEdges] = useState(edges);

    const onNodesChange = useCallback( (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),[] );
    const onEdgesChange = useCallback( (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),[] );

    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge(params, eds));

        let connectedEdge = {"source": params.source, "target": params.target, "sourceHandle": params.sourceHandle, "targetHandle": params.targetHandle};
        props.setProps({
            connectedEdge: connectedEdge
        });
        console.log(connectedEdge);
    }, []);

    const onNodeClick = (event, node) => {
        let clickedNode = {"id": node.id}
        props.setProps({
            clickedNode: clickedNode
        });
        console.log(clickedNode);
    };

    const onEdgeClick = (event, edge) => {
        let clickedEdge = {"id": edge.id, "source": edge.source, "target": edge.target}
        props.setProps({
            clickedEdge: clickedEdge
        });
        console.log(clickedEdge);
    };

    return (
        <ReactFlow
            nodes={stateNodes}
            edges={stateEdges}
            attributionPosition="top-right"
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onEdgeClick={onEdgeClick}
            nodeTypes={nodeTypes}
            {...otherProps}
            fitView
            >
            {children}
        </ReactFlow>
    );
};


DashFlow.defaultProps = {};

DashFlow.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    nodes: PropTypes.array,
    edges: PropTypes.array,

    clickedNode: PropTypes.object,

    clickedEdge: PropTypes.object,

    connectedEdge: PropTypes.object,

    dagre_direction: PropTypes.string,

    children: PropTypes.any,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default DashFlow;
